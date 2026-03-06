"use client";

import Link from "next/link";
import type { UserRole } from "@/lib/auth";

type SidebarProps = {
  role: UserRole | null;
};

const brandLabel = "Skill Force";

/**
 * Route definitions kept for internal testing reference.
 * These are intentionally NOT rendered in the sidebar UI.
 *
 * Admin:        /admin
 * Job Seekers:  /jobseeker
 * Job Providers: /jobprovider
 */

export function Sidebar({ role: _role }: SidebarProps) {
  return (
    <aside className="hidden w-64 shrink-0 p-4 md:block">
      <Link
        href="/"
        className="mb-6 block text-lg font-semibold text-foreground"
      >
        {brandLabel}
      </Link>
    </aside>
  );
}
