/**
 * Server-side auth helpers. Session/role are read from cookies.
 * Do not hardcode secrets; use process.env for JWT signing keys in production.
 */

export type UserRole = "admin" | "jobseeker" | "jobprovider";

export type Session = {
  userId: string;
  email: string;
  role: UserRole;
};

const SESSION_COOKIE = process.env.SESSION_COOKIE_NAME ?? "skillforce_session";
const ROLE_COOKIE = process.env.ROLE_COOKIE_NAME ?? "sf_role";

/**
 * Parse role from cookie value. Used by middleware (Edge) and server components.
 */
export function getRoleFromCookie(cookieValue: string | undefined): UserRole | null {
  if (!cookieValue) return null;
  const role = cookieValue.trim().toLowerCase();
  if (role === "admin" || role === "jobseeker" || role === "jobprovider") return role;
  return null;
}

/**
 * Get session from request cookies (for middleware / Edge).
 */
export function getSessionFromRequest(cookieHeader: string | undefined): Session | null {
  if (!cookieHeader) return null;
  const sessionCookie = parseCookie(cookieHeader, SESSION_COOKIE);
  const roleCookie = parseCookie(cookieHeader, ROLE_COOKIE);
  if (!sessionCookie) return null;
  const role = getRoleFromCookie(roleCookie);
  if (!role) return null;
  try {
    const payload = JSON.parse(decodeURIComponent(sessionCookie)) as { userId?: string; email?: string };
    if (payload?.userId && payload?.email) {
      return { userId: payload.userId, email: payload.email, role };
    }
  } catch {
    // ignore invalid JSON
  }
  return null;
}

function parseCookie(header: string, name: string): string | undefined {
  const match = header.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? match[1].trim() : undefined;
}

/**
 * Get session in Server Components (using cookies() from next/headers).
 * Returns null if not authenticated.
 */
export async function getSession(): Promise<Session | null> {
  const { cookies } = await import("next/headers");
  const store = await cookies();
  const sessionRaw = store.get(SESSION_COOKIE)?.value;
  const roleRaw = store.get(ROLE_COOKIE)?.value;
  if (!sessionRaw) return null;
  const role = getRoleFromCookie(roleRaw);
  if (!role) return null;
  try {
    const payload = JSON.parse(decodeURIComponent(sessionRaw)) as { userId?: string; email?: string };
    if (payload?.userId && payload?.email) {
      return { userId: payload.userId, email: payload.email, role };
    }
  } catch {
    // ignore
  }
  return null;
}
