import { Link, useLocation } from "react-router-dom";

import { ArrowUpRightIcon, Logo } from "./Icons";
import { navItems } from "./navItems";
import { site } from "../data/site";

import "./Footer.css";

const elsewhere = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
  { label: "Resume", href: site.resume },
];

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="footer">
      {/* The contact page already leads with the address. */}
      {pathname !== "/contact" && (
        <div className="footer-cta">
          <p className="footer-heading">Say hello</p>
          <a className="footer-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      )}
      <div className="footer-top">
        <div className="footer-brand">
          <Logo />
          <p>Security and software. {site.location}.</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="footer-heading">Pages</h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="footer-heading">Elsewhere</h2>
          <ul>
            {elsewhere.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                  <ArrowUpRightIcon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom meta">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Set in Bricolage Grotesque and IBM Plex Mono. Built with React and Vite.</p>
        <p>Birds up.</p>
      </div>
    </footer>
  );
}
