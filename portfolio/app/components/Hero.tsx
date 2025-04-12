"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-auto lg:h-screen pt-24 bg-cover bg-center text-white flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10"
      style={{ backgroundImage: "url('/images/herobg2.jpg')" }}
    >
      {/* Left Text Section */}
      <motion.div
        className="w-full lg:w-1/2 mb-10 lg:mb-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ willChange: "opacity, transform" }}
      >
        <h1 className="text-black text-5xl sm:text-6xl lg:text-7xl font-bold font-lexend">Hello,</h1>
        <h1 className="text-black text-5xl sm:text-6xl lg:text-7xl font-bold font-lexend">I&apos;m Aadarsh Ravi</h1>
        <p className="text-black text-lg sm:text-xl mt-4 mb-8 font-lexend">
          A passionate software developer who loves turning ideas into clean, functional, and impactful solutions.
          Constantly learning and improving to write better, more efficient code.
        </p>
        <Link
          href="https://drive.google.com/file/d/1Yrw_fTMP2obVC8GmwQFXeiyT4EC5_oXR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-[#15212C] text-[#6ec1e4] font-semibold rounded-full shadow-md hover:text-[#4998A9] transition duration-300 ease-in-out text-base font-lexend"
        >
          Resume
        </Link>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center h-auto mt-8 lg:mt-0 mb-12 lg:mb-0"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        style={{ willChange: "opacity, transform" }}
      >
        <Image
          src="/images/Portfolio_profile2.jpg"
          alt="Hero Image"
          width={400}
          height={500}
          priority
          className="h-[60vh] sm:h-[70vh] lg:h-[80vh] object-cover rounded-xl shadow-xl lg:ml-24"
        />
      </motion.div>
    </section>
  );
}
