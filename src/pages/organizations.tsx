import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const organizations = [
  {
    title: "Coding In Color Vice President",
    org: "Suborganization of ACM",
    date: "May 2024 — Present",
    accent: "blue",
  },
  {
    title: "RowdyHacks Media/PR Organizer",
    org: "Central Texas's Largest Hackathon",
    date: "May 2024 — Present",
    accent: "purple",
  },
  {
    title: "RowdyCreators PR Officer",
    org: "Suborganization of ACM",
    date: "May 2024 — Present",
    accent: "cyan",
  },
  {
    title: "VOICES Volunteer",
    org: "Volunteer Organization Involving Community, Education and Service",
    date: "May 2024 — Present",
    accent: "emerald",
  },
  {
    title: "EPIC Movement Events Officer",
    org: "Asian Focused Christian Ministry",
    date: "May 2024 — Present",
    accent: "amber",
  },
  {
    title: "ACM Media Junior Officer",
    org: "The Association for Computing Machinery",
    date: "May 2024 — Present",
    accent: "pink",
  },
];

const accentColors: Record<string, { text: string; border: string }> = {
  blue: { text: "text-blue-500", border: "border-l-blue-500" },
  purple: { text: "text-purple-500", border: "border-l-purple-500" },
  cyan: { text: "text-cyan-500", border: "border-l-cyan-500" },
  emerald: { text: "text-emerald-500", border: "border-l-emerald-500" },
  amber: { text: "text-amber-500", border: "border-l-amber-500" },
  pink: { text: "text-pink-500", border: "border-l-pink-500" },
};

export default function OrganizationsPage() {
  return (
    <DefaultLayout>
      <section className="py-8 md:pt-2 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent inline-block">
            Leadership & Organizations
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Actively leading and contributing to student organizations at UTSA.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {organizations.map((org, i) => {
            const colors = accentColors[org.accent];
            return (
              <FadeIn key={org.title} delay={i * 0.08}>
                <div
                  className={`bg-card p-5 rounded-xl border border-l-4 ${colors.border} shadow-sm hover:shadow-md transition-shadow h-full`}
                >
                  <h3 className="text-base font-bold text-foreground mb-1">
                    {org.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {org.org}
                  </p>
                  <span className={`text-xs font-medium ${colors.text}`}>
                    {org.date}
                  </span>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </DefaultLayout>
  );
}
