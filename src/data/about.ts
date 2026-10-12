import acmRetreat from "../assets/photos/acm-retreat.webp";
import bestFest from "../assets/photos/best-fest.webp";
import codingInColorRetreat from "../assets/photos/coding-in-color-retreat.webp";
import epicMovement from "../assets/photos/epic-movement.webp";
import rowdyHacks from "../assets/photos/rowdyhacks.webp";
import voicesBanquet from "../assets/photos/voices-banquet.webp";

export const bio = [
  "I'm a computer science graduate from UT San Antonio, class of 2026, with a concentration in cybersecurity.",
  "The summer before college I was an IT intern at Boerne ISD, getting more than 500 laptops and desktops ready for the school year. Since then I've spent a summer on H-E-B's digital security team, pen-tested a web application as an undergraduate lab assistant, and worked a register at H-E-B the whole way through.",
  "Outside of class I put a lot of time into student orgs. I was vice president of Coding in Color, handled media and PR for RowdyHacks and RowdyCreators, planned events for EPIC Movement, and volunteered with VOICES.",
];

export const education = {
  school: "The University of Texas at San Antonio",
  degree: "B.S. in Computer Science, Cybersecurity concentration",
  period: "Aug 2022 – May 2026",
  coursework: [
    "Data Structures",
    "Discrete Math",
    "Application Programming",
    "Computer Organization",
    "Systems Programming",
    "Database Systems",
    "Operating Systems",
    "Design & Analysis of Algorithms",
    "Cloud Computing",
    "Game Development",
  ],
};

// TODO: add dates. The old site showed "May 2024 – Current" on every one of these.
export const organizations = [
  { name: "Coding in Color", role: "Vice President", note: "A suborganization of ACM." },
  {
    name: "RowdyHacks",
    role: "Media and PR Organizer",
    note: "Central Texas's largest hackathon.",
  },
  { name: "RowdyCreators", role: "PR Officer", note: "A suborganization of ACM." },
  {
    name: "ACM at UTSA",
    role: "Media Junior Officer",
    note: "The Association for Computing Machinery.",
  },
  { name: "EPIC Movement", role: "Events Officer", note: "An Asian focused Christian ministry." },
  {
    name: "VOICES",
    role: "Volunteer",
    note: "Volunteer Organization Involving Community, Education and Service.",
  },
];

export const toolbox = [
  { label: "Languages", items: ["Python", "Java", "C", "C#", "JavaScript", "SQL", "Bash"] },
  {
    label: "Security",
    items: [
      "Splunk",
      "Rapid7",
      "Brinqa",
      "Black Kite",
      "Mandiant",
      "ZeroFox",
      "Nmap",
      "OWASP ZAP",
      "EMBA",
    ],
  },
  {
    label: "Building",
    items: ["React", "React Native", "Flask", "Firebase", "AWS", "Android Studio", "Unity"],
  },
  { label: "Day to day", items: ["Git", "Linux", "Jira", "Confluence", "VS Code"] },
];

export type Photo = {
  src: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
};

export const photos: Photo[] = [
  {
    src: codingInColorRetreat,
    width: 907,
    height: 680,
    caption: "Coding in Color retreat",
    alt: "Seven people posing with hand signs outdoors at night.",
  },
  {
    src: rowdyHacks,
    width: 1020,
    height: 680,
    caption: "RowdyHacks IX",
    alt: "A large group at RowdyHacks gathered on a staircase under orange and navy banners.",
  },
  {
    src: voicesBanquet,
    width: 1209,
    height: 680,
    caption: "VOICES banquet",
    alt: "A group dressed up in green in front of a sequin backdrop and green and gold balloons.",
  },
  {
    src: acmRetreat,
    width: 907,
    height: 680,
    caption: "ACM retreat",
    alt: "A long dinner table full of people on the porch of a wooden cabin in the hills.",
  },
  {
    src: bestFest,
    width: 907,
    height: 680,
    caption: "Best Fest with ACM",
    alt: "A group in white shirts posing with hand signs at night in front of festival booths.",
  },
  {
    src: epicMovement,
    width: 863,
    height: 680,
    caption: "EPIC Movement",
    alt: "A large group photo in a meeting room with a slide projected behind them.",
  },
];
