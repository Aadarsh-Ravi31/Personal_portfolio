import "./globals.css";
import { funnelDisplay, roboto, lexend } from "./lib/fonts";
import ClientLayout from "./components/clientLayout"; // Import the client-side layout

export const metadata = {
  title: "Aadarsh Ravi | Portfolio",
  description: "Showcasing my projects and skills as a software developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${funnelDisplay.variable} ${roboto.variable} ${lexend.variable}`}>
        <ClientLayout>{children}</ClientLayout> {/* Use client layout */}
      </body>
    </html>
  );
}
