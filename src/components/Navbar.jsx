import { useState, useEffect } from "react";
export default function Navbar() {
  const logoName = "Aimrane Rabie";
  const [listOpen,setListOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleDownload = () => {
    const fileUrl = "favicon.svg";

    const link = document.createElement("a");
    link.href = fileUrl;

    link.download = "downloaded-file-name.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <header className="flex flex-col gap-2 w-full items-center ">
      <div className="relative w-full flex flex justify-between items-center md:p-4 p-1  transition-colors duration-900">
        
        <a className="flex gap-1 md:gap-2 items-center cursor-pointer" href="/">
          <span className="rounded-xl p-2 text-sm text-slate-100 dark:text-black bg-black dark:bg-[#ECEEF1]">
            AR
          </span>
          <h1 className="text-ink sm:texl-xl font-heading font-semibold sm:tracking-wider ">
            {logoName.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block font-semibold hover:-translate-y-[2px] transition-transform duration-150 ease-out "
              >
                {letter === " " ? "\u00A0" : letter }
              </span>
            ))}
          </h1>
        </a>
        <nav className="max-[900px]:hidden flex  items-center justify-center">
          <ul className="w-full flex justify-around items-center gap-5 md:gap-8 ">
            <li>
              <a className="text-muted hover:text-ink font-medium rounded-xl py-2 px-2 cursor-pointer  hover:bg-surface-2 ">
                Projects
              </a>
            </li>
            <li>
              <a className="text-muted hover:text-ink font-medium rounded-xl py-2 px-2 cursor-pointer  hover:bg-surface-2 ">
                Skills
              </a>
            </li>
            <li>
              <a className="text-muted hover:text-ink font-medium rounded-xl py-2 px-2 cursor-pointer  hover:bg-surface-2 ">
                About
              </a>
            </li>
            <li>
              <a className="text-muted hover:text-ink font-medium rounded-xl py-2 px-2 cursor-pointer  hover:bg-surface-2 ">
                Experience
              </a>
            </li>
            <li>
              <a className="text-muted hover:text-ink font-medium rounded-xl py-2 px-2 cursor-pointer  hover:bg-surface-2 ">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="actions flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden sm:block bg-surface border rounded-full border-line p-1 cursor-pointer "
          >
            {!darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5 transition-transform duration-500 hover:rotate-40"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                className="size-5 transition-transform duration-500 hover:rotate-40"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}
          </button>
          <button
            onClick={handleDownload}
            className="max-[500px]:hidden bg-primary text-on-primary rounded-full p-2 transition-trnasform hover:-translate-y-0.25 ease-in-out duration-300 cursor-pointer font-semibold"
          >
            Download CV
          </button>
          <button onClick={()=>setListOpen(!listOpen)}
                  className="min-[900px]:hidden bg-surface border rounded-full border-line p-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5 transition-transform duration-500 hover:rotate-30"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
        <div style={{display:listOpen?"":"none"}} className=" w-[95%] rounded-xl h-[300px]  bg-background p-3 mb-10 ">
            <ul className="w-full h-full flex flex-col gap-4 ">
              <li><a href='/' className="block w-full hover:bg-surface-2 text-ink p-2 rounded-xl ">Projects</a></li>
              <li><a href='/' className="block w-full hover:bg-surface-2 p-2 rounded-xl text-ink p-2 rounded-xl">Skills</a></li>
              <li><a href='/' className="block w-full hover:bg-surface-2 p-2 rounded-xl text-ink p-2 rounded-xl">About</a></li>
              <li><a href='/' className="block w-full hover:bg-surface-2 p-2 rounded-xl text-ink p-2 rounded-xl">Experience</a></li>
              <li><a href='/' className="block w-full hover:bg-surface-2 p-2 rounded-xl text-ink p-2 rounded-xl">Contact</a></li>
              <li><button onClick={handleDownload}  className="text-start w-full hover:bg-surface-2 p-2 rounded-xl text-ink p-2 rounded-xl">Download CV</button></li>

            </ul>
        </div>
      </header>
    </>
  );
}
