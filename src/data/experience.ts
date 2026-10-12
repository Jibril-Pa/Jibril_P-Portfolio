export type Role = {
  title: string;
  org: string;
  period?: string;
  location?: string;
  summary?: string;
  points: string[];
  tools?: string[];
  /** Featured roles also show in the short list on the home page. */
  featured?: boolean;
};

export const roles: Role[] = [
  {
    title: "Information Security Intern",
    org: "H-E-B Digital Security",
    period: "May – Jul 2024",
    location: "San Antonio, TX",
    summary:
      "A summer on H-E-B's digital security team, split between threat intelligence and vulnerability management.",
    points: [
      "Built a database of more than 77,000 indicators of compromise from ZeroFox, Proofpoint and Mandiant data for the DSOC team to use when analyzing threats to H-E-B systems.",
      "Wrote Python automation that moved data on more than 40,000 container images from AWS into Brinqa for vulnerability management.",
      "Led a group of 10 interns on a project that turns Splunk data into Jira tickets automatically.",
      // TODO: the résumé says "over 30 devices", the old site said "over 50 devices through 5 stores".
      "Restored more than 30 devices during the CrowdStrike outage in July 2024.",
      "Partnered with more than 10 H-E-B digital teams to address high and critical vulnerabilities.",
      "Put together a weekly newsletter on new threats and critical vulnerabilities with Feedly AI.",
    ],
    tools: [
      "Python",
      "AWS",
      "Splunk",
      "Jira",
      "Brinqa",
      "Black Kite",
      "Mandiant",
      "ZeroFox",
      "Confluence",
    ],
    featured: true,
  },
  {
    title: "Undergraduate Lab Assistant",
    org: "University of Texas at San Antonio",
    // TODO: the résumé says Oct 2024, the old site said Oct 2023. The end date assumes
    // the role ended at graduation.
    period: "Oct 2024 – May 2026",
    location: "San Antonio, TX",
    summary: "Hands-on security testing in a UTSA research lab.",
    points: [
      "Penetration tested a license plate web application and reported its faulty security practices to the company behind it.",
      "Worked from the OWASP testing guide with Nmap, ZAP and EMBA to find vulnerabilities in the software.",
      "Met weekly with the lab's professor and the other assistants to document progress, and helped them start or continue their own projects.",
    ],
    tools: ["Nmap", "OWASP ZAP", "EMBA"],
    featured: true,
  },
  {
    title: "AI Automation Intern",
    org: "Mannapov LLC",
    // TODO: add dates and a few bullets. The old site showed this role with the H-E-B
    // internship's dates copied over and nothing else.
    points: [],
  },
  {
    title: "Information Technology Intern",
    org: "Boerne Independent School District",
    period: "Summer 2022",
    location: "Boerne, TX",
    summary: "The summer before college, getting a school district's hardware ready for the year.",
    points: [
      "Updated the operating systems on more than 500 laptops and desktops ahead of the school year.",
      "Assembled 50 new desktops for technical classes and installed security software to keep student information private.",
      "Repaired, salvaged or recycled damaged hardware depending on its condition, and answered tech tickets from faculty.",
    ],
    featured: true,
  },
  {
    title: "Cashier / Checker",
    org: "H-E-B",
    // TODO: confirm this one is still current.
    period: "Aug 2022 – Present",
    points: [
      "Helped open the new Fair Oaks store.",
      "Run a register and train new and current partners on codes, restocking and looking after customers the H-E-B way.",
    ],
  },
];
