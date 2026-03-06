"use client";

import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import {
    ShieldCheck,
    Briefcase,
    CheckCircle,
    Banknote,
    Zap,
    MapPin,
    Users,
    BarChart3,
    Settings,
} from "lucide-react";

const seekerBullets = [
    { icon: MapPin, text: "Verified local opportunities" },
    { icon: Banknote, text: "Flexible daily payments" },
    { icon: Zap, text: "Rapid job matching" },
    { icon: ShieldCheck, text: "No hidden fees" },
];

const providerBullets = [
    { icon: Users, text: "Thousands of vetted workers" },
    { icon: BarChart3, text: "Real-time event tracking" },
    { icon: Settings, text: "Simplified logistics" },
    { icon: Zap, text: "Post jobs in minutes" },
];

const EASE_OUT: Easing = [0, 0, 0.2, 1];

const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: 0.3 + i * 0.15, duration: 0.5, ease: EASE_OUT },
    }),
};

export function AuthSidebar() {
    return (
        <>
            {/* ── Desktop sidebar ── */}
            <div className="relative hidden w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 text-white lg:flex lg:w-[480px] xl:w-[520px]">
                {/* Subtle decorative circles */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-500/8 blur-3xl" />

                {/* Top: Branding */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                            <span className="h-4 w-4 rounded-full bg-teal-400" />
                        </div>
                        <span className="text-lg font-semibold tracking-tight">
                            Skill Force
                        </span>
                    </div>

                    <h2 className="mt-10 text-2xl font-bold leading-tight tracking-tight">
                        Why Skill Force?
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        The fastest way to connect skilled workers with trusted employers — built for India&apos;s workforce.
                    </p>
                </motion.div>

                {/* Middle: Role cards */}
                <div className="mt-8 space-y-5">
                    {/* Job Seekers Card */}
                    <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                    >
                        <div className="mb-3 flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5 text-teal-400" />
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400">
                                For Job Seekers
                            </h3>
                        </div>
                        <p className="mb-4 text-xs text-slate-400">
                            Safety &amp; Speed — get paid daily, work with verified employers.
                        </p>
                        <ul className="space-y-2.5">
                            {seekerBullets.map(({ icon: Icon, text }) => (
                                <li key={text} className="flex items-center gap-3 text-sm text-slate-300">
                                    <Icon className="h-4 w-4 shrink-0 text-teal-400/80" />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Job Providers Card */}
                    <motion.div
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                    >
                        <div className="mb-3 flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-blue-400" />
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                                For Job Providers
                            </h3>
                        </div>
                        <p className="mb-4 text-xs text-slate-400">
                            Efficiency &amp; Quality — scale your operations instantly.
                        </p>
                        <ul className="space-y-2.5">
                            {providerBullets.map(({ icon: Icon, text }) => (
                                <li key={text} className="flex items-center gap-3 text-sm text-slate-300">
                                    <Icon className="h-4 w-4 shrink-0 text-blue-400/80" />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom: Trust badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="mt-8 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                >
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                    <span className="text-xs font-medium tracking-wide text-slate-300">
                        100% Verified Profiles
                    </span>
                </motion.div>
            </div>

            {/* ── Mobile banner ── */}
            <div className="flex flex-col gap-3 bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-6 text-white lg:hidden">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                        <span className="h-3.5 w-3.5 rounded-full bg-teal-400" />
                    </div>
                    <span className="text-base font-semibold tracking-tight">
                        Skill Force
                    </span>
                </div>
                <p className="text-sm text-slate-400">
                    Connect with verified opportunities &amp; trusted employers.
                </p>
                <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs font-medium text-slate-300">
                        100% Verified Profiles
                    </span>
                </div>
            </div>
        </>
    );
}
