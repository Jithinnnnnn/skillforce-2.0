import type { ReactNode } from "react";
import { getSession } from "@/lib/auth";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default async function DashboardRouteLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getSession();
  const role = session?.role ?? null;

  return (
    <DashboardLayout role={role} title="JOB PROVIDER DASHBOARD">
      {children}
    </DashboardLayout>
  );
}
