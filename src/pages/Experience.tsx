import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

export default function ExperiencePage() {
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
            Work Experience
          </h1>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-transparent" />

          <div className="space-y-8">
            {/* AI Automation Intern */}
            <FadeIn delay={0}>
              <div className="relative flex gap-6">
                <div className="relative z-10 flex-shrink-0 w-10 flex justify-center pt-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-background" />
                </div>
                <div className="flex-1 bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        AI Automation Intern
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Mannapov LLC
                      </p>
                    </div>
                    <span className="text-sm text-blue-500 font-medium whitespace-nowrap">
                      May 2024 — Jul 2024
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Information Security Intern */}
            <FadeIn delay={0.1}>
              <div className="relative flex gap-6">
                <div className="relative z-10 flex-shrink-0 w-10 flex justify-center pt-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-background" />
                </div>
                <div className="flex-1 bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        Information Security Intern
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        H-E-B Digital Security
                      </p>
                    </div>
                    <span className="text-sm text-blue-500 font-medium whitespace-nowrap">
                      May 2024 — Jul 2024
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex gap-2">
                      <span className="text-blue-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Created a database with over <span className="font-semibold text-blue-500">77,000 IOC</span> using data from Zerofox, Proofpoint, and Mandiant for the DSOC team to analyze threats</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Led <span className="font-semibold text-blue-500">10 interns</span> in a project automating a ticketing system from Splunk to Jira</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Utilized Feedly AI to create weekly newsletters on cyber threats and critical vulnerabilities</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Collaborated with Mandiant to ensure partner digital footprints are secure and monitor dark web for compromised data</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Remediated <span className="font-semibold text-blue-500">50+ devices</span> across <span className="font-semibold text-blue-500">5 stores</span> during the CrowdStrike incident of 2024</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Automated Python code to transport container image data from AWS to Brinqa for vulnerability management</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Used Black Kite to analyze and notify teams on <span className="font-semibold text-blue-500">hundreds</span> of newly found vulnerabilities</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Partnered with <span className="font-semibold text-blue-500">10+ security teams</span> to address high-critical vulnerabilities</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Documented automation processes in Confluence for reference and future data integrations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* IT Intern */}
            <FadeIn delay={0.15}>
              <div className="relative flex gap-6">
                <div className="relative z-10 flex-shrink-0 w-10 flex justify-center pt-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500 ring-4 ring-background" />
                </div>
                <div className="flex-1 bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        Information Technology Intern
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Boerne Independent School District
                      </p>
                    </div>
                    <span className="text-sm text-purple-500 font-medium whitespace-nowrap">
                      May 2022 — Aug 2022
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex gap-2">
                      <span className="text-purple-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Updated over <span className="font-semibold text-purple-500">500 laptop/desktop OS</span> for upcoming school year deployment</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Assembled <span className="font-semibold text-purple-500">50 new desktops</span> for technical classes</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Installed improved security software on new devices to protect user privacy</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Configured operating systems and software to optimize student experience</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Ensured damaged technology was restored or recycled based on condition</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Disassembled damaged technology to salvage reusable components</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Lab Assistant */}
            <FadeIn delay={0.2}>
              <div className="relative flex gap-6">
                <div className="relative z-10 flex-shrink-0 w-10 flex justify-center pt-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-background" />
                </div>
                <div className="flex-1 bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        Undergraduate Lab Assistant
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        University of Texas at San Antonio
                      </p>
                    </div>
                    <span className="text-sm text-cyan-500 font-medium whitespace-nowrap">
                      Oct 2023 — Present
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex gap-2">
                      <span className="text-cyan-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Penetration tested a license plate web application to identify faulty security practices</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Used OWASP guide, NMAP, ZAP, and EMBA to discover software vulnerabilities</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Participated in weekly meetings to document project progress</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Collaborated with other lab assistants on ongoing research projects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Cashier */}
            <FadeIn delay={0.25}>
              <div className="relative flex gap-6">
                <div className="relative z-10 flex-shrink-0 w-10 flex justify-center pt-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-background" />
                </div>
                <div className="flex-1 bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        Cashier / Checker
                      </h3>
                      <p className="text-muted-foreground text-sm">H-E-B</p>
                    </div>
                    <span className="text-sm text-emerald-500 font-medium whitespace-nowrap">
                      Aug 2022 — Present
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex gap-2">
                      <span className="text-emerald-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Assisted in the grand opening of the new Fair Oaks store</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Managed cash register operations processing cash, check, and credit card transactions</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Trained new and current partners on store operations and customer service</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-500 mt-1 flex-shrink-0">&#x2022;</span>
                      <span>Consistently delivered A+ hospitality to customers and partners</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
