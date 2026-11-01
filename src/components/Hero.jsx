import React from "react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    // الحالة الأولية
    setIsDark(html.classList.contains("dark"));

    // مراقبة تغييرات الكلاس
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"));
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // تنظيف المراقب
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section className="hero w-full flex flex-wrap  sm:px-5 px-1 py-4 font-body">
        <div className="flex flex-col gap-6 w-full md:w-[55%]">
          <span className="status flex items-center  sm:gap-2 gap-1 w-full sm:w-fit bg-surface py-1 px-1 sm:py-1 sm:px-2 rounded-full text-sm text-ink font-light border border-line">
            <span className="relative flex size-2 items-center">
              <span className="absolute inline-flex size-full rounded-full bg-orange-400 opacity-75 animate-[ping_2.4s_ease-in-out_infinite]"></span>
              <span className="relative inline-flex size-2 rounded-full bg-orange-500"></span>
            </span>
            Available for Internship - Casablanca,Morocco
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl w-full text-ink font-semibold font-heading">
            Aimrane Rabie <br></br>
            <em className="text-primary">
              Full-Stack <br className="hidden md:block" /> Developer
            </em>
          </h1>
          <p className="text-muted text-xl ">
            I build fast, accessible web apps that solve real business problems.
          </p>
          <div className="cta flex flex-col sm:flex-row gap-4 md:text-xl">
            <button className=" flex items-center gap-2 bg-primary text-ink rounded-full py-2 px-4 transition-trnasform hover:-translate-y-0.25 ease-in-out duration-300 cursor-pointer font-semibold">
              View Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
            <button className="border border-line hover:border-primary bg-surface text-ink rounded-full py-2 px-5 transition-trnasform hover:-translate-y-0.25 ease-in-out duration-300 cursor-pointer font-semibold">
              Contact
            </button>
          </div>
          <div className="mini flex sm:flex-row flex-col sm:gap-6 gap-1 md:text-xl justify-center sm:justify-start">
            <a
              href="/"
              className="flex items-center gap-1 border-b border-line hover:border-primary text-muted"
            >
              GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
            <a
              href="/"
              className="flex items-center gap-1 border-b border-line hover:border-primary text-muted"
            >
              LinkedIn
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
            <a
              href="/"
              className="flex items-center gap-1 border-b border-line hover:border-primary text-muted"
            >
              Email
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-avis relative flex w-full md:w-[40%] h-[630px] justify-center items-center ">
          <div
            className="relative z-1 h-[580px] w-[460px] aspect-[4/5]  overflow-hidden rounded-[28px] border border-line
                bg-[repeating-linear-gradient(135deg,var(--surface-2)_0_14px,var(--surface)_14px_28px)]"
          >
            <img
              src={`${isDark ? "me-darkMode.png" : "me.png"}`}
              alt="[Your Name], full-stack developer"
              className="absolute  bottom-0 left-1/2 h-[92%] -translate-x-1/2 object-contain"
            />
          </div>

          <div className="code z-2 absolute w-fit sm:w-[280px] md:w-[280px] max-w-full h-auto min-h-[150px] md:min-h-[200px] flex flex-col  bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-4 md:-left-5 border border-gray-300 p-3 text-surface bg-ink rounded-xl transform  ease-in-out -translate-y-2 animate-[bounce_6s_infinite] hover:[animation-play-state:paused] shadow-md shadow-blue-300 cursor-pointer">
            <div className="code-top flex items-center gap-2">
              <i className="flex h-2.5 w-2.5 bg-[#474F5C] rounded-full"></i>
              <i className="flex h-2.5 w-2.5 bg-[#474F5C] rounded-full"></i>
              <i className="flex h-2.5 w-2.5 bg-[#474F5C] rounded-full"></i>
              <span className="text-xs sm:text-sm">developer.ts</span>
            </div>

            <pre className="whitespace-pre-wrap break-words text-xs sm:text-sm mt-2">
              <span className="text-muted">const</span> developer = {"{"}
              {"\n  "}role:{" "}
              <span className="text-primary">"Full-Stack Developer"</span>,
              {"\n  "}focus: [
              <span className="text-primary">"performance"</span>,{"\n        "}
              <span className="text-primary">"accessibility"</span>],
              {"\n  "}openToWork: <span className="text-primary">true</span>,
              {"\n"}
              {"}"};<span className="caret"></span>
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}
