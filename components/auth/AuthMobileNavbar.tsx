"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function AuthMobileNavbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-(--bg-color)/95 backdrop-blur-md lg:hidden">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white shadow-(--clay-shadow)">
                        <span className="h-3 w-3 rounded-full bg-teal-500" />
                    </div>
                    <span className="text-base font-semibold text-slate-900">Skill Force</span>
                </Link>

                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-(--clay-shadow)"
                    aria-label="Toggle mobile navigation"
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {open && (
                <div className="border-t border-slate-200/70 bg-(--bg-color) px-4 py-4 shadow-(--clay-shadow)">
                    <nav className="flex flex-col gap-2 text-base font-medium text-slate-700">
                        <Link href="/" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 hover:bg-slate-100">Home</Link>
                        <Link href="/#how-it-works" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 hover:bg-slate-100">How It Works</Link>
                        <Link href="/#categories" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 hover:bg-slate-100">Categories</Link>
                        <Link href="/#why-skill-force" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 hover:bg-slate-100">Why Skill Force</Link>
                    </nav>
                    <div className="mt-4 flex items-center gap-2">
                        <Link
                            href="/signup"
                            onClick={() => setOpen(false)}
                            className="flex-1 rounded-xl bg-[#008767] px-4 py-2 text-center text-sm font-semibold text-white"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/login"
                            onClick={() => setOpen(false)}
                            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
                        >
                            Log in
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
