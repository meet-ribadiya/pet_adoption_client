"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="text-center py-20 bg-gradient-to-r from-orange-100 via-pink-100 to-yellow-100">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold text-gray-900"
      >
        Find Your Perfect Pet 🐶
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto"
      >
        Discover loving pets waiting for a home. Adopt today and
        bring happiness into your life ❤️
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-8 px-8 py-3 bg-black text-white rounded-xl shadow-lg hover:bg-gray-800"
      >
        Explore Pets
      </motion.button>
    </div>
  );
};

export default HeroSection;