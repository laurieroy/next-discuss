"use server";

import { z } from "zod";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-z-]+$/, {
      message:
        "Name must not contain any spaces and must be lowercase or dashes",
    }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(1000, { message: "Description must be less than 1000 characters" }),
});

export async function topicCreate(formData: FormData) {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  console.log(result)
  if (!result.success) {
   console.log(result.error.flatten().fieldErrors);
    // return result.error;
  }


  // TODO: revalidate Home page
}
