"use client";

import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const { user, logout } = useAuth();
    const router = useRouter();

    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-between items-center px-4 md:px-8 py-3 
      bg-white/70 backdrop-blur-xl border-b border-white/40 
      shadow-sm sticky top-0 z-50"
        >

            <Link href="/">
                <h1 className="text-xl md:text-2xl font-extrabold 
        bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
        bg-clip-text text-transparent cursor-pointer">
                    🐾 PetAdopt
                </h1>
            </Link>


            <div className="hidden md:flex items-center gap-4">
                {user && (
                    <button
                        onClick={() => router.push("/my-adoptions")}
                        className="px-4 py-1.5 rounded-full text-sm font-medium 
            bg-white/60 backdrop-blur border border-gray-200 
            hover:bg-white transition"
                    >
                        🐶 My Adoptions
                    </button>
                )}
            </div>


            <div className="flex items-center gap-3">
                {user ? (
                    <>

                        <span className="hidden md:block text-sm text-gray-600 bg-white/60 px-3 py-1 rounded-full border border-gray-200">
                            {user.email}
                        </span>


                        <button
                            onClick={logout}
                            className="px-4 py-2 rounded-full text-sm font-semibold text-white 
              bg-gradient-to-r from-red-400 to-pink-400 
              hover:opacity-90 transition shadow-md"
                        >
                            🚪 Logout
                        </button>
                    </>
                ) : (
                    <>

                        <Link href="/login">
                            <button className="px-4 py-2 rounded-full text-sm font-medium 
              border border-gray-300 text-gray-700 
              hover:bg-gray-100 transition">
                                🔑 Login
                            </button>
                        </Link>


                        <Link href="/register">
                            <button className="px-4 py-2 rounded-full text-sm font-semibold text-white 
              bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 
              hover:opacity-90 transition shadow-md">
                                🚀 Register
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;