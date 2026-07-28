"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ParallaxImageProps = {
  src: string;
  alt: string;
  /** Parallax strength: fraction of the container height to travel. */
  speed?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * next/image wrapped in a scroll-linked vertical parallax. The inner image
 * is over-scaled so the parallax shift never exposes empty edges.
 */
export default function ParallaxImage({
  src,
  alt,
  speed = 0.15,
  className,
  sizes = "100vw",
  priority = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yPct = speed * 100;
  const y = useTransform(scrollYProgress, [0, 1], [`-${yPct}%`, `${yPct}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="absolute inset-0"
        style={reduceMotion ? undefined : { y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover scale-125"
        />
      </motion.div>
    </div>
  );
}
