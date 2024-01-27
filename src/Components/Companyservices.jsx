export default function Companyservices(props: any) {
    return (
        <div className="bg-[#f8f3ebff] h-auto w-auto flex flex-col items-center">         
            <h4 className="text-black font-bold mt-5 text-2xl mb-5">{props.h4}</h4>         
            <ul className="marker:text-black list-none pl-5 space-y-3 text-black-400 p-5 font-semibold  text-justify">
                <li>{props.li}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
                <li>{props.li4}</li>                
                <li>{props.li5}</li>                
                <li>{props.li6}</li>                
                <li>{props.li7}</li>                
                <li>{props.li8}</li>                
                <li>{props.li9}</li>                
            </ul>
        </div>        
    )
}
