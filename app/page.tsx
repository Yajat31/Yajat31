import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Marquee />
      <About />
      <Approach />
      <Work />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
