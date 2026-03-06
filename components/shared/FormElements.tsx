import type {
    InputHTMLAttributes,
    SelectHTMLAttributes,
    TextareaHTMLAttributes,
} from "react";
import { forwardRef } from "react";

/** Shared claymorphic base class for all form elements */
const clay =
    "w-full rounded-2xl border border-border bg-card text-sm text-foreground shadow-[var(--clay-shadow)] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-50";

/* ── Input ── */
export const Input = forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement>
>(function Input({ className = "", ...props }, ref) {
    return (
        <input
            ref={ref}
            className={`${clay} px-4 py-2.5 placeholder:text-muted-foreground ${className}`}
            {...props}
        />
    );
});

/* ── Select ── */
export const Select = forwardRef<
    HTMLSelectElement,
    SelectHTMLAttributes<HTMLSelectElement>
>(function Select({ className = "", children, ...props }, ref) {
    return (
        <select
            ref={ref}
            className={`${clay} appearance-none px-4 py-2.5 ${className}`}
            {...props}
        >
            {children}
        </select>
    );
});

/* ── Textarea ── */
export const Textarea = forwardRef<
    HTMLTextAreaElement,
    TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className = "", ...props }, ref) {
    return (
        <textarea
            ref={ref}
            className={`${clay} px-4 py-3 placeholder:text-muted-foreground ${className}`}
            rows={4}
            {...props}
        />
    );
});
