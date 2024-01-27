import Icon from "@mdi/react";
import { mdiPhone } from "@mdi/js";
import { mdiEmailOutline } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import { mdiScaleBalance } from "@mdi/js";

export default function Footer({ whatPhone, email, instagram, h2, h3 }) {
  return (
    <div className="bg-black h-auto w-auto flex flex-col items-center pb-5">
      <div>
        <div className="mb-10">
          <ul className="flex flex-col gap-5 items-start">
            <li className="flex gap-2">
              <Icon
                path={mdiPhone}
                size={1}
                title="Phone Contact"
                color="black"
                className="bg-white rounded-full p-0.5"
              />
              <a
                href="https://wa.me/+573185575418"
                className="text-white underline decoration-1 decoration-white"
                target="__blank"
              >
                {whatPhone}
              </a>
            </li>
            <li className="flex gap-2">
              <Icon
                path={mdiEmailOutline}
                size={1}
                title="Email Contact"
                color="black"
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
            <li className="flex gap-2">
              <Icon
                path={mdiInstagram}
                size={1}
                title="Instagram Contact"
                color="black"
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
        <div className="flex">
          <div className="flex items-center">
            <Icon
              path={mdiScaleBalance}
              title="User Profile"
              size={2}
              color="#cdad7dff"
            />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-[#cdad7dff] font-bold">{h2}</h2>
            <h3 className="text-[#cdad7dff] font-semibold">{h3}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
