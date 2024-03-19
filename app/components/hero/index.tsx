import React from "react";

import AuroraBackground from "@/app/components/ui/aurora-background";

export default function Hero() {
  return (
    <article className="p-2">
      <h2 className="text-2xl">Golden Egg Awards 2024</h2>

      <AuroraBackground>
        <p>
          Welcome to the Golden Egg 2024, the prestigious awards ceremony where
          we celebrate the outstanding talent and creativity of Noroff students
          from across Norway. This annual event is the culmination of a year of
          hard work and dedication, showcasing the diverse range of skills and
          achievements within our community.
        </p>
      </AuroraBackground>
    </article>
  );
}
