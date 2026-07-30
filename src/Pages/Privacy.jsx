import React from "react";
import { Link } from "react-router-dom";
import { up } from "../Components/Nav";

export default function Privacy() {
  return (
    <>
      <main className="pt-20">
        <div className="bg-[#0a0a0a]">
          <div className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a0a]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>

            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex items-center justify-center gap-2 text-sm mb-8">
                <Link
                  to={"/"}
                  className="text-neutral-400 hover:text-white transition-all duration-200"
                >
                  الرئيسية
                </Link>
                <i className="fa-solid fa-angle-left text-neutral-600"></i>
                <span className="text-orange-500 font-medium">
                  سياسة الخصوصية
                </span>
              </div>

              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/30 mb-6">
                <i className="fa-solid fa-lock fa-xl translate-y-px  text-orange-500"></i>
              </div>

              <p className="text-4xl md:text-5xl font-bold text-white mb-4">
                سياسة الخصوصية
              </p>
              <p className="text-neutral-400 text-lg">
                آخر تحديث: 15 يناير 2026
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 mb-12">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <i className="fa-solid fa-shield-halved text-orange-500"></i>
                </div>
                <div>
                  <p className="font-semibold text-orange-500 mb-1">
                    خصوصيتك تهمنا
                  </p>
                  <p className="text-orange-300/80 text-sm">
                    نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-12">
                <div className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                    1
                  </div>
                  <p>مقدمة</p>
                </div>
                <p className="text-neutral-400 leading-relaxed pr-11">
                  مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك
                  الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك
                  الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك.
                </p>
              </div>

              <div className="mb-12">
                <div className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                    2
                  </div>
                  <p>المعلومات التي نجمعها</p>
                </div>

                <div className="pr-11">
                  <div className="flex mb-3 items-start gap-3 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>
                      <strong className="text-white"> بيانات الهوية: </strong>
                      تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف
                      مشابه.
                    </span>
                  </div>

                  <div className="flex mb-3 items-start gap-3 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>
                      <strong className="text-white"> بيانات الاتصال: </strong>
                      تشمل عنوان البريد الإلكتروني.
                    </span>
                  </div>

                  <div className="flex mb-3 items-start gap-3 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>
                      <strong className="text-white">
                        {" "}
                        البيانات التقنية:{" "}
                      </strong>
                      تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام
                      التشغيل.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>
                      <strong className="text-white">
                        {" "}
                        بيانات الاستخدام:{" "}
                      </strong>
                      تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                    3
                  </div>
                  <p>كيف نستخدم معلوماتك</p>
                </div>

                <div className="pr-11">
                  <div className="flex mb-3 items-start gap-3 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>لتقديم خدمتنا والحفاظ عليها</span>
                  </div>

                  <div className="flex mb-3 items-start gap-3 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>لإخطارك بالتغييرات في خدمتنا</span>
                  </div>

                  <div className="flex mb-3 items-start gap-3 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>لتقديم دعم العملاء</span>
                  </div>

                  <div className="flex mb-3 items-start gap-3 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا</span>
                  </div>

                  <div className="flex mb-3 items-start gap-3 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>لمراقبة استخدام خدمتنا</span>
                  </div>

                  <div className="flex items-start gap-3 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>لاكتشاف ومنع ومعالجة المشاكل التقنية</span>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                    4
                  </div>
                  <p>ملفات تعريف الارتباط</p>
                </div>
                <p className="pr-11 text-neutral-400">
                  نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع
                  النشاط على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف
                  الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا
                  لم تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض
                  أجزاء موقعنا.
                </p>
              </div>

              <div className="mb-12">
                <div className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                    5
                  </div>
                  <p>أمان البيانات</p>
                </div>

                <p className="pr-11 text-neutral-400">
                  لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو
                  استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن
                  نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية
                  للمعرفة.
                </p>
              </div>

              <div className="mb-12">
                <div className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                    6
                  </div>
                  <p>حقوقك</p>
                </div>

                <div className="pr-11">
                  <div className="flex mb-3 items-start gap-3 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>طلب الوصول إلى بياناتك الشخصية</span>
                  </div>

                  <div className="flex mb-3 items-start gap-3 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>طلب تصحيح بياناتك الشخصية</span>
                  </div>

                  <div className="flex mb-3 items-start gap-3 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>طلب مسح بياناتك الشخصية</span>
                  </div>

                  <div className="flex mb-3 items-start gap-3 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>الاعتراض على معالجة بياناتك الشخصية</span>
                  </div>

                  <div className="flex mb-3 items-start gap-3 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>طلب تقييد معالجة بياناتك الشخصية</span>
                  </div>

                  <div className="flex items-start gap-3 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>الحق في سحب الموافقة</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                    7
                  </div>
                  <p>تواصل معنا</p>
                </div>
                <div className="pr-11">
                  <p className="text-neutral-400 mb-4">
                    إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل
                    معنا:
                  </p>
                  <a
                    href="mailto:hello@adasah.com"
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium"
                  >
                    <i className="fa-regular fa-envelope text-orange-500"></i>{" "}
                    hello@adasah.com
                  </a>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-[#262626]">
                <p className="text-neutral-500 text-sm  text-center">
                  باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً
                  <Link
                    to={"/Terms"}
                    onClick={up}
                    className="text-orange-500 mr-1 hover:underline hover:text-orange-400 font-medium"
                  >
                    شروط الخدمة.{" "}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
