"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [hasMounted, setHasMounted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const handleLoad = () => setReady(true);
    if (document.readyState === "complete") {
      setReady(true);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!hasMounted) return null;

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen pt-24 pb-16 lg:pb-0 text-white flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Background - gradient + floating orbs */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-200 via-gray-100 to-slate-200 dark:from-gray-950 dark:via-[#15212C] dark:to-gray-950">
        <div className="hero-orbs" aria-hidden="true">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>
      </div>

      {/* Left Text Section */}
      <motion.div
        className="relative z-10 w-full lg:w-1/2 mb-6 sm:mb-10 lg:mb-20"
        initial={{ opacity: 0, y: 100 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-lexend leading-tight">Hello,</h1>
        <h1 className="text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-lexend leading-tight">I&apos;m Aadarsh Ravi</h1>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl mt-4 mb-6 sm:mb-8 font-lexend max-w-xl">
          A passionate software developer who loves turning ideas into clean, functional, and impactful solutions.
          Constantly learning and improving to write better, more efficient code.
        </p>
        <Link
          href="https://drive.google.com/file/d/1Yrw_fTMP2obVC8GmwQFXeiyT4EC5_oXR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 sm:px-8 py-3 bg-[#15212C] text-[#6ec1e4] font-semibold rounded-full shadow-md hover:text-[#4998A9] hover:bg-[#1a2d3a] transition-colors duration-200 dark:bg-[#6ec1e4] dark:text-[#15212C] dark:hover:bg-[#7ed4f5] dark:hover:text-[#0f1820] text-sm sm:text-base font-lexend focus:outline-none focus:ring-2 focus:ring-[#6ec1e4] focus:ring-offset-2"
        >
          Resume
        </Link>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="relative z-10 w-full lg:w-1/2 flex justify-center items-center h-auto mt-4 sm:mt-8 lg:mt-0 mb-8 sm:mb-12 lg:mb-0"
        initial={{ opacity: 0, y: 100 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <Image
          src="/images/Portfolio_profile2.jpg"
          alt="Hero Image"
          width={400}
          height={500}
          priority
          className="h-[50vh] sm:h-[65vh] lg:h-[80vh] max-h-[500px] lg:max-h-none w-auto object-cover rounded-xl shadow-xl lg:ml-24"
        />
      </motion.div>
    </section>
  );
}
