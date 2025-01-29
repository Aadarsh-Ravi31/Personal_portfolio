import Hero from './components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">My Projects</h2>
        <p className="text-gray-600 mt-2">
          Explore some of the projects I’ve worked on.
        </p>
      </div>
    </div>
  );
}
