"use client";
import { motion } from "framer-motion";

const sampleProjects = [
    {
        title: "CampusNavBot: Smart Chatbot for University Building Directions",
        image: "/images/project1.png",
        link: "https://yourportfolio.com/projects/project-one",
    },
    {
        title: "Quantitative Trading Analysis on Costco Stock",
        image: "/images/project2.png",
        link: "https://yourportfolio.com/projects/project-two",
    },
    {
        title: "OpenBid: Secure Auction Web App for Transparent, Real-Time Bidding",
        image: "/images/project3.png",
        link: "https://yourportfolio.com/projects/project-three",
    },
    {
        title: "HealthHub 360: Online Medical Management System",
        image: "/images/project4.png",
        link: "https://yourportfolio.com/projects/project-four",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="bg-[#f8f9fa] dark:bg-gray-900/30 py-16 sm:py-20 px-4 sm:px-6 md:px-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-center font-lexend mb-8 sm:mb-12 text-gray-800 dark:text-gray-100">
                    Projects
                </h2>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 
                    max-h-[85vh] overflow-y-auto pr-2 sm:pr-0 pb-4
                    sm:max-h-full sm:overflow-visible"
                >
                    {sampleProjects.map((project, index) => (
                        <a
                            key={index}
                            // href={project.link}
                            // target="_blank"
                            // rel="noopener noreferrer"
                            className="h-full"
                        >
                            <div className="bg-white dark:bg-gray-800/60 rounded-xl shadow-md dark:shadow-gray-900/50 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900/70 transition duration-300 cursor-pointer h-full flex flex-col border border-gray-200/50 dark:border-gray-700/50">
                                <div className="overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 object-cover object-[center_70%] transition-transform duration-200 ease-out hover:scale-[1.02]"
                                    />
                                </div>
                                <div className="p-4 flex-grow flex items-center justify-center">
                                    <h3 className="text-base sm:text-lg font-semibold font-lexend text-[#15212C] dark:text-gray-200 text-center">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
