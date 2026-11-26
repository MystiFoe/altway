import type { ComponentType, SVGProps } from "react";

import { audiences } from "@/content/site";

import { BookIcon, BriefcaseIcon, BuildingIcon, GraduateIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

const audienceIcons: ComponentType<SVGProps<SVGSVGElement>>[] = [GraduateIcon, BookIcon, BriefcaseIcon, BuildingIcon];

export function Audiences() {
  return (
    <section className="section" aria-labelledby="audiences-title">
      <div className="container">
        <SectionHeading
          id="audiences-title"
          eyebrow="Who we help"
          title="Guidance for every stage of the career journey"
          lead="Whether you are choosing a stream, finishing a degree or planning your next role, the support is shaped around where you are today."
        />
        <div className="grid-4">
          {audiences.map((audience, index) => {
            const Icon = audienceIcons[index] ?? GraduateIcon;
            return (
              <article className="card audience-card" key={audience.title}>
                <span className="audience-card__icon">
                  <Icon />
                </span>
                <h3 className="audience-card__title">{audience.title}</h3>
                <span className="audience-card__who">{audience.who}</span>
                <p className="audience-card__need">{audience.need}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
