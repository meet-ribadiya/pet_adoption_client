export default function AdoptionCard({ item, onUpdate }: any) {
  const statusColor =
    item.status === "APPROVED"
      ? "bg-green-100 text-green-600"
      : item.status === "REJECTED"
        ? "bg-red-100 text-red-600"
        : "bg-yellow-100 text-yellow-600";

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex gap-4 p-4 hover:shadow-lg transition">

      {/* PET IMAGE */}
      <img
        src={item.pet.imageUrl}
        className="w-32 h-32 object-cover rounded-lg"
      />

      {/* DETAILS */}
      <div className="flex-1">

        <h3 className="font-bold text-lg">{item.pet.name}</h3>
        <p className="text-sm text-gray-500">
          {item.pet.breed} • {item.pet.species}
        </p>

        <p className="text-sm mt-2">
          <span className="font-medium">User:</span> {item.user.email}
        </p>
        <p className="text-sm text-gray-500">
          {item.user.phoneNumber}
        </p>

        <p className="text-xs text-gray-400 mt-1">
          {item.message}
        </p>

        {/* STATUS */}
        <span className={`inline-block px-3 py-1 rounded-full text-xs mt-2 ${statusColor}`}>
          {item.status}
        </span>

        {/* ACTIONS */}
        {item.status === "PENDING" && (
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => onUpdate(item._id, "APPROVED")}
              className="bg-green-500 text-white px-3 py-1 rounded-lg"
            >
              Approve
            </button>

            <button
              onClick={() => onUpdate(item._id, "REJECTED")}
              className="bg-red-500 text-white px-3 py-1 rounded-lg"
            >
              Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
}