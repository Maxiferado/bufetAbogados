import Icon from "@mdi/react";
import { mdiPhone } from "@mdi/js";
import { mdiEmailOutline } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import LogoMain from "../Assets/fondoOscuroMainLogo.png";

export default function Footer({ whatPhone, email, instagram, h2, h3 }) {
  return (
    <div className="bg-slate-800  h-40 w-auto flex flex-col justify-center items-center">
      <div className="flex gap-10">
        <div className="flex">
          <img className="h-20 pr-5" src={LogoMain} alt="Logo Rios Duran" />
          <div className="flex flex-col">
            <h2 className="font-['TitleFont'] text-[#cdad7dff] font-bold">{h2}</h2>
            <h3 className="font-['TitleFont'] text-[#cdad7dff] font-semibold">{h3}</h3>
          </div>
        </div>
        <div className="mb-10  ">
          <ul className="flex gap-5">
            <li className="flex flex-col items-center">
              <Icon              
                path={mdiPhone}
                size={1}
                title="Phone Contact"
                color="#cdad7dff"
                className="bg-black rounded-full p-0.5"
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
                className="bg-black rounded-full p-0.5"
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
                className="bg-black rounded-full p-0.5"
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
