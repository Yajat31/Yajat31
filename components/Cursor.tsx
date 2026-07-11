"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Cursor() {
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine && !reduce);
  }, [reduce]);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const hit = t?.closest("a, button, .work-item, .approach-card");
      setHovering(Boolean(hit));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      className={`cursor-dot${hovering ? " is-hover" : ""}`}
      animate={{
        x: pos.x - (hovering ? 22 : 6),
        y: pos.y - (hovering ? 22 : 6),
        opacity: visible ? 1 : 0,
        scale: hovering ? 1 : 1,
      }}
      transition={{ type: "spring", stiffness: 450, damping: 32, mass: 0.4 }}
      aria-hidden="true"
    />
  );
}
