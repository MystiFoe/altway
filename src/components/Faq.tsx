import { faqs } from "@/content/site";

import { PlusIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  return (
    <section className="section section--surface" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions we are often asked" align="center" />
        <div className="faq">
          {faqs.map((faq) => (
            <details className="faq__item" key={faq.question}>
              <summary className="faq__question">
                {faq.question}
                <span className="faq__icon" aria-hidden="true">
                  <PlusIcon />
                </span>
              </summary>
              <p className="faq__answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
