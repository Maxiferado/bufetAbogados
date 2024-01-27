import React from "react";

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
    <div className="bg-[url('https://i.imgur.com/q7hWY1y.jpeg')] h-1/2 w-auto bg-cover">
      <div className="flex h-screen w-screen justify-around items-center">
        <div className="p-px bg-none border-4 border-[#cdad7dff] border-l-0 h-1/3 w-1/3 relative">
          <p className="absolute text-white -bottom-12 text-sm text-center">
            {subtext}
          </p>
          <div className="bg-none border-4 border-[#cdad7dff] border-l-0 h-full w-full text-left flex flex-col justify-center gap-10">
            <p className="text-white text-4xl">{firstbox}</p>
            <p className="text-white text-4xl">{secondbox}</p>
            <p className="text-white text-4xl">{thirdbox}</p>
          </div>
        </div>
        <div className="h-1/3 w-auto flex flex-col gap-10 justify-end">
          <button className="p-2 bg-[#cdad7dff] font-semibold text-black hover:text-white ">
            {button1}
          </button>
          <button className="p-2 bg-[#cdad7dff] font-semibold text-black hover:text-white ">
            {button2}
          </button>
          <button className="p-2 bg-[#cdad7dff] font-semibold text-black hover:text-white ">
            {button3}
          </button>
        </div>
      </div>
    </div>
  );
}
