"use client";

import { motion, useReducedMotion } from "framer-motion";
import { approach } from "@/lib/data";
import { Reveal } from "./Reveal";

function ApproachCard({
  item,
  index,
}: {
  item: (typeof approach)[number];
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <Reveal delay={0.08 * index} className="approach-card" blur>
      <motion.div
        className="approach-card__inner"
        whileHover={reduce ? undefined : { y: -4 }}
        transition={{ type: "spring", stiffness: 360, damping: 28 }}
      >
        <p className="approach-card__verb">{item.verb}</p>
        <h3 className="approach-card__title">{item.title}</h3>
        <p className="approach-card__body">{item.body}</p>
      </motion.div>
    </Reveal>
  );
}

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
          <ApproachCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
