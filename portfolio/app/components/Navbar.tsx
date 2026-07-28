"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, X, MoreHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const menuItems = [
  { name: "Expertise", href: "/#expertise" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Close the mobile menu on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const ThemeIcon = theme === "light" ? Moon : Sun;

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-3xl">
        <div className="bg-foreground text-background rounded-[28px] shadow-xl">
          {/* Top row */}
          <div className="flex items-center justify-between gap-4 pl-6 pr-3 py-3">
            <Link
              href="/#hero"
              className="font-display font-bold text-lg tracking-tight"
              onClick={() => setOpen(false)}
            >
              Aadarsh Ravi
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1.5 rounded-full text-sm text-background/70 hover:text-background hover:bg-background/10 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background text-foreground hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-background/40"
                aria-label={
                  theme === "light" ? "Switch to dark mode" : "Switch to light mode"
                }
              >
                <ThemeIcon size={18} />
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setOpen((o) => !o)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-background text-foreground hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-background/40"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                {open ? <X size={18} /> : <MoreHorizontal size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile expand menu */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id="mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col items-start gap-2 px-4 pb-4 pt-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="bg-background text-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
}
