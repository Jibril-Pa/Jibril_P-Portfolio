import { Link } from "react-router-dom";

import portrait from "../assets/portrait.webp";
import ButtonLink from "../components/ButtonLink";
import { ArrowRightIcon, Scribble } from "../components/Icons";
import LocalTime from "../components/LocalTime";
import { noBreak } from "../components/noBreak";
import ProjectCard from "../components/ProjectCard";
import { roles } from "../data/experience";
import { featuredProjects, projects } from "../data/projects";
import { site } from "../data/site";
import usePageTitle from "../hooks/usePageTitle";

import "./pages.css";

export default function Home() {
  usePageTitle();

  return (
    <div className="page">
      <section className="hero">
        <div>
          <p className="page-eyebrow">Security and software</p>
          <h1 className="hero-name">
            <span>Jibril</span> <span>Pascua</span>
          </h1>
          <p className="hero-lead">
            I find the{" "}
            <span className="scribble">
              holes
              <Scribble />
            </span>{" "}
            in software before somebody else does.
          </p>
          <p className="hero-body">{noBreak(site.intro)}</p>
          <div className="page-actions">
            <ButtonLink to="/work" variant="primary">
              See my work
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Get in touch
            </ButtonLink>
          </div>
        </div>
        <figure className="hero-photo">
          <div className="crop-marks">
            <img
              src={portrait}
              width={1040}
              height={1300}
              alt="Jibril Pascua smiling in a black polo, standing in front of a stone column and a garden."
            />
          </div>
          <figcaption className="meta">That's me.</figcaption>
        </figure>
      </section>

      <dl className="facts">
        <div className="fact">
          <dt>Right now</dt>
          <dd>{site.status}</dd>
        </div>
        <div className="fact">
          <dt>Based in</dt>
          <dd>
            {site.location}
            <span className="meta">
              <LocalTime timeZone={site.timeZone} /> local time
            </span>
          </dd>
        </div>
        <div className="fact">
          <dt>Studied</dt>
          <dd>
            Computer science at UTSA
            <span className="meta">Cybersecurity concentration, class of 2026</span>
          </dd>
        </div>
      </dl>

      <section className="section">
        <div className="section-head">
          <h2 className="section-title">Where I've worked</h2>
        </div>
        <div className="section-body">
          <ul className="brief">
            {roles
              .filter((role) => role.featured)
              .map((role) => (
                <li key={role.title}>
                  <span className="meta">{role.period}</span>
                  <span className="brief-title">{role.title}</span>
                  <span>{noBreak(role.org)}</span>
                </li>
              ))}
          </ul>
          <Link className="text-link section-more" to="/work#experience">
            What I did at each
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="section section-wide">
        <div className="section-head">
          <h2 className="section-title">A couple of projects</h2>
          <Link className="text-link section-more" to="/work#projects">
            All {projects.length} of them
            <ArrowRightIcon />
          </Link>
        </div>
        <div className="section-body project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} wide={index === 0} />
          ))}
        </div>
      </section>
    </div>
  );
}
