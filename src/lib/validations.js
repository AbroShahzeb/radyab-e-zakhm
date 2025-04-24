import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const registerFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const forgotPasswordFormSchema = z.object({
  email: z.string().email("Invalid email"),
});

export const resetPasswordFormSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  passwordConfirmation: z
    .string()
    .min(8, "Password must be at least 8 characters"),
});
