import type { Project } from "../data/projects";
import { ArrowUpRightIcon } from "./Icons";

import "./ProjectCard.css";

type ProjectCardProps = {
  project: Project;
  /** Wide cards take the larger share of a row. */
  wide?: boolean;
};

export default function ProjectCard({ project, wide = false }: ProjectCardProps) {
  const { image } = project;

  return (
    <article className={["project", wide && "project-wide"].filter(Boolean).join(" ")}>
      <div className="project-media">
        <img
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          style={{ objectPosition: image.position }}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="project-head">
        <h3 className="project-title">{project.title}</h3>
        {project.year && <span className="meta">{project.year}</span>}
      </div>
      <p className="project-text">{project.description}</p>
      <p className="project-stack meta">{project.stack.join(" / ")}</p>
      {project.repo && (
        <a className="text-link project-link" href={project.repo} target="_blank" rel="noreferrer">
          Source on GitHub
          <ArrowUpRightIcon />
        </a>
      )}
    </article>
  );
}
