import { useEffect, useState } from "react";
import { getFilterValues } from "@/services/pet.service";

export const useFilterValues = () => {
  const [filtersData, setFiltersData] = useState<any>(null);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const res = await getFilterValues();
        setFiltersData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFilters();
  }, []);

  return filtersData;
};