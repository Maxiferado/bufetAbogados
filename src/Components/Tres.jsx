export default function Tres({ h3, h32, h4, h42 }) {
  return (
    <div className="bg-[#f8f3ebff] h-auto w-auto flex flex-col items-center">
      <h3 className="font-bold text-2xl ">{h3}</h3>
      <h4 className="text-black font-semibold text-justify p-5">{h4}</h4>
      <h3 className="font-bold text-2xl ">{h32}</h3>
      <h4 className="text-black font-semibold text-justify p-5">{h42}</h4>
    </div>
  );
}
