"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul",
    text: "Amazing platform! Found my pet easily 🐶",
    avatar: "🧑‍💻",
  },
  {
    name: "Priya",
    text: "Very smooth experience and great UI ❤️",
    avatar: "👩‍🦰",
  },
  {
    name: "Amit",
    text: "Loved the adoption process!",
    avatar: "🧑‍🦱",
  },
  {
    name: "Sneha",
    text: "Highly recommend for pet lovers! 🐱",
    avatar: "👩",
  },
  {
    name: "Raj",
    text: "Great platform for finding a perfect companion! 🐕",
    avatar: "🧔",
  },
  {
    name: "Neha",
    text: "Helpful staff and easy adoption process! 🐶",
    avatar: "👩‍💼",
  },
];

const Reviews = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-center">


      <h2 className="text-3xl font-extrabold mb-12 text-gray-800">
        💬 What People Say
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-white/80 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-left"
          >

            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">{r.avatar}</div>
              <div>
                <h4 className="text-gray-900 font-semibold">
                  {r.name}
                </h4>
                <div className="text-yellow-400 text-sm">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>


            <p className="text-gray-600 text-sm leading-relaxed">
              “{r.text}”
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;