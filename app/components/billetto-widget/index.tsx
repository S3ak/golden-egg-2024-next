"use client";

import React from "react";
import { getNavigatorLanguage } from "@/lib/utils";
import Script from "next/script";

export default function BillettoWidget({ id }: { id: string }) {
  return (
    <>
      <billetto-widget
        type="button"
        event={id}
        organization="billetto.no"
        lang={getNavigatorLanguage()}
        theme="dark"
        color="#d100d1"
      />
      {/* NOTE: This dumbass script breaks server side rendering */}
      <Script src="https://billetto.no/widget.js" />
    </>
  );
}
