import React from "react";
import "./index.css";

import { submission } from "@/lib/types/global";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SnippetCard from "../snippet-card";

interface SnippetListProps {
  list: submission[];
  title?: string;
}

const programmes = [
  {
    title: "Front-end Development",
    id: 1,
    alias: "fed",
    description:
      "Digital Design and Graphics: This program focuses on graphic design, digital illustration, user interface (UI) design, and animation.",
  },
  {
    title: "Digital Design and Graphics",
    id: 1,
    alias: "fed",
    description:
      "Digital Design and Graphics: This program focuses on graphic design, digital illustration, user interface (UI) design, and animation.",
  },
  {
    title: "3D Design and Animation",
    id: 1,
    alias: "fed",
    description:
      "3D Design and Animation: Students in this program learn 3D modeling, animation, visual effects (VFX), and game design.",
  },
  {
    title: "Game Design",
    id: 1,
    alias: "fed",
    description:
      "Game Design: This discipline covers game development, game programming, game art, and game production.",
  },
  {
    title: "Interactive Media",
    id: 1,
    alias: "fed",
    description:
      "Interactive Media: Students study interactive storytelling, user experience (UX) design, web development, and digital marketing.",
  },
  {
    title: "Film and TV Production",
    id: 1,
    alias: "fed",
    description:
      "Film and TV Production: This program covers filmmaking, scriptwriting, cinematography, editing, and post-production.",
  },
  {
    title: "Digital Marketing",
    id: 1,
    alias: "fed",
    description:
      "Digital Marketing: Students learn about online marketing strategies, social media marketing, search engine optimization (SEO), and digital analytics.",
  },
  {
    title: "Music Production",
    id: 1,
    alias: "fed",
    description:
      "Music Production: This discipline focuses on music composition, audio engineering, sound design, and music business.",
  },
  {
    title: "Animation",
    id: 1,
    alias: "fed",
    description:
      "Animation: Students study traditional and digital animation techniques, character animation, motion graphics, and storytelling.",
  },
  {
    title: "Cybersecurity",
    id: 1,
    alias: "fed",
    description:
      "Cybersecurity: This program covers network security, ethical hacking, digital forensics, and cybersecurity management.",
  },
  {
    title: "Data Science",
    id: 1,
    alias: "fed",
    description:
      "Data Science: Students learn about data analysis, machine learning, data visualization, and big data technologies.",
  },
];

export default function SnippetList({
  list = [],
  title = "Section Title",
}: SnippetListProps) {
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <section className="controls-list">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Programme" />
          </SelectTrigger>
          <SelectContent>
            {programmes.map((programme) => (
              <SelectItem key={programme.title} value={programme.title}>
                {programme.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            {programmes.map((programme) => (
              <SelectItem key={programme.title} value={programme.title}>
                {programme.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {programmes.map((programme) => (
              <SelectItem key={programme.title} value={programme.title}>
                {programme.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>

      <section className="list-container">
        {list.map(
          ({
            id,
            programme,
            author,
            title: submissionTitle,
            category,
            cohortYear,
          }) => (
            <SnippetCard
              key={id}
              title={programme.title}
              description={`@${author.name}`}
              slotFooter={cohortYear.toDateString()}
            >
              <p>{title}</p>
              <p>{category}</p>
            </SnippetCard>
          )
        )}
      </section>
    </div>
  );
}
