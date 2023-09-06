import React from "react";

function About() {
  return (
    <div className="flex justify-center pt-28 lg:py-28">
      <div className="flex w-full max-w-[1600px] px-5 sm:px-20 lg:px-[150px]">
        <div className="flex flex-col max-w-5xl mx-auto w-[1000px]">
          <div className="text-3xl font-semibold mb-3 opacity-90">About Me</div>
          <div className="flex flex-col md:flex-row">
            <div className="space-y-5 text-justify lg:text-start mb-10 lg:mb-0">
              <div className="font-semibold mb-5 text-red-500">
                A Software Engineer based in Melbourne, Australia
              </div>
              <p className="opacity-70">
                {
                  "Hi there! My name is Sanath and I love building websites from scratch (including this one!). Growing up, I've always had an interest for computer programming and mathematics. However my passion for web development really started in 2021 when I got a job as a System's Engineer, and was tasked with building a web application for a client using React JS. At the time, I had never even heard of this library - but as I learnt how to use it I quickly fell in love."
                }
              </p>
              <p className="text-[#BEBEBE]">
                {
                  "Since then, I've gone on to build numerous web apps, from the classic 'To-Do List', to clone builds of popular services from "
                }
                <a
                  className="text-red-500 font-semibold hover:underline"
                  href="https://fakeazon.sanathtech.com/"
                  target="_blank"
                >
                  Amazon
                </a>
                {" to "}
                <a
                  className="text-red-500 font-semibold hover:underline"
                  href="https://fakegpt.sanathtech.com/"
                  target="_blank"
                >
                  ChatGPT
                </a>
                {
                  ". My goal with each build is not just to replicate how the website looks, but to make them responsive and functional as well. Most of my apps are designed to be full-stack, incorporating technologies such as user authentication, databases, and APIs to offer users the full experience."
                }
              </p>
              <p className="opacity-70">
                {"Here are a few technologies I've been working with recently:"}
              </p>
              <div className="flex gap-10 lg:gap-20">
                <ul className="list-disc ml-5 space-y-2 marker:text-red-500">
                  <li>
                    <code className="opacity-70">React</code>
                  </li>
                  <li>
                    <code className="opacity-70">Node.js</code>
                  </li>
                  <li>
                    <code className="opacity-70">Typescript</code>
                  </li>
                </ul>
                <ul className="list-disc ml-5 space-y-2 marker:text-red-500">
                  <li>
                    <code className="opacity-70">Next.js</code>
                  </li>
                  <li>
                    <code className="opacity-70">Tailwind CSS</code>
                  </li>
                  <li>
                    <code className="opacity-70">Firebase</code>
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-md md:ml-8 lg:ml-16 mx-auto">
              <img className="rounded-md" src="Profile.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
