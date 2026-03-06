"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { AuthSidebar } from "@/components/auth/AuthSidebar";
import { SocialLoginButtons } from "@/components/auth/SocialLoginButtons";
import { loginAction, type AuthState } from "@/lib/actions/authActions";

const IS_DEV = process.env.NODE_ENV === "development";
const initial: AuthState = { success: false };

function setDevCookies() {
  document.cookie = `skillforce_session=${encodeURIComponent(JSON.stringify({ userId: "dev-admin-001", email: "dev@skillforce.local" }))}; path=/`;
  document.cookie = `sf_role=jobprovider; path=/`;
}

export default function LoginPage() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(loginAction, initial);
  const [showPw, setShowPw] = useState(false);

  useEffect(() => { if (state.success) router.push("/jobprovider"); }, [state.success, router]);

  return (
    <div className="flex min-h-screen">
      <AuthSidebar />

      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm space-y-8">

          {/* Heading */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome Back!</h1>
            <p className="mt-2 text-sm text-muted-foreground">Sign in to access your dashboard and continue managing your workforce.</p>
          </div>

          {/* Form — fields first, then social */}
          <form action={formAction} className="space-y-5">
            {state.error && <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600">{state.error}</p>}

            {/* Email */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input name="email" type="email" required placeholder="      Enter your email" className="auth-input pl-10" autoComplete="email" />
              </div>
              {state.fieldErrors?.email && <p className="mt-1 text-xs text-red-500">{state.fieldErrors.email[0]}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input name="password" type={showPw ? "text" : "password"} required placeholder="      Enter your password" className="auth-input pl-10 pr-10" autoComplete="current-password" />
                <button type="button" onClick={() => setShowPw(v => !v)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label="Toggle password">
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <div className="mt-1.5 text-right">
                <Link href="/forgot-password" className="text-xs font-medium text-[#008767] hover:underline">Forgot Password?</Link>
              </div>
              {state.fieldErrors?.password && <p className="mt-1 text-xs text-red-500">{state.fieldErrors.password[0]}</p>}
            </div>

            {/* Submit */}
            <button type="submit" disabled={pending} className="w-full rounded-2xl bg-[#008767] py-3 text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50">
              {pending ? "Signing in…" : "Sign In"}
            </button>
          </form>

          {/* Social buttons (includes OR divider) */}
          <SocialLoginButtons />

          {/* Switch */}
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an Account?{" "}
            <Link href="/signup" className="font-semibold text-[#008767] hover:underline">Sign Up</Link>
          </p>

          {/* Dev bypass */}
          {IS_DEV && (
            <button onClick={() => { setDevCookies(); router.push("/jobprovider"); }} className="w-full rounded-2xl border-2 border-dashed border-amber-300/70 bg-amber-50/50 px-4 py-2 text-xs font-medium text-amber-600 hover:bg-amber-50">
              🚧 Dev Bypass → Dashboard
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
