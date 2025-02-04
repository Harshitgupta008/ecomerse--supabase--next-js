interface chooseBoxType {
    text: string;
}
const ChooseBox: React.FC<chooseBoxType> = ({ text }) => {
    return <>
        <div className="w-full flex gap-2 justify-start items-center">
            <input type="checkbox" name="" id="" />
            <h1 className="text-sm md:text-base text-gray-600">{text}</h1>
        </div>
    </>
}
export default ChooseBox;