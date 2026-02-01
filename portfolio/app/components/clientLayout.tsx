"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 dark:bg-gray-950">{children}</main>
      <Footer />
    </>
  );
}
