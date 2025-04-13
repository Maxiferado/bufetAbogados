import React from "react";
import backImage from "../Assets/tenemosalgo.jpg";
import Icon from "@mdi/react";
import { mdiWhatsapp } from "@mdi/js";
import { mdiDownloadBoxOutline } from "@mdi/js";
export default function First({
  subtext,
  firstbox,
  secondbox,
  thirdbox,
  button1,
  button2,
  button3,
}) {
  return (
    <div
      style={{ "--image-url": `url(${backImage})` }}
      className="bg-[image:var(--image-url)] h-1/2 w-auto bg-cover"
    >
      <div className="h-20 w-10 bg-[#cdad7dff] fixed top-1/4 sm:top-1/2 end-0 rounded border-4 border-[#CFAF88]">
        <div className="flex flex-col gap-3">
          <a
            className="rounded hover:bg-[#b98c49ff]"
            href="https://wa.me/+573183183732"
            target="__blank"
          >
            <Icon
              className="cursor-pointer pl-1"
              path={mdiWhatsapp}
              title="Whatsapp"
              size={1.2}
              color="black"
            />
          </a>
          <a
            className="w-100 rounded hover:bg-[#b98c49ff] 
          "
            href="https://riosduranlegalconsulting.com/resources/FPEDP.docx"
            target="__blank"
          >
            <Icon
              className="cursor-pointer"
              path={mdiDownloadBoxOutline}
              title="DownloadDocuments"
              size={1.2}
              color="black"
            />
          </a>
        </div>
      </div>
      <div className="flex h-screen w-screen justify-around items-center">
        <div className="p-px bg-none border-4 border-[#cdad7dff] border-l-0 h-1/3 w-1/3 relative md:w-1/4 lg:w-1/5 xl:w-1/6">
          <p className="font-['TitleFont'] absolute text-white -bottom-12 text-sm text-center md:text-lg">
              {subtext}
          </p>
          <div className="bg-none border-4 border-[#cdad7dff] border-l-0 h-full w-full text-left flex flex-col justify-center gap-10">
            <p className="font-['TitleFont'] text-white text-3xl md:text-5xl">
              {firstbox}
            </p>
            <p className="font-['TitleFont'] text-white text-3xl md:text-5xl">
              {secondbox}
            </p>
            <p className="font-['TitleFont'] text-white text-3xl md:text-5xl">
              {thirdbox}
            </p>
          </div>
        </div>
        <div className="h-1/3 w-auto flex flex-col gap-10 justify-end lg:pr-10 xl:pr-20 2xl:pr-">
          <a
            className="font-['TitleFont'] font-bold p-2 bg-[#cdad7dff] text-black hover:text-white"
            href="/#AboutUs"
          >
            {button1}
          </a>

          <a
            className="font-['TitleFont'] font-bold p-2 bg-[#cdad7dff] text-black hover:text-white"
            href="/#OurServices"
          >
            {button2}
          </a>

          <a
            className="font-['TitleFont'] font-bold p-2 bg-[#cdad7dff] text-black hover:text-white"
            href="/#ContactForm"
          >
            {button3}
          </a>
        </div>
      </div>
    </div>
  );
}
