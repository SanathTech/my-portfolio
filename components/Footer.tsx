import React from "react";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <div className="flex justify-center py-5">
      <div className="flex w-full max-w-[1600px] px-5 sm:px-20 lg:px-[150px]">
        <div className="flex flex-col w-full justify-center items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-5 mb-5 opacity-90 items-center">
            <a
              href="https://www.linkedin.com/in/sanath-punchibandage/"
              target="_blank"
              className="hover:text-red-500"
            >
              <BsLinkedin size="23px" />
            </a>
            <a
              href="https://github.com/SanathTech"
              target="_blank"
              className="hover:text-red-500"
            >
              <BsGithub size="25px" />
            </a>
            <a
              href="https://www.youtube.com/@SanathTech"
              target="_blank"
              className="hover:text-red-500"
            >
              <BsYoutube size="25px" />
            </a>
          </div>
          {/* Name */}
          <code className="text-sm bg-transparent border-none text-center">
            Built by Sanath Punchibandage using Next.js and Tailwind CSS
          </code>
        </div>
      </div>
    </div>
  );
}

export default Footer;
