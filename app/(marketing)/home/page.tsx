"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, ShieldCheck } from "lucide-react";
import { HowItWorks } from "@/components/features/HowItWorks";
import { WhyUs } from "@/components/features/WhyUs";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-[var(--bg-color)] via-slate-50 to-blue-50/30">
      {/* Hero */}
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-4 py-24 text-center sm:px-6 md:flex-row md:text-left lg:px-8 xl:gap-20">
        <motion.div
          className="flex-1 space-y-8"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-accent/10 to-primary/10 px-4 py-2 text-sm font-medium text-accent shadow-[var(--clay-shadow)] border border-accent/20"
          >
            ✨ Workforce, simplified
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Find Work.{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Hire Fast.</span>{" "}
            <span>Get It Done.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg text-slate-600 sm:text-xl leading-relaxed max-w-2xl"
          >
            Skill Force connects job seekers, providers, and admins in one
            streamlined manpower platform—built for speed, trust, and scale.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <a
              href="/signup"
              className="group rounded-2xl bg-gradient-to-r from-accent to-primary px-8 py-4 text-base font-semibold text-white shadow-[var(--clay-shadow)] hover:shadow-[var(--shadow-button-inset)] transition-all duration-200 hover:scale-105"
            >
              Start hiring today
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#how-it-works"
              className="rounded-2xl border border-white/60 bg-white/80 px-8 py-4 text-base font-semibold text-foreground shadow-[var(--clay-shadow)] hover:bg-white hover:shadow-[var(--shadow-button-inset)] transition-all duration-200"
            >
              How it works
            </a>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center md:justify-start gap-8 text-sm text-slate-600"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>No long contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>48h avg fill time</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span>94% success rate</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex-1 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="mx-auto rounded-[32px] border border-white/60 bg-gradient-to-br from-white/90 to-white/60 p-8 shadow-[var(--clay-shadow)] backdrop-blur-sm">
            <div className="flex items-center justify-between text-sm text-slate-600 mb-6">
              <span className="font-medium">Live workforce</span>
              <span className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Today
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center text-sm mb-6">
              <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-4 shadow-[var(--clay-shadow)]">
                <p className="text-xs text-slate-500 mb-2">Job seekers</p>
                <p className="text-2xl font-bold text-primary">1.2k</p>
                <p className="text-xs text-green-600 mt-1">+12% today</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 p-4 shadow-[var(--clay-shadow)]">
                <p className="text-xs text-slate-500 mb-2">Open roles</p>
                <p className="text-2xl font-bold text-accent">327</p>
                <p className="text-xs text-blue-600 mt-1">+8% today</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 p-4 shadow-[var(--clay-shadow)]">
                <p className="text-xs text-slate-500 mb-2">Avg. fill time</p>
                <p className="text-2xl font-bold text-slate-700">48h</p>
                <p className="text-xs text-purple-600 mt-1">-2h today</p>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-r from-slate-50 to-white p-4 shadow-[var(--clay-shadow)] border border-slate-100">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-xs font-bold">
                  N
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-600 italic">
                    "We cut hiring time in half and improved quality significantly."
                  </p>
                  <p className="text-xs font-medium text-slate-700 mt-2">Sarah Chen, Ops Lead at NovaWorks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements for visual appeal */}
          <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-[32px] bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl" />
          <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-[32px] bg-gradient-to-r from-accent/30 to-primary/30 blur-2xl" />
        </motion.div>
      </section>

      {/* How It Works — 3-step conversion funnel */}
      <HowItWorks />

      {/* Categories / Services */}
      <section
        id="categories"
        className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mb-16 text-center">
          <motion.h2 
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Built for every side of your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">workforce</span>
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg text-slate-600 sm:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Skill Force specializes in dynamic, on-demand manpower across
            multiple categories with verified professionals ready to deploy.
          </motion.p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          <motion.article
            className="group space-y-6 rounded-[32px] border border-white/60 bg-gradient-to-br from-white/90 to-white/60 p-8 shadow-[var(--clay-shadow)] hover:shadow-[var(--shadow-button-inset)] transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35 }}
          >
            <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 p-4 text-primary shadow-[var(--clay-shadow)] group-hover:shadow-[var(--shadow-button-inset)] transition-all">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Operations & Logistics
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Staff warehousing, on-ground ops, and logistics with vetted
              manpower ready to deploy at scale.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary font-medium">
              <span>Learn more</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.article>

          <motion.article
            className="group space-y-6 rounded-[32px] border border-white/60 bg-gradient-to-br from-white/90 to-white/60 p-8 shadow-[var(--clay-shadow)] hover:shadow-[var(--shadow-button-inset)] transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-accent/10 to-accent/5 p-4 text-accent shadow-[var(--clay-shadow)] group-hover:shadow-[var(--shadow-button-inset)] transition-all">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Customer & Field Teams
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Build reliable field, sales, and customer success squads without
              adding overhead or long-term commitments.
            </p>
            <div className="flex items-center gap-2 text-sm text-accent font-medium">
              <span>Learn more</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.article>

          <motion.article
            className="group space-y-6 rounded-[32px] border border-white/60 bg-gradient-to-br from-white/90 to-white/60 p-8 shadow-[var(--clay-shadow)] hover:shadow-[var(--shadow-button-inset)] transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-slate-200/80 to-slate-100 p-4 text-slate-700 shadow-[var(--clay-shadow)] group-hover:shadow-[var(--shadow-button-inset)] transition-all">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Compliance & Quality
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Track documentation, shifts, and performance from a single
              admin-ready dashboard with full compliance monitoring.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
              <span>Learn more</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Why Skill Force — trust & authority */}
      <WhyUs />

      {/* Call to action */}
      <section
        id="cta"
        className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
      >
        <motion.div
          className="relative flex flex-col items-center gap-8 rounded-[32px] border border-white/60 bg-gradient-to-br from-white/90 to-white/60 p-12 text-center shadow-[var(--clay-shadow)] overflow-hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl" />
          
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl relative z-10">
            Ready to transform your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">workforce?</span>
          </h2>
          <p className="max-w-3xl text-lg text-slate-600 leading-relaxed relative z-10">
            Start with a simple, role-based dashboard and grow into a complete
            manpower supply platform without rebuilding your stack. Join thousands of companies already using Skill Force.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a
              href="/signup"
              className="group rounded-2xl bg-gradient-to-r from-accent to-primary px-8 py-4 text-base font-semibold text-white shadow-[var(--clay-shadow)] hover:shadow-[var(--shadow-button-inset)] transition-all duration-200 hover:scale-105"
            >
              Create free account
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="/login"
              className="rounded-2xl border border-white/60 bg-white/80 px-8 py-4 text-base font-semibold text-foreground shadow-[var(--clay-shadow)] hover:bg-white hover:shadow-[var(--shadow-button-inset)] transition-all duration-200"
            >
              Log in
            </a>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-slate-600 relative z-10">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}