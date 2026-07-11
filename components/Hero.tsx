"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/data";

const HeroScene = dynamic(
  () => import("./HeroScene").then((m) => m.HeroScene),
  { ssr: false }
);

export function Hero() {
  const reduce = useReducedMotion();
  const words = site.name.split(" ");

  return (
    <header className="hero" id="top" data-fx="hero">
      <HeroScene />

      <h1 className="hero__name" data-fx="hero-title">
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
                  delay: 0.55 + wi * 0.18 + ci * 0.035,
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
        transition={{ duration: 0.8, delay: 1.25 }}
      >
        {site.tagline}
      </motion.p>

      <motion.a
        href="#intro"
        className="hero__scroll"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.55 }}
        whileHover={reduce ? undefined : { y: -3 }}
      >
        Scroll to enter
      </motion.a>
    </header>
  );
}
