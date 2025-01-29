import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold text-gray-800">
          <Link href="/">Aadarsh Ravi</Link>
        </h1>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-gray-800">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
