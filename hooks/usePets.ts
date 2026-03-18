import { useEffect, useState } from "react";
import { getPets } from "@/services/pet.service";
import { Pet } from "@/types/pet.types";

export const usePets = (filters: any, page: number) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);

  const fetchPets = async () => {
    try {
      setLoading(true);

      const res = await getPets({
        ...filters,
        pageNumber: page,
        pageLimit: 6,
      });

      setPets(res.data);
      setHasNext(res.isNextPageAvailable);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, [filters, page]);

  return { pets, loading, hasNext };
};