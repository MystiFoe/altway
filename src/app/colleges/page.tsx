import type { Metadata } from "next";

import { PageHead } from "@/components/PageHead";
import { collegeProcess, contact, institutionServices } from "@/content/site";

export const metadata: Metadata = {
  title: "For colleges and institutes",
  description:
    "Career workshops, assessment camps and four-week employability programmes for colleges and training institutes.",
};

const enquiry = encodeURIComponent(
  "Hi Kenith, I'm writing from a college or institute and would like to discuss placement preparation for our students.",
);

export default function CollegesPage() {
  return (
    <>
      <PageHead
        title="Placement preparation for whole batches"
        lead="For placement cells that want students ready before recruiters visit. Every programme is planned with your team, and you get a written summary for each student afterwards."
      >
        <div className="hero__actions">
          <a
            className="btn btn-primary"
            href={`https://wa.me/${contact.whatsappNumber}?text=${enquiry}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask for a proposal on WhatsApp
          </a>
          <a className="text-link" href={`tel:${contact.phoneE164}`}>
            Call {contact.phoneDisplay}
          </a>
        </div>
      </PageHead>

      <section className="block" aria-labelledby="rates-title">
        <div className="wrap split">
          <div className="split__aside">
            <h2 id="rates-title" className="heading">
              What we run
            </h2>
            <p className="intro">Starting rates. The final quote depends on batch size, duration and location.</p>
          </div>
          <dl className="rate-card">
            {institutionServices.map((service) => (
              <div className="rate-card__row" key={service.name}>
                <dt className="rate-card__name">{service.name}</dt>
                <dd className="rate-card__price">{service.price}</dd>
                <dd className="rate-card__detail">{service.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="block block--white" aria-labelledby="process-title">
        <div className="wrap split">
          <div className="split__aside">
            <h2 id="process-title" className="heading">
              How it runs
            </h2>
          </div>
          <ol className="next-steps__list next-steps__list--large">
            {collegeProcess.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
