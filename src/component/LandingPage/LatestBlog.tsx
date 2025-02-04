import Image from "next/image";
import blogImage1 from "@/imageHp/itemImage/blogimg1.png"
import blogImage2 from "@/imageHp/itemImage/blogimg2.png"
const LatestBlog = () => {
    return <div className="w-full flex flex-col gap-4 justify-center py-8 mt-4 flex-wrap items-center bg-variant h-fit">
        <h1 className="font-prosto-one my-4 text-3xl font-medium">Last Blog Posts</h1>

        <div className="w-full h-fit flex items-center justify-center flex-wrap gap-6">
            
            <div className="w-full min-h-273 md:w-551 h-fit  md:min-h-380 md:gap-6 gap-4 flex flex-wrap justify-center">
                <div className="w-172 relative sm:w-263 sm:h-360 ">
                    <Image src={blogImage1} fill={true} alt="blog2" className="object-cover" priority/>
                </div>
                <div className="h-fit min-h-273 w-172  sm:w-263 md:py-2 sm:h-360 flex flex-col  gap-5">
                    <h1 className="text-sm md:text-lg font-medium">HOW TO STEEP TEA <br /> LIKE A PRO</h1>
                    <p className="text-sm sm:text-base text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        In dictum non consectetur a erat nam at. Risus nec feugiat
                        in fermentum posuere urna nec tincidunt praesent.
                    </p>
                    <div className="w-full">
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-273 sm:w-551 h-fit  sm:min-h-380 md:gap-6 gap-4 flex flex-wrap justify-center">
                <div className="relative w-172 sm:w-263 lg:order-1 order-1 xs:order-2 sm:h-360 ">
                    <Image src={blogImage2} alt="blog2" fill={true} className="object-cover"  priority/>
                </div>
                <div className="h-fit min-h-273 w-172  sm:w-263 lg:order-2 order-2 xs:order-1 md:py-2 sm:h-360 flex flex-col  gap-5">
                    <h1 className="text-sm md:text-lg font-medium">ALL ABOUT TEA<br /> AROMAS</h1>
                    <p className="text-sm sm:text-base text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        In dictum non consectetur a erat nam at. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent.
                    </p>
                    <div className="w-full">
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default LatestBlog;