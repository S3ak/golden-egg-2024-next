"use server";

import { NewSubmissionFormData } from "@/components/forms/new-submission-form/index";

export async function handleNewSubmissionSubmit(
  formData: NewSubmissionFormData
) {
  console.log("did something", formData);
  // Send data to superbase
}
