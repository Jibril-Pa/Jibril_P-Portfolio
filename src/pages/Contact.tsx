import CopyButton from "../components/CopyButton";
import { ArrowUpRightIcon } from "../components/Icons";
import LocalTime from "../components/LocalTime";
import { site } from "../data/site";
import usePageTitle from "../hooks/usePageTitle";

import "./pages.css";

const links = [
  { label: "LinkedIn", value: "linkedin.com/in/jibril-p", href: site.linkedin },
  { label: "GitHub", value: "github.com/Jibril-Pa", href: site.github },
  { label: "Resume", value: "One page, PDF", href: site.resume },
];

export default function Contact() {
  usePageTitle("Contact");

  return (
    <div className="page">
      <p className="page-eyebrow">Contact</p>
      <h1 className="page-title">Get in touch</h1>
      <p className="page-lead">
        Email is the fastest way to reach me. If you'd rather keep it on LinkedIn, that works too.
      </p>

      <div className="contact-email">
        <a className="contact-address" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <CopyButton value={site.email} label="Copy address" />
      </div>

      <ul className="link-rows">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <span className="link-row-label">{link.label}</span>
              <span className="meta">{link.value}</span>
              <ArrowUpRightIcon />
            </a>
          </li>
        ))}
      </ul>

      <p className="contact-note meta">
        {site.location}. It's <LocalTime timeZone={site.timeZone} /> here.
      </p>
    </div>
  );
}
