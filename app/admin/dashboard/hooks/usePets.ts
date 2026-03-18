"use client";

import { useEffect, useState } from "react";
import { getPets, createPet, updatePet, deletePet } from "@/services/admin.service";

export const usePets = () => {
  const [pets, setPets] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchPets = async () => {
    setLoading(true);
    try {
      const res = await getPets(1, 10);
      setPets(res.data);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleCreateOrUpdate = async (payload: any, editingPet: any) => {
    try {
      let res;

      if (editingPet) {
        res = await updatePet(editingPet._id, payload);
      } else {
        res = await createPet(payload);
      }

      setMessage(res.message);
      fetchPets();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await deletePet(id);
      setMessage(res.message);
      fetchPets();
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return {
    pets,
    loading,
    message,
    error,
    handleCreateOrUpdate,
    handleDelete,
  };
};