"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Animated section wrapper for enterprise pages
 * Applies subtle fade-in with upward movement
 */
export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // Trigger before fully in view
      variants={fadeInUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
