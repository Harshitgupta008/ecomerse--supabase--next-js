import Image , { StaticImageData }from "next/image";

interface ImageCardType{
    title:string;
    images:string | StaticImageData;
}
const ImageCard:React.FC<ImageCardType> = ({images, title}) => {
    return <div className="w-[172px] h-[208px] md:w-[360px] md:h-[422px] flex flex-col justify-center items-center gap-4">
        <Image src={images} alt="logo" className="w-[172px] h-[172px] md:h-[360px] md:w-[360px]" priority />
        <h1>{title}</h1>
    </div>
}
export default ImageCard;