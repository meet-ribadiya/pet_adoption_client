"use client";

export default function PetDetailsModal({ pet, onClose, onApply }: any) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3"
        >
          ✕
        </button>

        <img
          src={pet.imageUrl}
          className="w-full h-60 object-cover rounded-lg"
        />

        <h2 className="text-2xl font-bold mt-4">{pet.name}</h2>

        <p className="text-gray-600">
          {pet.breed} • {pet.species}
        </p>

        <p className="mt-3 text-sm">{pet.description}</p>

        <button
          onClick={onApply}
          className="mt-5 w-full bg-black text-white py-2 rounded-lg"
        >
          Apply for Adoption
        </button>
      </div>
    </div>
  );
}