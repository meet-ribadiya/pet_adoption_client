"use client";

export default function PetDetailsModal({ pet, onClose, onApply }: any) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4"
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl w-full max-w-lg p-5 relative shadow-2xl animate-fadeIn"
      >

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
        >
          ✖
        </button>

        <div className="overflow-hidden rounded-2xl">
          <img
            src={pet.imageUrl?.trim()}
            alt={pet.name}
            className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="mt-4 space-y-2">

          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-1">
            🐾 {pet.name}
          </h2>


          <p className="text-sm text-gray-500">
            {pet.breed} • {pet.species}
          </p>


          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            {pet.description || "No description available."}
          </p>


          <button
            onClick={onApply}
            className="mt-5 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:opacity-90 transition shadow-lg"
          >
            🐶 Apply for Adoption
          </button>
        </div>
      </div>
    </div>
  );
}