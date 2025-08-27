"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import UserNavbar from "../../components/UserNavbar";
import Sidebar from "../../components/Sidebar";
import SearchBar from "../../components/SearchBar";

export default function DiscoverMore() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Navigate to recipes page by default
    router.push(`/discover/recipes?q=${encodeURIComponent(query)}`);
  };

  const navigateToCategory = (category: string) => {
    router.push(`/discover/${category}`);
  };

  return (
    <div className="min-h-screen">
      <UserNavbar />

      <div className="flex flex-1 max-h-screen">
        <Sidebar />

        <main className="flex-1 flex flex-col items-center justify-center mr-10">
          <div className="flex flex-col justify-center items-center gap-4 mb-30">
            <div className="drop-shadow-title-middle text-[#FFDED0]">
              Discover More
            </div>
            <div className="max-w-[40rem] h-28 text-center justify-center text-black text-2xl font-medium font-['Quicksand'">
              What dish would you love to discover more about?<br />
              Be it dishes, be it recipes, be it restaurants?
            </div>
            <SearchBar onSearch={handleSearch} />
          </div>
        </main>
      </div>
    </div>
  );
}
