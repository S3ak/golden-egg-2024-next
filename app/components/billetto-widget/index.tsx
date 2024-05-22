"use client";
import React from "react";
import { getNavigatorLanguage } from "@/lib/utils";

export default function BillettoWidget({ id }: { id: string }) {
  return (
    <billetto-widget
      type="button"
      event={id}
      organization="billetto.no"
      lang={getNavigatorLanguage()}
      theme="dark"
      color="#d100d1"
    />
  );
}
