import React from "react";
import Icon from "@mdi/react";
import { mdiHandshakeOutline } from "@mdi/js";

export default function Second({ h4, textabout }) {
  return (
    <div className="bg-[#f8f3ebff] h-auto w-auto flex flex-col items-center" id="AboutUs">
      <h4 className="text-black font-bold mt-5 text-2xl">{h4}</h4>
      <Icon
        path={mdiHandshakeOutline}
        title="HandShake"
        size={5}
        color="black"
      />
      <p className="text-black font-semibold text-justify p-5">{textabout}</p>
    </div>
  );
}
