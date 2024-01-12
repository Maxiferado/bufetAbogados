import React from "react"

export default function First() {
    return (
        <div className="bg-[url('https://i.imgur.com/q7hWY1y.jpeg')] h-1/2 w-auto bg-cover">
            <div className="flex h-screen w-screen justify-around items-center">
                <div className="p-px bg-none border-4 border-[#cdad7dff] border-l-0 h-1/3 w-1/3 relative"> <p className="absolute text-white -bottom-12 text-sm text-center">Legal & Consulting</p>
                    <div className="bg-none border-4 border-[#cdad7dff] border-l-0 h-full w-full text-left flex flex-col justify-center gap-10">
                        <p className="text-white text-4xl">Ríos
                        </p> <p className="text-white text-4xl">Durán
                        </p> <p className="text-white text-4xl">S.A.S
                        </p>
                    </div>
                </div>
                <div className="h-1/3 w-auto flex flex-col gap-10 justify-end">
                    <button className="p-2 bg-[#cdad7dff] font-semibold text-black hover:text-white ">Sobre Nosotros</button>
                    <button className="p-2 bg-[#cdad7dff] font-semibold text-black hover:text-white ">Nuestros Servicios</button>
                    <button className="p-2 bg-[#cdad7dff] font-semibold text-black hover:text-white ">Contactenos</button>
                </div>
            </div>
        </div>
    )
}