import Image from "next/image";
import Link from "next/link";
import brandlogo from "@/imageHp/icon&logo/brandlogo.png"
import searchicon from "@/imageHp/icon&logo/searchicon.png"
import personicon from "@/imageHp/icon&logo/person.png"
import carticon from "@/imageHp/icon&logo/cart.png"

interface SlidenavType {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}
const SlideNav: React.FC<SlidenavType> = ({ isOpen, setIsOpen }) => {
   
    return <>
    <div onClick={() => setIsOpen(!isOpen)} className="w-full cursor-pointer z-20 fixed top-0 bottom-0 left-0 right-0 bg-gray-500 bg-opacity-75 h-screen"></div>
        <div className={`w-72  transition-all duration-500 ease-in-out z-20 bg-white flex lg:hidden flex-col items-center h-screen justify-between fixed top-0  bottom-0 right-0`} >
            <div className="cursor-pointer absolute top-3 font-semibold text-xl right-4" onClick={() => setIsOpen(!isOpen)}>X</div>
            <div className="w-72 text-sm items-center py-2 flex flex-col gap-4  mt-12">
                <div className="w-64 bg-white px-2 flex gap-2 border-2 border-gray-400 py-1">
                    <div  className="h-6 w-6 flex justify-center items-center">
                        <Image src={searchicon} alt="search" className="h-4 w-4 " priority />
                    </div>
                    <input type="text" className="w-full outline-none" placeholder="SEARCH PRODUCTS" />
                </div>
                <Link href={"/home/useraccount"} className="w-60  mt-4 px-4 flex  items-center gap-2">
                    <div  className="h-6 w-6 flex justify-center items-center">
                        <Image src={personicon} alt="account" className="h-4 w-4 " priority />
                    </div>
                    <div>
                        <h1 className="text-xs font-medium">USER PROFILE</h1>
                        <h2 className="text-xs text-gray-400">We know you as a guest user</h2>
                    </div>
                </Link>
                <Link href={"/home"} className="w-60   px-4 flex  items-center gap-2">
                    <div  className="h-6 w-6 flex justify-center items-center">
                        <Image src={carticon} alt="cart" className="h-5 w-4 " priority />
                    </div>
                    <div>
                        <h1 className="text-xs font-medium">YOUR BAG</h1>
                        <h2 className="text-xs text-gray-400"><span className="text-yellow-500">(0)</span> item have been added</h2>
                    </div>
                </Link>
                <div className="w-60 my-2 h-[2px] bg-gray-400"></div>
                <div className="flex font-medium flex-col w-60 px-4 gap-4">
                    <Link href={"/home/collections/chai"}>TEA COLLECTIONS</Link>
                    <Link href={"/home"}>ACCESSORIES</Link>
                    <Link href={"/home"}>BLOG</Link>
                    <Link href={"/home"}>CONTACT US</Link>
                </div>
            </div>
            <div className="flex justify-center w-full min-h-64 items-center  bg-variant">
                <div className="w-64  flex flex-col gap-4 justify-start">
                    <Link href={"/home"} className="flex  justify-start items-center gap-2">
                        <Image src={brandlogo} alt="logo" className="h-5 w-5" priority />
                        <h1 className="font-prosto-one">Brand Name</h1>
                    </Link>
                    <p className="text-sm">
                        We offer loose tea leaves of the best quality for your business.
                        With a choice of more than 450 different kinds of loose tea,
                        we can make a sophisticated selection that fits exactly in your kind of establishment.
                    </p>
                    <p className="text-xs text-gray-400">ALL RIGHT RESERVED BY Brand Co</p>
                </div>
            </div>
        </div>
    </>

}
export default SlideNav;