"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/skillforce",
      icon: Facebook,
    },
    {
      name: "Instagram", 
      href: "https://instagram.com/skillforce",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/skillforce",
      icon: Linkedin,
    },
  ];

  const quickLinks = [
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Categories", href: "/#categories" },
    { name: "Why Skill Force", href: "/#why-skill-force" },
    { name: "Get Started", href: "/signup" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[var(--bg-color)] to-slate-50 border-t border-white/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-[var(--clay-shadow)]">
                <span className="h-5 w-5 rounded-full bg-primary" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-slate-900">
                Skill Force
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Transform your workforce with our streamlined manpower platform. 
              Connecting job seekers, providers, and admins for faster, reliable hiring.
            </p>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-3 shadow-[var(--clay-shadow)]">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@skillforce.com</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-3 shadow-[var(--clay-shadow)]">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-3 shadow-[var(--clay-shadow)]">
                <MapPin className="h-4 w-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">Quick Links</h3>
            <div className="rounded-2xl bg-white/60 p-4 shadow-[var(--clay-shadow)]">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center gap-2 rounded-xl p-2 hover:bg-white/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">Support</h3>
            <div className="rounded-2xl bg-white/60 p-4 shadow-[var(--clay-shadow)]">
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center gap-2 rounded-xl p-2 hover:bg-white/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">Connect With Us</h3>
            <div className="rounded-2xl bg-white/60 p-4 shadow-[var(--clay-shadow)] space-y-4">
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[var(--clay-shadow)] text-slate-600 hover:text-primary hover:shadow-[var(--shadow-button-inset)] transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
              
              <div className="space-y-3">
                <p className="text-sm font-medium text-slate-900">Stay Updated</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Get the latest updates on new features and job opportunities.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-white/60 bg-white px-4 py-3 text-sm shadow-[var(--clay-shadow)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-slate-700 placeholder-slate-400"
                  />
                  <button className="w-full rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-[var(--clay-shadow)] hover:opacity-90 hover:shadow-[var(--shadow-button-inset)] transition-all">
                    Subscribe to Newsletter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 rounded-2xl bg-white/60 p-6 shadow-[var(--clay-shadow)]">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600">
              © {currentYear} Skill Force. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-600">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}