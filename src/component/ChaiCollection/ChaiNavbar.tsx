"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SideChaiNav from "./SideChaiNav";

const ChaiNavbar = () => {
    const [isFiltered, setIsFiltered] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else if (window.scrollY < 80) {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`md:hidden z-10 fixed w-full flex justify-between p-5 top-20  ${isScrolled ? "text-black bg-white shadow-md" : "text-white"} transition-all duration-300 ease-in-out`}>
            <div onClick={() => router.back()} className="w-fit h-fit cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="w-fit h-fit">
                <h1 className="font-bold text-3xl font-prosto-one">Chai</h1>
            </div>
            <div onClick={() => setIsFiltered(!isFiltered)} className="flex gap-2 justify-center items-center h-fit text-lg w-fit cursor-pointer">
                Filter
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${isFiltered ? "rotate-[180deg]" : ""} size-6 transition-transform duration-300`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            {isFiltered && <SideChaiNav isFiltered={isFiltered} setIsFiltered={setIsFiltered}/>}
        </div>
    );
};

export default ChaiNavbar;
