"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, DURATION } from "./config";

type AsTag = "h1" | "h2" | "h3" | "h4" | "p" | "span";

type TextRevealProps = {
  /** The text to reveal, split by word. */
  text: string;
  as?: AsTag;
  className?: string;
  /** Per-word stagger (seconds). */
  stagger?: number;
  /** Delay before the first word rises. */
  delay?: number;
  once?: boolean;
};

/**
 * Majd-style line/word rise: each word sits inside a clipped mask and
 * rises into place with a stagger. Keeps the full text accessible
 * (the words are real text, not aria-hidden fragments).
 */
export default function TextReveal({
  text,
  as = "span",
  className,
  stagger = 0.05,
  delay = 0,
  once = true,
}: TextRevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];
  const words = text.split(" ");

  if (reduceMotion) {
    const StaticTag = as as AsTag;
    return <StaticTag className={className}>{text}</StaticTag>;
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden="true"
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            variants={{
              hidden: { y: "110%" },
              visible: { y: 0 },
            }}
            transition={{ duration: DURATION.base, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
