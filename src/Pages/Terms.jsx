import React from "react";
import { Link } from "react-router-dom";
import { up } from "../Components/Nav";

export default function Terms() {
  return (
    <>
      <main className="pt-20">
        <div className="bg-[#0a0a0a]">
          <div className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a0a]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>

            <div className="absolute inset-0 opacity-30">
              <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-[100px]"></div>
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
                <span className="text-orange-500 font-medium">شروط الخدمة</span>
              </div>

              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/30 mb-6">
                <i className="fa-regular fa-file fa-xl translate-y-px  text-orange-500"></i>
              </div>

              <p className="text-4xl md:text-5xl font-bold text-white mb-4">
                شروط الخدمة
              </p>
              <p className="text-neutral-400 text-lg">
                آخر تحديث: 15 يناير 2026
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mb-12">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <i className="fa-solid fa-triangle-exclamation text-yellow-500"></i>
                </div>
                <div>
                  <p className="font-semibold text-yellow-500 mb-1">شعار مهم</p>
                  <p className="text-yellow-300/80 text-sm">
                    يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا.
                    بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بهذه
                    الشروط.
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
                  <p>الموافقة على الشروط</p>
                </div>
                <p className="text-neutral-400 leading-relaxed pr-11">
                  بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة
                  هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي
                  من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول
                  إليه.
                </p>
              </div>

              <div className="mb-12">
                <div className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                    2
                  </div>
                  <p>رخصة الاستخدام</p>
                </div>

                <p className="text-neutral-400 mb-4 leading-relaxed pr-11">
                  يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض
                  الشخصي غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.
                </p>
                <p className="text-neutral-300 pr-11 font-medium mb-3">
                  بموجب هذا الترخيص لا يجوز لك:
                </p>
                <div className="pr-11">
                  <div className="flex items-start gap-3 mb-2 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>تعديل أو نسخ المواد</p>
                  </div>

                  <div className="flex items-start gap-3 mb-2 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>استخدام المواد لأي غرض تجاري أو للعرض العام</p>
                  </div>

                  <div className="flex items-start gap-3 mb-2 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>محاولة فك أو عكس هندسة أي برنامج على الموقع</p>
                  </div>

                  <div className="flex items-start gap-3 mb-2 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>إزالة أي حقوق نشر أو علامات ملكية من المواد</p>
                  </div>

                  <div className="flex items-start gap-3 mb-2 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                    3
                  </div>
                  <p>إخلاء المسؤولية</p>
                </div>
                <p className="text-neutral-400 leading-relaxed pr-11">
                  المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا
                  يقدم أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع
                  الضمانات الأخرى.
                </p>
              </div>

              <div className="mb-12">
                <div className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                    4
                  </div>
                  <p>القيود</p>
                </div>
                <p className="pr-11 text-neutral-400">
                  في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي
                  أضرار ناتجة عن استخدام أو عدم القدرة على استخدام المواد على
                  الموقع.
                </p>
              </div>

              <div className="mb-12">
                <div className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                    5
                  </div>
                  <p>محتوى المستخدم</p>
                </div>

                <p className="text-neutral-400 mb-4 leading-relaxed pr-11">
                  إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً
                  غير حصري وعالمي ومجاني لاستخدام هذا المحتوى وإعادة إنتاجه
                  وتعديله وتوزيعه.
                </p>
                <p className="text-neutral-300 pr-11 font-medium mb-3">
                  يجب ألا يكون محتواك:
                </p>
                <div className="pr-11">
                  <div className="flex items-start gap-3 mb-2 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>أن يكون تشهيرياً أو فاحشاً أو مسيئاً</p>
                  </div>

                  <div className="flex items-start gap-3 mb-2 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>انتهاك حقوق الملكية الفكرية للآخرين</p>
                  </div>

                  <div className="flex items-start gap-3 mb-2 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>احتواء فيروسات أو أكواد ضارة</p>
                  </div>

                  <div className="flex items-start gap-3 mb-2 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>انتهاك أي قوانين أو لوائح معمول بها</p>
                  </div>

                  <div className="flex items-start gap-3 mb-2 text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>الإعلان عن منتجات أو خدمات غير مصرح بها</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                    6
                  </div>
                  <p>التعديلات</p>
                </div>

                <p className="text-neutral-400 leading-relaxed pr-11">
                  قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام
                  هذا الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط
                  الخدمة.
                </p>
              </div>

              <div>
                <div className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                    7
                  </div>
                  <p>معلومات الاتصال</p>
                </div>
                <div className="pr-11">
                  <p className="text-neutral-400 mb-4">
                    إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل
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
                    onClick={up}
                    to={"/Privacy"}
                    className="text-orange-500 mr-1 hover:underline hover:text-orange-400 font-medium"
                  >
                    سياسة الخصوصية.{" "}
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
