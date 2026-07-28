"use client";

import { useRef } from "react";
import { useScroll, type MotionValue } from "framer-motion";

type StickySectionProps = {
  /** Render-prop receiving scroll progress (0→1) through the section. */
  children: (progress: MotionValue<number>) => React.ReactNode;
  /** Total scroll height of the section in vh (>100 gives the pin duration). */
  heightVh?: number;
  className?: string;
};

/**
 * Tall outer wrapper with an inner sticky viewport-height pane. Exposes the
 * scroll progress through the section so children can drive scroll-linked
 * transforms (pinned/horizontal/scrub effects).
 */
export default function StickySection({
  children,
  heightVh = 200,
  className,
}: StickySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} style={{ height: `${heightVh}vh` }} className={className}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {children(scrollYProgress)}
      </div>
    </div>
  );
}
