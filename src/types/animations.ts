
import { Variants, Transition } from 'framer-motion';

// Standard animation variants
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const scaleVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 }
};

export const modalVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0, y: 50 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    y: 0
  },
  exit: { 
    scale: 0.9, 
    opacity: 0, 
    y: 50
  }
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

// Standard transitions
export const springTransition: Transition = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30
};

export const smoothTransition: Transition = {
  duration: 0.2
};

export const staggerTransition: Transition = {
  staggerChildren: 0.05,
  delayChildren: 0.1
};
