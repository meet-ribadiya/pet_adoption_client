"use client";

import { useMyAdoptions } from "@/hooks/useMyAdoptions";

const MyAdoptionsPage = () => {
    const { adoptions, loading } = useMyAdoptions();

    const statusConfig = {
        APPROVED: {
            style: "bg-green-100 text-green-600",
            label: "✅ Approved",
        },
        REJECTED: {
            style: "bg-red-100 text-red-600",
            label: "❌ Rejected",
        },
        PENDING: {
            style: "bg-yellow-100 text-yellow-600",
            label: "⏳ Pending",
        },
    };

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };


    return (
        <div className="px-4 md:px-6 py-6">


            <h1 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                🐾 My Adoptions
            </h1>


            {loading && (
                <div className="text-center py-10 text-gray-500">
                    ⏳ Loading your requests...
                </div>
            )}


            {!loading && adoptions.length === 0 && (
                <div className="text-center py-12 bg-white/60 backdrop-blur-md rounded-2xl shadow-md">
                    <h2 className="text-xl font-bold text-gray-800">
                        😿 No adoption requests yet
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Start exploring pets and adopt your friend 🐶🐱
                    </p>
                </div>
            )}


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {adoptions.map((item: any) => {
                    const status =
                        statusConfig[item.status as keyof typeof statusConfig];

                    return (
                        <div
                            key={item._id}
                            className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >

                            <div className="overflow-hidden">
                                <img
                                    src={item.pet.imageUrl?.trim() || "https://images.unsplash.com/photo-1517849845537-4d257902454a"}
                                    alt={item.pet.name}
                                    className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>


                            <div className="p-4 space-y-2">
                                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-1">
                                    🐶 {item.pet.name}
                                </h2>

                                <p className="text-sm text-gray-500">
                                    {item.pet.breed}
                                </p>


                                <span
                                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${status.style}`}
                                >
                                    {status.label}
                                </span>


                                <p className="text-xs text-gray-400">
                                    🕒 Applied on {formatDate(item.createdAt)}
                                </p>


                                {item.message && (
                                    <p className="text-xs text-gray-500 italic mt-1 line-clamp-2">
                                        “{item.message}”
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MyAdoptionsPage;