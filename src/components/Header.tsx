"use client";

import { useEffect, useState } from "react";

import { navLinks } from "@/content/site";

import { CloseIcon, MenuIcon } from "./icons";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="container site-header__inner">
        <a href="#top" aria-label="Alt Way Academy, back to top" onClick={close}>
          <Logo />
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav id="primary-nav" className="nav" data-open={open} aria-label="Primary">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="nav__link" href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary" href="#book" onClick={close}>
            Book a session
          </a>
        </nav>
      </div>
    </header>
  );
}
