import { brand, contact, navLinks } from "@/content/site";

import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <Logo tone="light" />
            <p className="site-footer__about">{brand.description}</p>
          </div>

          <div>
            <h2 className="site-footer__heading">Explore</h2>
            <ul className="site-footer__list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="site-footer__heading">Services</h2>
            <ul className="site-footer__list">
              {brand.services.map((service) => (
                <li key={service}>
                  <a href="#programmes">{service}</a>
                </li>
              ))}
              <li>
                <a href="#colleges">College partnerships</a>
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
                  WhatsApp
                </a>
              </li>
              <li>{contact.city}</li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>
            &copy; {year} {brand.name}. All rights reserved.
          </span>
          <span>Career guidance only. We do not guarantee jobs, salaries or admissions.</span>
        </div>
      </div>
    </footer>
  );
}
