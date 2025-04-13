import Icon from "@mdi/react";
import { mdiPhone } from "@mdi/js";
import { mdiEmailOutline } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import LogoMain from "../Assets/fondoOscuroMainLogo.png";

export default function Footer({ whatPhone, email, instagram, h2, h3 }) {
  return (
    <div className="h-auto bg-slate-800 w-auto">
      <div className="sm:flex"> 
      <div className="flex flex-col items-center sm:flex-row sm:w-1/3 sm:justify-around lg:justify-center">
        <img className="h-1/4 w-1/4 sm:h-auto sm:w-16" src={LogoMain} alt="Logo Rios Duran" />
        <div className="flex flex-col">
          <h2 className="font-['TitleFont'] text-[#cdad7dff] font-bold">
            {h2}
          </h2>
          <h3 className="font-['TitleFont'] text-[#cdad7dff] font-semibold">
            {h3}
          </h3>
        </div>
      </div>
      <div className="pb-5 pt-5 sm:w-2/3 ">
        <ul className="flex justify-center items-center gap-5 lg:justify-around">
          <li className="flex flex-col items-center">
            <Icon
              path={mdiPhone}
              size={1}
              title="Phone Contact"
              color="#cdad7dff"
              className="bg-white rounded-full p-0.5"
            />
            <a
              href="https://wa.me/+573183183732"
              className="text-white underline decoration-1 decoration-white"
              target="__blank"
            >
              {whatPhone}
            </a>
          </li>
          <li className="flex flex-col items-center">
            <Icon
              path={mdiEmailOutline}
              size={1}
              title="Email Contact"
              color="#cdad7dff"
              className="bg-white rounded-full p-0.5"
            />
            <a
              className="text-white underline decoration-1 decoration-white"
              href="mailto:contacto@riosduranlegalconsulting.com"
              target="__blank"
            >
              {email}
            </a>
          </li>
          <li className="flex flex-col items-center">
            <Icon
              path={mdiInstagram}
              size={1}
              title="Instagram Contact"
              color="#cdad7dff"
              className="bg-white rounded-full p-0.5"
            />
            <a
              href="https://www.instagram.com/riosduranlegalconsultingsas/"
              target="__blank"
              className="text-white underline decoration-1 decoration-white"
            >
              {instagram}
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}
