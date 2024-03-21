"use client";

import "./index.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleNewSubmissionSubmit } from "@/submissions/new/actions";

export const NewSubmissionFormSchema = z.object({
  email: z.string().url(),
  nomineeName: z.string().min(2).max(100),
  url: z.string().url(),
  programme: z.string(),
  catergory: z.string(),
  acceptedTerms: z.boolean(),
});

export type NewSubmissionFormData = z.infer<typeof NewSubmissionFormSchema>;

export default function NewSubmissonForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewSubmissionFormData>({
    resolver: zodResolver(NewSubmissionFormSchema),
  });

  const onNewSubmissionFormSubmit = async (data: NewSubmissionFormData) => {
    await handleNewSubmissionSubmit(data);
  };

  return (
    <div className="container">
      <section>
        <h2>Nominatte a student</h2>
      </section>

      <section>
        <form
          onSubmit={handleSubmit((data) => onNewSubmissionFormSubmit(data))}
          className="c-form"
        >
          <input type="email" placeholder="email" {...register("email")} />
          <input
            type="text"
            placeholder="Nominee Name"
            {...register("nomineeName")}
          />
          <input type="url" placeholder="url" {...register("url")} />
          <select {...register("programme")}>
            <option value="fed">fed</option>
          </select>

          <input {...register("catergory")} type="radio" value="Sci-fi" />
          <input
            type="checkbox"
            placeholder="Accept terms & conditions"
            {...register("acceptedTerms")}
          />

          <input type="submit" />
        </form>
      </section>
    </div>
  );
}
