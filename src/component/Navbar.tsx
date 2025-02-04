"use client"
import Image from "next/image";
import Link from "next/link";
import brandlogo from "@/imageHp/icon&logo/brandlogo.png"
import searchicon from "@/imageHp/icon&logo/searchicon.png"
import personicon from "@/imageHp/icon&logo/person.png"
import carticon from "@/imageHp/icon&logo/cart.png"
import { useState } from "react";
import SlideNav from "./SlideNav";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <>
        <div className="w-full z-10 bg-white h-20 lg:h-28 gap-11 fixed top-0 flex justify-between px-5 lg:px-16  items-center">

            <Link href={"/"} className="flex justify-center items-center gap-2">
                <Image src={brandlogo} alt="logo" className="h-9 w-9" priority />
                <h1 className="font-prosto-one">Brand Name</h1>
            </Link>

            <div className="hidden lg:flex gap-10 lg:text-sm  xl:text-lg font-medium justify-center items-center">
                <Link href={"/home/collections/chai"}>TEA COLLECTIONS</Link>
                <Link href={"/home"}>ACCESSORIES</Link>
                <Link href={"/home"}>BLOG</Link>
                <Link href={"/home"}>CONTACT US</Link>
            </div>

            <div className="gap-9 hidden lg:flex">
                <Link href={"/home"} className="h-6 w-6 flex justify-center items-center">
                    <Image src={searchicon} alt="search" className="h-4 w-4 " priority />
                </Link>
                <Link href={"/home/useraccount"} className="h-6 w-6 flex justify-center items-center">
                    <Image src={personicon} alt="account" className="h-4 w-4 " priority />
                </Link>
                <Link href={"/home"} className="h-6 w-6 flex justify-center items-center">
                    <Image src={carticon} alt="cart" className="h-4 w-4 " priority />
                </Link>
            </div>
            <div onClick={() => setIsOpen(!isOpen)}  className="lg:hidden cursor-pointer flex flex-col justify-center h-6 items-center gap-1">
                <div className="h-1 w-6 rounded-full bg-gray-700"></div>
                <div className="h-1 w-6 rounded-full bg-gray-700"></div>
                <div className="h-1 w-6 rounded-full bg-gray-700"></div>
            </div>
        </div>
        {isOpen && <SlideNav isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </>
}
export default Navbar;