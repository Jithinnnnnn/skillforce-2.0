"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { UserRole } from "@/lib/auth";

type NavLink = {
  href: string;
  label: string;
};

type NavbarProps = {
  role?: UserRole | "guest" | null;
  links?: NavLink[];
};

const marketingLinks: NavLink[] = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#categories", label: "Categories" },
  { href: "/#why-skill-force", label: "Why Skill Force" },
];

function getLinksForRole(role: UserRole | "guest" | null | undefined): NavLink[] {
  if (role === "admin") {
    return [
      { href: "/admin", label: "Admin" },
      { href: "/jobseeker", label: "Job Seekers" },
      { href: "/jobprovider", label: "Job Providers" },
    ];
  }

  if (role === "jobseeker") {
    return [
      { href: "/jobseeker", label: "My Jobs" },
      ...marketingLinks,
    ];
  }

  if (role === "jobprovider") {
    return [
      { href: "/jobprovider", label: "My Workforce" },
      ...marketingLinks,
    ];
  }

  return [{ href: "/", label: "Home" }, ...marketingLinks];
}

const clayLink =
  "rounded-2xl px-2 py-1 transition-colors hover:text-slate-900 hover:shadow-[var(--shadow-button-inset)]";

export function Navbar({ role = "guest", links }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const resolvedLinks = links ?? getLinksForRole(role ?? "guest");

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-40 flex justify-center px-4 sm:px-6 lg:px-8">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 22,
        }}
        className="pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-2xl bg-[var(--bg-color)] px-5 py-2.5 text-sm shadow-[var(--clay-shadow)] backdrop-blur-md"
        style={{
          backgroundColor: "rgba(249, 250, 251, 0.85)",
          boxShadow: "var(--clay-shadow)",
        }}
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white shadow-[var(--clay-shadow)]">
            <span className="h-4 w-4 rounded-full bg-[hsl(168,76%,32%)]" />
          </div>
          <span className="text-base font-semibold tracking-tight text-slate-900">
            Skill Force
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-xs font-medium text-slate-600 sm:flex sm:text-sm">
          {resolvedLinks.map((link) => {
            if (link.label === "Categories") {
              return (
                <div key={link.label} className="relative">
                  <button
                    type="button"
                    className={clayLink}
                    onClick={() => setCategoryOpen((v) => !v)}
                  >
                    Categories
                  </button>
                  <AnimatePresence>
                    {categoryOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-1/2 z-50 mt-3 w-48 -translate-x-1/2 rounded-2xl bg-[var(--bg-color)] p-3 text-xs shadow-[var(--clay-shadow)] backdrop-blur-md"
                      >
                        <Link
                          href="/jobseeker"
                          className={`block ${clayLink}`}
                          onClick={() => setCategoryOpen(false)}
                        >
                          Job Seeker
                        </Link>
                        <Link
                          href="/jobprovider"
                          className={`mt-1 block ${clayLink}`}
                          onClick={() => setCategoryOpen(false)}
                        >
                          Job Provider
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={clayLink}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          {role && role !== "guest" ? (
            <Link
              href={role === "admin" ? "/admin" : role === "jobseeker" ? "/jobseeker" : "/jobprovider"}
              className="hidden items-center gap-2 rounded-2xl border border-white/60 bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground shadow-[var(--clay-shadow)] hover:opacity-90 active:shadow-[var(--shadow-button-inset)] sm:inline-flex sm:text-sm"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/signup"
                className="hidden items-center gap-2 rounded-2xl border border-white/60 bg-primary px-4 py-1.5 text-xs font-medium text-white shadow-[var(--clay-shadow)] hover:opacity-90 active:shadow-[var(--shadow-button-inset)] sm:inline-flex sm:text-sm"
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="hidden rounded-2xl border border-border bg-[var(--bg-color)] px-4 py-1.5 text-xs font-medium text-foreground shadow-[var(--clay-shadow)] hover:bg-muted/10 sm:inline-flex sm:text-sm"
              >
                Log in
              </Link>
            </>
          )}



          <button
            type="button"
            className="inline-flex items-center justify-center rounded-2xl border border-white/70 bg-[var(--bg-color)] p-1.5 text-slate-600 shadow-[var(--clay-shadow)] sm:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto absolute top-16 w-full max-w-sm rounded-2xl bg-[var(--bg-color)] p-4 text-sm shadow-[var(--clay-shadow)] backdrop-blur-md sm:hidden"
          >
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-600">
              {resolvedLinks.map((link) => {
                if (link.label === "Categories") {
                  return (
                    <div key={link.label} className="space-y-1 rounded-2xl px-3 py-2">
                      <button
                        type="button"
                        className="w-full text-left"
                        onClick={() => setCategoryOpen((v) => !v)}
                      >
                        Categories
                      </button>
                      {categoryOpen && (
                        <div className="mt-2 space-y-1 pl-2 text-xs">
                          <Link
                            href="/jobseeker"
                            className={`block ${clayLink}`}
                            onClick={() => {
                              setCategoryOpen(false);
                              setOpen(false);
                            }}
                          >
                            Job Seeker
                          </Link>
                          <Link
                            href="/jobprovider"
                            className={`block ${clayLink}`}
                            onClick={() => {
                              setCategoryOpen(false);
                              setOpen(false);
                            }}
                          >
                            Job Provider
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clayLink}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <Link
                href="/signup"
                className="flex-1 rounded-2xl border border-white/60 bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground shadow-[var(--clay-shadow)] active:shadow-[var(--shadow-button-inset)]"
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-2xl border border-white/70 bg-[var(--bg-color)] p-2 text-slate-600 shadow-[var(--clay-shadow)]"
                aria-label="Log in"
              >
                Log in
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
