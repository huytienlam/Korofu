"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import UserNavbar from "../../../components/UserNavbar";
import Sidebar from "../../../components/Sidebar";
import CategoryNavigation from "../../../components/CategoryNavigation";
import RecipeCard from "../../../components/Foodcards/Recipe";
import { mockPizzaRecipes } from "../../../data/mockData";

export default function RecipesPage() {
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
              Pizza Recipes
            </h2>
            <CategoryNavigation
              currentCategory="recipes"
              onCategoryChange={handleCategoryChange}
              onRetry={handleRetry}
            />
          </div>



          {/* Recipes Grid */}
          <div className="grid grid-cols-2 gap-6">
            {mockPizzaRecipes.map((recipe) => (
              <RecipeCard   
                key={recipe.id}
                title={recipe.title}
                contributor={recipe.contributor || ''}
                rating={recipe.rating || 5}
                imageUrl={recipe.imageUrl}
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
