"use client";

import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Preloader } from "@/components/Preloader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Cursor } from "@/components/Cursor";
import { Seal } from "@/components/Seal";
import { ScrollFX } from "@/components/ScrollFX";

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Cursor />
      <Seal />
      <ScrollFX />
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
    </>
  );
}
