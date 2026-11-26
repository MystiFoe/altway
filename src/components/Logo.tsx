import Link from "next/link";

import { routes } from "@/content/site";

/**
 * Brand mark: the Alt key from a keyboard. The name comes from it, so the
 * mark is a keycap rather than an abstract symbol.
 */
export function AltKeyMark() {
  return (
    <svg className="brand__mark" viewBox="0 0 40 36" aria-hidden="true" focusable="false">
      <rect x="1" y="1" width="38" height="34" rx="6" fill="#2e5e57" />
      <rect x="4" y="3" width="32" height="26" rx="4" fill="#3b7068" />
      <text
        x="9"
        y="23"
        fill="#ffffff"
        fontFamily="Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
        fontSize="12.5"
        fontWeight="600"
        letterSpacing="-0.2"
      >
        alt
      </text>
    </svg>
  );
}

export function Brand() {
  return (
    <Link href={routes.home} className="brand" aria-label="Alt Way Academy home">
      <AltKeyMark />
      <span className="brand__name">
        Alt Way <span>Academy</span>
      </span>
    </Link>
  );
}
