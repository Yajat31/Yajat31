"use client";

import { intro } from "@/lib/data";

export function Intro() {
  return (
    <section className="intro" id="intro" aria-label="Introduction" data-fx="intro">
      <p className="intro__text">{intro}</p>
    </section>
  );
}
