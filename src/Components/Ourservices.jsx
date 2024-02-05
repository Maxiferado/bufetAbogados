import servicios from "../Assets/ourServices.png"
export default function Ourservices({ h2, button1, button2, button3 }) {
  return (
    <div
      className="bg-black h-1/3 w-auto flex flex-col gap-10 justify-end items-center"
      id="OurServices"
    >
      <h2 className="text-white mt-5 font-bold text-2xl md:text-3xl ">{h2}</h2>
      
      <div className="flex justify-between items-center pb-10">  
      <div>
        <img className="hidden md:block md:rounded-sm" src={servicios} alt="contrato" />
      </div>
      <div className="flex flex-col gap-10 justify-center items-center w-96">       
      <button className="p-2 h-1/3 w-1/2 font-semibold rounded-sm bg-[#cdad7dff] text-black hover:text-white md:text-lg  ">
        <a href="/#Aplication">{button1}</a>
      </button>
      <button className="p-2 h-1/3 w-1/2 font-semibold rounded-sm bg-[#cdad7dff] text-black hover:text-white md:text-lg  ">
        <a href="/#ForCompany">{button2}</a>
      </button>
      <button className="p-2 h-1/3 w-1/2 font-semibold rounded-sm mb-5 bg-[#cdad7dff] text-black hover:text-white md:text-lg ">
        <a href="/#HorizontalProperty">{button3}</a>
      </button>
      </div>
      </div>
    </div>
  );
}
