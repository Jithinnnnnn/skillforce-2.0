"use client";

import { useActionState, useState, useEffect } from "react";
import { createJob, type JobActionState } from "@/lib/actions";
import { JOB_ROLES, PAYMENT_TERMS } from "@/lib/schemas/jobRequirement";
import { Toast } from "@/components/shared/Toast";
import {
    Plus,
    Trash2,
    MapPin,
    Banknote,
    Calendar,
    Clock,
    ChevronRight,
    ChevronLeft,
    Send,
    User,
    Phone,
    Shirt,
    Globe,
} from "lucide-react";

const initialState: JobActionState = { success: false };

function getError(
    errors: Record<string, string[]> | undefined,
    key: string
): string | null {
    if (!errors) return null;
    const msgs = errors[key];
    return msgs && msgs.length > 0 ? msgs[0] : null;
}

/* ─── Shared tiny components ─── */

function FieldError({ message }: { message: string | null }) {
    if (!message) return null;
    return <p className="mt-1 text-xs font-medium text-red-500">{message}</p>;
}

function Label({
    htmlFor,
    children,
    required,
}: {
    htmlFor: string;
    children: React.ReactNode;
    required?: boolean;
}) {
    return (
        <label
            htmlFor={htmlFor}
            className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground"
        >
            {children}
            {required && <span className="ml-0.5 text-red-400">*</span>}
        </label>
    );
}

/** Clay input wrapper with leading icon and green-focus border */
function IconInput({
    icon: Icon,
    error,
    children,
}: {
    icon?: React.ComponentType<{ className?: string }>;
    error?: string | null;
    children: React.ReactNode;
}) {
    return (
        <div>
            <div
                className={`flex items-center gap-2.5 rounded-2xl border bg-card px-4 py-2.5 shadow-[var(--clay-shadow)] transition-all duration-200 focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-400/20 ${error ? "border-red-300" : "border-border"
                    }`}
            >
                {Icon && (
                    <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                )}
                <div className="flex-1">{children}</div>
            </div>
            {error && <FieldError message={error} />}
        </div>
    );
}

const inputBase =
    "w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none";
const selectBase =
    "w-full appearance-none bg-transparent text-sm text-foreground focus:outline-none";

/* ═══════════════════════════════════════════════════════════════ */

export function JobPostForm({ onSuccess }: { onSuccess?: () => void }) {
    const [state, formAction, isPending] = useActionState(createJob, initialState);
    const [step, setStep] = useState<1 | 2>(1);
    const [dates, setDates] = useState<string[]>([""]);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (state.success) {
            setShowToast(true);
            setDates([""]);
            setStep(1);
            onSuccess?.();
        }
    }, [state, onSuccess]);

    function addDate() {
        setDates((prev) => [...prev, ""]);
    }
    function removeDate(index: number) {
        setDates((prev) => prev.filter((_, i) => i !== index));
    }
    function updateDate(index: number, value: string) {
        setDates((prev) => prev.map((d, i) => (i === index ? value : d)));
    }

    return (
        <>
            {showToast && (
                <Toast
                    message={state.message ?? "Job posted successfully!"}
                    variant="success"
                    onClose={() => setShowToast(false)}
                />
            )}

            {state.message && !state.success && (
                <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {state.message}
                </div>
            )}

            {/* Step indicator */}
            <div className="mb-6 flex items-center gap-3">
                <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${step === 1
                        ? "bg-primary text-primary-foreground shadow-[var(--shadow-button)]"
                        : "bg-primary/10 text-primary"
                        }`}
                >
                    1
                </div>
                <div className="h-px flex-1 bg-border" />
                <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${step === 2
                        ? "bg-primary text-primary-foreground shadow-[var(--shadow-button)]"
                        : "bg-primary/10 text-primary"
                        }`}
                >
                    2
                </div>
                <span className="ml-2 text-xs text-muted-foreground">
                    {step === 1 ? "The Basics" : "The Details"}
                </span>
            </div>

            <form action={formAction} className="space-y-5">
                {/* ═══════════ STEP 1: THE BASICS ═══════════ */}
                <div className={step === 1 ? "space-y-4" : "hidden"}>
                    {/* Title */}
                    <div>
                        <Label htmlFor="title" required>Job Title</Label>
                        <IconInput error={getError(state.errors, "title")}>
                            <input
                                id="title"
                                name="title"
                                placeholder="e.g. Brand Promoter – Mall Activation"
                                className={inputBase}
                            />
                        </IconInput>
                    </div>

                    {/* Role */}
                    <div>
                        <Label htmlFor="role" required>Role</Label>
                        <IconInput error={getError(state.errors, "role")}>
                            <select id="role" name="role" defaultValue="" className={selectBase}>
                                <option value="" disabled>Select role</option>
                                {JOB_ROLES.map((role) => (
                                    <option key={role} value={role}>{role}</option>
                                ))}
                            </select>
                        </IconInput>
                    </div>

                    {/* Dates */}
                    <div>
                        <Label htmlFor="dates-group" required>Event Dates</Label>
                        <div id="dates-group" className="space-y-2">
                            {dates.map((d, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <IconInput icon={Calendar} error={i === 0 ? getError(state.errors, "dates") : null}>
                                        <input
                                            type="date"
                                            name="dates"
                                            value={d}
                                            onChange={(e) => updateDate(i, e.target.value)}
                                            className={inputBase}
                                        />
                                    </IconInput>
                                    {dates.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeDate(i)}
                                            className="shrink-0 rounded-xl p-2 text-red-400 transition-colors hover:bg-red-50 hover:text-red-600"
                                            aria-label="Remove date"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={addDate}
                            className="mt-2 inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/5"
                        >
                            <Plus className="h-3.5 w-3.5" /> Add Date
                        </button>
                    </div>

                    {/* Time */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <Label htmlFor="startTime" required>Start Time</Label>
                            <IconInput icon={Clock} error={getError(state.errors, "timing.startTime")}>
                                <input id="startTime" name="startTime" type="time" className={inputBase} />
                            </IconInput>
                        </div>
                        <div>
                            <Label htmlFor="endTime" required>End Time</Label>
                            <IconInput icon={Clock} error={getError(state.errors, "timing.endTime")}>
                                <input id="endTime" name="endTime" type="time" className={inputBase} />
                            </IconInput>
                        </div>
                    </div>

                    {/* Pay */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <Label htmlFor="amount" required>Pay</Label>
                            <IconInput icon={Banknote} error={getError(state.errors, "payment.amount")}>
                                <input
                                    id="amount"
                                    name="amount"
                                    type="number"
                                    placeholder="e.g. 500"
                                    min={0}
                                    step={1}
                                    className={inputBase}
                                />
                            </IconInput>
                        </div>
                        <div>
                            <Label htmlFor="paymentTerms" required>Payment Terms</Label>
                            <IconInput icon={Banknote} error={getError(state.errors, "payment.paymentTerms")}>
                                <select id="paymentTerms" name="paymentTerms" defaultValue="" className={selectBase}>
                                    <option value="" disabled>Select terms</option>
                                    {PAYMENT_TERMS.map((term) => (
                                        <option key={term} value={term}>
                                            {term === "SPOT" ? "Spot Pay" : term === "WEEKLY" ? "After 1 Week" : term === "MONTHLY" ? "Monthly" : "After Event"}
                                        </option>
                                    ))}
                                </select>
                            </IconInput>
                        </div>
                    </div>

                    {/* Hidden currency field */}
                    <input type="hidden" name="currency" value="INR" />

                    {/* Next button */}
                    <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-button)] transition-all hover:shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] active:shadow-[var(--shadow-button-inset)]"
                    >
                        Continue to Details <ChevronRight className="h-4 w-4" />
                    </button>
                </div>

                {/* ═══════════ STEP 2: THE DETAILS ═══════════ */}
                <div className={step === 2 ? "space-y-4" : "hidden"}>
                    {/* Description */}
                    <div>
                        <Label htmlFor="description" required>Description</Label>
                        <div className="rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--clay-shadow)] transition-all focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-400/20">
                            <textarea
                                id="description"
                                name="description"
                                rows={3}
                                placeholder="Describe the job role, responsibilities…"
                                className="w-full resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                            />
                        </div>
                        <FieldError message={getError(state.errors, "description")} />
                    </div>

                    {/* Location */}
                    <div>
                        <Label htmlFor="address" required>Location</Label>
                        <IconInput icon={MapPin} error={getError(state.errors, "location.address")}>
                            <input
                                id="address"
                                name="address"
                                placeholder="e.g. Forum Fiza Mall, Mangalore"
                                className={inputBase}
                            />
                        </IconInput>
                    </div>

                    {/* Google Maps URL */}
                    <div>
                        <Label htmlFor="googleMapsUrl">Google Maps Link</Label>
                        <IconInput icon={Globe} error={getError(state.errors, "location.googleMapsUrl")}>
                            <input
                                id="googleMapsUrl"
                                name="googleMapsUrl"
                                placeholder="https://maps.google.com/..."
                                className={inputBase}
                            />
                        </IconInput>
                    </div>

                    {/* Dress Code */}
                    <div>
                        <Label htmlFor="dressCode">Dress Code</Label>
                        <IconInput icon={Shirt} error={getError(state.errors, "requirements.dressCode")}>
                            <input
                                id="dressCode"
                                name="dressCode"
                                placeholder="e.g. Formal / Black polo + jeans"
                                className={inputBase}
                            />
                        </IconInput>
                    </div>

                    {/* Toggles */}
                    <div className="flex gap-3">
                        <label className="flex flex-1 cursor-pointer items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--clay-shadow)] transition-all has-[:checked]:border-emerald-400 has-[:checked]:ring-2 has-[:checked]:ring-emerald-400/20">
                            <input type="hidden" name="isKannadaMandatory" value="false" />
                            <input
                                name="isKannadaMandatory"
                                type="checkbox"
                                value="true"
                                className="h-4 w-4 rounded accent-primary"
                            />
                            <span className="text-sm text-foreground">Kannada mandatory</span>
                        </label>
                        <label className="flex flex-1 cursor-pointer items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--clay-shadow)] transition-all has-[:checked]:border-emerald-400 has-[:checked]:ring-2 has-[:checked]:ring-emerald-400/20">
                            <input type="hidden" name="isAge18Plus" value="false" />
                            <input
                                name="isAge18Plus"
                                type="checkbox"
                                value="true"
                                defaultChecked
                                className="h-4 w-4 rounded accent-primary"
                            />
                            <span className="text-sm text-foreground">18+ only</span>
                        </label>
                    </div>

                    {/* Contact */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <Label htmlFor="contactPerson" required>Contact Person</Label>
                            <IconInput icon={User} error={getError(state.errors, "contact.contactPerson")}>
                                <input
                                    id="contactPerson"
                                    name="contactPerson"
                                    placeholder="e.g. Rahul Kumar"
                                    className={inputBase}
                                />
                            </IconInput>
                        </div>
                        <div>
                            <Label htmlFor="phoneNumber" required>Phone</Label>
                            <IconInput icon={Phone} error={getError(state.errors, "contact.phoneNumber")}>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    placeholder="+919876543210"
                                    className={inputBase}
                                />
                            </IconInput>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-2">
                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="flex items-center gap-1.5 rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground shadow-[var(--clay-shadow)] transition-all hover:bg-muted/10 active:shadow-[var(--shadow-button-inset)]"
                        >
                            <ChevronLeft className="h-4 w-4" /> Back
                        </button>
                        <button
                            type="submit"
                            disabled={isPending}
                            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-button)] transition-all hover:shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] active:shadow-[var(--shadow-button-inset)] disabled:opacity-50"
                        >
                            {isPending ? (
                                <>
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                                    Posting…
                                </>
                            ) : (
                                <>
                                    <Send className="h-4 w-4" /> Post Job
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
