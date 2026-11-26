import type { ReactNode } from "react";

interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ id, eyebrow, title, lead, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "section-head section-head--center" : "section-head"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  );
}
