import { skills } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section className="section" id="skills">
      <Reveal>
        <p className="section__label">Toolkit</p>
        <h2 className="section__title">Skills</h2>
      </Reveal>

      <div className="skills-grid">
        {Object.entries(skills).map(([label, items], i) => (
          <Reveal key={label} delay={0.05 * i} className="skills-block">
            <p className="skills-block__label">{label}</p>
            <div className="skills-block__items">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
