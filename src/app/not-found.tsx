import Link from "next/link";

import { routes } from "@/content/site";

export default function NotFound() {
  return (
    <section className="wrap not-found">
      <h1 className="page-head__title">This page does not exist</h1>
      <p>The link may be old or mistyped. Everything on the site is reachable from the home page.</p>
      <p>
        <Link href={routes.home} className="btn btn-primary">
          Go to the home page
        </Link>
      </p>
    </section>
  );
}
