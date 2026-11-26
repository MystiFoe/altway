import Link from "next/link";

import { brand, contact, navLinks, routes } from "@/content/site";

import { Brand } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__grid">
          <div>
            <Brand />
            <p className="site-footer__about">{brand.description}</p>
          </div>

          <div>
            <h2 className="site-footer__heading">Pages</h2>
            <ul className="site-footer__list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <Link href={routes.book}>Book a session</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="site-footer__heading">Contact</h2>
            <ul className="site-footer__list">
              <li>
                <a href={`tel:${contact.phoneE164}`}>{contact.phoneDisplay}</a>
              </li>
              <li>
                <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  Message on WhatsApp
                </a>
              </li>
              <li>{contact.hours}</li>
              <li>{contact.city}, and online across India</li>
            </ul>
          </div>
        </div>

        <div className="site-footer__legal">
          <span>
            &copy; {year} {brand.name}
          </span>
          <span>Career guidance only. We do not guarantee jobs, salaries or admissions.</span>
        </div>
      </div>
    </footer>
  );
}
