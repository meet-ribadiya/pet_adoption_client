"use client";

import { useMyAdoptions } from "@/hooks/useMyAdoptions";

const MyAdoptionsPage = () => {
    const { adoptions, loading } = useMyAdoptions();

    return (
        <div className="p-6">
            
            <h1 className="text-2xl font-bold mb-6">My Adoptions 🐾</h1>

            {loading && <p>Loading...</p>}

            {!loading && adoptions.length === 0 && (
                <p>No adoption requests found</p>
            )}

            <div className="grid md:grid-cols-3 gap-6">
                {adoptions.map((item: any) => (
                    <div
                        key={item._id}
                        className="bg-white shadow-lg rounded-xl p-4"
                    >
                        <img
                            src={item.pet.imageUrl}
                            className="w-full h-40 object-cover rounded-lg"
                        />

                        <h2 className="text-lg font-bold mt-2">
                            {item.pet.name}
                        </h2>

                        <p className="text-gray-600">{item.pet.breed}</p>

                        <p className="text-sm mt-2">
                            Status:{" "}
                            <span
                                className={`font-semibold ${
                                    item.status === "APPROVED"
                                        ? "text-green-600"
                                        : item.status === "REJECTED"
                                        ? "text-red-600"
                                        : "text-yellow-600"
                                }`}
                            >
                                {item.status}
                            </span>
                        </p>

                        <p className="text-gray-500 text-sm mt-1">
                            {item.message}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAdoptionsPage;