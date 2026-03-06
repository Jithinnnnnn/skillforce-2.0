"use client";

import { useState } from "react";
import {
  Briefcase,
  Users,
  Plus,
  Calendar,
  MapPin,
  Clock,
  Banknote,
} from "lucide-react";
import { JobPostForm } from "@/components/features/jobprovider/JobPostForm";
import { SlideOverDrawer } from "@/components/shared/SlideOverDrawer";

/* ─── Placeholder data for active jobs table ─── */
const SAMPLE_JOBS: {
  id: string;
  title: string;
  location: string;
  dates: string;
  pay: string;
  status: "Active" | "Paused" | "Closed";
}[] = [];

/* ─── Status badge colors ─── */
const statusClasses: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Paused: "bg-amber-100 text-amber-700",
  Closed: "bg-gray-100 text-gray-500",
};

export default function JobProviderDashboardPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <section className="mx-auto max-w-5xl space-y-8 pb-12">
      {/* ═══════════ Hero: Post New Job CTA ═══════════ */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] sm:p-8">
        {/* Decorative gradient blob */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Your Work Desk
            </h2>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">
              Create job listings, manage applicants, and grow your workforce — all from one place.
            </p>
          </div>
          <button
            id="post-new-job-btn"
            onClick={() => setDrawerOpen(true)}
            className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-button)] transition-all hover:shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] active:shadow-[var(--shadow-button-inset)] sm:w-auto"
          >
            <Plus className="h-5 w-5" />
            Post New Job
          </button>
        </div>
      </div>

      {/* ═══════════ Quick Stats ═══════════ */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={Briefcase}
          label="Active Jobs"
          value="0"
          iconColor="text-primary"
          iconBg="bg-primary/10"
        />
        <StatCard
          icon={Users}
          label="Applications"
          value="0"
          iconColor="text-accent"
          iconBg="bg-accent/10"
        />
        <StatCard
          icon={Calendar}
          label="Upcoming Events"
          value="0"
          iconColor="text-violet-600"
          iconBg="bg-violet-100"
        />
        <StatCard
          icon={Clock}
          label="Pending Review"
          value="0"
          iconColor="text-rose-600"
          iconBg="bg-rose-100"
        />
      </div>

      {/* ═══════════ Active / Past Jobs Table ═══════════ */}
      <div className="rounded-2xl border border-border bg-card shadow-[var(--clay-shadow)]">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h3 className="text-base font-semibold text-foreground">
            Your Jobs
          </h3>
          <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
            {SAMPLE_JOBS.length} total
          </span>
        </div>

        {SAMPLE_JOBS.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[var(--clay-shadow)]">
              <Briefcase className="h-7 w-7" />
            </div>
            <p className="text-sm font-medium text-foreground">
              No jobs posted yet
            </p>
            <p className="mt-1 max-w-xs text-xs text-muted-foreground">
              Click &quot;Post New Job&quot; above to create your first job listing and start receiving applications.
            </p>
            <button
              onClick={() => setDrawerOpen(true)}
              className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
            >
              <Plus className="h-3.5 w-3.5" /> Create Your First Job
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="px-6 py-3 font-medium">Job Title</th>
                  <th className="px-6 py-3 font-medium">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Location
                    </span>
                  </th>
                  <th className="px-6 py-3 font-medium">Dates</th>
                  <th className="px-6 py-3 font-medium">
                    <span className="inline-flex items-center gap-1">
                      <Banknote className="h-3 w-3" /> Pay
                    </span>
                  </th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {SAMPLE_JOBS.map((job) => (
                  <tr
                    key={job.id}
                    className="transition-colors hover:bg-primary/[0.02]"
                  >
                    <td className="px-6 py-3.5 font-medium text-foreground">
                      {job.title}
                    </td>
                    <td className="px-6 py-3.5 text-muted-foreground">
                      {job.location}
                    </td>
                    <td className="px-6 py-3.5 text-muted-foreground">
                      {job.dates}
                    </td>
                    <td className="px-6 py-3.5 text-muted-foreground">
                      {job.pay}
                    </td>
                    <td className="px-6 py-3.5">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${statusClasses[job.status] ?? ""
                          }`}
                      >
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ═══════════ Slide-over Drawer ═══════════ */}
      <SlideOverDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Post New Job"
      >
        <JobPostForm onSuccess={() => setDrawerOpen(false)} />
      </SlideOverDrawer>
    </section>
  );
}

/* ─── Stat Card ─── */
function StatCard({
  icon: Icon,
  label,
  value,
  iconColor,
  iconBg,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  iconColor: string;
  iconBg: string;
}) {
  return (
    <div className="flex items-center gap-3.5 rounded-2xl border border-border bg-card p-4 shadow-[var(--clay-shadow)]">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconBg} ${iconColor} shadow-[var(--clay-shadow)]`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="text-xl font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
}
