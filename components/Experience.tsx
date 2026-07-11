import { experience } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section className="section" id="experience">
      <Reveal>
        <p className="section__label">Experience</p>
        <h2 className="section__title">Where I&apos;ve been</h2>
        <p className="section__lede">
          Research labs, production internships, and teaching at scale.
        </p>
      </Reveal>

      <div className="exp-list">
        {experience.map((job, i) => (
          <Reveal key={job.role} delay={0.05 * i} className="exp-item">
            <div className="exp-item__meta">
              <h3 className="exp-item__role">{job.role}</h3>
              <span className="exp-item__period">{job.period}</span>
            </div>
            <p className="exp-item__org">{job.org}</p>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
