import { ArrowUpRightIcon } from "../components/Icons";
import { noBreak } from "../components/noBreak";
import ProjectCard from "../components/ProjectCard";
import { roles } from "../data/experience";
import { projects } from "../data/projects";
import { site } from "../data/site";
import usePageTitle from "../hooks/usePageTitle";

import "./pages.css";

export default function Work() {
  usePageTitle("Work");

  return (
    <div className="page">
      <p className="page-eyebrow">Work</p>
      <h1 className="page-title">What I've worked on</h1>
      <p className="page-lead">
        {noBreak("Security work at H-E-B and in a UTSA research lab")}, plus {projects.length}{" "}
        projects that range from a VR drum kit to a social network for cats.
      </p>

      <section className="section" id="experience">
        <div className="section-head">
          <h2 className="section-title">Experience</h2>
          <p className="section-note meta">Most relevant first, not strictly in date order.</p>
          <a className="text-link section-more" href={site.resume} target="_blank" rel="noreferrer">
            Resume as a PDF
            <ArrowUpRightIcon />
          </a>
        </div>
        <div className="section-body">
          <ul className="roles">
            {roles.map((role) => (
              <li className="role" key={`${role.title} ${role.org}`}>
                <div className="role-meta meta">
                  {role.period && <span>{role.period}</span>}
                  {role.location && <span>{role.location}</span>}
                </div>
                <div>
                  <h3 className="role-title">{role.title}</h3>
                  <p className="role-org">{noBreak(role.org)}</p>
                  {role.summary && <p className="role-summary">{noBreak(role.summary)}</p>}
                  {role.points.length > 0 && (
                    <ul className="role-points">
                      {role.points.map((point) => (
                        <li key={point}>{noBreak(point)}</li>
                      ))}
                    </ul>
                  )}
                  {role.tools && <p className="role-tools meta">{role.tools.join(" / ")}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-wide" id="projects">
        <div className="section-head">
          <h2 className="section-title">Projects</h2>
          <a className="text-link section-more" href={site.github} target="_blank" rel="noreferrer">
            More on GitHub
            <ArrowUpRightIcon />
          </a>
        </div>
        <div className="section-body project-grid">
          {/* Wide, narrow, narrow, wide: each row is a 7 + 5 split that flips sides. */}
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              wide={index % 4 === 0 || index % 4 === 3}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
