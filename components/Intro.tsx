import { intro } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section className="intro" id="intro" aria-label="Introduction">
      <Reveal>
        <p className="intro__text">{intro}</p>
      </Reveal>
    </section>
  );
}
