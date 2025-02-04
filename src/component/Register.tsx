"use client"
import Image from "next/image";
import image8 from "@/imageHp/itemImage/image8.png"
import googleicon from "@/imageHp/icon&logo/googleicon.png"
import emailicon from "@/imageHp/icon&logo/account-email.png"
import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { toast } from "react-toastify";

interface registerType {
    name: string;
    lastname: string;
    email: string;
    number: string;
    password: string;
}

const Register = () => {
    const [user, setUser] = useState<registerType>({
        name: "", lastname: "", email: "", number: "", password: ""
    })
    const [cpassword, setCpassword] = useState<string>("");
    const router = useRouter();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value });
    }

    const CreateAccount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, number, password, lastname } = user;
        const supabase = createClient();

        if (!name || !email || !number || !password || !cpassword || !lastname) {
            toast.warn("All fields are mandatory");
            return;
        }
        if (password !== cpassword) {
            toast.info("Password mismatch");
            return;
        }
        try {
            const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { name, lastname, number } } });
            console.log(data.user?.user_metadata)

            if (error) {
                return toast.error(`Registration failed: ${error.message}`);
            }

            toast.success("User registered successfully");
            setUser({ name: "", email: "", number: "", lastname: "", password: "" });
            setCpassword("");
            return router.push("/home");

        } catch (err) {
            console.error("Unexpected error in registration:", err);
            toast.error("An unexpected error occurred. Please try again later.");
        }
    }

    return <>
        <div className="w-full bg-white flex gap-4 h-fit min-h-screen relative">
            <div className="min-h-screen  relative md:flex hidden w-1/2">
                <Image src={image8} fill alt="" className="h-screen object-cover" priority />
            </div>
            <div className="md:w-1/2 flex flex-col gap-14 w-full h-fit min-h-screen justify-center items-center px-2 md:px-6">
                <div className="w-full px-14">
                    <h1 className="text-xl md:text-2xl text-center text-gray-600 font-bold font-prosto-one">Hangging Panda</h1>
                </div>
                <div className="flex gap-5 w-fit flex-col ga-4">
                    <div className="flex justify-center items-end gap-2 md:gap-8  flex-wrap">
                        <div >
                            <h1 className="md:text-xl text-lg mb-4 font-semibold">Create Account</h1>
                            <div className="flex gap-2 w-full sm:w-64 h-12 justify-center px-3 rounded-lg items-center border-2 border-violet-500">
                                <div className="w-8 h-8">
                                    <Image src={googleicon} alt="/google" className="w-8 h-8" priority />
                                </div>
                                <h1 className="text-sm sm:text-base">Sign up with Google</h1>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2 w-full sm:w-64 h-12 justify-center px-3 rounded-lg items-center border-2 border-violet-500">
                                <div className="w-8 h-8">
                                    <Image src={emailicon} alt="/google" className="w-8 h-8" priority />
                                </div>
                                <h1 className="text-sm sm:text-base">Sign up with Email</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex py-4 mt-5 gap-4 justify-center items-center">
                        <div className="text-2xl font-bold bg-gray-500 w-11 h-1 rounded-full"></div>
                        <h1 className="text-2xl font-bold text-gray-500">OR</h1>
                        <div className="text-2xl font-bold bg-gray-500 w-11 h-1 rounded-full"></div>
                    </div>
                    <form onSubmit={CreateAccount} className="mt-6 flex flex-col justify-center items-center gap-8 w-full">
                        <div className="w-full">
                            <div className="flex flex-wrap gap-3 justify-center items-center">
                                <input type="text" name="name" value={user.name} onChange={handleInput} placeholder="First Name" className="w-72 outline-none border-b-[1px] text-sm px-1 py-3 border-gray-500" />
                                <input type="text" name="lastname" value={user.lastname} onChange={handleInput} placeholder="Last Name" className="w-72 outline-none border-b-[1px] text-sm px-1 py-3 border-gray-500" />
                            </div>
                            <div className="flex flex-wrap gap-2 justify-center items-center">
                                <input type="email" name="email" value={user.email} onChange={handleInput} placeholder="Email Address" className="w-72 outline-none border-b-[1px] text-sm px-1 py-3 border-gray-500" />
                                <input type="text" name="number" value={user.number} onChange={handleInput} placeholder="Phone Number" className="w-72 outline-none border-b-[1px] text-sm px-1 py-3 border-gray-500" />
                            </div>
                            <div className="flex flex-wrap gap-2 justify-center items-center">
                                <input type="password" name="password" value={user.password} onChange={handleInput} placeholder="Password" className="w-72 outline-none border-b-[1px] text-sm px-1 py-3 border-gray-500" />
                                <input type="password" value={cpassword} onChange={(e) => setCpassword(e.target.value)} placeholder="Confirm Password" className="w-72 outline-none border-b-[1px] text-sm px-1 py-3 border-gray-500" />
                            </div>
                        </div>
                        <div className=" px-4 flex flex-col gap-3 w-80">
                            <button type="submit" className="bg-gray-800 text-white w-full py-3 rounded-lg">Create Account</button>
                            <div className="flex font-prosto-one text-sm  gap-2 justify-center items-center">
                                <h1 >Already have an account?</h1>
                                <Link className="text-blue-700" href={"/login"}>Login</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}
export default Register;