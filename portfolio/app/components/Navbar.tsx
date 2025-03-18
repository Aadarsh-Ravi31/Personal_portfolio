"use client"; // Ensure this runs on the client side in Next.js

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [hovered, setHovered] = useState<number | null>(null);

  const menuItems = [
    { name: "Expertise", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/contact" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-[#15212C] shadow-md py-6 ml-0">
      <div className="w-full flex justify-between items-center">
        {/* Title */}
        <h1 className="text-[24px] leading-[37px] font-bold font-funnel text-[#6ec1e4] ml-10">
          <Link href="/">Aadarsh Ravi</Link>
        </h1>

        {/* Navigation Links */}
        <div
          className="flex space-x-10 mr-10"
          onMouseLeave={() => setHovered(null)} // Reset state when leaving the menu area
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`transition-colors duration-300 ease-in-out font-roboto ${
                hovered === null
                  ? "text-white" // Default state: All links are white
                  : hovered === index
                  ? "text-white" // Hovered link stays white
                  : "text-gray-500" // Other links fade to gray
              }`}
              onMouseEnter={() => setHovered(index)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
