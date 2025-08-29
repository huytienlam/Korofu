"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import UserNavbar from "../../../components/UserNavbar";
import Sidebar from "../../../components/Sidebar";
import CategoryNavigation from "../../../components/CategoryNavigation";
import DishCard from "../../../components/Foodcards/Dish";
import { mockPizzaDishes } from "../../../data/mockData";

export default function DishesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const handleCategoryChange = (category: string) => {
    router.push(
      `/discover/${category}${
        searchQuery ? `?q=${encodeURIComponent(searchQuery)}` : ""
      }`
    );
  };

  const handleRetry = () => {
    router.push("/discover");
  };

  return (
    <div className="min-h-screen">
      <UserNavbar />

      <div className="flex flex-1 max-h-screen">
        <Sidebar />

        <main className="flex-1 flex flex-col mr-10 p-2">
          <div className="flex items-center justify-between mb-5">
            <div className="text-korofu-green drop-shadow-title-top mb-0">
              Pizza Dishes
            </div>
            <CategoryNavigation
              currentCategory="dishes"
              onCategoryChange={handleCategoryChange}
              onRetry={handleRetry}
            />
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-2 gap-6">
            {mockPizzaDishes.map((dish) => (
              <DishCard
                key={dish.id}
                title={dish.title}
                subtitle={dish.description || ""}
                imageUrl={dish.imageUrl}
                id={dish.id}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="text-center mt-8">
            <span className="text-3xl flex justify-end text-black-400 font-bold">
              ...
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
