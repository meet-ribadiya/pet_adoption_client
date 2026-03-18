"use client";

import { useEffect, useState } from "react";
import { getAdoptions, updateAdoptionStatus } from "@/services/adoption.service";

export const useAdoptions = () => {
  const [adoptions, setAdoptions] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchAdoptions = async () => {
    try {
      const res = await getAdoptions(1, 10);
      setAdoptions(res.data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleUpdate = async (id: string, status: string) => {
    try {
      const res = await updateAdoptionStatus(id, status);
      setMessage(res.message);
      fetchAdoptions();
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchAdoptions();
  }, []);

  return {
    adoptions,
    message,
    error,
    handleUpdate,
  };
};