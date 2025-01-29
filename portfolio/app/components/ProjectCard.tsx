type ProjectCardProps = {
  title: string;
  description: string;
};

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
