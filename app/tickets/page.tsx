import React from "react";

import Link from "next/link";
import TextGenerateEffect from "@/components/text-generate-effect";
import { getAllLocations } from "@/lib/services/billetto";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get tickets 🎟️ your city | Golde Egg 2024",
  description:
    "Select the city/ Campus you are attending the Golden Egg Awards 2024.",
};

export default async function TicketsPage() {
  const data = await getData();

  return (
    <article className="pt-24">
      <section>
        <h1 className="w-full p-8 text-center text-white text-[40px] font-black font-['Spartan']">
          <TextGenerateEffect words="Tickets" />
        </h1>
      </section>

      <section className="flex flex-col gap-4 p-8 text-center">
        {data.map(({ name, id }) => (
          <Link
            key={id}
            className="bg-secondary"
            href={`/tickets/${trimName(name).toLocaleLowerCase()}`}
          >
            {trimName(name)}
          </Link>
        ))}
      </section>
    </article>
  );
}

async function getData() {
  return getAllLocations();
}

function trimName(name: string) {
  return name.replace("The Golden Egg - ", "");
}
