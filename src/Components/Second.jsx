import React from "react";
import Icon from '@mdi/react';
import { mdiHandshakeOutline  } from '@mdi/js';

export default function Second() {
    return (        
        <div className="bg-[#f8f3ebff] h-auto w-auto flex flex-col items-center">         
            <h2 className="text-black font-bold mt-5 text-2xl"> Sobre Nosotros</h2>
            <Icon path={ mdiHandshakeOutline }
            title="HandShake"
            size={5}
            color="black"
          />
            <p className="text-black font-semibold text-justify p-5">En Ríos Durán S.A.S generamos una experiencia en asesorías y consutorías legales, Queremos resolver tus problemas e impulsar tú crecimiento u éxito empresarial</p>
            
        </div>        
    )
}