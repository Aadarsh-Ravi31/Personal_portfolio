"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const workExperience = [
  {
    role: "Software Developer Intern",
    year: "2023",
    company: "Tech Solutions Inc.",
    summary: "Worked on front-end UI with React and integrated APIs using Node.js.",
  },
  {
    role: "Freelance Web Developer",
    year: "2022",
    company: "Self-employed",
    summary: "Built responsive websites for small businesses using HTML, CSS, and JavaScript.",
  },
];

const educationExperience = [
  {
    degree: "Bachelor of Technology in Computer Science",
    year: "2019 - 2023",
    institution: "ABC Institute of Technology",
    coursework: "Data Structures, Algorithms, Web Development, Databases, Operating Systems",
  },
  {
    degree: "Higher Secondary Education",
    year: "2017 - 2019",
    institution: "XYZ Junior College",
    coursework: "Mathematics, Physics, Computer Science",
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"Work" | "Education">("Work");

  return (
    <section id="experience" className="bg-white py-20 px-6 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center font-lexend mb-10 text-gray-800">
          Experience
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {["Work", "Education"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "Work" | "Education")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#15212C] text-[#6ec1e4]"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Timeline Container */}
        <div className="relative px-6 sm:px-10">
          {/* Animated Vertical Line */}
          <motion.div
            className="absolute left-0 top-0 w-1 bg-gray-300 rounded-full origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ height: "100%" }}
          />

          {/* Timeline Entries */}
          <motion.div
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
              hidden: {},
            }}
          >
            {(activeTab === "Work" ? workExperience : educationExperience).map(
              (item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  {/* Card */}
                  <div className="bg-gray-100 p-6 pl-8 rounded-xl shadow-md">
                    {activeTab === "Work" ? (
                      <>
                        <h3 className="text-xl font-bold font-lexend text-[#15212C]">
                          {item.role}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.year} • {item.company}
                        </p>
                        <p className="text-gray-700 mt-2">{item.summary}</p>
                      </>
                    ) : (
                      <>
                        <h3 className="text-xl font-bold font-lexend text-[#15212C]">
                          {item.degree}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.year} • {item.institution}
                        </p>
                        <p className="text-gray-700 mt-2">
                          <span className="font-semibold">Coursework:</span>{" "}
                          {item.coursework}
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
