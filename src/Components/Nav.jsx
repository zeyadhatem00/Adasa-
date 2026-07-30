import React, { useState } from "react";
import logo from "../assets/log.png";
import { Link, NavLink } from "react-router-dom";
export function up() {
  window.scrollTo({
    top: 0,
  });
}

export default function Nav() {
  let [menu, setmenu] = useState(false);

  function showmenu() {
    menu = !menu;
    setmenu(menu);
  }

  function closemenu() {
    menu = false;
    setmenu(menu);
    up();
  }

  return (
    <>
      <nav className="bg-[#161616] z-50 fixed top-0 left-0 right-0">
        <div className="container px-4 md:px-8">
          <div className="flex  justify-between items-center h-20">
            <Link
              onClick={up}
              to={""}
              className="flex gap-3 cursor-pointer group items-center "
            >
              <div className="size-12">
                <img
                  src={logo}
                  className=" group-hover:scale-110 transition-all duration-200  w-full h-full"
                />
              </div>
              <div>
                <p className="font-bold leading-7 m-0 text-[20px] text-[#dbdbdb]">
                  عدسة
                </p>
                <p className="hidden sm:block  font-normal text-[12px] m-0 leading-4 text-[#ff8904cc]">
                  عالم التصوير الفوتوغرافي
                </p>
              </div>
            </Link>

            <div className=" hidden md:flex items-center">
              <div className="flex items-center  p-1.5 border border-[#262626] bg-[#161616] rounded-full">
                <NavLink
                  onClick={up}
                  to={""}
                  className="py-2.5 px-5 TAJ rounded-full hover:text-white transition-all duration-200 text-sm font-medium text-[#a1a1a1]"
                >
                  الرئيسية
                </NavLink>
                <NavLink
                  onClick={up}
                  to={"Blog"}
                  className="py-2.5 px-5 TAJ rounded-full  hover:text-white transition-all duration-200  text-sm font-medium text-[#a1a1a1]"
                >
                  المدونة
                </NavLink>
                <NavLink
                  onClick={up}
                  to={"About"}
                  className="py-2.5  px-5 TAJ rounded-full  hover:text-white transition-all duration-200  text-sm font-medium text-[#a1a1a1]"
                >
                  من نحن
                </NavLink>
              </div>
            </div>

            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-3 ">
                <button className="p-3 hover:text-orange-500 border transition-all duration-300 hover:border-[#262626] border-transparent cursor-pointer hover:bg-[#161616] rounded-xl  text-[#737373] ">
                  <i className="  fa-solid fa-magnifying-glass "></i>
                </button>
                <Link
                  onClick={up}
                  to={"Blog"}
                  className="py-4 hover:-translate-y-0.5  duration-300 flex font-semibold text-sm leading-5 TAJ items-center justify-center rounded-full text-white  grad px-8"
                >
                  ابدأ القراءة
                </Link>
              </div>
            </div>

            <button
              onClick={showmenu}
              className=" cursor-pointer md:hidden hover:text-orange-500 p-3 rounded-xl transition-all duration-300 border border-transparent text-neutral-400  hover:bg-[#161616] hover:border-[#262626] "
            >
              <i
                className={`fa-solid ${menu ? "fa-xmark" : "fa-bars"} fa-lg `}
              ></i>
            </button>
          </div>

          <div
            id="menu"
            className={`md:hidden transition-all duration-300  overflow-hidden ${menu ? "max-h-80  pb-6" : "max-h-0"} `}
          >
            <div className="p-4 bg-[#161616] backdrop-blur-xl flex flex-col rounded-2xl border border-[#262626]">
              <NavLink
                onClick={closemenu}
                to={""}
                className="TAJ border border-transparent hover:bg-[#1a1a1a] transition-all duration-300 hover:text-white mb-1 px-4 py-3 rounded-xl font-medium leading-5 text-sm text-[#a1a1a1] "
              >
                الرئيسية
              </NavLink>
              <NavLink
                onClick={closemenu}
                to={"Blog"}
                className="TAJ border border-transparent hover:bg-[#1a1a1a] transition-all duration-300 hover:text-white mb-1 px-4 py-3 rounded-xl font-medium leading-5 text-sm text-[#a1a1a1] "
              >
                المدونة
              </NavLink>
              <NavLink
                onClick={closemenu}
                to={"About"}
                className="TAJ border border-transparent hover:bg-[#1a1a1a] transition-all duration-300 hover:text-white mb-1 px-4 py-3 rounded-xl font-medium leading-5 text-sm text-[#a1a1a1] "
              >
                من نحن
              </NavLink>
              <Link
                onClick={closemenu}
                to={""}
                className="py-4 hover:-translate-y-0.5 mt-2  duration-300 flex font-semibold text-sm leading-5 TAJ items-center justify-center rounded-full text-white  grad px-8"
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
