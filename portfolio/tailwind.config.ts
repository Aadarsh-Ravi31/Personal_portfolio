import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic monochrome tokens — defined once in globals.css,
        // inverted by the .dark class. Use these instead of hardcoded hex.
        background: "var(--bg)",
        foreground: "var(--fg)",
        muted: "var(--muted)",
        border: "var(--border)",
        accent: "var(--accent)",
      },
      fontFamily: {
        display: "var(--font-geist-sans), sans-serif",
        sans: "var(--font-geist-sans), sans-serif",
        mono: "var(--font-geist-mono), monospace",
        serif: "var(--font-serif), serif",
      },
      fontSize: {
        // Oversized responsive display scale for the minimal big-type look.
        display: ["clamp(3rem, 10vw, 9rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-sm": ["clamp(2.25rem, 6vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
