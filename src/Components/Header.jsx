import React from "react";
import Icon from "@mdi/react";
import { mdiWhatsapp } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import { mdiGmail } from "@mdi/js";
import LogoMain from "../Assets/LogoMain.png"

export default function Header({ navmain }) {
  return (
    <nav className="flex justify-between h-14 w-screen bg-white">
      <a href="https://riosduranlegalconsulting.com/" target="__blank">
        <div className="flex flex-row gap-2 pl-5 cursor-pointer">
          <img className="h-14 py-1" src={LogoMain} alt="Rios Duran Logo" />
          <div className="flex flex-col mt-1">
          <p className="font-['TitleFont'] text-xl text-[#1e2432ff] font-bold">{navmain}</p>
          <p className="font-['TitleFont'] text-[#cdad7dff] font-bold">Legal & Consulting </p>
          </div>
        </div>
      </a>
      <div className="flex flex-row gap-5 pr-5 pt-4 mr-5">
        <a className="hover:bg-slate-200 h-7 rounded-sm" href="mailto:contacto@riosduranlegalconsulting.com" target="__blank">
          <Icon
            className="cursor-pointer"
            path={mdiGmail}
            title="Gmail Contact"
            size={1.2}
            color="#cdad7dff"
          />
        </a>
        <a
        className="hover:bg-slate-200 h-7 rounded-sm"
          href="https://www.instagram.com/riosduranlegalconsulting/"
          target="__blank"
        >
          <Icon
            className="cursor-pointer"
            path={mdiInstagram}
            title="Instagram"
            size={1.2}
            color="#cdad7dff"
          />
        </a>
        <a className="hover:bg-slate-200 h-7 rounded-sm" href="https://wa.me/+573183183732" target="__blank">
          <Icon
            className="cursor-pointer"
            path={mdiWhatsapp}
            title="Whatsapp"
            size={1.2}
            color="#cdad7dff"
          />
        </a>
      </div>
    </nav>
  );
}
