"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/data";

const sections = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "approach", label: "Approach" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Frame() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <aside className="rail rail--left" aria-hidden="true">
        <div className="rail__inner">
          <div className="rail__dots">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`rail__dot${active === s.id ? " is-active" : ""}`}
                aria-label={s.label}
                onClick={() => go(s.id)}
              />
            ))}
          </div>
          <span className="rail__brand">{site.shortName}</span>
        </div>
      </aside>

      <aside className="rail rail--right">
        <div className="rail__inner">
          <nav className="rail__links" aria-label="Side links">
            <a className="rail__link" href="#contact">
              Contact
            </a>
            <a
              className="rail__link"
              href={site.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rail__link"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </aside>

      <div className="topbar">
        <button
          type="button"
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="overlay-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <button
              type="button"
              className="overlay-nav__close"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
            <ul className="overlay-nav__list">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <motion.a
                    href={`#${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(s.id);
                    }}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.06 * i,
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ x: 8, opacity: 0.65 }}
                  >
                    {s.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
