import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import { getProject, getAllSlugs, getAdjacentProjects } from "@/app/lib/projects";
import ProjectDetail from "@/app/components/ProjectDetail";
import DeepDiveShell from "@/app/components/project/deep-dive-shell";
import { PodcastIQDeepDive } from "@/app/components/project/podcastiq-deep-dive";
import { DocuparseDeepDive } from "@/app/components/project/docuparse-deep-dive";
import { SageDeepDive } from "@/app/components/project/sage-deep-dive";
import { ReflexaiDeepDive } from "@/app/components/project/reflexai-deep-dive";
import { ImdbDeepDive } from "@/app/components/project/imdb-deep-dive";
import { FoodInspectionDeepDive } from "@/app/components/project/food-inspection-deep-dive";
import { MultiAgentCodegenDeepDive } from "@/app/components/project/multiagent-codegen-deep-dive";

// Projects that ship a bespoke, interview-grade deep dive instead of the
// generic editorial detail renderer. Add a slug here when its deep-dive
// component lands.
const DEEP_DIVES: Record<string, ComponentType> = {
  podcastiq: PodcastIQDeepDive,
  docuparse: DocuparseDeepDive,
  "multi-agent-codegen": MultiAgentCodegenDeepDive,
  "sage-compliance-assistant": SageDeepDive,
  reflexai: ReflexaiDeepDive,
  "imdb-analytics-pipeline": ImdbDeepDive,
  "food-inspection-analytics": FoodInspectionDeepDive,
};

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

  const DeepDive = DEEP_DIVES[slug];
  if (DeepDive) {
    return (
      <DeepDiveShell project={project} prev={prev} next={next}>
        <DeepDive />
      </DeepDiveShell>
    );
  }

  return <ProjectDetail project={project} prev={prev} next={next} />;
}
