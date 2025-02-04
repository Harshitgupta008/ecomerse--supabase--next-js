import wholesaler from "@/imageHp/itemImage/wholesaleher.png"
import wholesaler2 from "@/imageHp/itemImage/wholesaleher2.png"
import Image from "next/image";
const Wholesaleher = () => {
    return <>
        <div className="flex flex-wrap 2xl:justify-center 2xl:items-center mt-11">
            <div className="lg:w-1/2 2xl:w-fit mt-3 lg:mt-0 w-full order-2 lg:order-1 justify-start lg:pl-24 flex items-center">
                <div className="h-96 p-4 lg:px-0 w-full lg:w-[600px]  flex flex-col gap-7 ">
                
                    <h1 className="font-prosto-one text-3xl font-medium">FOR WHOLESALERS</h1>
                    <p className="pr-4 lg:text-lg text-gray-700">
                        We offer loose tea leaves of the best quality for your business. With a choice of more than 450 different kinds 
                        of loose tea, we can make a sophisticated selection that fits exactly in your kind of establishment.
                    </p>
                    <div className="flex justify-start items-center">
                        <button className="w-60 text-sm md:text-lg h-10 md:w-96 md:h-14 px-6 py-2 text-black border-[1px] border-black">GET A FREE COSULTATION</button>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 2xl:w-fit w-full order-1 lg:order-2 flex justify-end items-center">
                <Image src={wholesaler} alt="heroimage" className="h-96 hidden lg:flex w-full md:h-[650px] lg:h-[628px] lg:w-[628px]" priority />
                <Image src={wholesaler2} alt="heroimage" className="h-96 flex lg:hidden w-full md:h-[650px] lg:h-[628px] lg:w-[628px]" priority />
            </div>
        </div>
    </>
}
export default Wholesaleher;