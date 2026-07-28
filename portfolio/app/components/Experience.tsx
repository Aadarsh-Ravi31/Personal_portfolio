"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const workExperience = [
  {
    role: "Senior Software Engineer",
    year: "Jan 2023 - Apr 2024",
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
    year: "Jul 2021 - Jan 2023",
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
    year: "Mar 2019 - Jun 2019",
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
    <section id="experience" className="bg-background py-20 sm:py-28 px-4 sm:px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
          (03) &nbsp; Experience
        </p>
        <h2 className="text-display-sm font-display font-bold tracking-tight mb-10 sm:mb-12">
          Experience
        </h2>

        {/* Tabs */}
        <div className="flex justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 flex-wrap">
          {["Work", "Education"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab as "Work" | "Education");
                setExpandedIndex(null);
              }}
              className={`px-5 sm:px-6 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
                activeTab === tab
                  ? "bg-foreground text-background border border-foreground"
                  : "border border-border text-muted hover:text-foreground hover:border-foreground/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Timeline Container */}
        <div className="relative px-4 sm:px-6 md:px-10">
          <motion.div
            className="absolute left-0 top-0 w-1 bg-border rounded-full origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
                    className={`transition-colors duration-300 bg-foreground/5 p-4 sm:p-6 pl-6 sm:pl-8 rounded-xl hover:bg-foreground/10
                      flex justify-between gap-4 flex-wrap border border-border ${!isMobile ? "group" : "cursor-pointer"}`}
                    onClick={() => toggleExpand(index)}
                  >
                    {/* Left: Text Block */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-display font-bold">
                        {activeTab === "Work"
                          ? (item as typeof workExperience[0]).role
                          : (item as typeof educationExperience[0]).degree}
                      </h3>
                      <p className="text-sm text-muted mt-0.5">
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
                          className={`mt-1.5 pl-5 list-disc list-outside text-muted transition-all duration-500 ease-in-out overflow-hidden
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
                        <p className="text-muted mt-2">
                          <span className="font-semibold">Coursework:</span>{" "}
                          {(item as typeof educationExperience[0]).coursework}
                        </p>
                      )}
                    </div>

                    {/* Right: Logo */}
                    <div
  className={`${
    isMobile
      ? "w-full flex justify-center order-first mb-3"
      : "w-20 h-20 flex-shrink-0 mt-1"
  }`}
>

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
