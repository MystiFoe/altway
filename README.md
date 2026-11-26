# Alt Way Academy website

Website for Alt Way Academy, a career counselling and employability practice in Bengaluru run by Kenith Anthony.

Built with Next.js (App Router) and TypeScript as a static export. There is no backend: the booking form validates input and opens a prefilled WhatsApp message to the academy.

Live: https://altway.vercel.app

## Pages

| Route            | Purpose                                                       |
| ---------------- | ------------------------------------------------------------- |
| `/`              | Home: marked-up CV hero, who it is for, the ALT stages, starting prices, Kenith |
| `/how-it-works/` | The three stages in detail and a typical month                |
| `/programmes/`   | Full price list for students and professionals, single services |
| `/about/`        | A note from Kenith, facts and commitments                     |
| `/colleges/`     | Rates and process for colleges and institutes                 |
| `/faq/`          | Questions before booking                                      |
| `/book/`         | Booking form. Accepts `?interest=<programme name>` to preselect |

## Getting started

Requires Node.js 22 or later.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command             | Purpose                                  |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Development server                       |
| `npm run build`     | Static export into `out/`                |
| `npm start`         | Serve `out/` locally                     |
| `npm test`          | Unit tests for booking validation        |
| `npm run typecheck` | Strict TypeScript check                  |

## Structure

```
src/
  app/            One folder per route, plus layout, 404 and globals.css
  components/     Header, footer and the pieces each page is built from
  content/site.ts All copy, prices, FAQs, routes and contact details
  lib/whatsapp.ts Booking validation, phone normalisation and the WhatsApp link
```

Routine edits (prices, programme contents, FAQs, Kenith's note, phone number) happen in `src/content/site.ts` only.

To add Kenith's photo, put it at `public/kenith.jpg` and set `PHOTO` to `"/kenith.jpg"` in `src/components/Portrait.tsx`.

## Design notes

The design is built around the documents a career mentor works with rather than a generic landing page kit.

- Palette: paper `#f5f8f7`, ink `#1b2a2c`, eucalyptus `#2e5e57` for the brand, highlighter `#f6e89c` and ballpoint blue `#2c4f9e` used only where something is being marked or recommended.
- Type: Schibsted Grotesk for everything, Kalam (a handwriting face from the Indian Type Foundry) only for pen notes and Kenith's signature. Both are self-hosted.
- Structure: price lists, rate cards and tables use rules because they are tabular content. There are no decorative cards, icons or badges.
- Motion: one orchestrated moment, the reviewer's pen marking the sample CV on the home page. Everything else moves only in response to the visitor (tabs, menu, FAQ, form states). Reduced-motion settings show the final state immediately.

## Deployment

Vercel builds the project automatically on every push to `main`. No settings are needed.

| Variable                | Default                       | Purpose                              |
| ----------------------- | ----------------------------- | ------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`  | `https://altway.vercel.app`   | Base URL for metadata                |
| `NEXT_PUBLIC_BASE_PATH` | empty                         | Only needed if hosted under a sub-path |

When a custom domain is connected, set `NEXT_PUBLIC_SITE_URL` to it in the Vercel project settings.

## To confirm with Kenith before launch

- Turnaround times and the 24-hour reschedule policy on the FAQ and prices pages.
- The wording of his note on the About page and the quote on the home page.
- Whether naming Pravaig Dynamics is fine with his employer.
- A real photo, and refund and privacy terms linked from the footer.
