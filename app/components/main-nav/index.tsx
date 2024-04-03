import React from "react";
import "./index.css";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function SnippetList() {
  return (
    <div className="container">
      <section>Logo</section>

      <section>
        <div className="nav-list-container">
          {NAV_LINKS.map((link) => (
            <div key={link.id}>
              <Link href={link.url}>{link.label}</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
