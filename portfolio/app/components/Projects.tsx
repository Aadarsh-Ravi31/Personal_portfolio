"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const sampleProjects = [
    {
        title: "CampusNavBot: Smart Chatbot for University Building Directions",
        image: "/images/project1.png",
        slug: "project-one",
    },
    {
        title: "Quantitative Trading Analysis on Costco Stock",
        image: "/images/project2.png",
        slug: "project-two",
    },
    {
        title: "OpenBid: Secure Auction Web App",
        image: "/images/project3.png",
        slug: "project-three",
    },
    {
        title: "HealthHub 360: Online Medical Management System",
        image: "/images/project4.png",
        slug: "project-four",
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
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 
        max-h-[80vh] overflow-y-auto pr-2
        sm:max-h-full sm:overflow-visible"
                >
                    {sampleProjects.map((project, index) => (
                        <Link key={index} href={`/projects/${project.slug}`}>
                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer">
                                {/* Image with zoom on hover */}
                                <div className="overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 object-cover object-[center_70%] transition-transform duration-300 hover:scale-105"
                                    />

                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold font-lexend text-[#15212C] text-center">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
