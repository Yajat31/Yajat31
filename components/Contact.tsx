import { site } from "@/lib/data";
import { Reveal } from "./Reveal";

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
          <a className="contact__link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="contact__link" href={site.phoneHref}>
            {site.phone}
          </a>
          <a
            className="contact__link"
            href={site.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="contact__link"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="footer-note">
          {site.name} · {site.location}
        </p>
      </Reveal>
    </section>
  );
}
