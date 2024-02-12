import React from "react";
import Icon from "@mdi/react";
import { mdiHandshakeOutline } from "@mdi/js";

export default function Second({ h4, textabout }) {
  return (
    <div
      className="bg-[#f8f3ebff] h-auto w-auto flex flex-col items-center"
      id="AboutUs"
    >
      <h4 className="text-black font-bold mt-5 text-2xl  md:text-3xl">{h4}</h4>
      <Icon
        path={mdiHandshakeOutline}
        title="HandShake"
        size={5}
        color="black"
        className="md:hidden"
      />
      <div className="flex flex-col items-center 2xl:w-2/3">
        <p className="text-black  font-semibold text-justify p-5 md:p-10 md:text-xl  lg:p-10 lg:text-2xl ">
          {textabout}
        </p>
        <iframe
          className="hidden  md:block md:mb-5 md:border-8 md:border-[#cdad7dff]"
          width="320"
          height="380"
          src="https://www.youtube.com/embed/9e6o6-dtRX0?autoplay=1&mute=1"
          title="RiosDuran leagal pitch"
        ></iframe>
      </div>
    </div>
  );
}
