"use server";

import { loginSchema, signupSchema } from "@/lib/validations/auth";

export type AuthState = {
    success: boolean;
    error?: string;
    fieldErrors?: Record<string, string[]>;
};

/* ── Login Action ── */
export async function loginAction(
    _prev: AuthState,
    formData: FormData
): Promise<AuthState> {
    const raw = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    const result = loginSchema.safeParse(raw);

    if (!result.success) {
        const fieldErrors: Record<string, string[]> = {};
        for (const issue of result.error.issues) {
            const key = String(issue.path[0]);
            fieldErrors[key] = fieldErrors[key] ?? [];
            fieldErrors[key].push(issue.message);
        }
        return { success: false, error: "Validation failed", fieldErrors };
    }

    // TODO: Replace with real auth (e.g. NextAuth / Better-auth)
    // const { email, password } = result.data;

    return { success: true };
}

/* ── Signup Action ── */
export async function signupAction(
    _prev: AuthState,
    formData: FormData
): Promise<AuthState> {
    const raw = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
        role: formData.get("role"),
    };

    const result = signupSchema.safeParse(raw);

    if (!result.success) {
        const fieldErrors: Record<string, string[]> = {};
        for (const issue of result.error.issues) {
            const key = String(issue.path[0]);
            fieldErrors[key] = fieldErrors[key] ?? [];
            fieldErrors[key].push(issue.message);
        }
        return { success: false, error: "Validation failed", fieldErrors };
    }

    // TODO: Replace with real user creation + auth
    // const { fullName, email, password, role } = result.data;

    return { success: true };
}
