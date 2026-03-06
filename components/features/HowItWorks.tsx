"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Sign Up",
    description: "Create your profile in 60 seconds.",
  },
  {
    number: 2,
    title: "Match",
    description: "Advanced algorithm connects you with local opportunities.",
  },
  {
    number: 3,
    title: "Get to Work",
    description: "Verified jobs, instant payments, and 24/7 support.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          How It Works
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-base text-muted-foreground">
          Demystifying the process for both Employers and Workers—from signup to
          your first shift.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-3">
        {steps.map((step, i) => (
          <motion.article
            key={step.number}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={cardVariants}
            className="flex flex-col items-center rounded-[24px] border border-border bg-card p-8 text-center shadow-[var(--clay-shadow)]"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[24px] bg-primary/10 text-2xl font-bold text-primary shadow-[var(--clay-shadow)]">
              {step.number}
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
