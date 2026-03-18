"use client";

import { useState, useEffect } from "react";

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

    return (
        <form onSubmit={handleSubmit} className="grid gap-3 bg-white p-5 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center">
                {editingPet ? "Update Pet 🐾" : "Create New Pet 🐾"}
            </h2>

            <input placeholder="Name" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border p-2 rounded" />

            <input type="number" placeholder="Age" value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                className="border p-2 rounded" />

            <input placeholder="Species" value={form.species}
                onChange={(e) => setForm({ ...form, species: e.target.value })}
                className="border p-2 rounded" />

            <input placeholder="Breed" value={form.breed}
                onChange={(e) => setForm({ ...form, breed: e.target.value })}
                className="border p-2 rounded" />

            <input placeholder="Image URL" value={form.imageUrl}
                onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                className="border p-2 rounded" />

            <textarea placeholder="Description" value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="border p-2 rounded" />

            <button className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Submit
            </button>
        </form>
    );
}