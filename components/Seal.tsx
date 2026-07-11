"use client";

import { useReducedMotion } from "framer-motion";

const TEXT = "YAJAT · SYSTEMS · BACKEND · RESEARCH · ";

export function Seal() {
  const reduce = useReducedMotion();

  return (
    <div
      className={`seal${reduce ? " is-static" : ""}`}
      aria-hidden="true"
      data-fx="seal"
    >
      <svg viewBox="0 0 200 200" className="seal__svg">
        <defs>
          <path
            id="seal-circle"
            d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
          />
        </defs>
        <text className="seal__text">
          <textPath href="#seal-circle" startOffset="0%">
            {TEXT.repeat(2)}
          </textPath>
        </text>
      </svg>
      <span className="seal__core">YL</span>
    </div>
  );
}
