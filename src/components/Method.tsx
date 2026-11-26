import { method } from "@/content/site";

import { CheckIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function Method() {
  return (
    <section className="section section--surface" id="approach" aria-labelledby="method-title">
      <div className="container">
        <SectionHeading
          id="method-title"
          eyebrow="Our approach"
          title="The ALT Method"
          lead="A simple three-stage process that takes you from uncertainty to interview-ready. Every programme maps to one or more of these stages."
        />
        <ol className="grid-3 method">
          {method.map((stage, index) => (
            <li className="method-card" key={stage.letter}>
              <div className="method-card__top">
                <span className="method-card__letter" aria-hidden="true">
                  {stage.letter}
                </span>
                <span className="method-card__step">Stage {index + 1}</span>
              </div>
              <h3 className="method-card__name">{stage.name}</h3>
              <p className="method-card__summary">{stage.summary}</p>
              <ul className="method-card__list">
                {stage.activities.map((activity) => (
                  <li key={activity}>
                    <CheckIcon />
                    {activity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
