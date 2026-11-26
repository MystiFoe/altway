"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";

import { programmeGroups, standaloneServices, type Programme } from "@/content/site";
import { selectInterest } from "@/lib/events";

import { CheckIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

function ProgrammeCard({ programme }: { programme: Programme }) {
  const featured = programme.highlight === "Flagship";
  const isRange = programme.price.includes(" to ");
  return (
    <article className={featured ? "programme-card programme-card--featured" : "programme-card"}>
      {programme.highlight ? (
        <span className={featured ? "programme-card__tag" : "programme-card__tag programme-card__tag--soft"}>
          {programme.highlight}
        </span>
      ) : null}
      <h3 className="programme-card__name">{programme.name}</h3>
      <p className="programme-card__desc">{programme.description}</p>
      <p className={isRange ? "programme-card__price programme-card__price--range" : "programme-card__price"}>
        {programme.price}
      </p>
      <ul className="programme-card__list">
        {programme.includes.map((item) => (
          <li key={item}>
            <CheckIcon />
            {item}
          </li>
        ))}
      </ul>
      <a
        className={featured ? "btn btn--primary btn--block" : "btn btn--secondary btn--block"}
        href="#book"
        onClick={() => selectInterest(programme.name)}
      >
        Choose {programme.name}
      </a>
    </article>
  );
}

export function Programmes() {
  const [activeId, setActiveId] = useState(programmeGroups[0]?.id ?? "");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();
  const active = programmeGroups.find((group) => group.id === activeId) ?? programmeGroups[0];

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    const next = (index + delta + programmeGroups.length) % programmeGroups.length;
    const group = programmeGroups[next];
    if (group) {
      setActiveId(group.id);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section className="section" id="programmes" aria-labelledby="programmes-title">
      <div className="container">
        <SectionHeading
          id="programmes-title"
          eyebrow="Programmes and pricing"
          title="Clear packages, transparent prices"
          lead="Start with a short session, or choose a complete programme. Every package includes personal attention from your mentor."
        />

        <div className="tabs" role="tablist" aria-label="Programme categories">
          {programmeGroups.map((group, index) => (
            <button
              key={group.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${group.id}`}
              aria-selected={group.id === active?.id}
              aria-controls={`${baseId}-panel`}
              tabIndex={group.id === active?.id ? 0 : -1}
              className="tabs__button"
              onClick={() => setActiveId(group.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {group.label}
            </button>
          ))}
        </div>

        {active ? (
          <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${active.id}`}>
            <p className="programmes-intro">{active.intro}</p>
            <div className="programme-grid">
              {active.programmes.map((programme) => (
                <ProgrammeCard key={programme.name} programme={programme} />
              ))}
            </div>
          </div>
        ) : null}

        <div className="standalone">
          <div className="standalone__head">
            <div>
              <h3 className="standalone__title">Individual services</h3>
              <p className="standalone__note">Need just one thing fixed? Book any of these on its own.</p>
            </div>
            <a className="btn btn--secondary" href="#book">
              Book a service
            </a>
          </div>
          <ul className="standalone__list">
            {standaloneServices.map((service) => (
              <li className="standalone__item" key={service.name}>
                <span>{service.name}</span>
                <span className="standalone__price">{service.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
