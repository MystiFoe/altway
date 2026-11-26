import type { Metadata } from "next";
import Link from "next/link";

import { ClosingPrompt } from "@/components/ClosingPrompt";
import { PageHead } from "@/components/PageHead";
import { PriceTabs } from "@/components/PriceTabs";
import { bookingHref, routes, standaloneServices } from "@/content/site";

export const metadata: Metadata = {
  title: "Programmes and prices",
  description:
    "Fixed prices for career counselling, CV rewrites, LinkedIn reviews and mock interviews. Sessions from ₹499.",
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHead
        title="Programmes and prices"
        lead="Every price is fixed. Nothing extra is sold during a session."
      />

      <section className="block" aria-label="Programmes">
        <div className="wrap">
          <PriceTabs />
        </div>
      </section>

      <section className="block block--white" aria-labelledby="extras-title">
        <div className="wrap split">
          <div className="split__aside">
            <h2 id="extras-title" className="heading">
              Just one thing
            </h2>
            <p className="intro">If you only need your CV looked at, or one practice interview, book it on its own.</p>
          </div>
          <div>
            <ul className="extras__list">
              {standaloneServices.map((service) => (
                <li className="extras__item" key={service.name}>
                  <Link href={bookingHref(service.name)} className="extras__link">
                    {service.name}
                  </Link>
                  <span className="extras__price">{service.price}</span>
                </li>
              ))}
            </ul>
            <p className="small-print">
              Payment is by UPI or bank transfer after your time is confirmed. You can reschedule free of charge up to 24
              hours before a session. Colleges and institutes have separate rates, listed on the{" "}
              <Link href={routes.colleges} className="text-link">
                colleges page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <ClosingPrompt />
    </>
  );
}
