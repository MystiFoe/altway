"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navLinks, routes } from "@/content/site";

import { Brand } from "./Logo";

const trim = (path: string) => path.replace(/\/+$/, "") || "/";

export function Header() {
  const pathname = trim(usePathname() ?? "/");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header" data-scrolled={scrolled || open}>
      <div className="wrap site-header__bar">
        <Brand />

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-button__icon" aria-hidden="true" />
          {open ? "Close" : "Menu"}
        </button>

        <nav id="site-nav" className="nav" data-open={open} aria-label="Main">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav__link"
                  aria-current={trim(link.href) === pathname ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={routes.book} className="btn btn-primary" aria-current={pathname === trim(routes.book) ? "page" : undefined}>
            Book a session
          </Link>
        </nav>
      </div>
    </header>
  );
}
