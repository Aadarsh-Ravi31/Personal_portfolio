"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const SCROLL_THRESHOLD = 60;

export default function Navbar() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 py-4 transition-all duration-200 ease-out ${
        isScrolled
          ? "bg-[#15212C] dark:bg-gray-950 shadow-lg border-b border-gray-800/50"
          : "bg-transparent shadow-none border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-10">
        {/* Title */}
        <h1
          className={`text-xl sm:text-[24px] font-bold font-funnel transition-colors ${
            !isScrolled && theme === "light"
              ? "text-[#15212C] hover:text-[#4998A9]"
              : "text-[#6ec1e4] hover:text-[#4998A9] dark:hover:text-[#7ed4f5]"
          }`}
        >
          <Link href="#hero">Aadarsh Ravi</Link>
        </h1>

        <div className="flex items-center gap-4 md:gap-0">
        {/* Desktop Nav - theme toggle at end with equal spacing */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10" onMouseLeave={() => setHovered(null)}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`transition-colors duration-300 ease-in-out font-roboto ${
                !isScrolled && theme === "light"
                  ? hovered === index
                    ? "text-[#4998A9]"
                    : "text-gray-800"
                  : hovered === null
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
          {/* Theme Toggle - at end with equal spacing */}
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#6ec1e4] focus:ring-offset-2 focus:ring-offset-transparent ${
              isScrolled
                ? "bg-gray-700/50 dark:bg-gray-800/50 text-white hover:bg-gray-600/50 dark:hover:bg-gray-700/50 dark:focus:ring-offset-gray-950"
                : !isScrolled && theme === "light"
                ? "bg-gray-800/20 text-gray-800 hover:bg-gray-800/30 backdrop-blur-sm"
                : "bg-black/20 dark:bg-white/10 text-white hover:bg-black/30 dark:hover:bg-white/20 backdrop-blur-sm"
            }`}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile: Hamburger + Theme */}
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={toggleTheme}
            className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#6ec1e4] ${
              !isScrolled && theme === "light"
                ? "text-gray-800 hover:bg-gray-800/20"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#6ec1e4] ${
              !isScrolled && theme === "light"
                ? "text-gray-800 hover:bg-gray-800/20"
                : "text-white hover:bg-gray-700/50 dark:hover:bg-white/10"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? "max-h-72 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        } transform`}
      >
        <div
          className={`flex flex-col items-end px-4 sm:px-6 pt-4 pb-4 space-y-4 transition-all duration-300 ease-in-out ${
            isScrolled
              ? "bg-[#15212C] dark:bg-gray-950 border-t border-gray-800/50"
              : theme === "light"
              ? "bg-white/95 backdrop-blur-xl border-t border-gray-200/50"
              : "bg-black/60 backdrop-blur-xl border-t border-white/10"
          }`}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`font-roboto text-base ${
                !isScrolled && theme === "light" ? "text-gray-800" : "text-white"
              }`}
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
