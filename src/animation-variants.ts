import { Variants } from "framer-motion";

// Fade in from bottom (optimized - removed blur)
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] // Custom easing for smoother feel
    },
  },
};

// Fade in from left (optimized)
export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    },
  },
};

// Fade in from right (optimized)
export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    },
  },
};

// Scale up animation
export const scaleUp: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    },
  },
};

// Container with stagger children (optimized)
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Item variants for stagger (optimized)
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    },
  },
};

// Slide in from bottom with bounce
export const slideInBounce: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      bounce: 0.3,
      duration: 0.6,
    },
  },
};
