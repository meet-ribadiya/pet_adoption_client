"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900 text-gray-300 mt-16"
        >
            <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">


                <div>
                    <h2 className="text-2xl font-bold text-white">🐾 PetAdopt</h2>
                    <p className="mt-3 text-sm text-gray-400">
                        Find your perfect companion and give pets a loving home.
                        Adopt, don’t shop ❤️
                    </p>
                </div>


                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/my-adoptions" className="hover:text-white">
                                My Adoptions
                            </Link>
                        </li>
                        <li>
                            <Link href="/login" className="hover:text-white">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/register" className="hover:text-white">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Contact
                    </h3>
                    <p className="text-sm">📧 support@petadopt.com</p>
                    <p className="text-sm mt-1">📍 Gujarat ,India</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Follow Us
                    </h3>
                    <div className="flex gap-4 text-sm">
                        <span className="hover:text-white cursor-pointer">
                            Facebook
                        </span>
                        <span className="hover:text-white cursor-pointer">
                            Instagram
                        </span>
                        <span className="hover:text-white cursor-pointer">
                            Twitter
                        </span>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
                © {new Date().getFullYear()} PetAdopt. All rights reserved.
            </div>
        </motion.footer>
    );
};

export default Footer;