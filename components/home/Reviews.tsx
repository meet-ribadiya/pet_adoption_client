"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul",
    text: "Amazing platform! Found my pet easily 🐶",
  },
  {
    name: "Priya",
    text: "Very smooth experience and great UI ❤️",
  },
  {
    name: "Amit",
    text: "Loved the adoption process!",
  },
  {
    name: "Sneha",
    text: "Highly recommend for pet lovers! 🐱",
  },
  {
    name: "Raj",
    text: "Great platform for finding a perfect companion! 🐕",
  },
  {
    name: "Neha",
    text: "Helpful staff and easy adoption process! 🐶",
  },
];

const Reviews = () => {
  return (
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-900">
        What People Say 💬
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <p className="text-gray-700">"{r.text}"</p>
            <h4 className="text-gray-900 font-semibold">
              - {r.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;