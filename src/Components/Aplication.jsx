export default function Aplicacion({ li1, li2, li3, li4, h4 }) {
  return (
    <div
      className="bg-[#f8f3ebff] h-auto w-auto flex flex-col"
      id="Aplication"
    >
      <h4 className="text-black font-bold mt-5 text-2xl mb-5 md:text-3xl">{h4}</h4>
      <ul className="marker:text-slate-500-400 list-none p-5 space-y-3 text-black-400 font-semibold text-center md:text-justify md:list-disc md:pl-16 md:text-xl">
        <li className="md:text-xl">{li1}</li>
        <li className="md:text-xl">{li2}</li>
        <li className="md:text-xl">{li3}</li>
       <li className="md:text-xl">{li4}</li>
      </ul>
    </div>
  );
}
