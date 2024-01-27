export default function Ourservices(props: any) {
    return (
        <div className="bg-black h-1/3 w-auto flex flex-col gap-10 justify-end items-center">
            <h2 className="text-white mt-5 font-bold text-2xl ">{props.h2}</h2>
            <button className="p-2 h-1/3 w-1/2 font-semibold rounded-sm bg-[#cdad7dff] text-black hover:text-white ">{props.button1}</button>
            <button className="p-2 h-1/3 w-1/2 font-semibold rounded-sm bg-[#cdad7dff] text-black hover:text-white ">{props.button2}</button>
            <button className="p-2 h-1/3 w-1/2 font-semibold rounded-sm mb-5 bg-[#cdad7dff] text-black hover:text-white ">{props.button3}</button>
        </div>
    )
}