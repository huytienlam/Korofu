"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import UserNavbar from "../../../components/UserNavbar";
import Sidebar from "../../../components/Sidebar";
import CategoryNavigation from "../../../components/CategoryNavigation";
import RestaurantCard from "../../../components/Foodcards/Restaurant";
import { mockPizzaRestaurants } from "../../../data/mockData";

export default function RestaurantsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const handleCategoryChange = (category: string) => {
    router.push(`/discover/${category}${searchQuery ? `?q=${encodeURIComponent(searchQuery)}` : ''}`);
  };

  const handleRetry = () => {
    router.push('/discover');
  };

  return (
    <div className="min-h-screen">
      <UserNavbar />

      <div className="flex flex-1 max-h-screen">
        <Sidebar />

        <main className="flex-1 flex flex-col mr-10 p-2">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-korofu-gold drop-shadow-title-top mb-0">
              Pizza Restaurants
            </h2>
            <CategoryNavigation
              currentCategory="restaurants"
              onCategoryChange={handleCategoryChange}
              onRetry={handleRetry}
            />
          </div>

          {/* Restaurants Grid */}
          <div className="grid grid-cols-2 gap-6">
            {mockPizzaRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                location={restaurant.location}
                imageUrl={restaurant.imageUrl}
                rating={restaurant.rating}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="text-center mt-8">
            <span className="flex justify-end text-3xl text-black-400 font-bold">...</span>
          </div>
        </main>
      </div>
    </div>
  );
}
