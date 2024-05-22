"use client";

import React, { useState } from "react";
import { getNavigatorLanguage } from "@/lib/utils";
import Script from "next/script";
import Link from "next/link";

/**
 * Renders the Billetto web component widget. Depends on Billetto script. This component wraps the Billetto widget. This component must be dynamically imported with SSR disabled as it will break the build.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.params - The parameters object.
 * @param {string} props.params.id - The id of the event.
 * @param {string} props.params.href - The URL for the event on Billetto Website.
 * @returns {JSX.Element} The rendered ticket page component.
 */
export default function BillettoWidget({
  id,
  href,
}: {
  id: string;
  href: string;
}) {
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      {isReady ? (
        <billetto-widget
          type="button"
          event={id}
          organization="billetto.no"
          lang={getNavigatorLanguage()}
          theme="dark"
          color="#d100d1"
        />
      ) : (
        <Link
          href={href}
          className="text-center bg-primary text-white flex justify-center items-center max-w-5xl mx-auto dark font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-400 border-brand-500 hover:border-brand-600 hover:bg-brand-600 text-brand-secondary-0 rounded-md px-4 py-2 text-sm"
        >
          Get Ticket
        </Link>
      )}

      {/* NOTE: This dumbass script breaks server side rendering */}
      <Script
        src="https://billetto.no/widget.js"
        onLoad={() => setIsReady(true)}
      />
    </>
  );
}
