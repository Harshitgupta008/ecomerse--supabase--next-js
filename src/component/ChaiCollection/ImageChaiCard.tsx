import Image, { StaticImageData } from "next/image";

interface ChaiImageType {
    chaiimage: string | StaticImageData;
    ChaiName: string;
    chaiprice: number;
    chaiWeight: string;
}

const ImageChaiCard: React.FC<ChaiImageType> = ({ chaiimage, ChaiName, chaiprice, chaiWeight }) => {
    return <div className="w-44  h-fit min-h-60 md:w-264 md:h-354 flex flex-col gap-2">
        <div className="w-44 md:w-264 relative h-44 md:h-264">
            <Image src={chaiimage} alt="chai" fill className="h-44 w-44 md:h-264 md:w-264 object-cover" priority/>
        </div>
        <div className="flex flex-col w-full h-fit justify-center items-center">
            <h1 className="text-center">{ChaiName.split("Chai")} </h1>
            <h1 className="text-sm">€{chaiprice} / <span className="text-gray-600">{chaiWeight}</span> </h1>
        </div>
    </div>
}
export default ImageChaiCard;