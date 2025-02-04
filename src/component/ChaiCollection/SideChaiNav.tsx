"use client"
import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";
import SideFilterBar from "./SideFilterBar";

interface SideChaiNavTypta {
    isFiltered: boolean;
    setIsFiltered: (value: boolean) => void;
}


interface ItemArrayType {
    id: number;
    name: string;
}

interface ItemType {
    created_at: string;
    id: number;
    items: ItemArrayType[];
    type: string;
}
const SideChaiNav: React.FC<SideChaiNavTypta> = ({ setIsFiltered, isFiltered }) => {
    const [filterCollection, setFilterCollection] = useState<ItemType[]>([]);

    useEffect(() => {
        const fetchFilters = async () => {
            try {
                const { data, error } = await supabase.from("chai_filter_collections").select("*");
                if (error) throw error.message
                setFilterCollection(data);
                // console.log("data :: ", data)
            } catch (error) {
                console.error("Error fetching filter collections:", error);
            }
        };
        fetchFilters();
    }, []);

    return <>
        <div onClick={()=>setIsFiltered(!isFiltered)} className="w-full cursor-pointer bg-gray-500 bg-opacity-75 h-screen  absolute top-0 left-0 right-0 bottom-0"></div>
        <div className="w-72 bg-white  z-10 gap-4 flex flex-col items-center h-screen overflow-scroll scroll-smooth overflow-y-auto scrollbar-width-0 text-black pt-12 pb-14  min-h-16 shadow-xl absolute top-0 right-0 ">
            <div className="cursor-pointer fixed top-20 bg-white w-40 flex gap-2 justify-end items-center font-medium text-xl right-4" onClick={() => setIsFiltered(!isFiltered)}><div className="font-normal text-sm">SORT & FILTER </div> X</div>

            <div className="bg-variant font-prosto-one w-full text-center py-3">
                <h1>Sort your selected items</h1>
            </div>
            <div className="w-full flex flex-col gap-2 justify-center px-4">
                <div className="w-full flex gap-3 font-medium justify-start items-center">
                    <input type="checkbox" name="" id="" />
                    <h1>Low Price</h1>
                </div>
                <div className="w-full flex gap-3 font-medium justify-start items-center">
                    <input type="checkbox" name="" id="" />
                    <h1>High Price</h1>
                </div>
                <div className="w-full flex gap-3 font-medium justify-start items-center">
                    <input type="checkbox" name="" id="" />
                    <h1>Newest Price</h1>
                </div>
                <div className="w-full flex gap-3 font-medium justify-start items-center">
                    <input type="checkbox" name="" id="" />
                    <h1>Most Popular</h1>
                </div>
            </div>
            <div className="bg-variant font-prosto-one w-full text-center py-3">
                <h1>Select by your favour</h1>
            </div>
            <div className="w-64 px-2  md:px-0  justify-center items-center flex-col gap-1 h-fit md:min-h-394 ">
                {
                    filterCollection.map((item: ItemType) => {
                        return <div key={item.id}>
                            <SideFilterBar item={item} />
                        </div>
                    })
                }
                <div className="flex w-56 font-medium text-sm  md:text-base md:font-medium h-14 cursor-pointer justify-between">
                    <h1>ORIGIN</h1>
                </div>
            </div>
        </div>

    </>
}
export default SideChaiNav;