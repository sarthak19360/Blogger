import { z } from "zod";

export const signupInput = z.object({
  username: z.string(),
  name: z.string().optional(),
  password: z.string().min(8),
});

export type signupType = z.infer<typeof signupInput>;

export const signinInput = z.object({
  username: z.string(),
  password: z.string().min(8),
});

export type signinType = z.infer<typeof signinInput>;

export const createPostInput = z.object({
  title: z.string(),
  content: z.string(),
});
export type createPostType = z.infer<typeof createPostInput>;

export const updatePostInput = z.object({
  id: z.number(),
  title: z.string().optional(),
  content: z.string().optional(),
});
export type updatePostType = z.infer<typeof updatePostInput>;
