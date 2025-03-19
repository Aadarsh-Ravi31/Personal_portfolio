import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        funnel: 'var(--font-funnel-display), sans-serif',
        roboto: 'var(--font-roboto), sans-serif',
        lexend: 'var(--font-lexend-deca), sans-serif',
      },
    },
  },
  plugins: [],
} satisfies Config;
