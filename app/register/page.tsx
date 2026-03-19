"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const { register } = useAuth();
    const router = useRouter();

    const [form, setForm] = useState({
        email: "",
        password: "",
        phoneNumber: "",
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

        const isValidPhone = (phone: string) => {
            return /^[6-9]\d{9}$/.test(phone);
        };

        if (!isValidEmail(form.email)) {
            return setError("Invalid email format");
        }

        if (!isValidPhone(form.phoneNumber)) {
            return setError("Invalid phone number (must be 10 digits)");
        }

        if (form.password.length < 4) {
            return setError("Password must be at least 4 characters");
        }

        try {
            const msg = await register(form);
            setMessage(msg);
            router.push("/");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">

           
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-6 space-y-4 transition-all duration-300"
            >
               
                <h2 className="text-2xl font-extrabold text-center text-gray-800">
                    🐾 Create Account
                </h2>
                <p className="text-center text-sm text-gray-500">
                    Join and adopt your new best friend 🐶🐱
                </p>

                
                {message && (
                    <p className="text-green-600 text-sm text-center bg-green-50 py-2 rounded-lg">
                        ✅ {message}
                    </p>
                )}
                {error && (
                    <p className="text-red-600 text-sm text-center bg-red-50 py-2 rounded-lg">
                        ❌ {error}
                    </p>
                )}

               
                <input
                    type="email"
                    placeholder="📧 Email"
                    className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setForm({ ...form, email: e.target.value })
                    }
                />

               
                <input
                    type="password"
                    placeholder="🔒 Password"
                    className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setForm({ ...form, password: e.target.value })
                    }
                />

                
                <input
                    type="text"
                    placeholder="📞 Phone Number"
                    className="w-full p-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setForm({ ...form, phoneNumber: e.target.value })
                    }
                />

                
                <button className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:opacity-90 transition shadow-lg">
                    🚀 Register
                </button>

               
                <p className="text-xs text-center text-gray-400">
                    Start your journey with cute pets 🐾
                </p>
            </form>
        </div>
    );
}