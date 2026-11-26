import { principles } from "@/content/site";

import { SectionHeading } from "./SectionHeading";

export function Principles() {
  return (
    <section className="section section--muted" aria-labelledby="principles-title">
      <div className="container">
        <SectionHeading
          id="principles-title"
          eyebrow="Why Alt Way"
          title="Practical guidance, honestly delivered"
          lead="Free advice online is generic and large platforms are impersonal. We sit in between: personal, practical and affordable."
        />
        <div className="grid-2">
          {principles.map((principle, index) => (
            <article className="principle" key={principle.title}>
              <span className="principle__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="principle__title">{principle.title}</h3>
                <p className="principle__body">{principle.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
