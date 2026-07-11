"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function LenisGsapBridge() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
  }, []);

  useLenis(() => {
    ScrollTrigger.update();
  });

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.075,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      <LenisGsapBridge />
      {children}
    </ReactLenis>
  );
}
