import Link from "next/link";
import Image from "next/image";
import locationIcon from "@/imageHp/icon&logo/locationicon.png"
import emailIcon from "@/imageHp/icon&logo/emailicon.png"
import teliphoneIcon from "@/imageHp/icon&logo/teliphoneIcon.png"
const Footer = () => {
    return <>
        <div className="bg-variant mt-8 px-20 py-8   w-full grid place-content-center  sm:place-items-start gird-col-1 sm:grid-cols-2 gap-6 lg:gap-0  lg:grid-cols-4">
            <div className="h-fit flex flex-col gap-4 w-fit">
                <h1>COLLECTIONS</h1>
                <div className="text-sm text-gray-600  gap-2 flex flex-col">
                    <Link href={"/"}>Black teas</Link>
                    <Link href={"/"}>Green teas</Link>
                    <Link href={"/"}>White teas</Link>
                    <Link href={"/"}>Harbal teas</Link>
                    <Link href={"/"}>Matcha</Link>
                    <Link href={"/"}>Chai</Link>
                    <Link href={"/"}>Oolong</Link>
                    <Link href={"/"}>Rooibos</Link>
                    <Link href={"/"}>Teaware</Link>
                </div>
            </div>
            <div className="h-fit flex flex-col gap-4 w-fit">
                <h1>LEARN</h1>
                <div className="text-sm text-gray-600 gap-2 flex flex-col">
                    <Link href={"/"}>About us</Link>
                    <Link href={"/"}>About our teas</Link>
                    <Link href={"/"}>Tea academy</Link>
                </div>
            </div>
            <div className="h-fit flex flex-col gap-4 w-fit">
                <h1>CUSTOMER SERVICE</h1>
                <div className="text-sm text-gray-600 gap-2 flex flex-col">
                    <Link href={"/"}>Ordering and payment</Link>
                    <Link href={"/"}>Delivery</Link>
                    <Link href={"/"}>Privacy and policy</Link>
                    <Link href={"/"}>Terms & Conditions</Link>
                </div>
            </div>
            <div className="h-fit flex flex-col gap-4 w-fit md:w-64">
                <h1>CONTACT US</h1>
                <div className="text-sm text-gray-600 gap-2 flex flex-col">
                    <Link href={"/"} className="flex gap-3 justify-center"> <Image src={locationIcon} alt="referse" className="h-4 w-3 mt-1" priority /> 3 Falahi, Falahi St, Pasdaran Ave, Shiraz,<br /> Fars Provieence Iran</Link>
                    <Link href={"/"} className="flex gap-3 items-center"> <Image src={emailIcon} alt="referse" className="h-3 w-4" priority /> Email: amoopur@gmail.com</Link>
                    <Link href={"/"} className="flex gap-3 items-center"> <Image src={teliphoneIcon} alt="referse" className="h-3 w-3" priority /> Tel: +98 9173038406</Link>
                </div>
            </div>
        </div>
    </>
}
export default Footer;