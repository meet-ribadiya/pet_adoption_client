export default function AdoptionCard({ item, onUpdate }: any) {
  const statusConfig = {
    APPROVED: {
      style: "bg-green-100 text-green-600 border-green-400",
      label: "✅ Approved",
    },
    REJECTED: {
      style: "bg-red-100 text-red-600 border-red-400",
      label: "❌ Rejected",
    },
    PENDING: {
      style: "bg-yellow-100 text-yellow-600 border-yellow-400",
      label: "⏳ Pending",
    },
  };

  const currentStatus = statusConfig[item.status as keyof typeof statusConfig];

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div
      className={`bg-white/80 backdrop-blur-md border-l-4 ${currentStatus.style} border border-gray-100 rounded-2xl shadow-md p-4 flex gap-4 justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
    >
      <div className="flex gap-4 flex-1">

        <div className="overflow-hidden rounded-xl">
          <img
            src={item.pet.imageUrl?.trim()}
            alt={item.pet.name}
            className="w-28 h-28 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="space-y-1">
          <h3 className="font-bold text-lg text-gray-800 flex items-center gap-1">
            🐾 {item.pet.name}
          </h3>

          <p className="text-sm text-gray-500">
            {item.pet.breed} • {item.pet.species}
          </p>

          <p className="text-sm mt-1">
            <span className="font-medium">👤</span>{" "}
            <span className="truncate inline-block max-w-[180px] align-bottom">
              {item.user.email}
            </span>
          </p>

          <p className="text-xs text-gray-400">
            📞 {item.user.phoneNumber}
          </p>

          {item.message && (
            <p className="text-xs text-gray-500 italic mt-1 line-clamp-2">
              “{item.message}”
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between items-end min-w-[140px]">

        {/* STATUS */}
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${currentStatus.style}`}
        >
          {currentStatus.label}
        </span>

        <p className="text-xs text-gray-400 mt-2">
          🕒 {formatDate(item.createdAt)}
        </p>

        {item.status === "PENDING" && (
          <div className="flex flex-col gap-2 mt-3 w-full">
            <button
              onClick={() => onUpdate(item._id, "APPROVED")}
              className="w-full py-2 rounded-xl text-white text-sm font-semibold bg-green-500 hover:bg-green-600 transition"
            >
              ✔ Approve
            </button>

            <button
              onClick={() => onUpdate(item._id, "REJECTED")}
              className="w-full py-2 rounded-xl text-white text-sm font-semibold bg-red-500 hover:bg-red-600 transition"
            >
              ✖ Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
}