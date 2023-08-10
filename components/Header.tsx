import React from "react";

function Header() {
  return (
    <div className="flex h-[calc(100vh-112px)] justify-center">
      <div className="flex w-full max-w-[1600px] px-[150px] h-screen">
        <div className="flex flex-col items-start max-w-5xl mx-auto justify-center min-h-full w-[1000px]">
          <div className="mb-6 tracking-wide text-lg text-red-500">
            <code className="bg-transparent border-none text-red-500">
              Hi, my name is
            </code>
          </div>
          <div className="text-6xl font-semibold -ml-1 mb-6 opacity-90">
            Sanath Punchibandage.
          </div>
          <div className="text-6xl font-semibold -ml-1 mb-6 opacity-70">
            I build full-stack applications.
          </div>
          <div className="max-w-xl mb-14 opacity-70">
            {
              "I'm a self-taught web developer, and my passion is building functional clones of popular services you know and love."
            }
          </div>
          <a
            href="#projects"
            className="border-red-500 text-red-500 border-[1.5px] px-6 py-4 rounded-md"
          >
            <code className="bg-transparent border-none text-red-500">
              Check out my work!
            </code>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
