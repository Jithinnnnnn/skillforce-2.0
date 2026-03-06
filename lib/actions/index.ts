"use server";

import { JobRequirementSchema } from "@/lib/schemas/jobRequirement";
import { getSession } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Job } from "@/lib/models/Job";

/* ── Re-export auth actions so consumers can import from "@/lib/actions" ── */
/* Auth actions imported directly from "@/lib/actions/authActions" by login/signup pages */

/* ── Job action types ── */
export type JobActionState = {
  success: boolean;
  errors?: Record<string, string[]>;
  message?: string;
};

/**
 * Server Action: Create a new Job posting.
 *
 * Security: verifies the user session and role (jobprovider | admin)
 * before saving. Performs full Zod validation and returns field-level errors.
 */
export async function createJob(
  _prevState: JobActionState,
  formData: FormData
): Promise<JobActionState> {
  // ---------- 1. Auth check ----------
  const session = await getSession();

  if (!session) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[DEV] createJob called without session — allowing in dev mode");
    } else {
      return { success: false, message: "Unauthorized — please log in." };
    }
  }

  if (
    session &&
    session.role !== "jobprovider" &&
    session.role !== "admin"
  ) {
    return { success: false, message: "Forbidden — only Job Providers can post jobs." };
  }

  // ---------- 2. Parse form data ----------
  const rawDates = formData.getAll("dates") as string[];
  const googleMapsUrl = (formData.get("googleMapsUrl") as string) ?? "";

  const rawData = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    role: formData.get("role") as string,
    dates: rawDates.filter((d) => d.trim() !== ""),
    timing: {
      startTime: formData.get("startTime") as string,
      endTime: formData.get("endTime") as string,
    },
    location: {
      address: formData.get("address") as string,
      googleMapsUrl,
    },
    payment: {
      amount: Number(formData.get("amount")),
      currency: (formData.get("currency") as string) || "INR",
      paymentTerms: formData.get("paymentTerms") as string,
    },
    requirements: {
      dressCode: (formData.get("dressCode") as string) || "",
      isKannadaMandatory: formData.get("isKannadaMandatory") === "true",
      isAge18Plus: formData.get("isAge18Plus") === "true",
    },
    contact: {
      contactPerson: formData.get("contactPerson") as string,
      phoneNumber: formData.get("phoneNumber") as string,
    },
  };

  // ---------- 3. Zod validation ----------
  const result = JobRequirementSchema.safeParse(rawData);

  if (!result.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of result.error.issues) {
      const key = issue.path.join(".");
      if (!fieldErrors[key]) fieldErrors[key] = [];
      fieldErrors[key].push(issue.message);
    }
    return { success: false, errors: fieldErrors };
  }

  // ---------- 4. Extra validation: Google Maps URL ----------
  if (
    result.data.location.googleMapsUrl &&
    result.data.location.googleMapsUrl !== "" &&
    !/^https?:\/\//.test(result.data.location.googleMapsUrl)
  ) {
    return {
      success: false,
      errors: {
        "location.googleMapsUrl": [
          "Google Maps URL must start with http:// or https://",
        ],
      },
    };
  }

  // ---------- 5. Save to MongoDB ----------
  try {
    await connectToDatabase();

    await Job.create({
      ...result.data,
      dates: result.data.dates.map((d) => new Date(d)),
      createdBy: session?.userId ?? "dev-user",
    });

    return { success: true, message: "Job posted successfully!" };
  } catch (err) {
    console.error("[createJob] MongoDB save error:", err);
    return {
      success: false,
      message: "Failed to save job. Please try again.",
    };
  }
}
