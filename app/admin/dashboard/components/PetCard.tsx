export default function PetCard({ pet, onEdit, onDelete }: any) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

            <img
                src={pet.imageUrl}
                className="h-48 w-full object-cover"
            />

            <div className="p-4">
                <h3 className="font-bold text-lg">{pet.name}</h3>
                <p className="text-sm text-gray-500">{pet.breed}</p>

                <div className="flex gap-2 mt-4">
                    <button
                        onClick={() => onEdit(pet)}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1 rounded-lg"
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => onDelete(pet._id)}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-1 rounded-lg"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}