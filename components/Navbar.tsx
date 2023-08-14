"use client";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [showShadow, setShowShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY === 0 && showShadow === true) {
        // if top of page hide shadow
        setShowShadow(false);
      } else if (window.scrollY !== 0 && showShadow === false) {
        // if not top of page show shadow
        setShowShadow(true);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [showShadow]);
  return (
    <div>
      <div
        className={`flex justify-between items-center mx-auto py-4 px-5 md:py-8 md:px-10 max-w-7xl bg-[#242424] ${
          showShadow && "shadow-lg"
        }`}
      >
        <a href="/" className="mr-10 text-red-500">
          sanath.tech
        </a>
        <div
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden opacity-90"
        >
          <FiMenu size="22px" />
        </div>
        <div className="md:flex hidden gap-10">
          <a href="#about" className="opacity-90 hover:text-red-500">
            About
          </a>
          <a href="#experience" className="opacity-90 hover:text-red-500">
            Experience
          </a>
          <a href="#projects" className="opacity-90 hover:text-red-500">
            Projects
          </a>
          <a href="#contact" className="opacity-90 hover:text-red-500">
            Contact
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            className="button group px-4 py-2 -my-2"
          >
            <code className="button-code">Resume</code>
          </a>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-0 md:hidden w-full h-screen bg-[#242424]">
          <div
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 opacity-90"
          >
            <ImCross />
          </div>
          <div className="flex flex-col justify-evenly h-screen items-center text-lg uppercase">
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#about"
              className="opacity-90 w-1/2 text-center border-white border-[1px] py-2 -my-2"
            >
              About
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#experience"
              className="opacity-90 w-1/2 text-center border-white border-[1px] py-2 -my-2"
            >
              Experience
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#projects"
              className="opacity-90 w-1/2 text-center border-white border-[1px] py-2 -my-2"
            >
              Projects
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#contact"
              className="opacity-90 w-1/2 text-center border-white border-[1px] py-2 -my-2"
            >
              Contact
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href="/Resume.pdf"
              target="_blank"
              className="button group w-1/2 text-center py-2 -my-2"
            >
              <code className="button-code text-xl">Resume</code>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
