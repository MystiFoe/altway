import type { Metadata } from "next";

import { ClosingPrompt } from "@/components/ClosingPrompt";
import { PageHead } from "@/components/PageHead";
import { Portrait } from "@/components/Portrait";
import { commitments, contact, mentor } from "@/content/site";

export const metadata: Metadata = {
  title: "About Kenith Anthony",
  description:
    "Kenith Anthony works in talent acquisition and runs Alt Way Academy, helping students and early professionals get hired.",
};

export default function AboutPage() {
  return (
    <>
      <PageHead title="Why I started Alt Way Academy" />

      <section className="block" aria-label="A note from Kenith">
        <div className="wrap mentor">
          <Portrait />

          <div className="letter">
            <div className="letter__body">
              {mentor.letter.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <p className="signature" aria-label={`Signed, ${mentor.firstName}`}>
              {mentor.firstName}
            </p>

            <dl className="facts-table">
              <div>
                <dt>Day job</dt>
                <dd>{mentor.dayJob}</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>{contact.city}. Sessions online across India.</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>{mentor.languages}</dd>
              </div>
              <div>
                <dt>Runs every session</dt>
                <dd>Yes. There is no team of junior counsellors.</dd>
              </div>
            </dl>

            <div className="promises">
              <h2 className="subheading">What we will not do</h2>
              <ul className="promises__list">
                {commitments.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ClosingPrompt title="Talk it through with Kenith" />
    </>
  );
}
