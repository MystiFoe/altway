# Alt Way Academy website

Marketing website for Alt Way Academy, a career counselling and employability practice in Bengaluru founded by Kenith Anthony.

Built with Next.js (App Router) and TypeScript, exported as a fully static site. There is no backend: the booking form validates input and opens a prefilled WhatsApp chat with the academy.

## Getting started

Requires Node.js 22 or later.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command             | Purpose                                         |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Local development server with hot reload        |
| `npm run build`     | Production static export into `out/`            |
| `npm start`         | Serve the exported `out/` folder locally        |
| `npm test`          | Unit tests for the booking link builder         |
| `npm run typecheck` | Strict TypeScript check                         |

## Project structure

```
src/
  app/
    layout.tsx        Root layout, metadata, fonts, structured data
    page.tsx          Page composition (section order)
    globals.css       Design tokens and all component styles
    icon.svg          Favicon
  components/         One component per page section, plus shared icons and logo
  content/
    site.ts           All copy, pricing, FAQs and contact details
  lib/
    whatsapp.ts       Booking validation and WhatsApp URL builder
    whatsapp.test.ts  Unit tests (node:test)
    events.ts         Programme card to booking form preselection
```

## Editing content

Almost every change happens in `src/content/site.ts`: prices, programme contents, mentor bio, FAQs, phone number and hours. Components only render that data, so there is no need to touch JSX for routine updates.

To add a mentor photo, place it at `public/mentor.jpg` and set `MENTOR_PHOTO` to `"/mentor.jpg"` in `src/components/Mentor.tsx`.

The figures in the trust strip (`src/components/TrustStrip.tsx`) are service facts, not outcome claims. Replace them with verified numbers such as clients served or average rating once real data exists. Testimonials should only be added with written permission from clients.

## Design system

Tokens live at the top of `globals.css`:

- Background `#f7f6f2`, surfaces white and `#eff2f0`
- Primary muted teal `#2f5d6e`, sage accent `#7d9a8b`, sand accent `#b08a62`
- Headings in Source Serif 4, body in Inter (both self-hosted via Fontsource, no external font requests)
- 8 / 12 / 18 px radii, pill buttons, soft layered shadows

## Deployment

The site is a static export, so it runs on any static host.

GitHub Pages: the included workflow (`.github/workflows/deploy.yml`) builds and deploys on every push to `main`. Enable it once under Settings, Pages, Source: GitHub Actions. The site will be served at `https://<user>.github.io/altway/`.

Vercel or Netlify: import the repository. No configuration is needed; leave `NEXT_PUBLIC_BASE_PATH` unset.

Custom domain: point the domain at the host, then remove `NEXT_PUBLIC_BASE_PATH` from the workflow and set `NEXT_PUBLIC_SITE_URL` to the domain so canonical metadata is correct.

| Variable                | Default                       | Purpose                                     |
| ----------------------- | ----------------------------- | ------------------------------------------- |
| `NEXT_PUBLIC_BASE_PATH` | empty                         | Sub-path when hosted under a folder         |
| `NEXT_PUBLIC_SITE_URL`  | `https://altwayacademy.in`    | Base URL for metadata and Open Graph tags   |

## Before going live

- Register the domain (altwayacademy.in and altwayacademy.com were unregistered at the time of writing).
- Complete the trademark search for "Alt Way Academy" in classes 41 and 35.
- Publish cancellation, refund and privacy terms and link them from the footer.
- Add a real photo of Kenith and an email address once the domain is set up.
