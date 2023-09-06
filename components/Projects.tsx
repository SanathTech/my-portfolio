import Project from "./Project";

function Projects() {
  return (
    <div className="flex justify-center pt-28 lg:py-28">
      <div className="flex w-full max-w-[1600px] px-5 sm:px-20 lg:px-[150px] justify-center">
        <div className="flex flex-col max-w-5xl mx-auto w-[1000px]">
          <div className="text-3xl font-semibold mb-10 opacity-90">
            Portfolio
          </div>
          <div className="space-y-12">
            <Project
              title="AI Companion"
              description="An AI chat site, where you can create and talk to virtual characters."
              stack={[
                "Next.js",
                "Typescript",
                "Tailwind CSS",
                "Open AI",
                "Langchain",
                "Replicate",
                "Prisma",
                "Upstash",
                "Redis",
                "Clerk",
                "shadcn/ui",
                "Stripe",
              ]}
              github="ai-companion"
              website="ai-companion"
              image="AiCompanion.png"
            />
            <Project
              title="LeetCode Clone"
              description="A platform to help you improve your programming skills and prepare for technical interviews by solving coding problems."
              stack={[
                "Next.js",
                "Typescript",
                "Tailwind CSS",
                "Firebase",
                "CodeMirror",
              ]}
              github="leetcode-clone"
              website="leetcloned"
              image="LeetCode.png"
            />
            <Project
              title="ChatGPT Clone"
              description="An AI chatbot that uses natural language processing to create humanlike conversational dialogue."
              stack={[
                "Next.js",
                "Typescript",
                "Tailwind CSS",
                "Firebase",
                "ChatGPT API",
              ]}
              github="chatgpt-clone"
              website="fakegpt"
              image="ChatGPT.png"
            />
            <Project
              title="Amazon Clone"
              description="An ecommerce store where you can buy everything from A to Z, including secure checkout powered by Stripe."
              stack={[
                "Next.js",
                "Tailwind CSS",
                "Firebase",
                "Redux",
                "Stripe API",
              ]}
              github="amazon-clone"
              website="fakeazon"
              image="Amazon.png"
            />
            <Project
              title="Airbnb Clone"
              description="An online marketplace that connects people who want to rent out their homes with people who are looking for a place to stay."
              stack={["Next.js", "Tailwind CSS", "Firebase", "Mapbox API"]}
              github="airbnb-clone"
              website="fakebnb"
              image="Airbnb2.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
