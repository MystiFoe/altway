import type { ReactNode } from "react";

interface PageHeadProps {
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
}

/** Title block at the top of every inner page. */
export function PageHead({ title, lead, children }: PageHeadProps) {
  return (
    <header className="page-head">
      <div className="wrap">
        <h1 className="page-head__title">{title}</h1>
        {lead ? <p className="page-head__lead">{lead}</p> : null}
        {children}
      </div>
    </header>
  );
}
