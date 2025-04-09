"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const sampleProjects = [
    {
        title: "CampusNavBot: Smart Chatbot for University Building Directions",
        image: "/images/campusnav.png",
        description: "Developed a chatbot leveraging NLP (Dialogflow/OpenAI API) to process location-based queries & guide users to university buildings. Integrated Google Maps API to visualize directions, using Node.js backend with a MongoDB to fetch building metadata. Deployed using React.js frontend on Vercel & Express API on Render, with GitHub for version control & CI/CD automation.",
        slug: "project-one",
    },
    {
        title: "Quantitative Trading Analysis on Costco Stock",
        image: "/images/project2.jpg",
        description: "Engineered features from Costco stock data using technical indicators and candlestick pattern recognition. Developed and fine-tuned predictive models with XGBoost and Random Forest, boosting accuracy. Conducted regression analysis and visualized performance metrics using Python, Pandas, and Plotly to extract actionable market insights and trading signals.",
        slug: "project-two",
    },
    {
        title: "OpenBid: Secure Auction Web App",
        image: "/images/project3.jpg",
        description: "Developed a full-stack online auction platform using React, Node.js, Express, and MongoDB with JWT-based authentication and role-based access for buyers and sellers. Implemented real-time live bidding, PWA features, internationalization, and Fugu capabilities. Applied Redux for state management, RESTful APIs with Domain-Driven Design, and designed a responsive UI.",
        slug: "project-three",
    },
    {
        title: "HealthHub 360: Online Medical Management System",
        image: "/images/project4.jpg",
        description: "Developed a Java Swing-based healthcare application, incorporating Google Maps API for location services, an interactive chatbot for seamless user support, automated email notifications, and advanced password encryption. Delivered a secure, user-centric platform showcasing hospital services with robust Role-Based Authentication to enhance access control & operational efficiency.",
        slug: "project-four",
    }
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
