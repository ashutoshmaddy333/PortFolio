import { CustomCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
