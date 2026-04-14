"use client";

import { motion, type Variants } from "framer-motion";
import {
  Shield,
  MapPin,
  Wallet,
  Zap,
  TrendingUp,
  UserCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "We background-check all workers.",
  },
  {
    icon: MapPin,
    title: "Location-Based Matching",
    description: "Get matched with work within your radius.",
  },
  {
    icon: Wallet,
    title: "Flexible Payments",
    description: "Daily wage settlements.",
  },
  {
    icon: Zap,
    title: "Instant Hiring",
    description: "Close the gap between need and fulfillment.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
} satisfies Variants;

const mockupVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
} satisfies Variants;

export function WhyUs() {
  return (
    <section
      id="why-skill-force"
      className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Why Skill Force
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-base text-muted-foreground">
          Build trust and get to work—verified workers, smart matching, and
          payments that keep pace with you.
        </p>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
        {/* Left: 2x2 benefit cards */}
        <div className="flex-1 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="flex flex-col rounded-[24px] border border-border bg-card p-6 shadow-[var(--clay-shadow)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[24px] bg-primary/10 text-primary shadow-[var(--clay-shadow)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Right: Dashboard mockup */}
        <motion.aside
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={mockupVariants}
          className="flex shrink-0 flex-col justify-center lg:w-[340px]"
        >
          <div className="rounded-[24px] border border-border bg-card p-6 shadow-[var(--clay-shadow)]">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Platform snapshot
            </p>
            <h3 className="mt-2 text-lg font-semibold text-foreground">
              Worker Reliability & Match Success
            </h3>

            <div className="mt-6 space-y-5">
              <div className="rounded-2xl bg-muted/10 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <UserCheck className="h-4 w-4 text-primary" />
                  Worker Reliability
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-primary">94%</span>
                  <span className="text-xs text-muted-foreground">
                    on-time completion
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted/20">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: "94%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-muted/10 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  Match Success
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-accent">87%</span>
                  <span className="text-xs text-muted-foreground">
                    first-match rate
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted/20">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "87%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Live metrics from Skill Force dashboards. Updated in real time.
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
