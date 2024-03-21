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

import { PROGRAMMES, CATERGORIES, YEARS } from "@/lib/constants";
import SnippetCard from "../snippet-card";

interface SnippetListProps {
  list: submission[];
  title?: string;
}

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
            {PROGRAMMES.map((programme) => (
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
            {YEARS.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {CATERGORIES.map((catergory) => (
              <SelectItem key={catergory} value={catergory}>
                {catergory}
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
