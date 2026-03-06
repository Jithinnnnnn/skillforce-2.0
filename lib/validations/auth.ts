import { z } from "zod/v4";

/* ── Login ── */
export const loginSchema = z.object({
    email: z.email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginInput = z.infer<typeof loginSchema>;

/* ── Signup ── */
export const signupSchema = z
    .object({
        fullName: z.string().min(2, "Name must be at least 2 characters"),
        email: z.email("Please enter a valid email address"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string(),
        role: z.enum(["jobseeker", "jobprovider"], {
            message: "Please select a role",
        }),
    })
    .refine((d) => d.password === d.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type SignupInput = z.infer<typeof signupSchema>;
