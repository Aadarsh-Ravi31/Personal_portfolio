"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = {
    Frontend: [
        { src: "/icons/react.svg", label: "React" },
        { src: "/icons/nextjs.svg", label: "Next.js" },
        { src: "/icons/tailwind.svg", label: "Tailwind" },
    ],
    Backend: [
        { src: "/icons/nodejs.svg", label: "Node.js" },
        { src: "/icons/express.svg", label: "Express" },
        { src: "/icons/mongodb.svg", label: "MongoDB" },
    ],
    Cloud: [
        { src: "/icons/aws.svg", label: "AWS" },
        { src: "/icons/vercel.svg", label: "Vercel" },
    ],
    "Source Control": [
        { src: "/icons/git.svg", label: "Git" },
        { src: "/icons/github.svg", label: "GitHub" },
    ],
};


export default function Expertise() {
    const [activeTab, setActiveTab] = useState<keyof typeof categories>("Frontend");

    return (
        <section id="expertise" className="bg-[#FEFAF6] py-20 px-6 sm:px-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-4xl font-bold text-center font-lexend mb-10 text-gray-800">
                    My Expertise
                </h2>

                {/* Tabs */}
                <div className="flex justify-center gap-4 flex-wrap mb-8">
                    {Object.keys(categories).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as keyof typeof categories)}
                            className={`px-4 py-2 rounded-full font-medium transition-all ${activeTab === tab
                                    ? "bg-[#15212C] text-[#6ec1e4]"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Icons Display */}
                <div className="bg-gray-100 p-6 rounded-2xl shadow-md max-h-60 overflow-y-auto">
                    <div className="flex flex-wrap justify-center gap-8">
                        {categories[activeTab].map((tech, idx) => (
                            <div key={idx} className="flex flex-col items-center w-20">
                                <Image
                                    src={tech.src}
                                    alt={tech.label}
                                    width={50}
                                    height={50}
                                    className="object-contain mb-2"
                                />
                                <span className="text-sm text-gray-700 text-center font-medium font-lexend">
                                    {tech.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </motion.div>
        </section>
    );
}
