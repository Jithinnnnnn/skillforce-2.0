"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type LoadingOverlayProps = {
  isLoading?: boolean;
};

export function LoadingOverlay({ isLoading = true }: LoadingOverlayProps) {
  const [visible, setVisible] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(timeout);
    }
    setVisible(true);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mx-4 rounded-2xl bg-card px-10 py-8 text-center shadow-lg"
          >
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Skill Force
            </h1>
            <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
              Transform your workforce with Skill Force
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


