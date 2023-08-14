import React from "react";
import { SiReact } from "react-icons/si";

type Props = {
  icon: any;
  company: string;
  title: string;
  date: string;
  description: string[];
};

function Job({ icon, company, title, date, description }: Props) {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group is-active">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border-[2px] border-red-500 bg-[#242424] text-red-500 shadow shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2">
        {icon}
      </div>
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white bg-opacity-5 shadow-lg rounded-md p-4">
        <div className="mb-2 opacity-90">{company}</div>
        <div className="text-xl font-semibold mb-2 md:mb-4 opacity-90">
          {title}
        </div>
        <div className="md:absolute md:group-even:right-[calc(50%+40px)] md:group-odd:left-[calc(50%+40px)] top-0 bottom-0 md:m-auto inline-flex items-center justify-center text-sm opacity-70 mb-5 rounded-full">
          <code>{date}</code>
        </div>
        <ul className="list-disc text-sm ml-4 space-y-3 marker:text-red-500">
          {description.map((item, i) => (
            <li key={i} className="opacity-70 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Job;
