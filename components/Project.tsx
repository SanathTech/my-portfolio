import React from "react";
import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOut } from "react-icons/pi";

type Props = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  website: string;
  image: string;
};

function Project({ title, description, stack, github, website, image }: Props) {
  return (
    <div className="flex flex-col group bg-white bg-opacity-5 shadow-lg p-3 lg:p-5 rounded-lg w-full md:odd:flex-row md:even:flex-row-reverse">
      <div className="w-full max-w-[500px] mb-6 md:mb-0 md:w-3/5 mx-auto md:group-odd:mr-10 md:group-even:ml-10">
        <img
          className="rounded-lg shadow-lg border-black border-[1px]"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-1 flex-col text-center items-center justify-center md:group-odd:text-end md:group-odd:items-end md:group-odd:pr-1 lg:group-odd:pr-4 md:group-even:text-start md:group-even:items-start md:group-even:pl-1 lg:group-even:pl-4">
        <div className="text-2xl font-semibold mb-4 opacity-90">{title}</div>
        <p className="mb-5 opacity-70">{description}</p>
        <div className="flex whitespace-nowrap flex-wrap justify-center gap-2 text-sm mb-6 opacity-70 md:group-odd:justify-end md:group-even:justify-start">
          {stack.map((item, i) => (
            <code key={i}>{item}</code>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <a
            className="hover:text-red-500"
            href={`https://github.com/SanathTech/${github}`}
            target="_blank"
          >
            <FiGithub size="22px" />
          </a>
          <a
            href={`https://${website}.sanathtech.com/`}
            target="_blank"
            className="pb-[2px] hover:text-red-500"
          >
            <PiArrowSquareOut size="26px" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
