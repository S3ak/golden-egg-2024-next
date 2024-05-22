import React, { Suspense } from "react";

import TextGenerateEffect from "@/components/text-generate-effect";
import { getAllLocations, getEventByName } from "@/lib/services/billetto";
import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

const BillettoWidget = dynamic(
  () => import("../../components/billetto-widget"),
  {
    ssr: false,
  }
);

type Props = {
  params: { slug: string };
};

/**
 * Generates metadata for the given parameters.
 *
 * @param {Props} params - The parameters for generating metadata.
 * @returns {Promise<Metadata>} The generated metadata.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  return {
    title: `Get ${slug} 🎟️ | Golden Egg Awards`,
  };
}

/**
 * Renders the ticket page component. Depends on Billetto API to fetch event information.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.params - The parameters object.
 * @param {string} props.params.slug - The slug parameter.
 * @returns {JSX.Element} The rendered ticket page component.
 */
export default async function TicketPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { starts_at, id, location, ends_at, public_url } = await getData(slug);
  const startDate = new Date(starts_at);

  return (
    <article className="pt-24">
      <section>
        <h1 className="w-full p-8 text-center text-white text-[40px] font-black font-['Spartan'] capitalize">
          <TextGenerateEffect words={`tickets ${slug}`} />
        </h1>
      </section>

      <section className="flex flex-col gap-4 p-8 text-center">
        <p>Time and Location:</p>

        <p>{location}</p>
        <p>
          The event starts at{" "}
          {startDate.toLocaleString("nb-NO", {
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
          {startDate.toLocaleString("nb-NO", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </p>

        <Suspense
          fallback={
            <Link
              href={public_url}
              className="text-center p-2 bg-primary text-white"
            >
              Get Ticket
            </Link>
          }
        >
          <BillettoWidget id={id} />
        </Suspense>
      </section>
    </article>
  );
}

/**
 * Retrieves event data for a given name before the paege is rendered.
 * @param name - The name to retrieve data for.
 * @returns A Promise that resolves to the retrieved data.
 * @tutorial https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch
 */

async function getData(name: string) {
  const data = await getEventByName(name);

  return data;
}

/**
 * Generates static params for the page.
 * @returns An array of objects containing the slug property.
 * @tutorial https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
 */
export async function generateStaticParams() {
  const data = await getAllLocations();

  return data.map((location) => ({
    slug: location.name,
  }));
}