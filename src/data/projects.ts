import byteswap from "../assets/projects/byteswap.webp";
import creditConfidence from "../assets/projects/credit-confidence.webp";
import heatOfTheBeat from "../assets/projects/heat-of-the-beat.webp";
import kithub from "../assets/projects/kithub.webp";
import quickMaths from "../assets/projects/quick-maths.webp";
import squidGame from "../assets/projects/squid-game.webp";

export type Project = {
  slug: string;
  title: string;
  year?: string;
  description: string;
  stack: string[];
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
    /** Which part of the screenshot to keep when the frame crops it. Defaults to the centre. */
    position?: string;
  };
  repo?: string;
};

/** Listed in the order they appear on the work page. */
export const projects: Project[] = [
  {
    slug: "kithub",
    title: "KitHub",
    year: "2025",
    description:
      "A small social network where cat owners post photos of their cats and everyone else gets to like and comment. The front end is React, the API is Flask on top of MySQL, and the database secrets and post data live in AWS so the project runs the same on any machine.",
    stack: ["React", "Flask", "MySQL", "AWS"],
    image: {
      src: kithub,
      width: 1019,
      height: 600,
      alt: "KitHub feed showing a post of a cat edited to look like a baked potato wrapped in foil.",
    },
    repo: "https://github.com/Jibril-Pa/KitHub-Project",
  },
  {
    slug: "byteswap",
    title: "ByteSwap",
    year: "2024",
    description:
      "An Android app for sharing food posts, built in Android Studio with a SQLite database behind the logins and the feed. I led the student team, which meant running the weekly meetings and keeping track of what changed between them.",
    stack: ["Java", "Android Studio", "SQLite"],
    image: {
      src: byteswap,
      width: 1300,
      height: 1059,
      alt: "ByteSwap running on an Android phone, with a feed of posts about baked brie.",
    },
  },
  {
    slug: "credit-confidence",
    title: "Credit Confidence",
    year: "2024",
    description:
      "A budgeting app built at TAMUhack 2024 with React Native and Firebase. Create a budget for each category, then log what you spend against it.",
    stack: ["React Native", "Expo", "Firebase"],
    image: {
      src: creditConfidence,
      width: 992,
      height: 1000,
      alt: "Credit Confidence screen titled Your Budgets, listing budgets for snacks and sports.",
      position: "top",
    },
    repo: "https://github.com/Jibril-Pa/TamuHack2024",
  },
  {
    slug: "heat-of-the-beat",
    title: "Heat of the Beat",
    year: "2025",
    description:
      "A VR rhythm game that sits you behind a drum kit in the middle of a desert and has you hit the beats as they come. Built in Unity with C# and Blender. The README links an APK if you have a headset and want to try it.",
    stack: ["Unity", "C#", "Blender"],
    image: {
      src: heatOfTheBeat,
      width: 1400,
      height: 899,
      alt: "First-person view of a red drum kit and two drumsticks in a desert, from Heat of the Beat.",
    },
    repo: "https://github.com/Jibril-Pa/HEAT-OF-THE-BEATT",
  },
  {
    slug: "squid-game",
    title: "Squid Game Clone",
    year: "2025",
    description:
      "A Squid Game style scoreboard for an EPIC Movement event. Every player gets a photo card taken on the spot with the phone camera, and the hosts add or dock points as the games go on.",
    stack: ["React", "Vite", "Camera capture"],
    image: {
      src: squidGame,
      width: 1400,
      height: 865,
      alt: "Scoreboard made of a grid of player photo cards, with buttons on either side for adding and removing points.",
    },
    repo: "https://github.com/Jibril-Pa/Epic_Squid_Game",
  },
  {
    slug: "quick-maths",
    title: "Quick Maths",
    // TODO: add the year, and a link if the code is public anywhere.
    description:
      "A Chrome extension with a chatbot that works through math problems step by step. Type a question, or capture one straight from the page.",
    stack: ["Chrome extension", "JavaScript", "Generative AI"],
    image: {
      src: quickMaths,
      width: 981,
      height: 805,
      alt: "Quick Maths popup in Chrome, where the chatbot explains how to solve a cubic equation.",
    },
  },
];

/** The two shown on the home page. */
export const featuredProjects = ["kithub", "heat-of-the-beat"].map(
  (slug) => projects.find((project) => project.slug === slug)!,
);
