"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const sampleProjects = [
    {
        title: "Project One",
        image: "/images/project1.jpg",
        description: "This is a short description of Project One.",
        slug: "project-one",
    },
    {
        title: "Project Two",
        image: "/images/project2.jpg",
        description: "This is a short description of Project Two.",
        slug: "project-two",
    },
    {
        title: "Project Three",
        image: "/images/project3.jpg",
        description: "This is a short description of Project Three.",
        slug: "project-three",
    },
    {
        title: "Project Four",
        image: "/images/project4.jpg",
        description: "This is a short description of Project Four.",
        slug: "project-four",
    },
    {
        title: "Project Five",
        image: "/images/project5.jpg",
        description: "This is a short description of Project Five.",
        slug: "project-five",
    },
    {
        title: "Project Six",
        image: "/images/project6.jpg",
        description: "This is a short description of Project Six.",
        slug: "project-six",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="bg-[#f8f9fa] py-20 px-6 sm:px-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <h2 className="text-4xl font-bold text-center font-lexend mb-12 text-gray-800">
                    Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 
  max-h-[80vh] overflow-y-auto pr-2
  sm:max-h-full sm:overflow-visible
">

                    {sampleProjects.map((project, index) => (
                        <Link key={index} href={`/projects/${project.slug}`}>
                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold font-lexend text-[#15212C]">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-2">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
