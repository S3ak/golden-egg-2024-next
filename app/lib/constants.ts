import { Categories, Programme } from "./schema";

type navLink = {
  id: number;
  label: string;
  url: string;
};

export const NAV_LINKS: navLink[] = [
  {
    id: 1,
    label: "Home",
    url: "/",
  },
  {
    id: 2,
    label: "Nomimate",
    url: "/submissions/new",
  },
];

export const CATERGORIES: Categories = [
  "Digital Art",
  "Animation",
  "Game Design",
  "Graphic Design",
  "Film and TV Production",
  "Web Design and Development",
  "Photography",
  "Visual Effects (VFX)",
  "Music Production",
  "Sound Design",
  "Design",
  "coding",
];

export const PROGRAMMES: Programme = [
  {
    title: "Front-end Development",
    id: "1",
    alias: "fed",
    description:
      "Digital Design and Graphics: This program focuses on graphic design, digital illustration, user interface (UI) design, and animation.",
  },
  {
    title: "Digital Design and Graphics",
    id: "1",
    alias: "fed",
    description:
      "Digital Design and Graphics: This program focuses on graphic design, digital illustration, user interface (UI) design, and animation.",
  },
  {
    title: "3D Design and Animation",
    id: "1",
    alias: "3da",
    description:
      "3D Design and Animation: Students in this program learn 3D modeling, animation, visual effects (VFX), and game design.",
  },
  {
    title: "Game Design",
    id: "1",
    alias: "gd",
    description:
      "Game Design: This discipline covers game development, game programming, game art, and game production.",
  },
  {
    title: "Interactive Media",
    id: "1",
    alias: "im",
    description:
      "Interactive Media: Students study interactive storytelling, user experience (UX) design, web development, and digital marketing.",
  },
  {
    title: "Film and TV Production",
    id: "1",
    alias: "ftv",
    description:
      "Film and TV Production: This program covers filmmaking, scriptwriting, cinematography, editing, and post-production.",
  },
  {
    title: "Digital Marketing",
    id: "1",
    alias: "dm",
    description:
      "Digital Marketing: Students learn about online marketing strategies, social media marketing, search engine optimization (SEO), and digital analytics.",
  },
  {
    title: "Music Production",
    id: "1",
    alias: "mp",
    description:
      "Music Production: This discipline focuses on music composition, audio engineering, sound design, and music business.",
  },
  {
    title: "Animation",
    id: "1",
    alias: "a",
    description:
      "Animation: Students study traditional and digital animation techniques, character animation, motion graphics, and storytelling.",
  },
  {
    title: "Cybersecurity",
    id: "1",
    alias: "cs",
    description:
      "Cybersecurity: This program covers network security, ethical hacking, digital forensics, and cybersecurity management.",
  },
  {
    title: "Data Science",
    id: "1",
    alias: "ds",
    description:
      "Data Science: Students learn about data analysis, machine learning, data visualization, and big data technologies.",
  },
];

const currentYear = new Date().getFullYear();
const years: string[] = [];

for (let year = currentYear; year >= 2001; year--) {
  years.push(year.toString());
}

export const YEARS: string[] = years;
