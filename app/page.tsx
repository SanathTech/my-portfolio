import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-[#242424] text-white">
      {/* Navbar */}
      <div className="sticky top-0 w-full z-10">
        <Navbar />
      </div>
      {/* Header */}
      <div className="relative -top-[90.67px]">
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
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </main>
  );
}
