import React from "react";

export default function Writerscard({ img, name, job }) {
  return (
    <>
      <div className="p-6 bg-[#171717] border border-[#262626] flex flex-col items-center group/card rounded-2xl hover:border-[#63320e] transition-all duration-200">
        <div className=" relative size-24 mb-4">
          <img
            src={img}
            className="w-full h-full ring-4 ring-[#262626] rounded-full  group-hover/card:ring-[#63320e] transition-all duration-200 object-cover "
          />
          <span className="size-7 absolute -bottom-1 -right-1 flex items-center justify-center bg-[#ff6a00] rounded-full border-2 border-[#161616]">
            <i className="fa-solid fa-check fa-sm text-white"></i>
          </span>
        </div>

        <p className="text-[18px] leading-7 text-white font-bold">{name}</p>
        <p className="text-sm leading-5 font-medium text-[#f97200] mb-4 ">
          {job}
        </p>

        <div className="flex items-center gap-3 justify-center ">
          <a
            href="#"
            className="size-9 bg-[#262626] flex items-center group transition-all duration-200 hover:bg-[#ff6a00] justify-center rounded-xl"
          >
            <i className="fa-brands fa-x-twitter text-[#737373] transition-all duration-200 group-hover:text-white translate-y-px"></i>
          </a>
          <a
            href="#"
            className="size-9 bg-[#262626] flex items-center group transition-all duration-200 hover:bg-[#404040] justify-center rounded-xl"
          >
            <i className="fa-brands fa-github text-[#737373] transition-all duration-200 group-hover:text-white translate-y-px"></i>
          </a>
          <a
            href="#"
            className="size-9 bg-[#262626] flex items-center group transition-all duration-200 hover:bg-[#155dfc] justify-center rounded-xl"
          >
            <i className="fa-brands fa-linkedin text-[#737373] transition-all duration-200 group-hover:text-white translate-y-px"></i>
          </a>
        </div>
      </div>
    </>
  );
}
