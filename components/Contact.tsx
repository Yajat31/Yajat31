"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/data";
import { Reveal } from "./Reveal";

const links = [
  { label: site.email, href: `mailto:${site.email}` },
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
];

export function Contact() {
  return (
    <section className="contact" id="contact">
      <Reveal>
        <p className="section__label">Contact</p>
        <h2 className="section__title">Let&apos;s talk</h2>
        <p className="section__lede" style={{ margin: "0 auto" }}>
          Open to research collaborations, systems work, and interesting
          backend problems.
        </p>

        <div className="contact__links">
          {links.map((link) => (
            <motion.a
              key={link.label}
              className="contact__link"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <p className="footer-note">
          {site.name} · {site.location}
        </p>
      </Reveal>
    </section>
  );
}
