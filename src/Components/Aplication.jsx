export default function Aplicacion(props: any) {
    return (
        <div className="bg-[#f8f3ebff] h-auto w-auto flex flex-col items-center">         
            <h4 className="text-black font-bold mt-5 text-2xl mb-5">Áreas de aplicación</h4>         
            <ul className="marker:text-slate-500-400 list-disc p-5 space-y-5 text-black-400 font-semibold text-start">
                <li>{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
                <li>{props.li4}</li>                
            </ul>
        </div>        
    )
}