import React from "react";


export default function Form() {
  return (
    <div className="bg-slate-800 w-screen h-auto" id="ContactForm">
      <h2 className="text-white font-bold text-2xl mb-10 md:text-3xl pt-10">
        Nos gustaria conocer tú caso
      </h2>
      <form>
        <div className="flex justify-center gap-5 mb-10 ">
          <div>
            <label className="text-white font-bold mr-2" htmlFor="name">
              Nombre
            </label>
            <input
              className="rounded-sm border-b-2 border-[#cdad7dff] bg-slate-700 focus:bg-slate-300"
              type="text"
              name="name"
              value={""}
              required
            />
          </div>
          <div>
            <label className="text-white font-bold mr-2" htmlFor="Correo">
              Correo
            </label>
            <input
              className="rounded-sm border-b-2 border-[#cdad7dff] bg-slate-700 focus:bg-slate-300"
              type="text"
              name="email"
              value={""}
              required
            />
          </div>
        </div>
        <div className="flex justify-center ml-2 gap-5">
          <div>
            <label className="text-white font-bold mr-2" htmlFor="Celular">
              Celular
            </label>
            <input
              className="rounded-sm border-b-2 border-[#cdad7dff] bg-slate-700 focus:bg-slate-300"
              type="text"
              name="Celular"
              value={""}
              required
            />
          </div>
          <div className="">
            <label className="text-white font-bold mr-2" htmlFor="subject">
              Asunto
            </label>
            <input
              className="rounded-sm border-b-2 border-[#cdad7dff] bg-slate-700 focus:bg-slate-300"
              type="text"
              name="subject"
              value={""}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-5 items-center">
          <label
            className="text-white font-bold text-xl mr-2"
            htmlFor="typemessages"
          >
            Explica tú caso
          </label>
          <textarea
            className="w-1/2 h-40 rounded-sm border-2 border-[#cdad7dff] bg-slate-700 focus:bg-slate-300"
            name="typemessages"
            value={""}
            required
          ></textarea>
          <div className="">
            <button
              className="text-2xl text-black bg-[#cdad7dff] p-2 rounded-sm hover:bg-slate-600 hover:text-gray-800 shadow hover:shadow-lg"
              type="button"
            >
              Enviar
            </button>
          </div>
          <p className=" text-white decoration-2 decoration-red-300 ">
            Al enviar este formulario estoy aceptando{" "}
            <a
              className="underline hover:text-stone-700"
              href="https://srv1280-files.hstgr.io/5cf8600284ecca82/files/public_html/Resources/RIOS%20DURAN%20POL%C3%8DTICA%20DE%20PRIVACIDAD%20Y%20PROTECCI%C3%93N%20DE%20DATOS%20PERSONALES%20pdf.pdf"
              target={"_blank"}
              rel="noreferrer" 
            >
              las políticas de privacidad de Rios Duran Legal & Consulting S.A.S
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
