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
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-between items-center px-8 py-4 shadow-md bg-white/90 backdrop-blur-md sticky top-0 z-50"
        >

            <Link href="/">
                <h1 className="text-2xl font-bold text-gray-900 cursor-pointer">
                    🐾 PetAdopt
                </h1>
            </Link>

            <div className="flex items-center gap-6">
                {user && (
                    <button
                        onClick={() => router.push("/my-adoptions")}
                        className="text-gray-700 hover:text-black font-medium"
                    >
                        My Adoptions
                    </button>
                )}
            </div>

            <div className="flex items-center gap-4">
                {user ? (
                    <>

                        <span className="text-gray-700 hidden md:block">
                            {user.email}
                        </span>

                        <button
                            onClick={logout}
                            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>

                        <Link href="/login">
                            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-100">
                                Login
                            </button>
                        </Link>

                        <Link href="/register">
                            <button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800">
                                Register
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;