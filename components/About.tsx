"use client";

import Image from "next/image";
import { about, education } from "@/lib/data";
import { asset } from "@/lib/paths";

export function About() {
  return (
    <section className="section about" id="about" data-fx="about">
      <div className="about__grid">
        <div className="about__media" data-fx="about-media">
          <div className="about__frame">
            <Image
              src={asset("/photo.jpg")}
              alt="Yajat Lakhanpal"
              width={900}
              height={1100}
              className="about__photo"
              priority
              sizes="(max-width: 800px) 90vw, 42vw"
            />
          </div>
        </div>

        <div className="about__copy" data-fx="about-copy">
          <p className="section__label">{about.label}</p>
          <h2 className="section__title">{about.headline}</h2>
          <p className="section__lede">{about.body}</p>
          <p className="about__edu">
            {education.degree}
            <br />
            {education.school} · {education.detail}
          </p>
        </div>
      </div>
    </section>
  );
}
