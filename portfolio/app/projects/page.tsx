import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ProjectCard
          title="Project 1"
          description="A web app built with Next.js and Tailwind CSS."
        />
        <ProjectCard
          title="Project 2"
          description="A real-time auction system with React and Node.js."
        />
      </div>
    </div>
  );
}
