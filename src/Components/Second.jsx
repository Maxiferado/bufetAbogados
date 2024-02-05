import React from "react";
import Icon from "@mdi/react";
import { mdiHandshakeOutline } from "@mdi/js";
import handshake from "../Assets/handShake.jpg";

export default function Second({ h4, textabout }) {
  return (
    <div
      className="bg-[#f8f3ebff] h-auto w-auto flex flex-col items-center"
      id="AboutUs"
    >
      <h4 className="text-black font-bold mt-5 text-2xl mb-10 md:text-3xl">{h4}</h4>
      <Icon
        path={mdiHandshakeOutline}
        title="HandShake"
        size={5}
        color="black"
        className="md:hidden"
      />
      <div className="md:flex">
        <img
          className="hidden md:flex md:w-1/3 md:h-3/4 md:pl-10  lg:pb-10"
          src={handshake}
          alt="handshake"
        />
        <p className="text-black  font-semibold text-justify p-5 md:p-20 md:text-xl  lg:p-20 lg:text-2xl ">
          {textabout}
        </p>
      </div>
    </div>
  );
}
