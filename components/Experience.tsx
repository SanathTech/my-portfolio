import React from "react";

function Experience() {
  return (
    <div className="flex justify-center py-28">
      <div className="flex w-full max-w-[1600px] px-[150px] justify-center">
        <div className="flex flex-col max-w-5xl mx-auto w-[1000px]">
          <div className="text-3xl font-semibold mb-10 opacity-90">
            Work Experience
          </div>
          <div className="flex justify-between">
            <div className="bg-white bg-opacity-5 shadow-lg rounded-md p-4 w-[450px] mr-10">
              <div className="mb-2 opacity-90">DXC Technology</div>
              <div className="text-xl font-semibold mb-2 opacity-90">
                Professional Systems Engineer
              </div>
              <div className="text-sm mb-5 opacity-70">
                <code>April 2021 - Present</code>
              </div>
              <ul className="list-disc text-sm ml-4 space-y-3 marker:text-red-500">
                <li className="opacity-70">Built React Web Applications</li>
                <li className="opacity-70">
                  Developed Cloud-Based Solutions using AWS
                </li>
                <li className="opacity-70">Created Python-based APIs</li>
                <li className="opacity-70">
                  Contributed to Code Bases on Company Github Repository
                </li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-5 shadow-lg rounded-md p-4 w-[450px]">
              <div className="mb-2 opacity-90">Monash Motorsport</div>
              <div className="text-xl font-semibold mb-2 opacity-90">
                Electric Powertrain Engineer
              </div>
              <div className="text-sm mb-5 opacity-70">
                <code>January 2017 - December 2017</code>
              </div>
              <ul className="list-disc text-sm ml-4 space-y-3 marker:text-red-500">
                <li className="opacity-70">
                  Researched Energy Storage Solutions
                </li>
                <li className="opacity-70">
                  Designed Battery Mount/Brace Solution using CAD
                </li>
                <li className="opacity-70">Assembled Wiring Loom</li>
                <li className="opacity-70">Built Airflow Tubing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
