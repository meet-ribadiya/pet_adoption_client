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
    <div className="bg-white shadow-lg rounded-2xl p-6 mx-6 mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">
        Search Pets
      </h2>

      <div className="grid md:grid-cols-5 gap-4">
        <input
          type="text"
          placeholder="Search by name"
          className="border p-2 rounded-lg text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded-lg text-black"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        >
          <option value="">All Species</option>
          {filterValues.species.map((sp: string) => (
            <option key={sp} value={sp}>
              {sp}
            </option>
          ))}
        </select>

        <select
          className="border p-2 rounded-lg text-black"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        >
          <option value="">All Breeds</option>
          {filterValues.breed.map((b: string) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder={`Min Age (${filterValues.minAge})`}
          className="border p-2 rounded-lg text-black"
          value={minAge}
          onChange={(e) => setMinAge(e.target.value)}
        />

        <input
          type="number"
          placeholder={`Max Age (${filterValues.maxAge})`}
          className="border p-2 rounded-lg text-black"
          value={maxAge}
          onChange={(e) => setMaxAge(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchFilter;