"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  CheckCircle, 
  Clock, 
  Users, 
  DollarSign, 
  Shield, 
  Star,
  ArrowRight,
  Briefcase,
  TrendingUp,
  Award,
  Smartphone,
  Building,
  Target,
  Zap,
  BarChart3,
  UserCheck,
  Calendar
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const benefits = [
  {
    icon: Clock,
    title: "48-Hour Fill Rate",
    description: "Fill positions faster than traditional hiring. Our average job posting gets qualified candidates within 48 hours.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Pre-Verified Workers",
    description: "All workers are background-checked, skill-verified, and rated by previous employers for your peace of mind.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Hiring",
    description: "Save up to 60% on recruitment costs. No agency fees, no long-term contracts, pay only for completed work.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Users,
    title: "Scalable Workforce",
    description: "Scale your team up or down instantly. From single positions to entire departments, we've got you covered.",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track worker performance, completion rates, and quality metrics through our comprehensive dashboard.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Target,
    title: "Quality Guarantee",
    description: "94% job completion rate with satisfaction guarantee. If you're not happy, we'll find a replacement at no cost.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

const industries = [
  {
    title: "Retail & E-commerce",
    workers: "2,400+ workers",
    description: "Customer service, warehouse operations, inventory management, and seasonal support.",
    icon: Building,
  },
  {
    title: "Healthcare & Wellness",
    workers: "1,800+ workers",
    description: "Administrative support, patient care assistance, and facility maintenance staff.",
    icon: UserCheck,
  },
  {
    title: "Manufacturing",
    workers: "3,200+ workers",
    description: "Production line workers, quality control, packaging, and logistics coordination.",
    icon: Briefcase,
  },
  {
    title: "Technology",
    workers: "950+ workers",
    description: "Customer support, data entry, content moderation, and technical assistance roles.",
    icon: Smartphone,
  },
];

const testimonials = [
  {
    name: "David Martinez",
    role: "Operations Manager",
    company: "LogiFlow Solutions",
    rating: 5,
    text: "We filled 15 warehouse positions in 3 days during our peak season. The quality of workers exceeded our expectations.",
    avatar: "DM",
  },
  {
    name: "Jennifer Kim",
    role: "HR Director",
    company: "TechStart Inc",
    rating: 5,
    text: "Skill Force saved us $50,000 in recruitment costs this year. The platform is intuitive and the workers are reliable.",
    avatar: "JK",
  },
  {
    name: "Robert Chen",
    role: "Store Manager",
    company: "RetailMax",
    rating: 5,
    text: "Perfect for seasonal hiring. We can scale our team for holidays and scale back after. No long-term commitments needed.",
    avatar: "RC",
  },
];

const steps = [
  {
    step: "01",
    title: "Post Your Job",
    description: "Create detailed job postings with requirements, pay rates, and schedule preferences in minutes.",
    icon: Briefcase,
  },
  {
    step: "02",
    title: "Review Candidates",
    description: "Get matched with pre-verified candidates. Review profiles, ratings, and previous work history.",
    icon: Users,
  },
  {
    step: "03",
    title: "Hire & Manage",
    description: "Select your preferred candidates and manage their work through our integrated dashboard.",
    icon: Calendar,
  },
];

export default function ForJobProvidersPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-[var(--bg-color)] via-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-4 py-24 text-center sm:px-6 md:flex-row md:text-left lg:px-8 xl:gap-20">
        <motion.div
          className="flex-1 space-y-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-accent/10 to-primary/10 px-4 py-2 text-sm font-medium text-accent shadow-[var(--clay-shadow)] border border-accent/20"
          >
            <Building className="mr-2 h-4 w-4" />
            Trusted by 2,500+ Companies
          </motion.div>
          
          <motion.h1
            variants={fadeUp}
            className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Hire Quality Workers{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              In 48 Hours
            </span>
          </motion.h1>
          
          <motion.p
            variants={fadeUp}
            className="text-lg text-slate-600 sm:text-xl leading-relaxed max-w-2xl"
          >
            Skip the lengthy recruitment process. Access pre-verified, skilled workers ready to start immediately. 
            Scale your workforce up or down based on demand.
          </motion.p>
          
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <Link
              href="/signup"
              className="group rounded-2xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-[var(--clay-shadow)] hover:shadow-[var(--shadow-button-inset)] transition-all duration-200 hover:scale-105"
            >
              Post Your First Job
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-2xl border border-white/60 bg-white/80 px-8 py-4 text-base font-semibold text-foreground shadow-[var(--clay-shadow)] hover:bg-white hover:shadow-[var(--shadow-button-inset)] transition-all duration-200"
            >
              See How It Works
            </Link>
          </motion.div>
          
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center md:justify-start gap-8 text-sm text-slate-600"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>No upfront costs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span>48h average fill time</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-purple-500" />
              <span>94% success rate</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Dashboard */}
        <motion.div
          className="relative flex-1 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-[32px] border border-white/60 bg-gradient-to-br from-white/90 to-white/60 p-8 shadow-[var(--clay-shadow)] backdrop-blur-sm">
            <div className="text-center space-y-6">
              <h3 className="text-xl font-bold text-slate-900">This Month's Hiring</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-4 shadow-[var(--clay-shadow)]">
                  <p className="text-xs text-slate-500 mb-1">Positions Filled</p>
                  <p className="text-2xl font-bold text-primary">1,247</p>
                  <p className="text-xs text-green-600">+23% vs last month</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 p-4 shadow-[var(--clay-shadow)]">
                  <p className="text-xs text-slate-500 mb-1">Avg. Fill Time</p>
                  <p className="text-2xl font-bold text-accent">42h</p>
                  <p className="text-xs text-blue-600">-6h improvement</p>
                </div>
              </div>
              
              <div className="rounded-2xl bg-gradient-to-r from-slate-50 to-white p-4 shadow-[var(--clay-shadow)] border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                    L
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-slate-700">LogiFlow just hired</p>
                    <p className="text-lg font-bold text-primary">15 workers in 3 days</p>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-[32px] bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl" />
          <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-[32px] bg-gradient-to-r from-accent/30 to-primary/30 blur-2xl" />
        </motion.div>
      </section>

      {/* Industries We Serve */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            From startups to Fortune 500 companies, we provide skilled workers across all major industries
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                className="group rounded-[24px] border border-white/60 bg-gradient-to-br from-white/90 to-white/60 p-6 shadow-[var(--clay-shadow)] hover:shadow-[var(--shadow-button-inset)] transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center rounded-2xl bg-primary/10 p-3 shadow-[var(--clay-shadow)]">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                      {industry.workers}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900">{industry.title}</h3>
                  <p className="text-sm text-slate-600">{industry.description}</p>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It Works for Employers
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get your positions filled in 3 simple steps. No lengthy recruitment processes or agency fees.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[24px] bg-gradient-to-r from-primary to-accent shadow-[var(--clay-shadow)]">
                  <Icon className="h-8 w-8 text-white" />
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[var(--clay-shadow)] text-sm font-bold text-primary">
                    {step.step}
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-slate-300 mx-auto" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Skill Force?
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Join thousands of companies that have streamlined their hiring process with our platform
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                className="group rounded-[24px] border border-white/60 bg-gradient-to-br from-white/90 to-white/60 p-8 shadow-[var(--clay-shadow)] hover:shadow-[var(--shadow-button-inset)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`inline-flex items-center justify-center rounded-2xl ${benefit.bgColor} p-4 mb-6 shadow-[var(--clay-shadow)]`}>
                  <Icon className={`h-6 w-6 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Real feedback from companies that have transformed their hiring process
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="rounded-[24px] border border-white/60 bg-gradient-to-br from-white/90 to-white/60 p-8 shadow-[var(--clay-shadow)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                  <p className="text-xs text-slate-500">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          className="relative flex flex-col items-center gap-8 rounded-[32px] border border-white/60 bg-gradient-to-br from-white/90 to-white/60 p-12 text-center shadow-[var(--clay-shadow)] overflow-hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl" />
          
          <Zap className="h-16 w-16 text-primary relative z-10" />
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl relative z-10">
            Ready to Hire Faster?
          </h2>
          <p className="max-w-3xl text-lg text-slate-600 leading-relaxed relative z-10">
            Join over 2,500 companies that are already hiring quality workers in 48 hours or less. 
            Post your first job today and see the difference!
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link
              href="/signup"
              className="group rounded-2xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-[var(--clay-shadow)] hover:shadow-[var(--shadow-button-inset)] transition-all duration-200 hover:scale-105"
            >
              Post Your First Job Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/login"
              className="rounded-2xl border border-white/60 bg-white/80 px-8 py-4 text-base font-semibold text-foreground shadow-[var(--clay-shadow)] hover:bg-white hover:shadow-[var(--shadow-button-inset)] transition-all duration-200"
            >
              Already have an account?
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-slate-600 relative z-10">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-purple-500" />
              <span>Quality guarantee</span>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}