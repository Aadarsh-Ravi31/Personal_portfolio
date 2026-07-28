import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getAllSlugs, getAdjacentProjects } from "@/app/lib/projects";
import ProjectDetail from "@/app/components/ProjectDetail";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Aadarsh Ravi`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.cover.src],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  return <ProjectDetail project={project} prev={prev} next={next} />;
}
