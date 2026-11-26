import type { Metadata } from "next";

import { ClosingPrompt } from "@/components/ClosingPrompt";
import { FaqList } from "@/components/FaqList";
import { PageHead } from "@/components/PageHead";
import { contact, faqs } from "@/content/site";

export const metadata: Metadata = {
  title: "Questions",
  description: "Answers about sessions, payment, timings and what Alt Way Academy does and does not offer.",
};

export default function FaqPage() {
  return (
    <>
      <PageHead
        title="Questions people ask before booking"
        lead={
          <>
            If yours is not here, send it on WhatsApp or call {contact.phoneDisplay}.
          </>
        }
      />

      <section className="block" aria-label="Frequently asked questions">
        <div className="wrap">
          <div className="faq-col">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <ClosingPrompt />
    </>
  );
}
