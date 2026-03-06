"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, User, ChevronDown } from "lucide-react";
import { AuthSidebar } from "@/components/auth/AuthSidebar";
import { SocialLoginButtons } from "@/components/auth/SocialLoginButtons";
import { signupAction, type AuthState } from "@/lib/actions/authActions";

const initial: AuthState = { success: false };

export default function SignupPage() {
  const [state, formAction, pending] = useActionState(signupAction, initial);
  const [showPw, setShowPw] = useState(false);
  const [showCf, setShowCf] = useState(false);

  return (
    <div className="flex min-h-screen">
      <AuthSidebar />

      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm space-y-8">

          {/* Heading */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Create Account</h1>
            <p className="mt-2 text-sm text-muted-foreground">Join Skill Force and start connecting with opportunities today.</p>
          </div>

          {/* Form */}
          <form action={formAction} className="space-y-5">
            {state.error && <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600">{state.error}</p>}

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Full Name</label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input name="fullName" required placeholder="     Enter your full name" className="auth-input pl-10" autoComplete="name" />
              </div>
              {state.fieldErrors?.fullName && <p className="mt-1 text-xs text-red-500">{state.fieldErrors.fullName[0]}</p>}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input name="email" type="email" required placeholder="Enter your email" className="auth-input pl-10" autoComplete="email" />
              </div>
              {state.fieldErrors?.email && <p className="mt-1 text-xs text-red-500">{state.fieldErrors.email[0]}</p>}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input name="password" type={showPw ? "text" : "password"} required placeholder="Min 6 characters" className="auth-input pl-10 pr-10" autoComplete="new-password" />
                <button type="button" onClick={() => setShowPw(v => !v)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label="Toggle password">
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {state.fieldErrors?.password && <p className="mt-1 text-xs text-red-500">{state.fieldErrors.password[0]}</p>}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Confirm Password</label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input name="confirmPassword" type={showCf ? "text" : "password"} required placeholder="Re-enter your password" className="auth-input pl-10 pr-10" autoComplete="new-password" />
                <button type="button" onClick={() => setShowCf(v => !v)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label="Toggle password">
                  {showCf ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {state.fieldErrors?.confirmPassword && <p className="mt-1 text-xs text-red-500">{state.fieldErrors.confirmPassword[0]}</p>}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">I am a…</label>
              <div className="relative">
                <select name="role" required defaultValue="" className="auth-input appearance-none px-4 pr-10">
                  <option value="" disabled>Select your role</option>
                  <option value="jobseeker">Job Seeker</option>
                  <option value="jobprovider">Job Provider</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
              {state.fieldErrors?.role && <p className="mt-1 text-xs text-red-500">{state.fieldErrors.role[0]}</p>}
            </div>

            <button type="submit" disabled={pending} className="w-full rounded-2xl bg-[#008767] py-3 text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50">
              {pending ? "Creating account…" : "Sign Up"}
            </button>
          </form>

          {/* Social buttons (includes OR divider) */}
          <SocialLoginButtons />

          <p className="text-center text-sm text-muted-foreground">
            Already have an Account?{" "}
            <Link href="/login" className="font-semibold text-[#008767] hover:underline">Log in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}