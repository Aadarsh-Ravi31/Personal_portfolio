// Shared motion tokens so every primitive feels consistent.
import type { Transition } from "framer-motion";

// Signature easing used across the site (expo-out feel).
export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
} as const;

export const baseTransition: Transition = {
  duration: DURATION.base,
  ease: EASE,
};
