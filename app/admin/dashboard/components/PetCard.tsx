export default function PetCard({ pet, onEdit, onDelete }: any) {

    const imageSrc = pet.imageUrl?.trim() || "https://images.unsplash.com/photo-1517849845537-4d257902454a";

    return (
        <div className="group relative bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

            <div className="relative">
                <img
                    src={imageSrc}
                    alt={pet.name}
                    className="h-44 w-full object-cover"
                />

                <span className="absolute top-2 left-2 bg-pink-400 text-white text-xs px-2 py-1 rounded-full shadow">
                    🐾 Cute
                </span>
            </div>

            <div className="p-4 space-y-1">
                <h3 className="font-bold text-lg text-gray-800 flex items-center gap-1">
                    🐶 {pet.name}
                </h3>

                <p className="text-sm text-gray-500">
                    {pet.species || "Unknown"} • {pet.breed}
                </p>

                {pet.age && (
                    <p className="text-xs text-gray-400">🎂 {pet.age} years old</p>
                )}

                <div className="flex gap-2 mt-4">
                    <button
                        onClick={() => onEdit(pet)}
                        className="flex-1 py-1.5 rounded-xl text-white text-sm font-medium bg-gradient-to-r from-blue-400 to-indigo-400 hover:opacity-90 transition shadow"
                    >
                        ✏️ Edit
                    </button>

                    <button
                        onClick={() => onDelete(pet._id)}
                        className="flex-1 py-1.5 rounded-xl text-white text-sm font-medium bg-gradient-to-r from-red-400 to-pink-400 hover:opacity-90 transition shadow"
                    >
                        🗑 Delete
                    </button>
                </div>
            </div>

        </div>
    );
}