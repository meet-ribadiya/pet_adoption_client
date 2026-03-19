"use client";

import { useState, useEffect } from "react";
import { useFilterValues } from "@/hooks/useFilterValues";

interface Props {
  onSearch: (filters: any) => void;
}

const SearchFilter = ({ onSearch }: Props) => {
  const filterValues = useFilterValues();

  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");


  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch({
        search,
        species,
        breed,
        minAge: minAge ? Number(minAge) : undefined,
        maxAge: maxAge ? Number(maxAge) : undefined,
      });
    }, 500);

    return () => clearTimeout(delay);
  }, [search, species, breed, minAge, maxAge]);

  if (!filterValues) return null;

  return (
    <div className="mx-4 mt-6">
      <div className="bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg rounded-2xl p-5">

        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          🐾 Find Your Perfect Pet
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">

          <input
            type="text"
            placeholder="🔍 Search by name"
            className="p-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 transition text-sm"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />

          <select
            className="p-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 transition text-sm"
            value={species}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSpecies(e.target.value)
            }
          >
            <option value="">🐕 All Species</option>
            {filterValues.species.map((sp: string) => (
              <option key={sp} value={sp}>
                {sp}
              </option>
            ))}
          </select>

          <select
            className="p-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 transition text-sm"
            value={breed}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setBreed(e.target.value)
            }
          >
            <option value="">🧬 All Breeds</option>
            {filterValues.breed.map((b: string) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder={`🎂 Min (${filterValues.minAge})`}
            className="p-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition text-sm"
            value={minAge}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMinAge(e.target.value)
            }
          />

          <input
            type="number"
            placeholder={`🎂 Max (${filterValues.maxAge})`}
            className="p-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition text-sm"
            value={maxAge}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMaxAge(e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;