"use client"
import Image from "next/image"
import Link from "next/link"
import googleicon from "@/imageHp/icon&logo/googleicon.png"
import emailicon from "@/imageHp/icon&logo/account-email.png"
import image8 from "@/imageHp/itemImage/wholesaleher2.png"
import { useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();
    const SignInUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const supabase = createClient();
        try {
            const {  error } = await supabase.auth.signInWithPassword({ email, password, });
            if (error) { return toast.error("loging failed :: " + error.message); }
            toast.success("User Login successfully")
            return router.push("/home")
        } catch (error) {
            console.log(error)
        }
    }

    return <>
        <div className="w-full bg-white flex gap-4 h-fit min-h-screen relative">
            <div className="md:w-1/2 flex flex-col gap-14 w-full h-fit min-h-screen justify-center items-center px-6">
                <div className="w-full px-14">
                    <h1 className="text-xl md:text-2xl text-center text-gray-600 font-bold font-prosto-one">Hangging Panda</h1>
                </div>
                <div className="flex gap-5 w-fit flex-col ga-4">
                    <div className="flex justify-center items-end gap-2 md:gap-8  flex-wrap">
                        <div>
                            <h1 className="md:text-xl text-lg mb-4 font-semibold">Sign In To Pandas</h1>
                            <div className="flex gap-2 w-full sm:w-64 h-12 justify-center px-3 rounded-lg items-center border-2 border-violet-500">
                                <div className="w-8 h-8">
                                    <Image src={googleicon} alt="/google" className="w-8 h-8" priority />
                                </div>
                                <h1 className="text-sm sm:text-base">Sign in with Google</h1>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2 w-full sm:w-64 h-12 justify-center px-3 rounded-lg items-center border-2 border-violet-500">
                                <div className="w-8 h-8">
                                    <Image src={emailicon} alt="/google" className="w-8 h-8" priority />
                                </div>
                                <h1 className="text-sm sm:text-base">Sign in with Email</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex py-4 mt-5 gap-4 justify-center items-center">
                        <div className="text-2xl font-bold bg-gray-500 w-11 h-1 rounded-full"></div>
                        <h1 className="text-2xl font-bold text-gray-500">OR</h1>
                        <div className="text-2xl font-bold bg-gray-500 w-11 h-1 rounded-full"></div>
                    </div>
                    <form onSubmit={SignInUser} className="flex flex-col  justify-center items-center gap-8 w-full">
                        <div className="flex flex-wrap gap-2 w-full justify-center items-center">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full outline-none border-b-[1px] text-sm px-1 py-3 border-gray-500" />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full outline-none border-b-[1px] text-sm px-1 py-3 border-gray-500" />
                        </div>
                        <div className=" px-1 flex flex-col gap-3 w-full">
                            <button type="submit" className="bg-gray-800 text-white w-full py-3 rounded-lg">Sign In</button>
                            <div className="flex flex-col font-prosto-one text-sm  gap-2 justify-center items-center">
                                <Link href={"/register"} className=" border-2 border-violet-500 flex justify-center items-center text-violet-500 w-full py-3 rounded-lg">Register now</Link>
                                <div className="flex justify-end w-full px-3">
                                    <Link className="text-blue-700" href={"/login"}>Forget password?</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="min-h-screen  relative md:flex hidden w-1/2">
                <Image src={image8} fill alt="" className="h-screen object-cover" priority />
            </div>
        </div>
    </>
}
export default Login