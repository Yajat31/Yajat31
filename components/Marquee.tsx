"use client";

import { site } from "@/lib/data";

const items = [
  site.motto,
  "Distributed Systems",
  "Backend Engineering",
  "Applied Research",
  site.motto,
  "Distributed Systems",
  "Backend Engineering",
  "Applied Research",
];

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__chunk">
            <span className="marquee__item">{item}</span>
            <span className="marquee__sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
