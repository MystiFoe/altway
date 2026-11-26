/**
 * Factual service facts only. Replace with verified outcome numbers
 * (clients served, ratings) once real data is available.
 */
const facts = [
  { value: "1:1", label: "Personal sessions" },
  { value: "3 stages", label: "The ALT Method" },
  { value: "4 languages", label: "English, Hindi, Kannada, Tamil" },
  { value: "₹499", label: "To get started" },
];

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Key facts">
      <div className="container trust-strip__grid">
        {facts.map((fact) => (
          <div className="trust-item" key={fact.label}>
            <div className="trust-item__value">{fact.value}</div>
            <div className="trust-item__label">{fact.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
