import type { Metadata } from "next";
import Link from "next/link";

import { ClosingPrompt } from "@/components/ClosingPrompt";
import { MethodSteps } from "@/components/MethodSteps";
import { PageHead } from "@/components/PageHead";
import { routes, timeline } from "@/content/site";

export const metadata: Metadata = {
  title: "How it works",
  description: "The ALT method: assess, level up, take off. What happens at each stage and what you leave with.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHead
        title="How it works"
        lead="Every programme follows the same three stages. You can stop after any of them, and you always leave a stage with something written down."
      />

      <section className="block" aria-label="The three stages">
        <div className="wrap">
          <MethodSteps />
        </div>
      </section>

      <section className="block block--white" aria-labelledby="timeline-title">
        <div className="wrap split">
          <div className="split__aside">
            <h2 id="timeline-title" className="heading">
              A typical month
            </h2>
            <p className="intro">
              This is how the Graduate ready programme usually runs. Dates move to fit exams and work, but the order stays
              the same.
            </p>
            <Link href={routes.programmes} className="text-link">
              Compare all programmes
            </Link>
          </div>
          <ol className="timeline">
            {timeline.map((step) => (
              <li className="timeline__row" key={step.title}>
                <span className="timeline__when">{step.when}</span>
                <p className="timeline__what">
                  <strong>{step.title}</strong>
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ClosingPrompt />
    </>
  );
}
