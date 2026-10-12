import { noBreak } from "../components/noBreak";
import PhotoStrip from "../components/PhotoStrip";
import { bio, education, organizations, photos, toolbox } from "../data/about";
import usePageTitle from "../hooks/usePageTitle";

import "./pages.css";

export default function About() {
  usePageTitle("About");

  return (
    <div className="page">
      <p className="page-eyebrow">About</p>
      <h1 className="page-title">A bit about me</h1>

      <section className="section">
        <div className="section-head">
          <h2 className="section-title">The short version</h2>
        </div>
        <div className="section-body bio">
          {bio.map((paragraph) => (
            <p key={paragraph}>{noBreak(paragraph)}</p>
          ))}
        </div>
      </section>

      <section className="section section-wide">
        <div className="section-head">
          <h2 className="section-title">Student orgs</h2>
          <p className="section-note meta">Where most of my time outside of class went.</p>
        </div>
        <div className="section-body">
          <ul className="orgs">
            {organizations.map((org) => (
              <li key={org.name}>
                <span className="org-name">{org.name}</span>
                <span className="org-role">{org.role}</span>
                <span className="org-note">{org.note}</span>
              </li>
            ))}
          </ul>
          <PhotoStrip photos={photos} label="Photos from student organizations" />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2 className="section-title">Education</h2>
        </div>
        <div className="section-body">
          <h3 className="school-name">{education.school}</h3>
          <p className="school-degree">{education.degree}</p>
          <p className="meta">{education.period}</p>
          <p className="coursework">Coursework included {listOf(education.coursework)}.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2 className="section-title">Toolbox</h2>
          <p className="section-note meta">
            Things I've used on a job or in a project, not everything I've heard of.
          </p>
        </div>
        <div className="section-body">
          <dl className="toolbox">
            {toolbox.map((group) => (
              <div key={group.label}>
                <dt className="meta">{group.label}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}

/** "A, B and C" */
function listOf(items: string[]) {
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}
