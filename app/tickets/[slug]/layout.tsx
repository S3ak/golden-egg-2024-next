import Script from "next/script";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy your ticket now! 🎟️",
  description:
    "Buy guest tickets and or claim your free student ticket for the Golden Egg Awards 2024.",
};

export default function TicketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Script src="https://billetto.no/widget.js" />
    </>
  );
}
