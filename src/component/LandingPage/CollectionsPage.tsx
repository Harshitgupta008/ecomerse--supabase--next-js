import ImageCard from "./ImageCard";
import Image1 from "@/imageHp/itemImage/image1.png"
import Image2 from "@/imageHp/itemImage/image2.png"
import Image3 from "@/imageHp/itemImage/image3.png"
import Image4 from "@/imageHp/itemImage/image4.png"
import Image5 from "@/imageHp/itemImage/image5.png"
import Image6 from "@/imageHp/itemImage/image6.png"
import Image7 from "@/imageHp/itemImage/image7.png"
import Image8 from "@/imageHp/itemImage/image8.png"
import Image9 from "@/imageHp/itemImage/image9.png"
const CollectionsPage = () => {
    return <>
        <div className="mt-8 lg:px-16">
            <div className="flex flex-col gap-10 justify-center items-center">
                <h1 className="font-prosto-one text-3xl sm:text-4xl">Our Collections</h1>
                <div className="flex justify-center items-center flex-wrap gap-6">
                    <ImageCard images={Image1} title="BLACK TEA"/>
                    <ImageCard images={Image2} title="GREEN TEA"/>
                    <ImageCard images={Image3} title="WHITE TEA"/>
                    <ImageCard images={Image4} title="MATCHA"/>
                    <ImageCard images={Image5} title="HERBAL TEA"/>
                    <ImageCard images={Image6} title="CHAI"/>
                    <ImageCard images={Image7} title="OOLONG"/>
                    <ImageCard images={Image8} title="ROOIBOS"/>
                    <ImageCard images={Image9} title="TEAWARE"/>
                </div>
            </div>
        </div>

    </>
}
export default CollectionsPage;