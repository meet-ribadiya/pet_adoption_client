"use client";

import { motion } from "framer-motion";
import { usePets } from "@/hooks/usePets";
import SkeletonCard from "../common/SkeletonCard";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import PetDetailsModal from "@/components/home/PetDetailsModal";
import AdoptionModal from "@/components/home/AdoptionModal";
import { createAdoption } from "@/services/adoption.service";
import toast from "react-hot-toast";

const PetList = ({ filters, page, setPage }: any) => {
    const { pets, loading, hasNext } = usePets(filters, page);

    const { user } = useAuth();

    const [selectedPet, setSelectedPet] = useState<any>(null);
    const [showPetModal, setShowPetModal] = useState(false);
    const [showAdoptionModal, setShowAdoptionModal] = useState(false);
    const [message, setMessage] = useState("");

    const handlePetClick = (pet: any) => {
        if (!user) {
            toast.error("If you want to adopt a pet, please login/register");
            return;
        }

        setSelectedPet(pet);
        setShowPetModal(true);
    };

    const handleApplyClick = () => {
        setShowPetModal(false);
        setShowAdoptionModal(true);
    };

    const handleAdoptionSubmit = async (petId: string, msg: string) => {
        try {
            const res = await createAdoption(petId, msg);
            setMessage(res.message);
            setShowAdoptionModal(false);
        } catch (err: any) {
            toast.error(err.message);
        }
    };

    return (
        <div className="px-6">

            {loading && pets.length === 0 && (
                <div className="grid md:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            )}

            {!loading && pets.length === 0 && (
                <div className="text-center py-10">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        No pets found 🐾
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Try changing filters or search keyword
                    </p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pets.map((pet) => (
                    <motion.div
                        key={pet._id}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handlePetClick(pet)}
                        className="bg-white shadow-xl rounded-2xl p-4 backdrop-blur-lg"
                    >
                        <img
                            src={pet.imageUrl}
                            alt={pet.name}
                            className="w-full h-48 object-cover rounded-xl"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                    "https://images.unsplash.com/photo-1517849845537-4d257902454a";
                            }}
                        />

                        <h2 className="text-xl font-bold mt-3 text-gray-900">
                            {pet.name}
                        </h2>
                        <p className="text-gray-700">{pet.breed}</p>
                        <p className="text-gray-500">{pet.age} years old</p>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center gap-4 mt-8">
                <button
                    disabled={page === 1}
                    onClick={() => setPage((prev: number) => prev - 1)}
                    className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
                >
                    Prev
                </button>

                <button
                    disabled={!hasNext}
                    onClick={() => setPage((prev: number) => prev + 1)}
                    className="px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50"
                >
                    Next
                </button>
            </div>

            {showPetModal && (
                <PetDetailsModal
                    pet={selectedPet}
                    onClose={() => setShowPetModal(false)}
                    onApply={handleApplyClick}
                />
            )}

            {showAdoptionModal && (
                <AdoptionModal
                    petId={selectedPet?._id}
                    onClose={() => setShowAdoptionModal(false)}
                    onSubmit={handleAdoptionSubmit}
                />
            )}

            {message && (
                <p className="text-green-600 text-center mt-4">
                    {message}
                </p>
            )}
        </div>
    );
};

export default PetList;