import "@/styles/projects.css";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    name: "Kithub",
    description:
      "A social media platform for cat owners to post and share photos of their cats.",
    image: "/assets/kithub.png",
    technologies: ["React", "Flask", "SQL", "AWS", "HTML/CSS"],
    accent: "#3b82f6",
  },
  {
    name: "Heat of the Beat",
    description:
      "A VR rhythm game where the player takes on the role of a drummer, hitting beats to the music.",
    image: "/assets/hotb.png",
    technologies: ["Unity", "C#", "VR", "Blender"],
    accent: "#8b5cf6",
  },
  {
    name: "Squid Game Clone",
    description:
      "A point tracking system built for an EPIC Movement event, using photo-based scoring.",
    image: "/assets/squidgame.png",
    technologies: ["React", "iOS Camera Library"],
    accent: "#06b6d4",
  },
  {
    name: "Byteswap",
    description:
      "An Android social media app for sharing and discovering food photography.",
    image: "/assets/byteswap.png",
    technologies: ["Android", "Java", "SQLite"],
    accent: "#f59e0b",
  },
  {
    name: "Credit Confidence",
    description:
      "A budgeting app that helps users track spending and create personalized budgets.",
    image: "/assets/CC-prj.png",
    technologies: ["React Native", "JavaScript", "Firebase"],
    accent: "#10b981",
  },
  {
    name: "Quick Maths",
    description:
      "A Chrome extension that helps users solve math problems using AI and a chatbot interface.",
    image: "/assets/QuickMaths.png",
    technologies: ["Chrome Extension", "JavaScript", "AI/ML"],
    accent: "#ec4899",
  },
];

export default function ProjectsPage() {
  return (
    <DefaultLayout>
      <section className="py-8 md:pt-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent inline-block">
            Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects I've built across web, mobile, VR, and AI.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.08}>
              <div
                className="project-card"
                style={
                  { "--card-accent": project.accent } as React.CSSProperties
                }
              >
                <div className="card-image-wrapper">
                  <img src={project.image} alt={project.name} />
                  <a
                    href="https://github.com/Jibril-Pa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-image-overlay"
                  >
                    <AiFillGithub className="w-10 h-10 text-white" />
                  </a>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{project.name}</h3>
                  <p className="card-description">{project.description}</p>
                  <div className="card-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="card-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
