"use client";
import { ArrowUpRight } from "lucide-react";
import { Reveal, TextReveal } from "./motion";

const EMAIL = "aadarsh.ravi13@gmail.com";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aadarsh-ravi/" },
  { label: "GitHub", href: "https://github.com/Aadarsh-Ravi31" },
  { label: "Email", href: `mailto:${EMAIL}` },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-background pt-24 pb-16 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-10 sm:mb-14">
            (04) &nbsp; Contact
          </p>
        </Reveal>

        <h2 className="text-center font-display font-bold uppercase tracking-tight leading-[0.85] text-[clamp(2.5rem,12vw,11rem)]">
          <TextReveal as="span" text="Let's" className="block" />
          <TextReveal as="span" text="Talk" className="block" delay={0.1} />
        </h2>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-2 text-xl sm:text-3xl font-display border-b border-border hover:border-foreground pb-1 transition-colors"
          >
            {EMAIL}
            <ArrowUpRight
              className="transition-transform duration-300 group-hover:rotate-45"
              size={28}
            />
          </a>
        </Reveal>

        <Reveal
          delay={0.3}
          className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-muted hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              {s.label} <ArrowUpRight size={12} />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
