"use client";

import { motion } from "framer-motion";

const steps = [
    {
        title: "Search Pet",
        desc: "Find pets based on your preference",
        icon: "🔍",
    },
    {
        title: "Request Adoption",
        desc: "Send adoption request easily",
        icon: "📩",
    },
    {
        title: "Bring Home",
        desc: "Meet and adopt your new friend",
        icon: "🏡",
    },
    {
        title: "Provide Feedback",
        desc: "Share your experience with us",
        icon: "💬",
    },
];

const HowItWorks = () => {
    return (
        <div className="mt-12 py-16 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-center">


            <h2 className="text-3xl font-extrabold mb-12 text-gray-800">
                🐾 How Adoption Works
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-10">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white/80 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative"
                    >

                        <div className="absolute -top-3 -left-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                            Step {index + 1}
                        </div>


                        <div className="text-3xl mb-3">
                            {step.icon}
                        </div>


                        <h3 className="text-lg font-semibold text-gray-800">
                            {step.title}
                        </h3>


                        <p className="text-sm text-gray-500 mt-2">
                            {step.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;