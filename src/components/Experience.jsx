import React from "react";
import { experience, sections } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="experience p-6">
      <div className="wrap ">
        <div className="reveal flex flex-col gap-3">
          <div className="text-primary font-semibold font-heading tracking-wider">
            {sections.experience.eyebrow}
          </div>
          <h2 className="font-bold text-3xl tracking-wide text-ink">
            {sections.experience.title}
          </h2>
        </div>
      <ol className="relative mt-14 max-w-205 before:absolute before:top-2 before:bottom-2 before:left-2.75 before:w-0.5 before:bg-line">
      {experience.map((item) => (
        <li
          key={item.id}
          className="relative grid gap-1 pb-10 pl-12 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6
                     before:absolute  before:top-0.75 before:left-1 before:size-4 before:rounded-full
                     before:border-[3px] before:border-primary before:bg-background"
        >
          <div className="font-heading text-sm font-semibold leading-relaxed text-muted">
            {item.when}
          </div>

          <div>
            <span className="tag text-muted mb-2.5 inline-block">{item.type}</span>
            <h3 className="font-heading text-xl text-ink font-semibold leading-snug tracking-tight">
              {item.title}
            </h3>
            <p className="mt-1.5 text-muted">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
      </div>

    </section>
  );
}
