import type { Metadata } from "next";

import { BookingForm } from "@/components/BookingForm";
import { PageHead } from "@/components/PageHead";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Book a session",
  description: "Send a booking request to Alt Way Academy on WhatsApp. Kenith replies with available times.",
};

export default function BookPage() {
  return (
    <>
      <PageHead
        title="Book a session"
        lead="Fill this in and your request opens in WhatsApp, ready to send. Not sure what to book? Leave it on “Not sure yet”."
      />

      <section className="block" aria-label="Booking form">
        <div className="wrap booking">
          <BookingForm />

          <aside className="booking__side" aria-label="Other ways to reach us">
            <dl className="contact-list">
              <div>
                <dt>Phone or WhatsApp</dt>
                <dd>
                  <a href={`tel:${contact.phoneE164}`}>{contact.phoneDisplay}</a>
                </dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>{contact.hours}</dd>
              </div>
              <div>
                <dt>Where</dt>
                <dd>Google Meet, or in person in {contact.city}</dd>
              </div>
            </dl>

            <div className="next-steps">
              <h2 className="next-steps__title">
                What happens next
              </h2>
              <ol className="next-steps__list">
                <li>You send the WhatsApp message.</li>
                <li>Kenith replies with a few time slots, usually within a working day.</li>
                <li>You confirm a time and pay by UPI.</li>
                <li>You get a Google Meet link and, if needed, the assessment link.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
