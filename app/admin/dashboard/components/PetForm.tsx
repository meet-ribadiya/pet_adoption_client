"use client";

import { useState, useEffect } from "react";

const DEFAULT_IMAGE =
    "https://images.unsplash.com/photo-1517849845537-4d257902454a";

export default function PetForm({ onSubmit, editingPet }: any) {
    const [form, setForm] = useState({
        name: "",
        age: "",
        species: "",
        breed: "",
        description: "",
        imageUrl: "",
    });

    useEffect(() => {
        if (editingPet) {
            setForm(editingPet);
        }
    }, [editingPet]);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        onSubmit({
            ...form,
            age: Number(form.age),
            imageUrl: form.imageUrl?.trim() || DEFAULT_IMAGE,
        });

        setForm({
            name: "",
            age: "",
            species: "",
            breed: "",
            description: "",
            imageUrl: "",
        });
    };

    const imageSrc = form.imageUrl?.trim() || DEFAULT_IMAGE;

    return (
        <div className="flex justify-center px-4 py-8 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white/80 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-5 space-y-4"
            >

                <h2 className="text-xl font-bold text-center text-gray-800">
                    {editingPet ? "✨ Update Pet 🐾" : "🌈 Add New Pet 🐶🐱"}
                </h2>

                <img
                    src={imageSrc}
                    alt="pet preview"
                    className="w-full h-36 object-cover rounded-xl border"
                />

                <div className="grid grid-cols-2 gap-3">
                    <Input
                        placeholder="🐾 Name"
                        value={form.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setForm({ ...form, name: e.target.value })
                        }
                    />

                    <Input
                        type="number"
                        placeholder="🎂 Age"
                        value={form.age}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setForm({ ...form, age: e.target.value })
                        }
                    />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <Input
                        placeholder="🐕 Species"
                        value={form.species}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setForm({ ...form, species: e.target.value })
                        }
                    />

                    <Input
                        placeholder="🧬 Breed"
                        value={form.breed}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setForm({ ...form, breed: e.target.value })
                        }
                    />
                </div>

                <Input
                    placeholder="🖼️ Image URL"
                    value={form.imageUrl}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setForm({ ...form, imageUrl: e.target.value })
                    }
                />

                <textarea
                    placeholder="📝 Tell something cute about your pet..."
                    value={form.description}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setForm({ ...form, description: e.target.value })
                    }
                    className="w-full p-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition resize-none h-20 bg-white"
                />

                <button className="w-full py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:opacity-90 transition">
                    🚀 Submit
                </button>
            </form>
        </div>
    );
}

function Input({
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className="w-full p-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition bg-white"
        />
    );
}