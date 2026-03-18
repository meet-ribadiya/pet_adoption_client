"use client";

import { useState } from "react";
import { usePets } from "./hooks/usePets";
import PetForm from "./components/PetForm";
import PetList from "./components/PetList";
import { useAdoptions } from "./hooks/useAdoptions";
import AdoptionList from "./components/AdoptionList";

export default function AdminDashboard() {
    const { pets, message, error, handleCreateOrUpdate, handleDelete } = usePets();

    const [editingPet, setEditingPet] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);

    const [activeTab, setActiveTab] = useState<"pets" | "adoptions" | "users">("pets");

    const handleCreateClick = () => {
        setEditingPet(null);
        setShowModal(true);
    };

    const handleEditClick = (pet: any) => {
        setEditingPet(pet);
        setShowModal(true);
    };

    const handleSubmit = async (data: any) => {
        await handleCreateOrUpdate(data, editingPet);
        setShowModal(false);
    };

    const { adoptions, handleUpdate } = useAdoptions();

    return (
        <div className="p-8 bg-gray-100 min-h-screen">

            <h1 className="text-3xl font-bold mb-6">Admin Dashboard ⚙️</h1>

            <div className="flex gap-4 mb-6 bg-gray-200 p-2 rounded-xl w-fit">
                <button
                    onClick={() => setActiveTab("pets")}
                    className={`px-5 py-2 rounded-lg font-medium transition ${activeTab === "pets"
                        ? "bg-black text-white"
                        : "bg-white border hover:bg-gray-100"
                        }`}
                >
                    🐾 Pets
                </button>

                <button
                    onClick={() => setActiveTab("adoptions")}
                    className={`px-5 py-2 rounded-lg font-medium transition ${activeTab === "adoptions"
                        ? "bg-black text-white"
                        : "bg-white border hover:bg-gray-100"
                        }`}
                >
                    📦 Adoption Requests
                </button>

                <button
                    onClick={() => setActiveTab("users")}
                    className={`px-5 py-2 rounded-lg font-medium transition ${activeTab === "users"
                        ? "bg-black text-white"
                        : "bg-white border hover:bg-gray-100"
                        }`}
                >
                    👤 Users
                </button>
            </div>

            {message && <p className="text-green-600 mb-2">{message}</p>}
            {error && <p className="text-red-600 mb-2">{error}</p>}

            {activeTab === "pets" && (
                <>

                    <div className="flex justify-end mb-4">
                        <button
                            onClick={handleCreateClick}
                            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
                        >
                            + Create Pet
                        </button>
                    </div>

                    <PetList
                        pets={pets}
                        onEdit={handleEditClick}
                        onDelete={handleDelete}
                    />
                </>
            )}


            {activeTab === "adoptions" && (
                <AdoptionList
                    adoptions={adoptions}
                    onUpdate={handleUpdate}
                />
            )}

            {activeTab === "users" && (
                <div className="bg-white p-6 rounded-xl shadow text-center">
                    <h2 className="text-xl font-semibold">Users List</h2>
                    <p className="text-gray-500 mt-2">
                        User module coming soon 👤
                    </p>
                </div>
            )}


            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative">

                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>

                        <PetForm
                            onSubmit={handleSubmit}
                            editingPet={editingPet}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}