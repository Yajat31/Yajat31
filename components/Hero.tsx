"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/data";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <header className="hero" id="top">
      <div className="hero__crystal hero__crystal--a" aria-hidden="true" />
      <div className="hero__crystal hero__crystal--b" aria-hidden="true" />

      <motion.h1
        className="hero__name"
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        {site.name}
      </motion.h1>

      <motion.p
        className="hero__sub"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
      >
        {site.tagline}
      </motion.p>

      <motion.a
        href="#intro"
        className="hero__scroll"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.75 }}
      >
        Scroll to enter
      </motion.a>
    </header>
  );
}
