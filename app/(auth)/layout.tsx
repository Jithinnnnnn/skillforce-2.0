import type { ReactNode } from "react";

export const metadata = {
    title: "Sign In | Skill Force",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <>
            {/* Hide the root-level Navbar and reset the pt-24 padding for auth pages */}
            <style>{`
        nav { display: none !important; }
        .pt-24 { padding-top: 0 !important; }
      `}</style>
            {children}
        </>
    );
}
