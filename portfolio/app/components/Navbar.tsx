"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const menuItems = [
    { name: "Expertise", href: "#expertise" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/contact" },
    { name: "Contact", href: "/contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  if (!hydrated) return null;

  return (
    <nav className="bg-[#15212C] shadow-md py-4 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-6 md:px-10">
        {/* Title */}
        <h1 className="text-[24px] font-bold font-funnel text-[#6ec1e4] hover:text-[#4998A9]">
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
          >
            Aadarsh Ravi
          </a>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10" onMouseLeave={() => setHovered(null)}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
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
            </a>
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
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-white font-roboto text-base"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
