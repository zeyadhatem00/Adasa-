import React, { useState } from "react";
import Writerscard from "../Components/Writerscard";
import { Link } from "react-router-dom";
import { up } from "../Components/Nav";
import blogs from "../data/data.json";

export default function About() {
  return (
    <>
      <main className="pt-20">
        <section
          id="hero"
          className="bg-[#0a0a0a] overflow-hidden flex items-center relative"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"
            style={{ animationDelay: "-2s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="container appearance relative">
            <div className="px-4 md:px-8 py-24 flex items-center ">
              <div className="flex flex-col max-w-4xl mx-auto justify-center items-center">
                <div className="flex gap-2 bg-[#24160b] w-fit rounded-full items-center border border-[#63320e] py-2 px-4 mb-6">
                  <div className="h-1 w-1   bg-[#f97316] fade rounded-full "></div>
                  <div className="  flex items-center justify-center h-2 w-2 bg-[#f97316]  rounded-full">
                    <div className=" animate-ping  h-2 w-2  bg-[#f97316]  rounded-full"></div>
                  </div>
                  <span className="font-medium text-sm leading-5 text-[#fa7516]">
                    من نحن
                  </span>
                </div>

                <h1 className=" mb-6 font-bold md:leading-15 text-4xl leading-10 md:text-6xl text-center text-white">
                  مهمتنا هي <span className="grad2">الإعلام والإلهام</span>
                </h1>

                <p className="font-normal text-center leading-8.25 text-[20px] mb-12  text-[#a1a1a1]">
                  مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                  المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة
                  المعرفة ومساعدة المصورين على تنمية مهاراتهم من{" "}
                  <br className="hidden md:block" />
                  خلال محتوى عالي الجودة.
                </p>

                <div className="grid gap-4 grid-cols-2 mx-auto md:grid-cols-4 w-full ">
                  <div className=" flex  flex-col items-center p-6 justify-center  itransition-all duration-300  border hover:scale-105 bg-[#161616cc] backdrop-blur-[20px] rounded-3xl border-[#262626]">
                    <div className="mb-2">
                      <i className="fa-solid fa-users fa-xl text-[#fa7014]"></i>
                    </div>

                    <p className="font-bold  mb-1  leading-9 text-3xl grad2">
                      +2مليون
                    </p>
                    <p className="text-sm leading-5 font-normal text-[#737373]">
                      قارئ شهرياً
                    </p>
                  </div>

                  <div className=" flex  flex-col items-center p-6 justify-center  itransition-all duration-300  border hover:scale-105 bg-[#161616cc] backdrop-blur-[20px] rounded-3xl border-[#262626]">
                    <div className="mb-2">
                      <i className="fa-solid fa-newspaper fa-xl text-[#fa7014]"></i>
                    </div>

                    <p className="font-bold  mb-1  leading-9 text-3xl grad2">
                      +500
                    </p>
                    <p className="text-sm leading-5 font-normal text-[#737373]">
                      مقالة منشورة
                    </p>
                  </div>

                  <div className=" flex  flex-col items-center p-6 justify-center  itransition-all duration-300  border hover:scale-105 bg-[#161616cc] backdrop-blur-[20px] rounded-3xl border-[#262626]">
                    <div className="mb-2">
                      <i className="fa-solid fa-pen-nib fa-xl text-[#fa7014]"></i>
                    </div>

                    <p className="font-bold mb-1  leading-9 text-3xl grad2">
                      +50
                    </p>
                    <p className="text-sm leading-5 font-normal text-[#737373]">
                      كاتب خبير
                    </p>
                  </div>

                  <div className=" flex  flex-col items-center p-6 justify-center  itransition-all duration-300  border hover:scale-105 bg-[#161616cc] backdrop-blur-[20px] rounded-3xl border-[#262626]">
                    <div className="mb-2">
                      <i className="fa-solid fa-book-open fa-xl text-[#fa7014]"></i>
                    </div>

                    <p className="font-bold mb-1  leading-9 text-3xl grad2">
                      +15
                    </p>
                    <p className="text-sm leading-5 font-normal text-[#737373]">
                      تصنيف
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#121212]">
          <div className="container px-4 md:px-8">
            <div className="mb-16 flex items-center w-full flex-col">
              <div className="flex items-center mb-4 gap-3">
                <div className="w-1.5 h-8 rounded-full grad4"></div>
                <p className="text-white text-3xl leading-9 md:text-4xl md:leading-10 font-bold ">
                  قيمنا
                </p>
                <div className="w-1.5 h-8 rounded-full grad4"></div>
              </div>

              <p className="text-[18px] leading-7 font-normal text-[#a1a1a1]">
                المبادئ التي توجه كل ما نقوم بإنشائه
              </p>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 flex group overflow-hidden relative flex-col items-center bg-[#171717] border border-[#262626] hover:border-[#592d10] hover:scale-103 transition-all duration-300 rounded-xl">
                <div className="absolute top-0 right-0 left-0 bottom-0 group-hover:opacity-100 transition-all duration-300 gradx opacity-0 w-full h-full"></div>
                <div className="mb-4">
                  <i className="fa-solid  fa-arrows-rotate fa-2xl text-[#ff6900]"></i>
                </div>
                <p className="  text-[18px] mb-2 font-bold leading-7 text-white">
                  دائماً محدث
                </p>
                <p className="text-sm   leading-5 text-[#a1a1a1]">
                  أحدث الاتجاهات وأفضل الممارسات
                </p>
              </div>

              <div className="p-6 flex group overflow-hidden relative flex-col items-center bg-[#171717] border border-[#262626] hover:border-[#592d10] hover:scale-103 transition-all duration-300 rounded-xl">
                <div className="absolute top-0 right-0 left-0 bottom-0 group-hover:opacity-100 transition-all duration-300 gradx opacity-0 w-full h-full"></div>
                <div className="mb-4">
                  <i className="fa-solid  fa-bullseye  fa-2xl text-[#ff6900]"></i>
                </div>
                <p className="  text-[18px] mb-2 font-bold leading-7 text-white">
                  الجودة أولاً
                </p>
                <p className="text-sm   leading-5 text-[#a1a1a1]">
                  محتوى مدروس ومكتوب بخبرة
                </p>
              </div>

              <div className="p-6 flex group overflow-hidden relative flex-col items-center bg-[#171717] border border-[#262626] hover:border-[#592d10] hover:scale-103 transition-all duration-300 rounded-xl">
                <div className="absolute top-0 right-0 left-0 bottom-0 group-hover:opacity-100 transition-all duration-300 gradx opacity-0 w-full h-full"></div>
                <div className="mb-4">
                  <i className="fa-solid  fa-bolt fa-2xl text-[#ff6900]"></i>
                </div>
                <p className="  text-[18px] mb-2 font-bold leading-7 text-white">
                  تركيز عملي
                </p>
                <p className="text-sm   leading-5 text-[#a1a1a1]">
                  أمثلة واقعية يمكنك تطبيقها اليوم
                </p>
              </div>

              <div className="p-6 flex group overflow-hidden relative flex-col items-center bg-[#171717] border border-[#262626] hover:border-[#592d10] hover:scale-103 transition-all duration-300 rounded-xl">
                <div className="absolute top-0 right-0 left-0 bottom-0 group-hover:opacity-100 transition-all duration-300 gradx opacity-0 w-full h-full"></div>
                <div className="mb-4">
                  <i className="fa-solid  fa-handshake fa-2xl text-[#ff6900]"></i>
                </div>
                <p className="  text-[18px] mb-2 font-bold leading-7 text-white">
                  المجتمع
                </p>
                <p className="text-sm   leading-5 text-[#a1a1a1]">
                  تعلم مع آلاف المصورين
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0a0a0a]">
          <div className="container px-4 md:px-8">
            <div className=" mb-16 flex flex-col items-center">
              <div className="flex gap-2 bg-[#24160b] w-fit rounded-full items-center border border-[#63320e] py-2 px-4 mb-4">
                <div className="h-1 w-1   bg-[#f97316] fade rounded-full "></div>
                <span className="font-medium text-sm leading-5 text-[#fa7516]">
                  فريقنا
                </span>
              </div>

              <h2 className=" mb-4 text-center font-bold text-4xl leading-10  text-white">
                تعرف على كتابنا
              </h2>
              <p className="leading-7 text-center text-[18px] text-[#a1a1a1] ">
                فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
                المجتمع.
              </p>
            </div>

            <div className=" grid md:grid-cols-2 grid-cols-1 gap-8 lg:grid-cols-3">
              {blogs.map((writer) => {
                return (
                  <Writerscard
                    key={writer.id}
                    img={writer.author.avatar}
                    name={writer.author.name}
                    job={writer.author.role}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-20 overflow-hidden gradabout">
          <div className=" absolute inset-0 opacity-30">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative">
            <p className="md:text-4xl text-3xl leading-10 text-white mb-6 font-bold">
              لديك أسئلة؟ دعنا نتحدث!
            </p>
            <p className="text-[18px] leading-7 max-w-2xl mx-auto font-normal text-[#fffc] mb-8">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
              أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>
            <div className="flex md:flex-row flex-col w-full  justify-center gap-4 ">
              <a
                href="mailto:hello@adasah.com"
                className="flex items-center transition-all duration-300 hover:-translate-y-0.5 font-semibold gap-2 justify-center text-white py-4 px-8 rounded-xl bg-[#0a0a0a]"
              >
                <i className="fa-regular fa-envelope fa-lg  text-white"></i>
                تواصل معنا
              </a>
              <Link
                onClick={up}
                to={"/Blog"}
                className="font-semibold hover:bg-white hover:border-transparent hover:text-[#0a0a0a] transition-all duration-300 text-white py-4 px-8 rounded-xl border-2 border-[#ffab66] bg-transparent"
              >
                تصفح المقالات
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
