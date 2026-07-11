import { about, education } from "@/lib/data";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="section" id="about">
      <Reveal>
        <p className="section__label">{about.label}</p>
        <h2 className="section__title">{about.headline}</h2>
        <p className="section__lede">{about.body}</p>
        <p className="section__lede" style={{ marginTop: "1.25rem" }}>
          {education.degree} · {education.school} · {education.detail}
        </p>
      </Reveal>
    </section>
  );
}
