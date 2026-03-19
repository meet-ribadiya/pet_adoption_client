"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-300"
        >
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">


                <div>
                    <h2 className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                        🐾 PetAdopt
                    </h2>
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                        Find your perfect companion and give pets a loving home.
                        Adopt, don’t shop ❤️
                    </p>
                </div>


                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        🧭 Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:text-pink-300 transition">
                                🏠 Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/my-adoptions" className="hover:text-pink-300 transition">
                                🐶 My Adoptions
                            </Link>
                        </li>
                        <li>
                            <Link href="/login" className="hover:text-pink-300 transition">
                                🔑 Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/register" className="hover:text-pink-300 transition">
                                🚀 Register
                            </Link>
                        </li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        📞 Contact
                    </h3>
                    <p className="text-sm">📧 support@petadopt.com</p>
                    <p className="text-sm mt-1">📍 Gujarat, India</p>
                </div>


                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        🌐 Follow Us
                    </h3>
                    <div className="flex gap-3 flex-wrap text-sm">
                        <span className="px-3 py-1 rounded-full bg-white/10 hover:bg-pink-400/20 cursor-pointer transition">
                            Facebook
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 hover:bg-purple-400/20 cursor-pointer transition">
                            Instagram
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 hover:bg-blue-400/20 cursor-pointer transition">
                            Twitter
                        </span>
                    </div>
                </div>
            </div>


            <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
                © {new Date().getFullYear()}
                <span className="text-white font-medium"> PetAdopt</span>.
                Made with ❤️ for pet lovers 🐾
            </div>
        </motion.footer>
    );
};

export default Footer;