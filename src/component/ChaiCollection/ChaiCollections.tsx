"use client"
import imagebanner from "@/imageHp/itemImage/bannerimage.png"
import Image from "next/image";
import ImageChaiCard from "./ImageChaiCard";
import SideFilterBar from "./SideFilterBar";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import Loader from "../Loader";
import Link from "next/link";

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

interface productsType {
    id: number;
    name: string;
    chaiimage: string,
    description: string,
    price: number,
    weight: string,
    category: string,
    origin: string,
    flavor: string[];
    qualities: string[];
    caffeine: string;
    allergens: string[];
}

const ChaiCollections = () => {
    const [isSorted, setIsSorted] = useState<boolean>(false);
    const [filterCollection, setFilterCollection] = useState<ItemType[]>([]);
    const [products, setProducts] = useState<productsType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [filtersResponse, productsResponse] = await Promise.all([
                    supabase.from("chai_filter_collections").select("*"),
                    supabase.from("products").select("*")
                ]);
                if (filtersResponse.error) throw filtersResponse.error;
                if (productsResponse.error) throw productsResponse.error;
                setFilterCollection(filtersResponse.data || []);
                setProducts(productsResponse.data || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loader />
    }
    return <>
        <div className="relative w-full h-fit flex flex-col gap-4">
            <div className="w-full h-44 md:h-308">
                <Image src={imagebanner} alt="chai" className="w-full h-44 md:h-308 object-cover" />
            </div>
            <div className="w-full px-10 py-4 text-sm"><h1 className="font-medium">HOME/COLLECTIONS/CHAI</h1></div>
            <div className="flex justify-center py-2 gap-6 px-2 md:px-8">
                <div className="w-fit hidden md:flex flex-col gap-1 h-fit mt-9 min-h-394 ">
                    {
                        filterCollection.map((item: ItemType) => {
                            return <div key={item.id}>
                                <SideFilterBar item={item} />
                            </div>
                        })
                    }
                    <div className="flex w-56 font-medium h-14 cursor-pointer justify-between">
                        <h1>ORIGIN</h1>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="h-fit  py-7 mb-1 font-medium px-11 w-full  hidden md:flex items-center justify-end">
                        <div onClick={() => setIsSorted(!isSorted)} className="flex gap-4 h-fit w-fit cursor-pointer">
                            SORT BY
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${isSorted ? "rotate-[180deg]" : " "} size-6`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 md:gap-8 justify-center items-center">
                        {
                            products.map((item) => {
                                return <Link href={`/home/collections/chai/${item.id}`} className="hover:scale-110 transition-all ease-in-out delay-100 cursor-pointer" key={item.id}>
                                    <ImageChaiCard chaiimage={item.chaiimage} ChaiName={item.name} chaiprice={item.price} chaiWeight={item.weight} />
                                </Link>
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    </>
}
export default ChaiCollections;