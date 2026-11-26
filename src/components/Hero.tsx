import { brand, heroPoints, mentor, method } from "@/content/site";

import { ArrowRightIcon, CheckIcon } from "./icons";

const stepStates = [
  { state: "done", meta: "Strengths and gaps mapped", label: "Completed" },
  { state: "active", meta: "CV rebuilt, skills plan in progress", label: "In progress" },
  { state: "upcoming", meta: "Mock interviews scheduled", label: "Next" },
] as const;

function RoadmapPreview() {
  return (
    <div className="roadmap-card" aria-label="Example of a career roadmap" role="img">
      <div className="roadmap-card__head">
        <div>
          <div className="roadmap-card__label">Sample roadmap</div>
          <div className="roadmap-card__title">B.Com graduate to Business Analyst</div>
        </div>
        <span className="status-chip">On track</span>
      </div>

      <ol className="roadmap-steps">
        {method.map((stage, index) => {
          const step = stepStates[index] ?? stepStates[2];
          return (
            <li
              key={stage.letter}
              className={`roadmap-step${step.state === "done" ? " roadmap-step--done" : ""}${
                step.state === "active" ? " roadmap-step--active" : ""
              }`}
            >
              <span className="roadmap-step__letter">{stage.letter}</span>
              <span>
                <span className="roadmap-step__name">{stage.name}</span>
                <span className="roadmap-step__meta" style={{ display: "block" }}>
                  {step.meta}
                </span>
              </span>
              <span className="roadmap-step__state">{step.label}</span>
            </li>
          );
        })}
      </ol>

      <div className="roadmap-card__foot">
        <span className="avatar avatar--sm">{mentor.initials}</span>
        <p className="roadmap-card__foot-text">
          <strong>Next session with {mentor.name.split(" ")[0]}</strong>
          Mock interview and written feedback
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div>
          <span className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Career counselling in Bengaluru and online
          </span>
          <h1 id="hero-title" className="hero__title">
            The right career starts with <em>the right direction.</em>
          </h1>
          <p className="hero__lead">
            {brand.tagline} We help students and early-career professionals understand their strengths, choose a path
            that fits, and get hired with a stronger CV, real interview practice and a clear skills plan.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#book">
              Book a Discovery session
              <ArrowRightIcon />
            </a>
            <a className="btn btn--secondary" href="#programmes">
              View programmes
            </a>
          </div>
          <ul className="hero__points">
            {heroPoints.map((point) => (
              <li key={point}>
                <CheckIcon />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <RoadmapPreview />
      </div>
    </section>
  );
}
