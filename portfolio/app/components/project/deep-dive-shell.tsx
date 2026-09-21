import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/app/lib/projects";

type Props = {
  project: Project;
  prev?: Project;
  next?: Project;
  children: React.ReactNode;
};

/**
 * Shared chrome for the bespoke, interview-grade project deep dives: a minimal
 * header (role · year · links), a capped cover, the project's deep-dive body,
 * then prev/next. Every project that opts into a deep dive renders through here
 * so the header and navigation stay identical; only the body differs.
 */
export default function DeepDiveShell({ project, prev, next, children }: Props) {
  return (
    <article className="pt-28 pb-24">
      <div className="shell">
        <Link
          href="/#projects"
          className="font-mono text-[11px] tracking-[0.14em] text-ink-soft uppercase transition-colors hover:text-ink"
        >
          &larr; All work
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-mono text-[10px] tracking-[0.18em] text-ink-faint uppercase">
              {project.role}
            </span>
            <span className="font-mono text-[10px] text-ink-faint">{project.year}</span>
          </div>

          <h1 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-measure text-lg text-ink-soft">
            {project.description}
          </p>

          {project.links.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {project.links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={
                    i === 0
                      ? "rounded-full border border-ink px-5 py-2.5 font-mono text-[11px] tracking-[0.14em] text-ink uppercase transition-colors hover:bg-ink hover:text-bg"
                      : "rounded-full border border-line px-5 py-2.5 font-mono text-[11px] tracking-[0.14em] text-ink-soft uppercase transition-colors hover:border-ink hover:text-ink"
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </header>

        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-brand border border-line">
          <div className="relative aspect-[2/1] w-full">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {children}

      {(prev || next) && (
        <nav
          aria-label="Project navigation"
          className="shell mt-20 flex flex-wrap justify-between gap-6 border-t border-line pt-8"
        >
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group">
              <span className="font-mono text-[10px] tracking-[0.18em] text-ink-faint uppercase">
                Previous
              </span>
              <p className="mt-1 font-serif text-lg transition-colors group-hover:text-accent">
                {prev.title}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/work/${next.slug}`} className="group text-right">
              <span className="font-mono text-[10px] tracking-[0.18em] text-ink-faint uppercase">
                Next
              </span>
              <p className="mt-1 font-serif text-lg transition-colors group-hover:text-accent">
                {next.title}
              </p>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
