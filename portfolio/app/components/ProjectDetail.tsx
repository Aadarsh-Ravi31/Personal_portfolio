"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/app/lib/projects";
import { Reveal, TextReveal, ParallaxImage } from "./motion";

type ProjectDetailProps = {
  project: Project;
  prev?: Project;
  next?: Project;
};

export default function ProjectDetail({ project, prev, next }: ProjectDetailProps) {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomed(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <article className="pt-28 pb-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-10 font-mono text-sm"
        >
          <ArrowLeft size={16} /> Back to work
        </Link>

        {/* Title */}
        <header className="mb-8">
          <TextReveal
            as="h1"
            text={project.title}
            className="text-display-sm font-display font-bold tracking-tight"
          />
          <Reveal delay={0.1}>
            <p className="text-muted text-lg sm:text-2xl mt-4 max-w-2xl">
              {project.tagline}
            </p>
          </Reveal>
        </header>

        {/* Meta bar */}
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 border-y border-border py-5 mb-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Role
              </p>
              <p className="mt-1">{project.role}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Year
              </p>
              <p className="mt-1">{project.year}</p>
            </div>
            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-3 sm:ml-auto">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 border border-foreground bg-foreground text-background rounded-full px-5 py-2 text-sm font-medium hover:bg-transparent hover:text-foreground transition-colors"
                  >
                    {link.label} <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        {/* Cover */}
        <Reveal className="mb-10">
          <ParallaxImage
            src={project.cover.src}
            alt={project.cover.alt}
            className="w-full aspect-[3/2] rounded-2xl border border-border"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </Reveal>

        {/* Demo video */}
        {project.demoEmbedUrl && (
          <Reveal className="mb-14">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Demo
            </p>
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border bg-black">
              <iframe
                src={project.demoEmbedUrl}
                title={`${project.title} demo`}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </Reveal>
        )}

        {/* Tech pills */}
        <Reveal className="mb-14">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-3 py-1.5 text-sm font-medium text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <Reveal className="mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
              {project.metrics.map((m) => (
                <div key={m.label} className="bg-background p-6 text-center">
                  <p className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
                    {m.value}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted mt-2">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {/* System architecture diagram */}
        {project.architectureImage && (
          <Reveal className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                System Architecture
              </p>
              <button
                onClick={() => setZoomed(true)}
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors"
              >
                <Maximize2 size={13} /> Enlarge
              </button>
            </div>
            <button
              onClick={() => setZoomed(true)}
              aria-label="Enlarge system architecture diagram"
              className="block w-full rounded-2xl border border-border bg-white p-4 sm:p-6 overflow-x-auto cursor-zoom-in"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.architectureImage}
                alt={`${project.title} system architecture`}
                className="w-full min-w-[720px] h-auto"
              />
            </button>
          </Reveal>
        )}

        {/* Body — editorial two-column */}
        <div className="space-y-14">
          {project.body.map((section, i) => (
            <Reveal key={i}>
              <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-10 border-t border-border pt-8">
                {section.heading && (
                  <h2 className="font-mono text-xs uppercase tracking-widest text-muted md:pt-2">
                    {section.heading}
                  </h2>
                )}
                <div>
                  <p className="text-lg sm:text-xl leading-relaxed text-foreground/80">
                    {section.body}
                  </p>
                  {section.points && section.points.length > 0 && (
                    <ul className="mt-5 space-y-3">
                      {section.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-base sm:text-lg leading-relaxed text-foreground/80"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Prev / next nav */}
      {(prev || next) && (
        <nav className="max-w-5xl mx-auto px-0 mt-20 grid grid-cols-2 gap-4 border-t border-border pt-10">
          <div>
            {prev && (
              <Link
                href={`/work/${prev.slug}`}
                className="group inline-flex flex-col text-muted hover:text-foreground transition-colors"
              >
                <span className="font-mono text-xs uppercase tracking-widest inline-flex items-center gap-1">
                  <ArrowLeft size={14} /> Previous
                </span>
                <span className="text-lg font-display mt-1">{prev.title}</span>
              </Link>
            )}
          </div>
          <div className="text-right">
            {next && (
              <Link
                href={`/work/${next.slug}`}
                className="group inline-flex flex-col items-end text-muted hover:text-foreground transition-colors ml-auto"
              >
                <span className="font-mono text-xs uppercase tracking-widest inline-flex items-center gap-1">
                  Next <ArrowRight size={14} />
                </span>
                <span className="text-lg font-display mt-1">{next.title}</span>
              </Link>
            )}
          </div>
        </nav>
      )}

      {/* Fullscreen architecture zoom */}
      <AnimatePresence>
        {zoomed && project.architectureImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setZoomed(false)}
          >
            <button
              onClick={() => setZoomed(false)}
              aria-label="Close"
              className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white text-black hover:opacity-80 transition-opacity"
            >
              <X size={20} />
            </button>
            <div
              className="w-full h-full overflow-auto flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.architectureImage}
                alt={`${project.title} system architecture (enlarged)`}
                className="min-w-[900px] w-auto max-w-none rounded-lg bg-white"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
