"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative text-center py-24 px-4 overflow-hidden 
    bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">

      <div className="absolute top-10 left-10 w-40 h-40 bg-pink-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-blue-300/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-3xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
        >
          🐾 Find Your Perfect Companion
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Discover loving pets waiting for a home.
          Adopt today and bring happiness into your life ❤️
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="mt-8 px-8 py-3 rounded-xl font-semibold text-white 
          bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 
          shadow-lg hover:opacity-90 transition"
        >
          🚀 Explore Pets
        </motion.button>


        <p className="mt-3 text-xs text-gray-400">
          🐶 100+ pets waiting for you
        </p>
      </div>
    </div>
  );
};

export default HeroSection;