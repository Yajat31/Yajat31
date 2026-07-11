"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function Preloader({ onDone }: { onDone?: () => void }) {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  const label = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  }).toUpperCase();

  useEffect(() => {
    if (reduce) {
      setShow(false);
      onDone?.();
      return;
    }
    const t = window.setTimeout(() => {
      setShow(false);
      onDone?.();
    }, 1600);
    return () => window.clearTimeout(t);
  }, [reduce, onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <motion.span
            className="preloader__text"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.28em" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {label}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
