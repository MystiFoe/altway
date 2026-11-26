import Link from "next/link";

import { bookingHref, contact } from "@/content/site";

interface ClosingPromptProps {
  title?: string;
  body?: string;
}

/** Short call to action at the end of inner pages. */
export function ClosingPrompt({
  title = "Not sure where to start?",
  body = "Book the ₹499 Discovery session. It is 30 minutes, and you will come out knowing what to do next.",
}: ClosingPromptProps) {
  return (
    <section className="block block--tint" aria-label="Book a session">
      <div className="wrap closing">
        <div className="closing__text">
          <h2 className="subheading">{title}</h2>
          <p className="intro">{body}</p>
        </div>
        <div className="closing__actions">
          <Link href={bookingHref("Discovery session")} className="btn btn-primary">
            Book a Discovery session
          </Link>
          <a className="text-link" href={`tel:${contact.phoneE164}`}>
            Or call {contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
