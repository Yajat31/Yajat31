"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/data";

export function Hero() {
  const reduce = useReducedMotion();
  const words = site.name.split(" ");

  return (
    <header className="hero" id="top">
      <motion.div
        className="hero__crystal hero__crystal--a"
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : { y: [0, -22, 0], rotate: [-18, -10, -18], scale: [1, 1.04, 1] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero__crystal hero__crystal--b"
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : { y: [0, 18, 0], rotate: [12, 20, 12], scale: [1, 1.06, 1] }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />

      <h1 className="hero__name">
        {words.map((word, wi) => (
          <span key={word} className="hero__word">
            {word.split("").map((ch, ci) => (
              <motion.span
                key={`${word}-${ci}`}
                className="hero__char"
                initial={reduce ? false : { opacity: 0, y: "0.6em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.35 + wi * 0.18 + ci * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {ch}
              </motion.span>
            ))}
            {wi < words.length - 1 ? "\u00A0" : null}
          </span>
        ))}
      </h1>

      <motion.p
        className="hero__sub"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.05 }}
      >
        {site.tagline}
      </motion.p>

      <motion.a
        href="#intro"
        className="hero__scroll"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.35 }}
        whileHover={reduce ? undefined : { y: -3 }}
      >
        Scroll to enter
      </motion.a>
    </header>
  );
}
