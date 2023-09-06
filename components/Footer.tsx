import React from "react";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";

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
              <FiLinkedin size="25px" />
            </a>
            <a
              href="https://github.com/SanathTech"
              target="_blank"
              className="hover:text-red-500"
            >
              <FiGithub size="25px" />
            </a>
            <a
              href="https://www.youtube.com/@SanathTech"
              target="_blank"
              className="hover:text-red-500"
            >
              <FiYoutube size="25px" />
            </a>
          </div>
          {/* Name */}
          <code className="text-sm bg-transparent border-none text-center">
            Built by Sanath Punchibandage
          </code>
          <code className="text-sm bg-transparent border-none text-center">
            Powered by Next.js
          </code>
        </div>
      </div>
    </div>
  );
}

export default Footer;
