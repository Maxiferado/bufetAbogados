import Icon from "@mdi/react";
import { mdiPhone } from "@mdi/js";
import { mdiEmailOutline } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';

export default function Footer(props: any) {
  return (
    <div className="bg-black h-auto w-auto flex flex-col items-center">
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
              <a href="https://wa.me/+573185575418" className="text-white">+5731855575418</a>
            </li>
            <li className="flex gap-2">
            <Icon
                path={mdiEmailOutline}
                size={1}
                title="Email Contact"
                color="black"
                className="bg-white rounded-full p-0.5" 
              />
              <a className="text-white decoration-1" href="contacto@riosduranlegalconsulting.com">Send Email</a>
            </li>
            <li className="flex gap-2">
            <Icon
                path={mdiInstagram}
                size={1}
                title="Instagram Contact"
                color="black"
                className="bg-white rounded-full p-0.5"
              />
              <a href="https://www.instagram.com/riosduranlegalconsultingsas/" target="__blank" className="text-white" >@riosduran</a>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}
