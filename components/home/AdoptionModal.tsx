"use client";

import { useState } from "react";

export default function AdoptionModal({ petId, onClose, onSubmit }: any) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    onSubmit(petId, message);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">


      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6 space-y-4">


        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          🐾 Adoption Request
        </h2>
        <p className="text-sm text-gray-500">
          Tell us why you’d love to adopt this pet 🐶🐱
        </p>


        <textarea
          placeholder="I will take good care, provide love, and a happy home..."
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
          className="w-full h-28 p-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 transition resize-none"
        />


        <div className="flex gap-3 pt-2">

          <button
            onClick={handleSubmit}
            className="flex-1 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:opacity-90 transition shadow-lg"
          >
            🚀 Submit
          </button>


          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
          >
            ❌ Cancel
          </button>
        </div>
      </div>
    </div>
  );
}