import { contact, institutionServices } from "@/content/site";

import { ArrowRightIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function Colleges() {
  const enquiry = encodeURIComponent(
    "Hello Alt Way Academy, I am writing on behalf of a college or institute and would like to discuss a workshop or partnership.",
  );

  return (
    <section className="section" id="colleges" aria-labelledby="colleges-title">
      <div className="container colleges">
        <div>
          <SectionHeading
            id="colleges-title"
            eyebrow="For colleges and institutes"
            title="Placement readiness for whole batches"
            lead="Placement cells are stretched thin. We run focused workshops, assessment camps and employability programmes that prepare students before recruiters arrive, with clear outcomes your team can measure."
          />
          <div className="colleges__actions">
            <a
              className="btn btn--primary"
              href={`https://wa.me/${contact.whatsappNumber}?text=${enquiry}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Request a proposal
              <ArrowRightIcon />
            </a>
            <a className="btn btn--secondary" href={`tel:${contact.phoneE164}`}>
              Call {contact.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="service-table" role="list" aria-label="Services for institutions">
          {institutionServices.map((service) => (
            <div className="service-row" role="listitem" key={service.name}>
              <span className="service-row__name">{service.name}</span>
              <span className="service-row__price">{service.price}</span>
              <span className="service-row__detail">{service.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
