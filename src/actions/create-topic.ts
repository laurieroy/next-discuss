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

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
  };
}

// interface CreateTopicSchema extends z.infer<typeof createTopicSchema> {}

export async function topicCreate(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  return {
    errors: {},
  };
  // TODO: revalidate Home page
}
