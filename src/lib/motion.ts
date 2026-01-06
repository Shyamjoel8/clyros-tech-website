/**
 * Enterprise Motion System
 * 
 * Conservative, purposeful animations that signal quality without distraction.
 * Philosophy: "Motion confirms intent, it doesn't attract attention."
 */

import type { Variants } from "framer-motion";

/**
 * Fade in with subtle upward movement
 * Use for: Page sections, content blocks
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // Custom ease-out (smooth, not bouncy)
    },
  },
};

/**
 * Staggered children animation
 * Use for: Card grids, list items
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Delay between each child
      delayChildren: 0.1, // Initial delay before first child
    },
  },
};

/**
 * Individual stagger item
 * Use as child of staggerContainer
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Reduced motion for mobile/accessibility
 * Respects prefers-reduced-motion
 */
export const reduceMotion = (variants: Variants): Variants => {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
    };
  }
  return variants;
};
