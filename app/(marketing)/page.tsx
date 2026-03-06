"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, ShieldCheck } from "lucide-react";
import { HowItWorks } from "@/components/features/HowItWorks";
import { WhyUs } from "@/components/features/WhyUs";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function MarketingHome() {
  return (
    <main className="flex min-h-screen flex-col bg-[var(--bg-color)]">
      {/* Hero */}
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-4 py-20 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        <motion.div
          className="flex-1 space-y-6"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center rounded-2xl bg-accent/10 px-3 py-1 text-xs font-medium text-accent shadow-[var(--clay-shadow)] sm:text-sm"
          >
            Workforce, simplified
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Find Work.{" "}
            <span className="text-accent">Hire Fast.</span>{" "}
            <span>Get It Done.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-base text-muted-foreground sm:text-lg"
          >
            Skill Force connects job seekers, providers, and admins in one
            streamlined manpower platform—built for speed, trust, and scale.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-2 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <a
              href="/signup"
              className="rounded-2xl bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground shadow-[var(--clay-shadow)] hover:opacity-90"
            >
              Start hiring today
            </a>
            <a
              href="#how-it-works"
              className="rounded-2xl border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground shadow-[var(--clay-shadow)] hover:bg-muted/10"
            >
              How it works
            </a>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-xs text-muted-foreground sm:text-sm"
          >
            No long contracts. Start with one role and scale up as your
            workforce grows.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="mx-auto max-w-xs rounded-[24px] border border-border bg-card p-5 shadow-[var(--clay-shadow)]">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Live workforce</span>
              <span>Today</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-2xl bg-primary/10 p-3 shadow-[var(--clay-shadow)]">
                <p className="text-[10px] text-muted-foreground">Job seekers</p>
                <p className="mt-1 text-sm font-semibold text-primary">1.2k</p>
              </div>
              <div className="rounded-2xl bg-accent/10 p-3 shadow-[var(--clay-shadow)]">
                <p className="text-[10px] text-muted-foreground">Open roles</p>
                <p className="mt-1 text-sm font-semibold text-accent">327</p>
              </div>
              <div className="rounded-2xl bg-muted/10 p-3 shadow-[var(--clay-shadow)]">
                <p className="text-[10px] text-muted-foreground">Avg. fill time</p>
                <p className="mt-1 text-sm font-semibold text-foreground">48h</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-2xl bg-muted/10 p-3 text-xs shadow-[var(--clay-shadow)]">
              <span className="text-muted-foreground">
                “We cut hiring time in half.”
              </span>
              <span className="font-medium">Ops Lead, NovaWorks</span>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-6 -left-4 hidden h-24 w-24 rounded-[24px] bg-primary/20 blur-2xl lg:block" />
          <div className="pointer-events-none absolute -top-6 -right-6 hidden h-24 w-24 rounded-[24px] bg-accent/30 blur-2xl lg:block" />
        </motion.div>
      </section>

      {/* How It Works — 3-step conversion funnel */}
      <HowItWorks />

      {/* Categories / Services */}
      <section
        id="categories"
        className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Built for every side of your workforce
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Skill Force specializes in dynamic, on-demand manpower across
            multiple categories.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <motion.article
            className="space-y-3 rounded-[24px] border border-border bg-card p-6 shadow-[var(--clay-shadow)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35 }}
          >
            <div className="inline-flex items-center justify-center rounded-2xl bg-primary/10 p-2 text-primary shadow-[var(--clay-shadow)]">
              <Briefcase className="h-4 w-4" />
            </div>
            <h3 className="text-base font-semibold text-foreground">
              Operations & Logistics
            </h3>
            <p className="text-sm text-muted-foreground">
              Staff warehousing, on-ground ops, and logistics with vetted
              manpower ready to deploy.
            </p>
          </motion.article>

          <motion.article
            className="space-y-3 rounded-[24px] border border-border bg-card p-6 shadow-[var(--clay-shadow)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            <div className="inline-flex items-center justify-center rounded-2xl bg-primary/10 p-2 text-primary shadow-[var(--clay-shadow)]">
              <Users className="h-4 w-4" />
            </div>
            <h3 className="text-base font-semibold text-foreground">
              Customer & Field Teams
            </h3>
            <p className="text-sm text-muted-foreground">
              Build reliable field, sales, and customer success squads without
              adding overhead.
            </p>
          </motion.article>

          <motion.article
            className="space-y-3 rounded-[24px] border border-border bg-card p-6 shadow-[var(--clay-shadow)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <div className="inline-flex items-center justify-center rounded-2xl bg-primary/10 p-2 text-primary shadow-[var(--clay-shadow)]">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <h3 className="text-base font-semibold text-foreground">
              Compliance & Quality
            </h3>
            <p className="text-sm text-muted-foreground">
              Track documentation, shifts, and performance from a single
              admin-ready dashboard.
            </p>
          </motion.article>
        </div>
      </section>

      {/* Why Skill Force — trust & authority */}
      <WhyUs />

      {/* Call to action */}
      <section
        id="cta"
        className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <motion.div
          className="flex flex-col items-center gap-6 rounded-[24px] border border-border bg-card p-10 text-center shadow-[var(--clay-shadow)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Ready to transform your workforce?
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Start with a simple, role-based dashboard and grow into a complete
            manpower supply platform without rebuilding your stack.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/signup"
              className="rounded-2xl bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground shadow-[var(--clay-shadow)] hover:opacity-90"
            >
              Create free account
            </a>
            <a
              href="/login"
              className="rounded-2xl border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground shadow-[var(--clay-shadow)] hover:bg-muted/10"
            >
              Log in
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
