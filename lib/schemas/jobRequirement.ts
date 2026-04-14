import { z } from "zod";

/** Allowed job roles */
export const JOB_ROLES = [
  "Promoter",
  "Hostess",
  "Logistics",
  "Event Staff",
  "Brand Ambassador",
  "Other",
] as const;

/** Payment term options */
export const PAYMENT_TERMS = [
  "SPOT",
  "WEEKLY",
  "MONTHLY",
  "AFTER_EVENT",
] as const;

/**
 * Zod schema for a Job Requirement.
 *
 * Staff-Engineer Notes:
 * - `dates` is an array of ISO date strings so JobSeekers can filter by date.
 * - `paymentTerms` is an enum to support the Worker Payment dashboard later.
 * - `googleMapsUrl` is regex-validated to prevent malformed data.
 */
export const JobRequirementSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(120, "Title must be at most 120 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(2000, "Description must be at most 2000 characters"),

  role: z.enum(JOB_ROLES, {
    message: "Please select a valid role",
  }),

  // ---- Dates & Timing ----
  dates: z
    .array(z.string().date("Each date must be a valid YYYY-MM-DD string"))
    .min(1, "At least one event date is required"),

  timing: z.object({
    startTime: z
      .string()
      .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Start time must be in HH:mm format"),
    endTime: z
      .string()
      .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "End time must be in HH:mm format"),
  }),

  // ---- Location ----
  location: z.object({
    address: z
      .string()
      .min(5, "Address must be at least 5 characters"),
    googleMapsUrl: z
      .string()
      .regex(/^https?:\/\//, "Google Maps URL must start with http:// or https://")
      .or(z.literal(""))
      .optional(),
  }),

  // ---- Payment ----
  payment: z.object({
    amount: z
      .number({ message: "Amount must be a number" })
      .positive("Amount must be greater than zero"),
    currency: z.string().default("INR"),
    paymentTerms: z.enum(PAYMENT_TERMS, {
      message: "Please select valid payment terms",
    }),
  }),

  // ---- Requirements ----
  requirements: z.object({
    dressCode: z.string().optional().default(""),
    isKannadaMandatory: z.boolean().default(false),
    isAge18Plus: z.boolean().default(true),
  }),

  // ---- Contact ----
  contact: z.object({
    contactPerson: z
      .string()
      .min(2, "Contact person name is required"),
    phoneNumber: z
      .string()
      .regex(
        /^\+?[0-9]{7,15}$/,
        "Enter a valid phone number (7-15 digits, optional leading +)"
      ),
  }),
});

export type JobRequirement = z.infer<typeof JobRequirementSchema>;
