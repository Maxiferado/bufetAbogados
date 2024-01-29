export default function Aplicacion({ li1, li2, li3, li4, h4 }) {
  return (
    <div className="bg-[#f8f3ebff] h-auto w-auto flex flex-col items-center" id="Aplication">
      <h4 className="text-black font-bold mt-5 text-2xl mb-5">
        {h4}
      </h4>
      <ul className="marker:text-slate-500-400 list-disc p-5 space-y-5 text-black-400 font-semibold text-start">
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
        <li>{li4}</li>
      </ul>
    </div>
  );
}
