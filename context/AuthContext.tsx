"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser } from "@/services/auth.service";
import { useRouter } from "next/navigation";

interface User {
    userId: string;
    email: string;
    phoneNumber: string;
    role?: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (data: any) => Promise<string>;
    register: (data: any) => Promise<string>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (data: any) => {
        const res = await loginUser(data);

        if (!res || !res.data) {
            throw new Error(res?.message || "Login failed");
        }

        const { access_token, ...userData } = res.data;

        const role = userData.role || userData.roles || "USER";

        const finalUser = {
            ...userData,
            role,
        };

        setToken(access_token);
        setUser(finalUser);

        localStorage.setItem("token", access_token);
        localStorage.setItem("user", JSON.stringify(finalUser));

        return res.message; // ✅ return API message
    };

    const register = async (data: any) => {
        const res = await registerUser(data);

        if (!res || !res.data) {
            throw new Error(res?.message || "Registration failed");
        }

        const { access_token, ...userData } = res.data;

        setToken(access_token);
        setUser(userData);

        localStorage.setItem("token", access_token);
        localStorage.setItem("user", JSON.stringify(userData));

        return res.message; // ✅ return API message
    };

    const router = useRouter();

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.clear();
        router.push("/");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext)!;
};