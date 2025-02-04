"use client";
import { useState } from "react";
import ChooseBox from "./ChooseBox";

interface ItemArrayType {
    id: number;
    name: string;
}

interface ItemType {
    created_at: string
    id: number;
    items: ItemArrayType[];
    type: string;
}

interface FilterType {
    item: ItemType;
}

const SideFilterBar: React.FC<FilterType> = ({ item }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div key={item.id} className={`flex w-full md:w-56 flex-col gap-5 md:gap-3 h-fit md:min-h-14 cursor-pointer ${isOpen ? "mb-4" : "mb-0"}`}>
            <div onClick={() => setIsOpen(!isOpen)} className="flex w-full cursor-pointer justify-between  items-center">
                <h1 className="text-sm font-medium md:text-base md:font-medium">{item.type}</h1>
                {
                    isOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 md:size-6">
                            <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-5  md:size-6 transform transition-transform`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                }
            </div>
            <div className={`flex flex-col gap-3 overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                {item.items.map((items) => (
                    <div key={items.id}>
                        <ChooseBox text={items.name} />
                    </div>
                ))}
            </div>
            <div className="h-fit w-full justify-center items-center hidden md:flex">
                <div className="h-[2px] w-44 bg-gray-300"></div>
            </div>
        </div>
    );
};

export default SideFilterBar;
