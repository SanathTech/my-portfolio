import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-[#242424] text-white">
      {/* Navbar */}
      <div className="absolute w-full">
        <Navbar />
      </div>
      {/* Header */}
      <div>
        <Header />
      </div>
      {/* About */}
      <div id="about">
        <About />
      </div>
      {/* Experience */}
      <div id="experience">
        <Experience />
      </div>
      {/* Projects */}
      <div id="projects">
        <Projects />
      </div>
      {/* Contact */}
      <div id="contact">
        <Contact />
      </div>
      {/* Resume */}
    </main>
  );
}
