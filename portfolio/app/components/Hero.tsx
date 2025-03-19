"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="h-[calc(100vh-4rem)] bg-cover bg-center text-white flex items-center justify-center px-10"
      style={{ backgroundImage: "url('/images/herobg2.jpg')" }}
    >
      {/* Left Text Section */}
      <motion.div
        className="w-1/2 mb-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ willChange: "opacity, transform" }} // Enables GPU acceleration
      >
        <h1 className="text-black text-7xl font-bold font-lexend">Hello,</h1>
        <h1 className="text-black text-7xl font-bold font-lexend">I&apos;m Aadarsh Ravi</h1>
        <p className="text-black text-xl mt-4 mb-8 max-w-full font-lexend">
          A passionate software developer who loves turning ideas into clean, functional, and impactful solutions.
          Constantly learning and improving to write better, more efficient code.
        </p>
        <Link
          href="https://drive.google.com/file/d/1UFbEZZMqkicLtjlOb-bCLTxUXfNF0ZEV/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-[#15212C] text-[#6ec1e4] font-semibold rounded-full shadow-md hover:text-[#4998A9] transition duration-300 ease-in-out text-base font-lexend"
        >
          Resume
        </Link>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="w-1/2 flex justify-center h-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        style={{ willChange: "opacity, transform" }} // Enables GPU acceleration
      >
        <Image
          src="/images/profile.png"
          alt="Hero Image"
          width={400} // Set explicit width
          height={500} // Set explicit height
          priority // Optimize loading for first render
          className="h-[80vh] object-cover mt-12 ml-24"
        />
      </motion.div>
    </section>
  );
}
