"use client";

import { useState } from "react";

export default function AdoptionModal({ petId, onClose, onSubmit }: any) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    onSubmit(petId, message);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl w-full max-w-md p-6">

        <h2 className="text-xl font-bold mb-3">Adoption Request</h2>

        <textarea
          placeholder="Why do you want to adopt?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <div className="flex gap-2 mt-4">
          <button
            onClick={handleSubmit}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Submit
          </button>

          <button
            onClick={onClose}
            className="border px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}