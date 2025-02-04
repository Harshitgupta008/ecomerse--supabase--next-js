"use client"
import Image from "next/image"
import pr50g from "@/imageHp/itemImage/pr50g.png"
import pr100g from "@/imageHp/itemImage/pr100g.png"
import pr170g from "@/imageHp/itemImage/pr170g.png"
import pr250g from "@/imageHp/itemImage/pr250g.png"
import pr1kg from "@/imageHp/itemImage/pr1kg.png"
import prbag from "@/imageHp/itemImage/prbag.png"
import originIcon from "@/imageHp/icon&logo/originIcon.png"
import organicIcon from "@/imageHp/icon&logo/gifttea.png"
import vegan from "@/imageHp/icon&logo/veganIcon.png"
import image2 from "@/imageHp/itemImage/image7.png"
// import { useParams } from "next/navigation";

const Products = () => {
    // const {products} = useParams();
    return <>
        <div className="flex flex-col gap-2 pt-3">
            <div className="w-full px-2 md:px-10 py-4 text-xs md:text-sm"><h1 className="font-medium">HOME/COLLECTIONS/CHAI/CEYLON GINGER CINNAMON CHAI TEA</h1></div>
 
            <div className="flex justify-center md:px-2 pt-2 gap-3 flex-wrap md:flex-nowrap md:items-start">

                <div className="w-full h-[393px] md:w-[456px] md:h-[507px]">
                    <Image src={image2} alt="heroimage" className="w-full h-full object-cover " priority />
                </div>
                <div className="w-full md:w-1/2 h-fit ">
                    <div className="flex flex-col px-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-prosto-one text-lg md:text-2xl">Ceylon Ginger Cinnamon chai tea</h1>
                            <p className="text-sm text-gray-600 md:text-base">A lovely warming Chai tea with ginger cinnamon flavours. </p>
                        </div>
                        <div className="w-full flex flex-wrap justify-center sm:justify-start items-center gap-8">
                            <div className="flex gap-2 font-medium justify-center items-center h-fit w-fit">
                                <Image src={originIcon} alt="/category" className="h-6 w-6" />
                                <h1>Origin: Iran</h1>
                            </div>
                            <div className="flex gap-2 font-medium justify-center items-center h-fit w-fit">
                                <Image src={organicIcon} alt="/category" className="h-6 w-6" />
                                <h1>Organic</h1>
                            </div>
                            <div className="flex gap-2 font-medium justify-center items-center h-fit w-fit">
                                <Image src={vegan} alt="/category" className="h-6 w-6" />
                                <h1>Vegan</h1>
                            </div>
                        </div>
                        <div><h1 className="font-medium font-prosto-one text-2xl">€ <span>3.90</span></h1></div>
                        <div className="font-medium flex flex-col gap-2 ">
                            <h1 className="px-2">Variants</h1>
                            <div className="flex flex-wrap justify-start items-center gap-3">
                                <div className="w-[84px] h-[101px] text-sm text-gray-500 hover:border-2 cursor-pointer hover:border-yellow-400 flex flex-col justify-center items-center gap-2">
                                    <Image src={pr50g} className="w-[42px] h-[53px]" alt="/kg/g" />
                                    <h1>50 g bag</h1>
                                </div>
                                <div className="w-[84px] h-[101px] text-sm text-gray-500 hover:border-2 cursor-pointer hover:border-yellow-400 flex flex-col justify-center items-center gap-2">
                                    <Image src={pr100g} className="w-[42px] h-[53px]" alt="/kg/g" />
                                    <h1>100 g bag</h1>
                                </div>
                                <div className="w-[84px] h-[101px] text-sm text-gray-500 hover:border-2 cursor-pointer hover:border-yellow-400 flex flex-col justify-center items-center gap-2">
                                    <Image src={pr170g} className="w-[42px] h-[53px]" alt="/kg/g" />
                                    <h1>170 g bag</h1>
                                </div>
                                <div className="w-[84px] h-[101px] text-sm text-gray-500 hover:border-2 cursor-pointer hover:border-yellow-400 flex flex-col justify-center items-center gap-2">
                                    <Image src={pr250g} className="w-[42px] h-[53px]" alt="/kg/g" />
                                    <h1>250 g bag</h1>
                                </div>
                                <div className="w-[84px] h-[101px] text-sm text-gray-500 hover:border-2 cursor-pointer border-yellow-400 flex flex-col justify-center items-center gap-2">
                                    <Image src={pr1kg} className="w-[42px]  h-[53px]" alt="/kg/g" />
                                    <h1>1 kg bag</h1>
                                </div>
                                <div className="w-[84px] h-[101px] text-sm text-gray-500 hover:border-2 cursor-pointer hover:border-yellow-400 flex flex-col justify-center items-center gap-2">
                                    <Image src={prbag} className="w-[42px] h-[53px]" alt="/kg/g" />
                                    <h1>sampler</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}
export default Products;