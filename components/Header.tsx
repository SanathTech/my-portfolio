"use client";
import { TypeAnimation } from "react-type-animation";

function Header() {
  return (
    <div className="flex h-[calc(100vh-112px)] justify-center">
      <div className="flex w-full max-w-[1600px] px-5 sm:px-20 lg:px-[150px] h-screen">
        <div className="flex flex-col items-start max-w-5xl mx-auto justify-center min-h-full w-[1000px]">
          <div className="mb-6 tracking-wide text-lg text-red-500">
            <code className="bg-transparent border-none text-red-500">
              Hi, my name is
            </code>
          </div>
          <div className="text-4xl ml-[2px] md:ml-0 md:text-5xl lg:text-6xl font-semibold lg:-ml-1 mb-6 opacity-90">
            Sanath Punchibandage.
          </div>
          <div className="text-4xl min-h-[40px] md:min-h-[48px] lg:min-h-[60px] ml-[2px] md:ml-0 md:text-5xl lg:text-6xl font-semibold lg:-ml-1 mb-6 opacity-70">
            <TypeAnimation sequence={["I build full-stack applications."]} />
          </div>

          <div className="max-w-xl ml-[2px] md:ml-0 mb-10 lg:mb-14 opacity-70">
            {
              "I'm a self-taught web developer, and my passion is building functional clones of popular services you know and love."
            }
          </div>
          <a href="#projects" className="button group">
            <code className="button-code">Check out my work!</code>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
