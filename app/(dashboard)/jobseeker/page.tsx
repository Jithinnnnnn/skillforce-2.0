import { FileSearch, ListChecks, User } from "lucide-react";

export default function WorkerDashboardPage() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">
          Worker Dashboard
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Find jobs, track applications, and manage your profile.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--clay-shadow)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[var(--clay-shadow)]">
              <FileSearch className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-foreground">Browse Jobs</h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Placeholder: Search and filter jobs by location, wage, and skills.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--clay-shadow)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[var(--clay-shadow)]">
              <ListChecks className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-foreground">Applied Jobs</h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Placeholder: List of your applications with status (pending,
            shortlisted, hired).
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--clay-shadow)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[var(--clay-shadow)]">
              <User className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-foreground">Profile Management</h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Placeholder: Edit skills, location, availability, and documents.
          </p>
        </div>
      </div>
    </section>
  );
}
