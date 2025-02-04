"use client"
import { createClient } from "@/utils/supabase/client";
import { UserMetadata } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import Image from "next/image";
import userdp from "@/imageHp/icon&logo/guestuser.png";
import { toast } from "react-toastify";

interface UserType {
    email: string;
    email_verified: boolean;
    lastname: string;
    name: string;
    number: string;
    phone_verified: boolean;
    sub: string;
    gender: string | null;
    dob: string | null;
    country: string | null;
    location: string | null;
    about: string | null;
}

const UserAccount = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [userData, setUserData] = useState<UserType | null>(null);
    const [isUpdate, setIsUpdate] = useState<boolean>(false);

    const [updateUser, setUpdateUser] = useState({
        name: "", lastname: "", email: "", number: "",
        gender: "", dob: "", country: "",
        location: "",
    });
    const [textareas, setTextareas] = useState("");

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdateUser(prevState => ({ ...prevState, [name]: value }));
    };

    const SubmitUser = async () => {
        const supabase = createClient();
        try {
            const { error } = await supabase.auth.updateUser({
                data: {
                    name: updateUser.name, lastname: updateUser.lastname, number: updateUser.number, gender: updateUser.gender,
                    dob: updateUser.dob, country: updateUser.country, location: updateUser.location, about: textareas,
                }
            });

            if (error) {
                toast.error("Error updating user: "+ error.message);
            } else {
                toast.success("User updated")
                setUserData({
                    ...userData!,
                    name: updateUser.name, lastname:updateUser.lastname, number: updateUser.number, gender: updateUser.gender,
                    dob: updateUser.dob, country: updateUser.country, location: updateUser.location, about: textareas,
                });
                setIsUpdate(false);
            }
        } catch (error) {
            console.log("error found in account page :: ", error)
        }
    };


    useEffect(() => {
        const fetchUser = async () => {
            const supabase = createClient();
            const { data, error } = await supabase.auth.getUser();

            if (error || !data?.user?.user_metadata) {
                setLoading(false);
                return;
            }
            if (data) {
                const metadata: UserMetadata = data.user.user_metadata;

                const formattedUser: UserType = {
                    email: metadata.email || "",
                    email_verified: metadata.email_verified || false,
                    lastname: metadata.lastname || "",
                    name: metadata.name || "",
                    number: metadata.number || "",
                    phone_verified: metadata.phone_verified || false,
                    sub: metadata.sub || "",
                    gender: metadata.gender || "",
                    dob: metadata.dob || "",
                    country: metadata.country || "",
                    location: metadata.location || "",
                    about: metadata.about || "",
                };

                setUserData(formattedUser);
                setUpdateUser({
                    name: formattedUser.name,
                    lastname: formattedUser.lastname,
                    email: formattedUser.email,
                    number: formattedUser.number,
                    gender: formattedUser.gender || ".....",
                    dob: formattedUser.dob || "",
                    country: formattedUser.country || ".....",
                    location: formattedUser.location || ".....",
                });
                setTextareas(formattedUser.about || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequatur rerum. Velit, commodi? Doloribus a qui, quidem velit porro odit.");

                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="flex gap-3 flex-col items-center p-4 sm:p-6 md:p-8 lg:p-10 ">

            <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 relative rounded-full">
                    <Image src={userdp} className="w-24 h-24 rounded-full" alt="User profile picture" />
                    <div onClick={() => setIsUpdate(!isUpdate)} className="h-fit hover:bg-opacity-80 cursor-pointer w-fit absolute right-2 bottom-2 rounded-full bg-white p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                        </svg>
                    </div>
                </div>
                {
                    !isUpdate ?
                        <h1 className="font-prosto-one text-xl sm:text-2xl font-semibold">{userData?.name + " " + userData?.lastname}</h1>
                        :
                        <div className="flex md:gap-6 gap-2 flex-wrap justify-center items-center">
                            <input type="text" name="name" onChange={handleInput} value={updateUser.name} placeholder="Enter Your Name" className="border-2 border-red-400  outline-none rounded-md px-2 py-1" />
                            <input type="text" name="lastname" onChange={handleInput} value={updateUser.lastname} placeholder="Enter Your LastName" className="border-2 border-red-400  outline-none rounded-md px-2 py-1" />
                        </div>
                }
            </div>

            {
                !isUpdate ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mt-6 p-4 bg-white shadow-md rounded-lg">
                        <div className="flex gap-4">
                            <strong className="font-prosto-one text-gray-700">Email:</strong>
                            <span className="text-gray-600">{userData?.email}</span>
                        </div>
                        <div className="flex gap-4">
                            <strong className="font-prosto-one text-gray-700">Number:</strong>
                            <span className="text-gray-600">{userData?.number}</span>
                        </div>
                        <div className="flex gap-4">
                            <strong className="font-prosto-one text-gray-700">Gender:</strong>
                            <span className="text-gray-600">{userData?.gender || "......"}</span>
                        </div>
                        <div className="flex gap-4">
                            <strong className="font-prosto-one text-gray-700">DOB:</strong>
                            <span className="text-gray-600">{userData?.dob || "......"}</span>
                        </div>
                        <div className="flex gap-4">
                            <strong className="font-prosto-one text-gray-700">Country:</strong>
                            <span className="text-gray-600">{userData?.country || "......"}</span>
                        </div>
                        <div className="flex gap-4">
                            <strong className="font-prosto-one text-gray-700">Location:</strong>
                            <span className="text-gray-600">{userData?.location || "......"}</span>
                        </div>
                    </div>
                    :
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mt-6 p-4 bg-white shadow-md rounded-lg">
                        <div className="flex gap-4 w-fit h-fit items-center flex-wrap">
                            <strong className="font-prosto-one text-gray-700">Email:</strong>
                            <input type="email" name="email" onChange={handleInput} value={updateUser.email} placeholder="Enter Your email" className="border-2 cursor-not-allowed border-gray-400 outline-none rounded-md px-2 py-1" readOnly />
                        </div>
                        <div className="flex gap-4 w-fit h-fit items-center flex-wrap">
                            <strong className="font-prosto-one text-gray-700">Number:</strong>
                            <input type="text" name="number" onChange={handleInput} value={updateUser.number} placeholder="Enter Your Number" className="border-2 border-gray-400 outline-none rounded-md px-2 py-1" />
                        </div>
                        <div className="flex gap-4 w-fit h-fit items-center flex-wrap">
                            <strong className="font-prosto-one text-gray-700">Gender:</strong>
                            <input type="text" name="gender" onChange={handleInput} value={updateUser.gender} placeholder="Enter Your Gender" className="border-2 border-gray-400 outline-none rounded-md px-2 py-1" />
                        </div>
                        <div className="flex gap-4 w-fit h-fit items-center flex-wrap">
                            <strong className="font-prosto-one text-gray-700">DOB:</strong>
                            <input type="date" name="dob" onChange={handleInput} value={updateUser.dob} placeholder="Enter Your dob" className="outline-none rounded-md px-2 py-1" />
                        </div>
                        <div className="flex gap-4 w-fit h-fit items-center flex-wrap">
                            <strong className="font-prosto-one text-gray-700">Country:</strong>
                            <input type="text" name="country" onChange={handleInput} value={updateUser.country} placeholder="Enter Your Country" className="border-2 border-gray-400 outline-none rounded-md px-2 py-1" />
                        </div>
                        <div className="flex gap-4 w-fit h-fit items-center flex-wrap">
                            <strong className="font-prosto-one text-gray-700">Location:</strong>
                            <input type="text" name="location" onChange={handleInput} value={updateUser.location} placeholder="Enter Your Place" className="border-2 border-gray-400 outline-none rounded-md px-2 py-1" />
                        </div>
                    </div>
            }

            {
                !isUpdate ?
                    <div className="mt-6 p-4 w-full max-w-2xl bg-white shadow-md rounded-lg">
                        <strong className="font-prosto-one text-gray-700">About:</strong>
                        <p className="text-gray-600 mt-2">
                            {userData?.about || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequatur rerum. Velit, commodi? Doloribus a qui, quidem velit porro odit."}
                        </p>
                    </div>
                    :
                    <div className="mt-6 p-4 w-full max-w-2xl gap-3 flex flex-col bg-white shadow-md rounded-lg">
                        <strong className="font-prosto-one text-gray-700">About:</strong>
                        <textarea name="about" onChange={(e) => setTextareas(e.target.value)} value={textareas} placeholder="Enter something about you...." className="w-full h-28 px-2 py-1 outline-none border-2 border-gray-400 rounded-md"></textarea>
                        <div className="flex justify-center items-center gap-4 w-full">
                            <button className="h-fit w-fit px-5 border-2 border-red-600 hover:bg-red-600 hover:text-white text-red-600 rounded-lg py-2" onClick={() => setIsUpdate(!isUpdate)}>Cancel</button>
                            <button className="h-fit w-fit px-5 border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 rounded-lg py-2" onClick={SubmitUser}>Save</button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default UserAccount;
