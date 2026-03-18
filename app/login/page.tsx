"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError("");
        setMessage("");

        const isValidEmail = (email: string) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };

        if (!isValidEmail(form.email)) {
            return setError("Invalid email format");
        }

        if (form.password.length < 4) {
            return setError("Password must be at least 4 characters");
        }

        try {
            const msg = await login(form);
            setMessage(msg); // ✅ show API success message
            const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

            if (storedUser.role === "ADMIN") {
                router.push("/admin/dashboard");
            } else {
                router.push("/");
            }
        } catch (err: any) {
            setError(err.message); // ✅ show API error message
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form
                onSubmit={handleSubmit}
                className="p-6 bg-white shadow-lg rounded-xl w-96"
            >
                <h2 className="text-2xl font-bold mb-4">Login</h2>

                {message && <p className="text-green-600 mb-2">{message}</p>}
                {error && <p className="text-red-600 mb-2">{error}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-3 p-2 border rounded"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-3 p-2 border rounded"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <button className="w-full bg-black text-white py-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
}