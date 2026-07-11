"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Cursor() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const [, bump] = useState(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine && !reduce);
  }, [reduce]);

  useEffect(() => {
    if (!enabled) return;

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.22;
      pos.current.y += (target.current.y - pos.current.y) * 0.22;
      bump((n) => n + 1);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    const move = (e: MouseEvent) => {
      let x = e.clientX;
      let y = e.clientY;
      const el = (e.target as HTMLElement | null)?.closest(
        "a, button, .work-item, .approach-card, .about__frame"
      ) as HTMLElement | null;
      if (el) {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        x += (cx - x) * 0.18;
        y += (cy - y) * 0.18;
        setHovering(true);
      } else {
        setHovering(false);
      }
      target.current = { x, y };
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [enabled]);

  if (!enabled) return null;

  const size = hovering ? 44 : 12;
  const offset = size / 2;

  return (
    <motion.div
      className={`cursor-dot${hovering ? " is-hover" : ""}`}
      style={{
        x: pos.current.x - offset,
        y: pos.current.y - offset,
        opacity: visible ? 1 : 0,
      }}
      aria-hidden="true"
    />
  );
}
