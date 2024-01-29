export default function HorizontalProperty({li,li2,li3,li4,li5,li6,li7,li8,li9,h4}) {
    return (
        <div className="bg-[#f8f3ebff] h-auto w-auto flex flex-col items-center pb-7" id="HorizontalProperty">         
            <h4 className="text-black font-bold mt-5 text-2xl mb-5 pl-5 pr-5">{h4}</h4>         
            <ul className="marker:text-black list-none pl-5 space-y-3 text-black-400 p-5 font-semibold  text-justify">
                <li>{li}</li>
                <li>{li2}</li>
                <li>{li3}</li>
                <li>{li4}</li>                
                <li>{li5}</li>                
                <li>{li6}</li>                
                <li>{li7}</li>                
                <li>{li8}</li>                
                <li>{li9}</li>                
            </ul>
        </div>        
    )
}
