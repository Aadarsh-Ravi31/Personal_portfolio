"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = {
    Languages: [
        { src: "/icons/cpp.svg", label: "C++" },
        { src: "/icons/java.svg", label: "Java" },
        { src: "/icons/python.svg", label: "Python" },
        { src: "/icons/c.svg", label: "C" },
        { src: "/icons/csharp.svg", label: "C#" },
        { src: "/icons/javascript.svg", label: "Javascript" },     
    ],
    Frontend: [
        { src: "/icons/angular.svg", label: "Angular" },
        { src: "/icons/react.svg", label: "React" },
        { src: "/icons/html.svg", label: "HTML" },
        { src: "/icons/css.svg", label: "CSS" },
        { src: "/icons/nextjs.svg", label: "Next.js" },
        { src: "/icons/typescript.svg", label: "Typescript" },    
        { src: "/icons/bootstrap.svg", label: "Bootstrap" },
        { src: "/icons/tailwind.svg", label: "Tailwind" },
        { src: "/icons/sass.svg", label: "Sass" },

    ],
    Backend: [
        { src: "/icons/dotnet.svg", label: "Dotnet Core" },
        { src: "/icons/node.svg", label: "Node.js" },
        { src: "/icons/spring.svg", label: "Spring Boot" },
        { src: "/icons/django.svg", label: "Django" },
        { src: "/icons/flask.svg", label: "Flask" },
       
    ],
    Database: [
        { src: "/icons/postgres.svg", label: "PostgreSQL" },
        { src: "/icons/mysql.svg", label: "MySQL" },
        { src: "/icons/mongo.svg", label: "MongoDB" },
        { src: "/icons/redis.svg", label: "Redis" },
    ],
    "Cloud & Devops": [
        { src: "/icons/aws.svg", label: "AWS" },
        { src: "/icons/docker.svg", label: "Docker" },
        { src: "/icons/kubernetes.svg", label: "Kubernetes" },
        { src: "/icons/jenkins.svg", label: "Jenkins" },
        { src: "/icons/teamcity.svg", label: "Teamcity" },

    ],
    "Testing": [
        { src: "/icons/nunit.svg", label: "NUnit" },
        { src: "/icons/junit.svg", label: "JUnit" },
        { src: "/icons/jasmine.svg", label: "Jasmine" },
        { src: "/icons/karma.svg", label: "Karma" },

    ],
    "Tools & Platforms": [
        { src: "/icons/jira.svg", label: "Jira" },
        { src: "/icons/confluence.svg", label: "Confluence" },
        { src: "/icons/bitbucket.svg", label: "Bitbucket" },
        { src: "/icons/github.svg", label: "Github" },
        { src: "/icons/visualstudio.svg", label: "Visual Studio" },
        { src: "/icons/vscode.svg", label: "VS Code" },
        { src: "/icons/intellij.svg", label: "Intellij IDEA" },
        { src: "/icons/postman.svg", label: "Postman" },
        { src: "/icons/figma.svg", label: "Figma" },
        { src: "/icons/jupyter.svg", label: "Jupyter Notebook" },

    ],
};


export default function Expertise() {
    const [activeTab, setActiveTab] = useState<keyof typeof categories>("Languages");

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
