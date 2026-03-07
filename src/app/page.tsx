import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Lab from "@/components/Lab/Lab";
import Timeline from "@/components/Timeline/Timeline";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <Navbar />
      
      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      
      {/* Visual Break / Divider */}
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <Projects />
      <Lab />
      
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <Timeline />
      <Contact />

      {/* Footer */}
      <footer className="w-full border-t border-white/5 py-8 text-center text-white/40 text-sm font-mono mt-20 relative z-10 glass-card rounded-t-[3rem] max-w-7xl mx-auto">
        <p>© 2026 GVK</p>
        <p className="mt-1">Built with Next.js & Tailwind</p>
      </footer>
    </main>
  );
}
