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
        // Channel-var form so opacity modifiers work (fill-accent/[0.07] in the
        // architecture diagrams). Solid usages are unchanged (alpha defaults 1).
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",

        // PodcastIQ deep-dive tokens (ink/line/elev family). Channel-var form
        // so opacity modifiers (bg-ink/[0.06], text-bg/70) resolve. `.dark`
        // inverts them and `.console-surface` rebinds them to a fixed dark +
        // coral palette so the agent console reads as embedded software.
        bg: "rgb(var(--bg-rgb) / <alpha-value>)",
        "bg-elev": "rgb(var(--bg-elev-rgb) / <alpha-value>)",
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        "ink-soft": "rgb(var(--ink-soft-rgb) / <alpha-value>)",
        "ink-faint": "rgb(var(--ink-faint-rgb) / <alpha-value>)",
        line: "var(--line)",
        "accent-soft": "var(--accent-soft)",
      },
      borderRadius: {
        brand: "16px",
        "brand-sm": "10px",
      },
      boxShadow: {
        brand: "var(--shadow-brand)",
      },
      maxWidth: {
        measure: "68ch",
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
