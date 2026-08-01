import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/app/lib/projects";
import { Reveal } from "./motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-background py-20 sm:py-28 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
                (02) &nbsp; Work
              </p>
            </Reveal>
            <Reveal>
              <h2 className="text-display-sm font-display font-bold tracking-tight leading-[0.9]">
                Featured Projects
              </h2>
            </Reveal>
          </div>
          <Reveal>
            <Link
              href="/work"
              className="group shrink-0 inline-flex items-center gap-2 border border-border rounded-full px-5 py-2.5 text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              View All Work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </Link>
          </Reveal>
        </div>

        {/* Grid — first 4 on home; full list lives on /work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {projects.slice(0, 4).map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
