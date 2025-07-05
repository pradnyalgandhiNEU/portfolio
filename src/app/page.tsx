import About from "@/component/About";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import Projects from "@/component/Projects";
import SkillsSection from "@/component/SkillsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-scroll">
      <div className="fixed inset-0 -z-10 bg-[#070707] bg-[radial-gradient(#444cf7_0.5px,_transparent_0.5px)] bg-[length:10px_10px]" />

      <section className="relative z-10 text-white  items-center justify-center h-screen overflow-y-scroll">
        <Navbar />
        <Hero />
        <About />
        <SkillsSection />
        <Projects />
        <Footer />
      </section>
    </main>
  );
}
