import React from "react";

import TextGenerateEffect from "@/components/text-generate-effect";
import { getAllLocations, getEventByName } from "@/lib/services/billetto";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  return {
    title: `Get ${slug} 🎟️ | Golden Egg Awards`,
  };
}

export default async function TicketPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { starts_at, id, location, ends_at } = await getData(slug);

  return (
    <article className="pt-24">
      <section>
        <h1 className="w-full p-8 text-center text-white text-[40px] font-black font-['Spartan']">
          <TextGenerateEffect words={`tickets ${slug}`} />
        </h1>
      </section>

      <section className="flex flex-col gap-4 p-8 text-center">
        <p>Time and Location:</p>

        <p>{location}</p>
        <p>
          The event starts at{" "}
          {new Date(starts_at).toLocaleString("nb-NO", {
            hour: "numeric",
            minute: "numeric",
          })}
        </p>
        <p>
          The event ends at{" "}
          {new Date(ends_at).toLocaleString("nb-NO", {
            hour: "numeric",
            minute: "numeric",
          })}
        </p>
        <p>
          {new Date(starts_at).toLocaleString("nb-NO", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </p>

        <billetto-widget
          type="button"
          event={id}
          organization="billetto.no"
          lang="no"
          theme="dark"
          color="#d100d1"
        />
      </section>
    </article>
  );
}

async function getData(name: string) {
  const data = await getEventByName(name);

  return data;
}

export async function generateStaticParams() {
  const data = await getAllLocations();

  return data.map((location) => ({
    slug: location.name,
  }));
}
