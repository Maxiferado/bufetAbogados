import React from "react";

export default function First(props: any) { 
  return (
    <div className="bg-[url('https://i.imgur.com/q7hWY1y.jpeg')] h-1/2 w-auto bg-cover">
      <div className="flex h-screen w-screen justify-around items-center">
        <div className="p-px bg-none border-4 border-[#cdad7dff] border-l-0 h-1/3 w-1/3 relative">
          <p className="absolute text-white -bottom-12 text-sm text-center">
            {props.subtext}
          </p>
          <div className="bg-none border-4 border-[#cdad7dff] border-l-0 h-full w-full text-left flex flex-col justify-center gap-10">
            <p className="text-white text-4xl">{props.firstbox}</p>
            <p className="text-white text-4xl">{props.secondbox}</p>
            <p className="text-white text-4xl">{props.thirdbox}</p>
          </div>
        </div>
        <div className="h-1/3 w-auto flex flex-col gap-10 justify-end">
          <button className="p-2 bg-[#cdad7dff] font-semibold text-black hover:text-white ">
            {props.button1}
          </button>
          <button className="p-2 bg-[#cdad7dff] font-semibold text-black hover:text-white ">
            {props.button2}
          </button>
          <button className="p-2 bg-[#cdad7dff] font-semibold text-black hover:text-white ">
            {props.button3}
          </button>
        </div>
      </div>
    </div>
  );
}
