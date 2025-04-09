"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const workExperience = [
  {
    role: "Senior Software Engineer",
    year: "Mar 2022 - Jun 2024",
    company: "ZS Associates",
    logo: "/icons/zs.svg",
    summary: [
      "Developed scalable microservices using Domain-Driven Design, ensuring modular and maintainable backend systems.",
      "Built efficient APIs with PostgreSQL, integrated Redis for caching, and optimized database queries for performance.",
      "Automated CI/CD pipelines with Jenkins and managed containerized deployments using Docker, Kubernetes, and AWS EKS.",
      "Enhanced system reliability with health checks, retry mechanisms, and observability tools like ELK Stack and CloudWatch.",
    ],
  },
  {
    role: "Software Development Engineer II",
    year: "Jul 2021 - Feb 2022",
    company: "ZS Associates",
    logo: "/icons/zs.svg",
    summary: [
      "Built and maintained backend services using ASP.NET Core and PostgreSQL within a microservices architecture.",
      "Developed user-facing features in Angular 10+, implementing role-based access control and dynamic workflows.",
      "Created REST APIs with OData support, leveraging EF Core and Flyway for data access and migrations.",
    ],
  },
  {
    role: "Full Stack Engineer Intern",
    year: "Feb 2021 - Jul 2021",
    company: "ZS Associates",
    logo: "/icons/zs.svg",
    summary: [
      "Developed responsive UI components in Angular 8+ with TypeScript, RxJS, and ZS-UI design systems.",
      "Integrated frontend with .NET Core APIs and PostgreSQL for CRUD operations.",
      "Wrote unit tests with Jasmine, Karma, and NUnit, and containerized services using Docker.",
    ],
  },
  {
    role: "Full Stack Engineer Intern",
    year: "Mar 2022 - Jun 2024",
    company: "Blackboard Inc.",
    logo: "/images/blackboard.jpeg",
    summary: [
      "Built backend services using Java, Spring Boot, Hibernate, and PostgreSQL.",
      "Designed responsive UI with HTML5, CSS3, and JavaScript (ES6), integrated via REST APIs.",
      "Tested backend services using JUnit and Mockito, and followed Git-based workflows for collaboration.",
    ],
  },
];

const educationExperience = [
  {
    degree: "MS in Information Systems",
    year: "2024 - 2026",
    institution: "Northeastern University, Boston, MA",
    coursework:
      "Web Design/ User Experience Engineering, Data Science Engineering Methods & Tools, Program Structures & Algorithms, Application Engineering & Development",
    logo: "/images/neu.png",
  },
  {
    degree: "B.Tech in Computer Science Engineering",
    year: "2017 - 2021",
    institution: "Vellore Institute of Technology, Chennai, India",
    coursework:
      "Operating Systems, Database Management Systems, Software Engineering, Problem Solving & OOP, Machine Learning, Computer Architecture and Organization,Artificial Intelligence, Discrete Mathematics and Graph Theory, Parallel and Distributed Computing",
    logo: "/icons/vit.svg",
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"Work" | "Education">("Work");
  const [hasAnimated, setHasAnimated] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (activeTab === "Work" && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [activeTab, hasAnimated]);

  const toggleExpand = (index: number) => {
    if (isMobile) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  const experienceItems =
    activeTab === "Work" ? workExperience : educationExperience;

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
              onClick={() => {
                setActiveTab(tab as "Work" | "Education");
                setExpandedIndex(null);
              }}
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
          <motion.div
            className="absolute left-0 top-0 w-1 bg-gray-300 rounded-full origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ height: "100%" }}
          />

          <div className="space-y-10">
            {experienceItems.map((item, index) => {
              const animateCard =
                activeTab === "Work" && !hasAnimated
                  ? {
                      initial: { opacity: 0, y: 50 },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.6,
                          ease: "easeOut",
                          delay: index * 0.1,
                        },
                      },
                    }
                  : {
                      initial: false,
                      animate: false,
                    };

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={animateCard.initial}
                  animate={animateCard.animate}
                >
                  <div
                    className={`transition-all duration-300 bg-gray-100 p-6 pl-8 rounded-xl shadow-md hover:bg-gray-200 
                      flex justify-between gap-4 flex-wrap ${!isMobile ? "group" : "cursor-pointer"}`}
                    onClick={() => toggleExpand(index)}
                  >
                    {/* Left: Text Block */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold font-lexend text-[#15212C]">
                        {activeTab === "Work"
                          ? (item as typeof workExperience[0]).role
                          : (item as typeof educationExperience[0]).degree}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {activeTab === "Work"
                          ? (item as typeof workExperience[0]).year
                          : (item as typeof educationExperience[0]).year}{" "}
                        •{" "}
                        {activeTab === "Work"
                          ? (item as typeof workExperience[0]).company
                          : (item as typeof educationExperience[0])
                              .institution}
                      </p>

                      {/* Summary (Work) or Coursework (always visible) */}
                      {activeTab === "Work" ? (
                        <ul
                          className={`mt-1.5 pl-5 list-disc list-outside text-gray-700 transition-all duration-500 ease-in-out overflow-hidden
                            ${
                              isMobile
                                ? expandedIndex === index
                                  ? "max-h-96 opacity-100"
                                  : "max-h-0 opacity-0"
                                : "max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100"
                            }`}
                        >
                          {(item as typeof workExperience[0]).summary.map(
                            (point, idx) => <li key={idx}>{point}</li>
                          )}
                        </ul>
                      ) : (
                        <p className="text-gray-700 mt-2">
                          <span className="font-semibold">Coursework:</span>{" "}
                          {(item as typeof educationExperience[0]).coursework}
                        </p>
                      )}
                    </div>

                    {/* Right: Logo */}
                    <div className="w-20 h-20 flex-shrink-0 mt-1">
                      <Image
                        src={
                          activeTab === "Work"
                            ? (item as typeof workExperience[0]).logo
                            : (item as typeof educationExperience[0]).logo
                        }
                        alt={`Logo of ${
                          activeTab === "Work"
                            ? (item as typeof workExperience[0]).company
                            : (item as typeof educationExperience[0])
                                .institution
                        }`}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
