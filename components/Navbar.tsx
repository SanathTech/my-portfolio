import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between mx-auto py-8 px-10 max-w-7xl">
      <a href="/" className="mr-10 text-red-500">
        sanath.tech
      </a>
      <div className="flex gap-10">
        <a href="#about" className="opacity-90">
          About
        </a>
        <a href="#experience" className="opacity-90">
          Experience
        </a>
        <a href="#projects" className="opacity-90">
          Projects
        </a>
        <a href="#contact" className="opacity-90">
          Contact
        </a>
        <button className="border-red-500 text-red-500 border-[1.5px] px-4 py-2 -my-2 rounded-md">
          Resume
        </button>
      </div>
    </div>
  );
}

export default Navbar;
