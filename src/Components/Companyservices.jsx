export default function Companyservices({
  li,
  li2,
  li3,
  li4,
  li5,
  li6,
  li7,
  li8,
  li9,
  h4,
}) {
  return (
    <div
      className="bg-[#f8f3ebff] h-auto w-auto flex flex-col"
      id="ForCompany"
    >
      <h4 className="text-black font-bold mt-5 text-2xl mb-5 pl-5 pr-5 md:text-3xl">
        {h4}
      </h4>
      <ul className="marker:text-black list-none px-5 space-y-3 text-black-400 font-semibold text-justify  md:list-disc md:text-start md:pl-16">
        <li className="md:text-xl">{li}</li>
        <li className="md:text-xl">{li2}</li>
        <li className="md:text-xl">{li3}</li>
        <li className="md:text-xl">{li4}</li>
        <li className="md:text-xl">{li5}</li>
        <li className="md:text-xl">{li6}</li>
        <li className="md:text-xl">{li7}</li>
        <li className="md:text-xl">{li8}</li>
        <li className="md:text-xl">{li9}</li>
      </ul>
    </div>
  );
}
