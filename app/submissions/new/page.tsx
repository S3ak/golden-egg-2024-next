import React from "react";

import TextGenerateEffect from "@/components/text-generate-effect";

const CONTENT = [
  {
    id: 1,
    title: "Who?",
    description:
      "All Noroff Students can nominate themselfs or a fellow student.",
  },
  {
    id: 2,
    title: "What?",
    description:
      "You decide what kind of project or assignment you want to submit.",
  },
  {
    id: 3,
    title: "How?",
    description: "Fill out the form below and submit.",
  },
  {
    id: 4,
    title: "When?",
    description: "Deadline: 30.05.24",
  },
];

export default function CreateSubmissionPage() {
  return (
    <article className="pt-24 relative z-10">
      <section>
        <h1 className="w-full p-8 text-center text-white text-[40px] font-black font-['Spartan']">
          <TextGenerateEffect words="Nominate" />
        </h1>
      </section>

      <section className="flex flex-col gap-4 p-8 text-center">
        {CONTENT.map(({ id, title, description }) => (
          <div key={id}>
            <h2>{title}</h2>

            <p>{description}</p>
          </div>
        ))}
      </section>

      <section className="p-8">
        <h2>Delivery information:</h2>

        <div className="border p-8">
          <iframe
            width="100%"
            className="min-h-[80dvh]"
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=J--ahKlaQEynrTjPEMLz--lyFAXw42RHglfboJTp4B9UOUlPN0JMQVZVS1k3NjBCTlBUS09FSlIxTi4u&embed=true"
          />
        </div>
      </section>
    </article>
  );
}
