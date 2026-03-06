import { type Variants } from 'framer-motion';

/** Standard viewport options for all scroll-reveal animations */
// Lowering amount from 0.15 to 0.05 so it triggers earlier on long mobile screens
export const viewport = { once: true, amount: 0.05 } as const;

// Custom cubic-bezier easing — smooth deceleration
const ease = 'easeOut' as const;

/** Fade up — default for sections, headings, paragraphs */
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40, willChange: 'opacity, transform' },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease },
    },
};

/** Fade in from left */
export const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -40, willChange: 'opacity, transform' },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease },
    },
};

/** Fade in from right */
export const fadeRight: Variants = {
    hidden: { opacity: 0, x: 40, willChange: 'opacity, transform' },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease },
    },
};

/** Scale + fade — for badges, icons and small elements */
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.85, willChange: 'opacity, transform' },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.45, ease },
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
