import Image from "next/image";
import teaicon from "@/imageHp/icon&logo/teaicon.png"
import gifticon from "@/imageHp/icon&logo/gifttea.png"
import deliverycar from "@/imageHp/icon&logo/deliverycar.png"
import tagicon from "@/imageHp/icon&logo/tagicon.png"
const Banner = () => {
    return <div className="w-full flex flex-col justify-center items-center gap-10 px-4 py-8 h-fit min-h-56 bg-variant mt-6 lg:mt-24">
        <div className="flex text-sm md:text-balance flex-wrap justify-center items-center gap-9">
            <div className="flex text-base flex-wrap justify-center items-center gap-2">
                <div className="h-6 w-6 flex justify-center items-center">
                    <Image className="h-5 w-5" src={teaicon} alt="tea" priority />
                </div>
                <p>450+ KIND OF LOOSEF TEA</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2">
                <div className="h-6 w-6 flex justify-center items-center">
                    <Image className="h-5 w-5" src={gifticon} alt="gift" priority/>
                </div>
                <p>CERTIFICATED ORGANIC TEAS</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2">
                <div className="h-6 w-6 flex justify-center items-center">
                    <Image className="h-5 w-5" src={deliverycar} alt="delivery" priority/>
                </div>
                <p>FREE DELIVERY</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2">
                <div className="h-6 w-6 flex justify-center items-center">
                    <Image className="h-5 w-5" src={tagicon} alt="tag" priority/>
                </div>
                <p>SAMPLE FOR ALL TEAS</p>
            </div>
        </div>
        <div className="flex justify-center items-center " >
            <button className="w-56 h-10 md:w-72 md:h-14 border-[1px] border-black">LEARN MORE</button>
        </div>

    </div>
}
export default Banner;