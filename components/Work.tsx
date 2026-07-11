import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section className="section" id="work">
      <Reveal>
        <p className="section__label">Selected projects</p>
        <h2 className="section__title">Work</h2>
        <p className="section__lede">
          Systems I have designed, built, and stress-tested — correctness under
          chaos, performance under load.
        </p>
      </Reveal>

      <div className="work-list">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={0.06 * i} className="work-item">
            <div>
              <h3 className="work-item__title">{project.title}</h3>
              <div className="work-item__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="work-item__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="work-item__body">{project.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
