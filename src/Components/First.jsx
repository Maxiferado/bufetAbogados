import React from "react";
import backImage from "../Assets/tenemosalgo.jpg"
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
    <div style={{'--image-url': `url(${backImage})`}}  className="bg-[image:var(--image-url)] h-1/2 w-auto bg-cover">
      <div className="flex h-screen w-screen justify-around items-center">
        <div className="p-px bg-none border-4 border-[#cdad7dff] border-l-0 h-1/3 w-1/3 relative md:w-1/4 lg:w-1/5 xl:w-1/6">
          <p className="absolute text-white -bottom-12 text-sm text-center md:text-lg">
            {subtext}
          </p>
          <div className="bg-none border-4 border-[#cdad7dff] border-l-0 h-full w-full text-left flex flex-col justify-center gap-10">
            <p className="text-white text-3xl md:text-5xl">{firstbox}</p>
            <p className="text-white text-3xl md:text-5xl">{secondbox}</p>
            <p className="text-white text-3xl md:text-5xl">{thirdbox}</p>
          </div>
        </div>
        <div className="h-1/3 w-auto flex flex-col gap-10 justify-end lg:pr-10 xl:pr-20 2xl:pr-">
          <button className="p-2 bg-[#cdad7dff] font-semibold text-black hover:text-white ">
            <a href="/#AboutUs">{button1}</a>
          </button>

          <button className="p-2 bg-[#cdad7dff] font-semibold text-black hover:text-white ">
            <a href="/#OurServices">{button2}</a>
          </button>
          <button className="p-2 bg-[#cdad7dff] font-semibold text-black hover:text-white ">
            <a href="/#ContactUs">{button3}</a>
          </button>
        </div>
      </div>
    </div>
  );
}
