import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/app/lib/projects";
import ProjectCard from "@/app/components/ProjectCard";
import { Reveal } from "@/app/components/motion";

export const metadata: Metadata = {
  title: "Work | Aadarsh Ravi",
  description: "Selected projects across software, AI, and data engineering.",
};

export default function WorkPage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-10 font-mono text-sm"
        >
          <ArrowLeft size={16} /> Back home
        </Link>

        <h1 className="text-display-sm font-display font-bold tracking-tight mb-12 sm:mb-16">
          All Work
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
