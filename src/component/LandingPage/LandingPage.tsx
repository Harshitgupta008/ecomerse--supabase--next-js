import Image from "next/image";
import heropng from "@/imageHp/itemImage/hero.png"
import Banner from "./Banner";
import CollectionsPage from "./CollectionsPage";
import LatestBlog from "./LatestBlog";
import Wholesaleher from "./Wholesaleher";
const LandingPage = () => {
    return <>
        <div className="flex flex-col gap-3">
            <div className="flex 2xl:justify-center 2xl:items-center flex-wrap">
                <div className="lg:w-1/2 2xl:w-fit w-full flex justify-center lg:justify-start items-center">
                    <Image src={heropng} alt="heroimage" className="h-96 md:h-[650px] lg:h-[628px] lg:w-[628px]" priority />
                </div>
                <div className="lg:w-1/2 2xl:w-fit mt-3 lg:mt-0 w-full justify-start lg:pl-24 flex items-center">
                    <div className="h-96 p-4 lg:px-0 w-full lg:w-[600px]  flex flex-col gap-7 ">
                        <h1 className="font-prosto-one text-3xl font-medium">Every day is unique, <br /> just like our tea</h1>
                        <p className=" lg:text-lg text-gray-700">
                            Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh eros in.
                        </p>
                        <p className=" lg:text-lg text-gray-700">
                            Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh eros in.
                        </p>
                        <div>
                            <button className="w-44 h-10 md:w-64 md:h-14 px-6 py-2 text-white bg-black">BROWES TEAS</button>
                        </div>
                    </div>
                </div>
            </div>

            <Banner />
            <CollectionsPage />
            <LatestBlog />
            <Wholesaleher />
        </div>
    </>
}
export default LandingPage;