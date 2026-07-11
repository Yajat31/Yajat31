import { approach } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Approach() {
  return (
    <section className="section" id="approach">
      <Reveal>
        <p className="section__label">How I work</p>
        <h2 className="section__title">Approach</h2>
        <p className="section__lede">
          Four lenses I carry into every project — from classroom systems to
          production backends and research prototypes.
        </p>
      </Reveal>

      <div className="approach-grid">
        {approach.map((item, i) => (
          <Reveal key={item.title} delay={0.08 * i} className="approach-card">
            <p className="approach-card__verb">{item.verb}</p>
            <h3 className="approach-card__title">{item.title}</h3>
            <p className="approach-card__body">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
