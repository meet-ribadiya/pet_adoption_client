"use client";

import { useState } from "react";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/home/HeroSection";
import PetList from "@/components/home/PetList";
import SearchFilter from "@/components/home/SearchFilter";
import HowItWorks from "@/components/home/HowItWorks";
import Reviews from "@/components/home/Reviews";

export default function Home() {
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* <Navbar /> */}
      <HeroSection />

      <SearchFilter
        onSearch={(f) => {
          setPage(1); 
          setFilters(f);
        }}
      />

      <PetList filters={filters} page={page} setPage={setPage} />

      <HowItWorks />
      <Reviews />
    </main>
  );
}