"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal, TextReveal } from "./motion";

const WORDS = ["Software", "AI", "Data"];
const INTERVAL = 2200;

function CyclingWord() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % WORDS.length),
      INTERVAL
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="block overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={WORDS[index]}
          className="block"
          initial={reduceMotion ? { opacity: 0 } : { y: "100%" }}
          animate={reduceMotion ? { opacity: 1 } : { y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 md:px-10"
    >
      {/* Giant centered headline with a cycling first word */}
      <h1 className="text-center font-display font-bold uppercase tracking-tight leading-[0.85] text-[clamp(2.5rem,11vw,9rem)]">
        <CyclingWord />
        <TextReveal as="span" text="Engineer" className="block" delay={0.1} />
      </h1>

      {/* Two-column band: portrait left, write-up + pills right */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center max-w-4xl mx-auto w-full">
        {/* Portrait */}
        <Reveal y={20} delay={0.2} className="flex justify-center md:justify-end">
          <div className="relative w-56 sm:w-64 aspect-[4/5] rounded-[2rem] overflow-hidden border border-border shadow-lg">
            <Image
              src="/images/portfolio-picture.jpeg"
              alt="Aadarsh Ravi"
              fill
              priority
              sizes="(max-width: 640px) 224px, 256px"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        {/* Write-up */}
        <Reveal delay={0.3} className="text-center md:text-left font-serif">
          <h2 className="italic text-3xl sm:text-4xl">
            Hey, I&apos;m Aadarsh Ravi
          </h2>
          <p className="mt-4 text-muted text-lg sm:text-xl max-w-md mx-auto md:mx-0">
            I love turning ideas into real products — building AI &amp;
            data-driven applications across the full stack, from first prototype
            to production.
          </p>

          <div className="mt-8 flex gap-3 justify-center md:justify-start font-sans">
            <Link
              href="https://drive.google.com/file/d/1Yrw_fTMP2obVC8GmwQFXeiyT4EC5_oXR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full border border-foreground bg-foreground text-background font-medium hover:bg-transparent hover:text-foreground transition-colors"
            >
              Resume
            </Link>
            <Link
              href="/#projects"
              className="px-7 py-3 rounded-full border border-border text-foreground font-medium hover:border-foreground transition-colors"
            >
              View Work
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
