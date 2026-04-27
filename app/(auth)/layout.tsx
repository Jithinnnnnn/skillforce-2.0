import type { ReactNode } from "react";
import { AuthMobileNavbar } from "@/components/auth/AuthMobileNavbar";

export const metadata = {
    title: "Sign In | Skill Force",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <AuthMobileNavbar />

            <div className="-mt-24 pt-16 lg:pt-0">{children}</div>
        </>
    );
}
