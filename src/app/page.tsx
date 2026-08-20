import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
