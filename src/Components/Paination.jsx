import React from "react";
import { up } from "./Nav";

export default function Paination({
  totalcards,
  cardsperpage,
  setcurrentpage,
  currentpage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalcards / cardsperpage); i++) {
    pages.push(i);
  }

  return (
    <>
      <div
        className={`  ${pages.length == 1 ? "hidden" : "flex"} justify-center items-center gap-2 mt-12`}
      >
        <div className="flex items-center gap-1">
          {pages.map((page, i) => {
            return (
              <button
                onClick={() => {
                  setcurrentpage(page);
                  up();
                }}
                key={i}
                className={`
                  
                    ${currentpage == page ? "min-w-11 h-11 rounded-xl text-sm font-medium transition-all border-transparent duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white" : "min-w-11 cursor-pointer h-11 rounded-xl text-sm font-medium transition-all  duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"}`}
              >
                {page}
              </button>
            );
          })}
        </div>
      </div>
      <p
        className={`   ${pages.length == 1 ? "hidden" : ""}  ${totalcards == 0 ? "hidden" : ""}    text-center text-neutral-500 mt-4 text-sm`}
      >
        {" "}
        صفحة {currentpage} من {pages.length}
      </p>
    </>
  );
}
