import React from "react";

import TextGenerateEffect from "@/components/text-generate-effect";
import { getAllLocations, getEventByName } from "@/lib/services/billetto";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

/**
 * A dynamic component that loads the Billetto widget.
 * This component is used to render the Billetto widget asynchronously.
 * We need to do this as the Billetto widget script breaks server side rendering.
 */
const BillettoWidget = dynamic(
  () => import("../../components/billetto-widget"),
  {
    ssr: false,
    loading: () => (
      <button
        className="text-center bg-primary text-white flex justify-center items-center max-w-5xl mx-auto dark font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-400 border-brand-500 hover:border-brand-600 hover:bg-brand-600 text-brand-secondary-0 rounded-md px-4 py-2 text-sm"
        disabled
      >
        {/* TODO: Add loading icon */}
        Loading...
      </button>
    ),
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
    <article className="pt-24 relative z-10">
      <section>
        <h1 className="w-full p-8 text-center text-white text-[40px] font-black font-['Spartan'] capitalize">
          <TextGenerateEffect words={`tickets ${slug}`} />
        </h1>
      </section>

      <section className="flex flex-col gap-4 p-8 text-center">
        <p className="animate__animated animate__fadeIn animate__delay-4s">
          Time and Location:
        </p>
        <p className="animate__animated animate__fadeIn animate__delay-3s">
          {location}
        </p>
        <p className="animate__animated animate__fadeIn animate__delay-2s">
          The event starts at{" "}
          {startDate.toLocaleString("nb-NO", {
            hour: "numeric",
            minute: "numeric",
          })}
        </p>
        <p className="animate__animated animate__fadeIn animate__delay-1s">
          The event ends at{" "}
          {new Date(ends_at).toLocaleString("nb-NO", {
            hour: "numeric",
            minute: "numeric",
          })}
        </p>
        <p className="animate__animated animate__fadeInUp">
          {startDate.toLocaleString("nb-NO", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </p>

        <BillettoWidget id={id} href={public_url} />
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
