"use client";

import Link from "next/link";

type DashboardHeaderProps = {
  title?: string;
};

export function DashboardHeader({ title = "Dashboard" }: DashboardHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-border px-4 py-3">
      <h1 className="text-base font-medium text-foreground">{title}</h1>
      <Link
        href="/"
        className="rounded-2xl px-3 py-1.5 text-sm text-muted-foreground shadow-[var(--clay-shadow)] transition-colors hover:bg-card hover:text-foreground"
      >
        Home
      </Link>
    </header>
  );
}
