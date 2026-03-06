import type { ReactNode } from "react";
import type { UserRole } from "@/lib/auth";
import { Sidebar } from "@/components/layout/Sidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

type DashboardLayoutProps = {
  children: ReactNode;
  role: UserRole | null;
  title?: string;
};

export function DashboardLayout({
  children,
  role,
  title = "Dashboard",
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[var(--bg-color)] text-foreground">
      <Sidebar role={role} />
      <div className="flex flex-1 flex-col">
        <DashboardHeader title={title} />
        <main className="flex-1 px-4 py-6">{children}</main>
      </div>
    </div>
  );
}
