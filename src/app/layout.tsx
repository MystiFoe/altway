import "@fontsource-variable/inter";
import "@fontsource-variable/source-serif-4";
import "./globals.css";

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { brand, contact, mentor } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://altwayacademy.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} | Career Counselling, CV and Interview Readiness in Bengaluru`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  keywords: [
    "career counselling Bengaluru",
    "career guidance for students",
    "CV writing",
    "mock interviews",
    "placement readiness",
    "career change",
  ],
  openGraph: {
    type: "website",
    title: `${brand.name}: ${brand.tagline}`,
    description: brand.description,
    siteName: brand.name,
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f7f6f2",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: brand.name,
  slogan: brand.tagline,
  description: brand.description,
  telephone: contact.phoneE164,
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
  founder: { "@type": "Person", name: mentor.name },
  areaServed: "IN",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          // Static, trusted content defined in this repository.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
