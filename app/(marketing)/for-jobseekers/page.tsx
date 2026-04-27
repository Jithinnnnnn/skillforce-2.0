"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  CheckCircle, 
  Clock, 
  MapPin, 
  DollarSign, 
  Shield, 
  Users, 
  Star,
  ArrowRight,
  Briefcase,
  Calendar,
  TrendingUp,
  Award,
  Smartphone,
  Bell
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

const perks = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Work when you want, where you want. Choose shifts that fit your lifestyle and availability.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: DollarSign,
    title: "Daily Pay",
    description: "Get paid daily for completed shifts. No waiting for monthly paychecks - instant financial freedom.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: MapPin,
    title: "Local Opportunities",
    description: "Find work near you with our location-based matching. Reduce commute time and costs.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Shield,
    title: "Verified Employers",
    description: "All employers are background-checked and verified. Work with confidence and security.",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: TrendingUp,
    title: "Skill Development",
    description: "Build your resume with diverse experiences across different industries and roles.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Award,
    title: "Performance Rewards",
    description: "Earn bonuses and priority access to premium jobs based on your performance ratings.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

const jobCategories = [
  {
    title: "Customer Service",
    jobs: "1,247 jobs",
    rate: "$15-25/hr",
    description: "Help customers, handle inquiries, and provide excellent service experiences.",
  },
  {
    title: "Warehouse & Logistics",
    jobs: "892 jobs",
    rate: "$16-28/hr",
    description: "Package handling, inventory management, and distribution center operations.",
  },
  {
    title: "Field Operations",
    jobs: "634 jobs",
    rate: "$18-32/hr",
    description: "On-site work including delivery, installation, and field service roles.",
  },
  {
    title: "Administrative",
    jobs: "456 jobs",
    rate: "$14-22/hr",
    description: "Data entry, office support, and administrative assistance positions.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Customer Service Rep",
    rating: 5,
    text: "I've earned over $3,000 in my first month! The flexibility to choose my own hours while studying has been life-changing.",
    avatar: "SJ",
  },
  {
    name: "Mike Chen",
    role: "Warehouse Associate",
    rating: 5,
    text: "Daily pay is amazing. I can cover my expenses immediately and the work is always available when I need it.",
    avatar: "MC",
  },
  {
    name: "Lisa Rodriguez",
    role: "Field Technician",
    rating: 5,
    text: "The variety of jobs keeps things interesting. I've learned so many new skills and built an impressive resume.",
    avatar: "LR",
  },
];

const steps = [
  {
    step: "01",
    title: "Create Your Profile",
    description: "Sign up in 60 seconds with your basic info, skills, and availability preferences.",
    icon: Users,
  },
  {
    step: "02",
    title: "Get Matched",
    description: "Our AI matches you with local jobs that fit your skills, schedule, and location.",
    icon: Smartphone,
  },
  {
    step: "03",
    title: "Start Working",
    description: "Accept jobs, complete shifts, and get paid daily. Build your reputation for better opportunities.",
    icon: Briefcase,
  },
];

export default function ForJobSeekersPage() {
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
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 text-sm font-medium text-primary shadow-[var(--clay-shadow)] border border-primary/20"
          >
            <Users className="mr-2 h-4 w-4" />
            Join 12,000+ Job Seekers
          </motion.div>
          
          <motion.h1
            variants={fadeUp}
            className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Find Work That{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Fits Your Life
            </span>
          </motion.h1>
          
          <motion.p
            variants={fadeUp}
            className="text-lg text-slate-600 sm:text-xl leading-relaxed max-w-2xl"
          >
            Discover flexible job opportunities, get paid daily, and build your career on your terms. 
            Join thousands of workers who've found financial freedom through Skill Force.
          </motion.p>
          
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <Link
              href="/signup"
              className="group rounded-2xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-[var(--clay-shadow)] hover:shadow-[var(--shadow-button-inset)] transition-all duration-200 hover:scale-105"
            >
              Start Earning Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-2xl border border-white/60 bg-white/80 px-8 py-4 text-base font-semibold text-foreground shadow-[var(--clay-shadow)] hover:bg-white hover:shadow-[var(--shadow-button-inset)] transition-all duration-200"
            >
              How It Works
            </Link>
          </motion.div>
          
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center md:justify-start gap-8 text-sm text-slate-600"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>No experience required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span>Daily payments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-purple-500" />
              <span>Flexible schedule</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          className="relative flex-1 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-[32px] border border-white/60 bg-gradient-to-br from-white/90 to-white/60 p-8 shadow-[var(--clay-shadow)] backdrop-blur-sm">
            <div className="text-center space-y-6">
              <h3 className="text-xl font-bold text-slate-900">This Week's Earnings</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-4 shadow-[var(--clay-shadow)]">
                  <p className="text-xs text-slate-500 mb-1">Average Daily</p>
                  <p className="text-2xl font-bold text-primary">$127</p>
                  <p className="text-xs text-green-600">+15% vs last week</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 p-4 shadow-[var(--clay-shadow)]">
                  <p className="text-xs text-slate-500 mb-1">Top Earner</p>
                  <p className="text-2xl font-bold text-accent">$892</p>
                  <p className="text-xs text-blue-600">This week</p>
                </div>
              </div>
              
              <div className="rounded-2xl bg-gradient-to-r from-slate-50 to-white p-4 shadow-[var(--clay-shadow)] border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                    A
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-slate-700">Alex M. just earned</p>
                    <p className="text-lg font-bold text-primary">$156 today</p>
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

      {/* Job Categories */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Popular Job Categories
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Explore thousands of opportunities across different industries and skill levels
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {jobCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group rounded-[24px] border border-white/60 bg-gradient-to-br from-white/90 to-white/60 p-6 shadow-[var(--clay-shadow)] hover:shadow-[var(--shadow-button-inset)] transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900">{category.title}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {category.jobs}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-accent">{category.rate}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
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
            How to Get Started
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Start earning in just 3 simple steps. No lengthy applications or waiting periods.
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

      {/* Perks & Benefits */}
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
            Join thousands of workers who have transformed their careers with our platform
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={perk.title}
                className="group rounded-[24px] border border-white/60 bg-gradient-to-br from-white/90 to-white/60 p-8 shadow-[var(--clay-shadow)] hover:shadow-[var(--shadow-button-inset)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`inline-flex items-center justify-center rounded-2xl ${perk.bgColor} p-4 mb-6 shadow-[var(--clay-shadow)]`}>
                  <Icon className={`h-6 w-6 ${perk.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{perk.title}</h3>
                <p className="text-slate-600 leading-relaxed">{perk.description}</p>
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
            Success Stories
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Real stories from real people who found success with Skill Force
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
          
          <Bell className="h-16 w-16 text-primary relative z-10" />
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl relative z-10">
            Ready to Start Earning?
          </h2>
          <p className="max-w-3xl text-lg text-slate-600 leading-relaxed relative z-10">
            Join over 12,000 job seekers who are already earning daily with flexible work opportunities. 
            Sign up now and start your first shift this week!
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link
              href="/signup"
              className="group rounded-2xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-[var(--clay-shadow)] hover:shadow-[var(--shadow-button-inset)] transition-all duration-200 hover:scale-105"
            >
              Sign Up Free Today
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
              <span>Free to join</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-purple-500" />
              <span>Start immediately</span>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}