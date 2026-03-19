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
        <div className="px-4 md:px-6 mt-6">

            {loading && pets.length === 0 && (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            )}

            {!loading && pets.length === 0 && (
                <div className="text-center py-12 bg-white/60 backdrop-blur-md rounded-2xl shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800">
                        😿 No pets found
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Try adjusting your filters 🐾
                    </p>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {pets.map((pet: any) => (
                    <motion.div
                        key={pet._id}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => handlePetClick(pet)}
                        className="cursor-pointer bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                    >

                        <div className="overflow-hidden">
                            <img
                                src={pet.imageUrl?.trim() || "https://images.unsplash.com/photo-1517849845537-4d257902454a"}
                                alt={pet.name}
                                className="w-full h-44 object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>


                        <div className="p-4 space-y-1">
                            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-1">
                                🐾 {pet.name}
                            </h2>

                            <p className="text-sm text-gray-500">
                                {pet.breed} • {pet.species}
                            </p>

                            <p className="text-xs text-gray-400">
                                🎂 {pet.age} years old
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>


            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    disabled={page === 1}
                    onClick={() => setPage((prev: number) => prev - 1)}
                    className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
                >
                    ⬅ Prev
                </button>

                <span className="text-sm text-gray-500">
                    Page {page}
                </span>

                <button
                    disabled={!hasNext}
                    onClick={() => setPage((prev: number) => prev + 1)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:opacity-90 transition disabled:opacity-50"
                >
                    Next ➡
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
                <p className="text-green-600 text-center mt-4 font-medium">
                    ✅ {message}
                </p>
            )}
        </div>
    );
};


export default PetList;