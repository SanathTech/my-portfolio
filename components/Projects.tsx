import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOut } from "react-icons/pi";

function Projects() {
  return (
    <div className="flex justify-center py-28">
      <div className="flex w-full max-w-[1600px] px-[150px] justify-center">
        <div className="flex flex-col max-w-5xl mx-auto w-[1000px]">
          <div className="text-3xl font-semibold mb-10 opacity-90">
            Portfolio
          </div>
          <div className="space-y-12">
            <div className="flex bg-white bg-opacity-5 shadow-lg p-5 rounded-lg w-full">
              <div className="w-[500px] mr-10">
                <img
                  className="rounded-lg shadow-lg border-black border-[1px]"
                  src="LeetCode.png"
                  alt="leet-code-clone"
                />
              </div>
              <div className="flex flex-1 flex-col text-end items-end justify-center pr-4">
                <div className="text-2xl font-semibold mb-4 opacity-90">
                  LeetCode Clone
                </div>
                <p className="mb-5 opacity-70">
                  A platform to help you improve your programming skills and
                  prepare for technical interviews by solving coding problems.
                </p>
                <div className="flex whitespace-nowrap flex-wrap justify-end gap-2 text-sm mb-6 opacity-70">
                  <code>Next.js</code>
                  <code>Typescript</code>
                  <code>Tailwind CSS</code>
                  <code>Firebase</code>
                  <code>CodeMirror</code>
                </div>
                <div className="flex gap-4 items-center">
                  <a
                    href="https://github.com/SanathTech/leetcode-clone"
                    target="_blank"
                  >
                    <FiGithub size="22px" />
                  </a>
                  <a
                    href="https://leetcloned.sanathtech.com/"
                    target="_blank"
                    className="pb-[2px]"
                  >
                    <PiArrowSquareOut size="26px" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex bg-white bg-opacity-5 shadow-lg p-5 rounded-lg w-full">
              <div className="flex flex-1 flex-col justify-center pl-4">
                <div className="text-2xl font-semibold mb-4 opacity-90">
                  ChatGPT Clone
                </div>
                <p className="mb-5 opacity-70">
                  An AI chatbot that uses natural language processing to create
                  humanlike conversational dialogue.
                </p>
                <div className="flex whitespace-nowrap flex-wrap gap-2 text-sm mb-6 opacity-70">
                  <code>Next.js</code>
                  <code>Typescript</code>
                  <code>Tailwind CSS</code>
                  <code>Firebase</code>
                  <code>ChatGPT API</code>
                </div>
                <div className="flex gap-4 items-center">
                  <a
                    href="https://github.com/SanathTech/chatgpt-clone"
                    target="_blank"
                  >
                    <FiGithub size="22px" />
                  </a>
                  <a
                    href="https://fakegpt.sanathtech.com/"
                    target="_blank"
                    className="pb-[2px]"
                  >
                    <PiArrowSquareOut size="26px" />
                  </a>
                </div>
              </div>
              <div className="w-[500px] ml-10">
                <img
                  className="rounded-lg shadow-lg border-black border-[1px]"
                  src="ChatGPT.png"
                  alt="leet-code-clone"
                />
              </div>
            </div>
            <div className="flex bg-white bg-opacity-5 shadow-lg p-5 rounded-lg w-full">
              <div className="w-[500px] mr-10">
                <img
                  className="rounded-lg shadow-lg border-black border-[1px]"
                  src="Amazon.png"
                  alt="leet-code-clone"
                />
              </div>
              <div className="flex flex-1 flex-col text-end items-end justify-center pr-4">
                <div className="text-2xl font-semibold mb-4 opacity-90">
                  Amazon Clone
                </div>
                <p className="mb-5 opacity-70">
                  An ecommerce store where you can buy everything from A to Z,
                  including secure checkout powered by Stripe.
                </p>
                <div className="flex whitespace-nowrap flex-wrap justify-end gap-2 text-sm mb-6 opacity-70">
                  <code>Next.js</code>
                  <code>Tailwind CSS</code>
                  <code>Firebase</code>
                  <code>Redux</code>
                  <code>Stripe API</code>
                </div>
                <div className="flex gap-4 items-center">
                  <a
                    href="https://github.com/SanathTech/amazon-clone"
                    target="_blank"
                  >
                    <FiGithub size="22px" />
                  </a>
                  <a
                    href="https://fakeazon.sanathtech.com/"
                    target="_blank"
                    className="pb-[2px]"
                  >
                    <PiArrowSquareOut size="26px" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex bg-white bg-opacity-5 shadow-lg p-5 rounded-lg w-full">
              <div className="flex flex-1 flex-col justify-center pl-4">
                <div className="text-2xl font-semibold mb-4 opacity-90">
                  Airbnb Clone
                </div>
                <p className="mb-5 opacity-70">
                  An online marketplace that connects people who want to rent
                  out their homes with people who are looking for a place to
                  stay.
                </p>
                <div className="flex whitespace-nowrap flex-wrap gap-2 text-sm mb-6 opacity-70">
                  <code>Next.js</code>
                  <code>Tailwind CSS</code>
                  <code>Firebase</code>
                  <code>Mapbox API</code>
                </div>
                <div className="flex gap-4 items-center">
                  <a
                    href="https://github.com/SanathTech/airbnb-clone"
                    target="_blank"
                  >
                    <FiGithub size="22px" />
                  </a>
                  <a
                    href="https://fakebnb.sanathtech.com/"
                    target="_blank"
                    className="pb-[2px]"
                  >
                    <PiArrowSquareOut size="26px" />
                  </a>
                </div>
              </div>
              <div className="w-[500px] ml-10">
                <img
                  className="rounded-lg shadow-lg border-black border-[1px]"
                  src="Airbnb2.png"
                  alt="leet-code-clone"
                />
              </div>
            </div>
            <div className="flex bg-white bg-opacity-5 shadow-lg p-5 rounded-lg w-full">
              <div className="w-[500px] mr-10">
                <img
                  className="rounded-lg shadow-lg border-black border-[1px]"
                  src="Ebay.png"
                  alt="leet-code-clone"
                />
              </div>
              <div className="flex flex-1 flex-col text-end items-end justify-center pr-4">
                <div className="text-2xl font-semibold mb-4 opacity-90">
                  Ebay Clone
                </div>
                <p className="mb-5 opacity-70">
                  An ecommerce marketplace where you can buy, sell and auction
                  items.
                </p>
                <div className="flex whitespace-nowrap flex-wrap justify-end gap-2 text-sm mb-6 opacity-70">
                  <code>Next.js</code>
                  <code>Tailwind CSS</code>
                  <code>Firebase</code>
                </div>
                <div className="flex gap-4 items-center">
                  <a
                    href="https://github.com/SanathTech/ebay-clone"
                    target="_blank"
                  >
                    <FiGithub size="22px" />
                  </a>
                  <a
                    href="https://fakebay.sanathtech.com/"
                    target="_blank"
                    className="pb-[2px]"
                  >
                    <PiArrowSquareOut size="26px" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
