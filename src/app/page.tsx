import Link from "next/link";

import { AudienceList } from "@/components/AudienceList";
import { MarkedCv } from "@/components/MarkedCv";
import { MethodSteps } from "@/components/MethodSteps";
import { Portrait } from "@/components/Portrait";
import { bookingHref, hero, mentor, programmeGroups, routes } from "@/content/site";

/** The three most common starting points, pulled from the student price list. */
const startingPoints = ["Discovery session", "Career plan", "Graduate ready"]
  .map((name) => programmeGroups[0]?.programmes.find((p) => p.name === name))
  .filter((p) => p !== undefined);

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero__grid">
          <div>
            <h1 id="hero-title" className="hero__title">
              {hero.title}
            </h1>
            <p className="hero__lead">{hero.lead}</p>
            <div className="hero__actions">
              <Link href={bookingHref("Discovery session")} className="btn btn-primary">
                {hero.primaryCta}
              </Link>
              <Link href={routes.programmes} className="text-link">
                {hero.secondaryCta}
              </Link>
            </div>
            <ul className="hero__facts">
              {hero.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
          <MarkedCv />
        </div>
      </section>

      <section className="block block--white" aria-labelledby="who-title">
        <div className="wrap split">
          <div className="split__aside">
            <h2 id="who-title" className="heading">
              Who comes to us
            </h2>
            <p className="intro">Most people are a few months from a big decision and want someone experienced to check their thinking.</p>
          </div>
          <AudienceList />
        </div>
      </section>

      <section className="block block--tint" aria-labelledby="method-title">
        <div className="wrap">
          <div className="section-intro">
            <h2 id="method-title" className="heading">
              Three stages, in this order
            </h2>
            <p className="intro">Every programme follows the same path. Shorter ones cover the first stage, longer ones all three.</p>
          </div>
          <MethodSteps compact />
          <p className="section-foot">
            <Link href={routes.method} className="text-link">
              How a programme runs, week by week
            </Link>
          </p>
        </div>
      </section>

      <section className="block" aria-labelledby="start-title">
        <div className="wrap">
          <div className="section-intro">
            <h2 id="start-title" className="heading">
              Where most people start
            </h2>
            <p className="intro">Prices are fixed and listed in full. There are no add-ons sold during the session.</p>
          </div>
          <ul className="starts">
            {startingPoints.map((programme) => (
              <li key={programme.name} className={programme.note ? "start start--recommended" : "start"}>
                <span className="start__price">{programme.price}</span>
                <span className="start__name">{programme.name}</span>
                <p className="start__desc">{programme.description}</p>
                {programme.note ? <span className="start__note">{programme.note}</span> : null}
                <Link className="text-link" href={bookingHref(programme.name)}>
                  Book {programme.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="section-foot">
            <Link href={routes.programmes} className="text-link">
              See every programme and price, including options for working professionals
            </Link>
          </p>
        </div>
      </section>

      <section className="block block--white" aria-labelledby="kenith-title">
        <div className="wrap kenith-teaser">
          <Portrait withFacts={false} />
          <div>
            <h2 id="kenith-title" className="visually-hidden">
              About Kenith
            </h2>
            <blockquote className="kenith-teaser__quote">
              Capable people get rejected for reasons that have nothing to do with their ability. Most of those reasons
              are easy to fix.
            </blockquote>
            <p className="kenith-teaser__by">
              {mentor.name}, who works in talent acquisition at Pravaig Dynamics
            </p>
            <p className="section-foot">
              <Link href={routes.about} className="text-link">
                Read why Kenith started Alt Way Academy
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
