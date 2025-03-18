import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {funnelDisplay,roboto} from './lib/fonts';

export const metadata = {
  title: 'Aadarsh Ravi | Portfolio',
  description: 'Showcasing my projects and skills as a software developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${funnelDisplay.variable} ${roboto.variable}`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
