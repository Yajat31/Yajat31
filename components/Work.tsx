"use client";

import { motion } from "framer-motion";
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
          <Reveal key={project.title} delay={0.06 * i}>
            <motion.a
              href={project.href}
              className="work-item"
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
            >
              <div>
                <div className="work-item__topline">
                  <span className="work-item__index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="work-item__cta">
                    View on GitHub
                    <span className="work-item__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </span>
                </div>
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
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
