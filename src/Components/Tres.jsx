export default function Tres(props: any) {
    return (
        <div className="bg-[#f8f3ebff] h-auto w-auto flex flex-col items-center">
            <h3 className="font-bold text-2xl ">{props.h3}</h3>
            <h4 className="text-black font-semibold text-justify p-5">{props.h4}</h4>
            <h3 className="font-bold text-2xl ">{props.h32}</h3>
            <h4 className="text-black font-semibold text-justify p-5">{props.h42}</h4>
        </div>
    )
}