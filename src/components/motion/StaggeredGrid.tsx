"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import type { ReactNode } from "react";

interface StaggeredGridProps {
  children: ReactNode;
  className?: string;
}

/**
 * Grid container with staggered child animations
 * Use for: Card grids, feature lists
 */
export function StaggeredGrid({ children, className }: StaggeredGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual grid item (child of StaggeredGrid)
 */
export function StaggeredItem({ children, className }: StaggeredGridProps) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
