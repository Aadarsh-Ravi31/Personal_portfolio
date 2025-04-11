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
    <section id="contact" className="bg-[#f8f9fa] py-20 px-6 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold font-lexend mb-10 text-gray-800">
          Let&apos;s Connect
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Feel free to reach out through any of the platforms below.
        </p>

        <div className="flex justify-center gap-10 flex-wrap">
          {contactLinks.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center text-[#15212C] hover:text-[#6ec1e4] transition"
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
