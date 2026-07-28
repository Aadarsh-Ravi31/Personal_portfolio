import "./globals.css";
import { geistSans, geistMono, playfair } from "./lib/fonts";
import ClientLayout from "./components/clientLayout";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata = {
  title: "Aadarsh Ravi | Software Engineer",
  description:
    "Aadarsh Ravi — Software Engineer building AI & data-driven products. Portfolio of software, AI/ML, and data engineering work.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var stored = localStorage.getItem('portfolio-theme');
                if (stored === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`bg-background text-foreground transition-colors duration-300 ${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans`}
      >
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
