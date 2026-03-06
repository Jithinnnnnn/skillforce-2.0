"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";

type ToastProps = {
    message: string;
    variant?: "success" | "error";
    /** Auto-dismiss duration in ms (default 4000) */
    duration?: number;
    onClose: () => void;
};

export function Toast({
    message,
    variant = "success",
    duration = 4000,
    onClose,
}: ToastProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);
        return () => clearTimeout(timer);
    }, [duration]);

    const isSuccess = variant === "success";

    const bgClass = isSuccess
        ? "bg-emerald-50 border-emerald-300 text-emerald-800"
        : "bg-red-50 border-red-300 text-red-800";

    const Icon = isSuccess ? CheckCircle : XCircle;

    return (
        <AnimatePresence onExitComplete={onClose}>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: -30, x: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, x: 30, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`fixed right-4 top-4 z-50 flex max-w-sm items-center gap-3 rounded-2xl border px-5 py-3.5 shadow-lg ${bgClass}`}
                >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span className="text-sm font-medium">{message}</span>
                    <button
                        onClick={() => setVisible(false)}
                        className="ml-auto shrink-0 rounded-full p-1 transition-colors hover:bg-black/5"
                        aria-label="Dismiss"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
