import { type Variants } from 'framer-motion';

/** Standard viewport options for all scroll-reveal animations */
// Set to 0.15 for better synchronization of staggered groups
export const viewport = { once: true, amount: 0.15 } as const;

// Custom cubic-bezier easing — smooth deceleration
const ease = 'easeOut' as const;

/** Fade up — default for sections, headings, paragraphs */
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20, willChange: 'opacity, transform' },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease },
    },
};

/** Fade in from left (Converted to FadeUp for cohesion) */
export const fadeLeft: Variants = {
    hidden: { opacity: 0, y: 20, willChange: 'opacity, transform' },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease },
    },
};

/** Fade in from right (Converted to FadeUp for cohesion) */
export const fadeRight: Variants = {
    hidden: { opacity: 0, y: 20, willChange: 'opacity, transform' },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease },
    },
};

/** Scale + fade — for badges, icons and small elements */
export const scaleIn: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95, willChange: 'opacity, transform' },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease },
    },
};

/**
 * Container that staggers its children.
 * @example staggerContainer(0.12) → each child appears 120ms after the previous
 */
export const staggerContainer = (stagger = 0.1, delayChildren = 0): Variants => ({
    hidden: {},
    visible: {
        transition: {
            staggerChildren: stagger,
            delayChildren,
        },
    },
});
