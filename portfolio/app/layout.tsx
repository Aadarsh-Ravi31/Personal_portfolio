import "./globals.css";
import { funnelDisplay, roboto, lexend } from "./lib/fonts";
import ClientLayout from "./components/clientLayout";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata = {
  title: "Aadarsh Ravi | Portfolio",
  description: "Showcasing my projects and skills as a software developer.",
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
                if (stored === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 ${funnelDisplay.variable} ${roboto.variable} ${lexend.variable}`}
      >
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
