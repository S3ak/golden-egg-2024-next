"use client";

import "./index.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils/cn";

import { zodResolver } from "@hookform/resolvers/zod";
import { handleNewSubmissionSubmit } from "@/submissions/new/actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CATERGORIES, PROGRAMMES } from "@/lib/constants";

export const NewSubmissionFormSchema = z.object({
  email: z.string().email(),
  nomineeName: z.string().min(2).max(100),
  url: z.string().url(),
  programme: z.string(),
  catergory: z.string(),
  acceptedTerms: z.string(),
});

export type NewSubmissionFormData = z.infer<typeof NewSubmissionFormSchema>;

export default function NewSubmissonForm() {
  const form = useForm<NewSubmissionFormData>({
    mode: "onBlur",
    resolver: zodResolver(NewSubmissionFormSchema),
    defaultValues: {
      email: "",
      nomineeName: "",
      url: "",
      programme: "",
      catergory: "",
      acceptedTerms: "",
    },
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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) =>
              onNewSubmissionFormSubmit(data)
            )}
            className="c-form my-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <LabelInputContainer>
                    <Label htmlFor="email">Your Email</Label>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="name@mail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>This should be your email</FormDescription>
                  </LabelInputContainer>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nomineeName"
              render={({ field }) => (
                <FormItem>
                  <LabelInputContainer>
                    <Label htmlFor="nomineeName">Nomaniee/ student Name</Label>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Monde Sineke"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Name of the student</FormDescription>
                  </LabelInputContainer>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <LabelInputContainer>
                    <Label htmlFor="url">Project Link (Url)</Label>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="https://behance.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      A public link to their work
                    </FormDescription>
                  </LabelInputContainer>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="programme"
              render={({ field }) => (
                <FormItem>
                  <LabelInputContainer>
                    <Label htmlFor="programme">Programme</Label>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Front-end Development" />
                        </SelectTrigger>
                        <SelectContent>
                          {PROGRAMMES.map((programme) => (
                            <SelectItem key={programme.id} value={programme.id}>
                              {programme.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      Select the discipline of the student
                    </FormDescription>
                  </LabelInputContainer>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="catergory"
              render={({ field }) => (
                <FormItem>
                  <LabelInputContainer>
                    <Label htmlFor="catergory">Catergory</Label>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Design" />
                        </SelectTrigger>
                        <SelectContent>
                          {CATERGORIES.map((catergory) => (
                            <SelectItem key={catergory} value={catergory}>
                              {catergory}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>Genre of work</FormDescription>
                  </LabelInputContainer>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="acceptedTerms"
              render={({ field }) => (
                <FormItem>
                  <LabelInputContainer>
                    <Label htmlFor="acceptedTerms">
                      Accept Terms and Conditions
                    </Label>
                    <FormControl>
                      <Checkbox {...field} />
                    </FormControl>
                  </LabelInputContainer>

                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Nominate Work &rarr;
              <BottomGradient />
            </button>
          </form>
        </Form>
      </section>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
