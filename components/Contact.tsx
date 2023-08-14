import React from "react";

function Contact() {
  return (
    <div className="flex justify-center pt-28 pb-56">
      <div className="flex w-full max-w-[1600px] px-5 sm:px-20 lg:px-[150px]">
        <div className="flex flex-col items-center max-w-5xl mx-auto justify-center min-h-full w-[1000px]">
          <div className="mb-6 tracking-wide text-lg text-red-500">
            <code className="bg-transparent border-none text-red-500">
              Like my work?
            </code>
          </div>
          <div className="text-5xl font-semibold -ml-1 mb-6 opacity-90">
            Get In Touch
          </div>
          <div className="max-w-xl mb-10 lg:mb-14 opacity-70 text-center">
            {
              "I'm currently open to work as a Full-Stack Developer. If you think I'll be a great fit for your team, please don't hesitate to reach out!"
            }
          </div>
          <a href="mailto:sanathpun96@gmail.com" className="button group">
            <code className="button-code">Contact Me</code>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
