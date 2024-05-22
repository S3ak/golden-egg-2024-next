"use client";
import React from "react";

export default function BillettoWidget({ id }: { id: string }) {
  return (
    <billetto-widget
      type="button"
      event={id}
      organization="billetto.no"
      lang="no"
      theme="dark"
      color="#d100d1"
    />
  );
}
