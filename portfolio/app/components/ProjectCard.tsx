import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/app/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-border bg-foreground/[0.02]">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
          {project.title}
        </h3>
        <p className="text-muted mt-1">{project.tagline}</p>
      </div>
    </Link>
  );
}
