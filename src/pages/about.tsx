import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const contactLinks = [
  {
    name: "LinkedIn",
    description: "Let's connect professionally",
    href: "https://www.linkedin.com/in/jibril-p/",
    icon: AiFillLinkedin,
    gradient: "from-blue-600 to-blue-400",
  },
  {
    name: "GitHub",
    description: "Check out my projects",
    href: "https://github.com/Jibril-Pa",
    icon: AiFillGithub,
    gradient: "from-gray-700 to-gray-500",
  },
  {
    name: "Discord",
    description: "Join my server",
    href: "https://discord.gg/9b6yyZKmH4",
    icon: FaDiscord,
    gradient: "from-indigo-600 to-indigo-400",
  },
];

export default function ContactPage() {
  return (
    <DefaultLayout>
      <section className="py-8 md:pt-2 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent inline-block">
            Get In Touch
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            I'm always open to new opportunities, collaborations, and
            conversations. Feel free to reach out through any of the platforms
            below.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {contactLinks.map((link, i) => (
            <FadeIn key={link.name} delay={i * 0.1}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card p-6 rounded-xl border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 text-center"
              >
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <link.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{link.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
