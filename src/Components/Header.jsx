import React from "react";
import Icon from "@mdi/react";
import { mdiWhatsapp } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import { mdiGmail } from "@mdi/js";
import LogoMain from "../Assets/LogoMain.png"

export default function Header({ navmain }) {
  return (
    <nav className="h-1/5 w-screen bg-white flex justify-between">
      <a href="https://riosduranlegalconsulting.com/" target="__blank">
        <div className="flex flex-row gap-2 pl-5 cursor-pointer">
          <img className="h-8 py-1" src={LogoMain} alt="Rios Duran Logo" />
          <p className="text-black font-bold pt-1">{navmain}</p>
        </div>
      </a>
      <div className="flex flex-row gap-5 pr-5 pt-1 mr-5">
        <a href="mailto:contacto@riosduranlegalconsulting.com" target="__blank">
          <Icon
            className="cursor-pointer"
            path={mdiGmail}
            title="Gmail Contact"
            size={1}
            color="black"
          />
        </a>
        <a
          href="https://www.instagram.com/riosduranlegalconsulting/"
          target="__blank"
        >
          <Icon
            className="cursor-pointer"
            path={mdiInstagram}
            title="Instagram"
            size={1}
            color="black"
          />
        </a>
        <a href="https://wa.me/+573183183732" target="__blank">
          <Icon
            className="cursor-pointer"
            path={mdiWhatsapp}
            title="Whatsapp"
            size={1}
            color="black"
          />
        </a>
      </div>
    </nav>
  );
}
