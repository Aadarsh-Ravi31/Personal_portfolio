"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react"; // Add more icons as needed

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:ravi.aad@northeastern.edu",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aadarsh-ravi/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Aadarsh-Ravi31",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f8f9fa] dark:bg-gray-900/30 py-16 sm:py-20 px-4 sm:px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold font-lexend mb-8 sm:mb-10 text-gray-800 dark:text-gray-100">
          Let&apos;s Connect
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 sm:mb-12 text-base sm:text-lg max-w-2xl mx-auto">
          Feel free to reach out through any of the platforms below.
        </p>

        <div className="flex justify-center gap-8 sm:gap-10 flex-wrap">
          {contactLinks.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center text-[#15212C] dark:text-gray-200 hover:text-[#6ec1e4] dark:hover:text-[#6ec1e4] transition-colors p-3 rounded-xl hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
            >
              <Icon size={36} />
              <span className="text-sm font-lexend mt-2">{label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
