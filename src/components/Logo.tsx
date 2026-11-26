interface LogoProps {
  /** Colour of the key outline and path. Defaults to the brand primary. */
  tone?: "brand" | "light";
}

/**
 * Brand mark: a rounded keyboard key (the "Alt" key) with a path that
 * branches off the straight route, echoing "take the alternate way".
 */
export function LogoMark({ tone = "brand" }: LogoProps) {
  const stroke = tone === "light" ? "#ffffff" : "#2f5d6e";
  const accent = "#7d9a8b";
  return (
    <svg className="logo__mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <rect x="1.5" y="1.5" width="37" height="37" rx="10" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M11 29V20" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M11 20c0-5 3.5-8.5 9-8.5h8" stroke={accent} strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M24.5 8l4 3.5-4 3.5" stroke={accent} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M11 20h8" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" strokeDasharray="0.1 4.2" />
    </svg>
  );
}

export function Logo({ tone = "brand" }: LogoProps) {
  return (
    <span className="logo">
      <LogoMark tone={tone} />
      <span className="logo__text">
        <span className="logo__name">Alt Way</span>
        <span className="logo__sub">Academy</span>
      </span>
    </span>
  );
}
