import type { Faq } from "@/content/site";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="faq">
      {items.map((faq) => (
        <details className="faq__item" key={faq.question}>
          <summary className="faq__question">
            {faq.question}
            <span className="faq__toggle" aria-hidden="true" />
          </summary>
          <p className="faq__answer">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
