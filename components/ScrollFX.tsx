"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";

export function ScrollFX() {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const hero = document.querySelector<HTMLElement>('[data-fx="hero"]');
      const canvas = document.querySelector<HTMLElement>(".hero__canvas");
      if (hero && canvas) {
        gsap.to(canvas, {
          opacity: 0.15,
          y: 120,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to('[data-fx="hero-title"]', {
          y: -80,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      gsap.fromTo(
        ".intro__text",
        { y: 60, opacity: 0.2 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "#intro",
            start: "top 80%",
            end: "top 35%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".marquee__track",
        { xPercent: 0 },
        {
          xPercent: -8,
          skewX: -2,
          ease: "none",
          scrollTrigger: {
            trigger: ".marquee",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      const aboutMedia = document.querySelector('[data-fx="about-media"]');
      const aboutCopy = document.querySelector('[data-fx="about-copy"]');
      if (aboutMedia && aboutCopy) {
        gsap.fromTo(
          aboutMedia,
          { y: 80 },
          {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: "#about",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
        gsap.fromTo(
          aboutCopy,
          { y: 40, opacity: 0.4 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "#about",
              start: "top 75%",
              end: "top 35%",
              scrub: true,
            },
          }
        );
      }

      gsap.utils.toArray<HTMLElement>(".approach-card").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0, clipPath: "inset(12% 0 0 0)" },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0% 0 0 0)",
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "top 55%",
              scrub: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".work-item").forEach((item) => {
        gsap.fromTo(
          item,
          { x: -24, opacity: 0.25 },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 55%",
              scrub: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".section__label").forEach((label) => {
        gsap.fromTo(
          label,
          { letterSpacing: "0.08em", opacity: 0.3 },
          {
            letterSpacing: "0.28em",
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: label,
              start: "top 90%",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 400);

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(t);
      ctx.revert();
    };
  }, [reduce]);

  return null;
}
