import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


const getToken = () => {
    return localStorage.getItem("token");
};


const fetchWithAuth = async (url: string, options: any = {}) => {
    const token = getToken();

    const res = await fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            ...options.headers,
        },
    });

    const result = await res.json();


    if (!res.ok) {
        throw new Error(result.message || "Something went wrong");
    }

    return result;
};


// ================= PET APIs =================

export const createPet = async (data: any) => {
    return fetchWithAuth(`${BASE_URL}/pets/create/admin`, {
        method: "POST",
        body: JSON.stringify(data),
    });
};


export const updatePet = async (id: string, data: any) => {
    return fetchWithAuth(`${BASE_URL}/pets/update/admin?id=${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
    });
};


export const deletePet = async (id: string) => {
    return fetchWithAuth(`${BASE_URL}/pets/remove/admin?id=${id}`, {
        method: "DELETE",
    });
};

export const getPets = async (page = 1, limit = 50) => {
    return fetchWithAuth(`${BASE_URL}/pets/find-all?pageNumber=${page}&pageLimit=${limit}`);
}

// ================= ADOPTION APIs =================


export const getAllAdoptions = async (page = 1, limit = 50) => {
    return fetchWithAuth(
        `${BASE_URL}/adoption/find-all/admin?pageNumber=${page}&pageLimit=${limit}`
    );
};


export const updateAdoptionStatus = async (id: string, status: string) => {
    return fetchWithAuth(`${BASE_URL}/adoption/update-status/admin`, {
        method: "PATCH",
        body: JSON.stringify({ id, status }),
    });
};