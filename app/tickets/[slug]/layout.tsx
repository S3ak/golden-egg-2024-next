import Script from "next/script";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy your ticket now! 🎟️",
  description:
    "Buy guest tickets and or claim your free student ticket for the Golden Egg Awards 2024.",
};

/**
 * Renders the layout for a ticket. We load the billetto script so the custom component will work.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to render inside the layout.
 * @returns {JSX.Element} The rendered layout component.
 * @tutorial https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
 */
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
