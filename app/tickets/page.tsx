import React from "react";

import Link from "next/link";
import TextGenerateEffect from "@/components/text-generate-effect";
import { Button } from "@/components/ui/button";

const CONTENT = [
  {
    id: 1,
    label: "Oslo",
    href: "/tickets/oslo",
  },
  {
    id: 2,
    label: "Bergen",
    href: "/tickets/bergen",
  },
  {
    id: 3,
    label: "Kristiansand",
    href: "/tickets/kristiansand",
  },
  {
    id: 4,
    label: "Stavanger",
    href: "/tickets/stavanger",
  },
];

export default function TicketPage() {
  return (
    <article className="pt-24">
      <section>
        <h1 className="w-full p-8 text-center text-white text-[40px] font-black font-['Spartan']">
          <TextGenerateEffect words="Tickets" />
        </h1>
      </section>

      <section className="flex flex-col gap-4 p-8 text-center">
        {CONTENT.map(({ id, label, href }) => (
          <Button key={id} className="bg-secondary">
            <Link href={href}>{label}</Link>
          </Button>
        ))}
      </section>
    </article>
  );
}
