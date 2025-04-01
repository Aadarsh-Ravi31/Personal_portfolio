"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const menuItems = [
    { name: "Expertise", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/contact" },
    { name: "Contact", href: "/contact" },
  ];

  if (!hydrated) return null;

  return (
    <nav className="bg-[#15212C] shadow-md py-4 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-6 md:px-10">
        {/* Title */}
        <h1 className="text-[24px] font-bold font-funnel text-[#6ec1e4] hover:text-[#4998A9]">
          <Link href="/">Aadarsh Ravi</Link>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10" onMouseLeave={() => setHovered(null)}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`transition-colors duration-300 ease-in-out font-roboto ${
                hovered === null
                  ? "text-white"
                  : hovered === index
                  ? "text-white"
                  : "text-gray-500"
              }`}
              onMouseEnter={() => setHovered(index)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white pr-1">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu with clean slide-down and fade-in */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        } transform`}
      >
        <div className="flex flex-col items-end px-6 pt-4 space-y-4 bg-[#15212C] transition-all duration-300 ease-in-out">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white font-roboto text-base"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
