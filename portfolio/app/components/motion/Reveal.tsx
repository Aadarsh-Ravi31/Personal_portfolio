"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { EASE, DURATION } from "./config";

type RevealProps = {
  children: React.ReactNode;
  /** Delay before the reveal starts (seconds). */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
  /** Animate only the first time it enters the viewport. */
  once?: boolean;
  /** Motion element tag to render. */
  as?: keyof typeof motion;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children">;

/**
 * Generic appear-on-scroll wrapper. Replaces the copy-pasted
 * initial/whileInView blocks across sections.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  as = "div",
  className,
  ...rest
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduceMotion) {
    return (
      <MotionTag className={className} {...rest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10%" }}
      transition={{ duration: DURATION.base, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
