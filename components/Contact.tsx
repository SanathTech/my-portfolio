import React from "react";

function Contact() {
  return (
    <div className="flex justify-center pt-28 pb-56">
      <div className="flex w-full max-w-[1600px] px-[150px]">
        <div className="flex flex-col items-center max-w-5xl mx-auto justify-center min-h-full w-[1000px]">
          <div className="mb-6 tracking-wide text-lg text-red-500">
            <code className="bg-transparent border-none text-red-500">
              Want to work together?
            </code>
          </div>
          <div className="text-5xl font-semibold -ml-1 mb-6 opacity-90">
            Get In Touch
          </div>
          <div className="max-w-xl mb-14 opacity-70 text-center">
            {
              "I'm currently looking for work as a full-stack developer. If you like my work and think I'll be a great fit for your team, please don't hesitate to reach out!"
            }
          </div>
          <button className="border-red-500 text-red-500 border-[1.5px] px-6 py-4 rounded-md">
            <code className="bg-transparent border-none text-red-500">
              Contact Me
            </code>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
