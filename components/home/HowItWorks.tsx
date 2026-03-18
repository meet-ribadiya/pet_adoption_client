"use client";

import { motion } from "framer-motion";

const steps = [
    { title: "Search Pet", desc: "Find pets based on your preference" },
    { title: "Request Adoption", desc: "Send adoption request easily" },
    { title: "Bring Home", desc: "Meet and adopt your new friend" },
    { title: "Provide Feedback", desc: "Share your experience with us" },
];

const HowItWorks = () => {
    return (
        <div className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-10 text-gray-900">
                How Adoption Works 🐾
            </h2>

            <div className="grid md:grid-cols-3 gap-6 px-6">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-gray-600 mt-2">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;