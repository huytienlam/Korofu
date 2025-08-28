"use client";

import { useState, useEffect } from "react";
import UserNavbar from "../../components/UserNavbar";
import Sidebar from "../../components/Sidebar";
import RecipeCard from "../../components/Foodcards/Recipe";
import RestaurantCard from "../../components/Foodcards/Restaurant";
import { mockPizzaRecipes, mockPizzaRestaurants, Recipe, Restaurant } from "../../data/mockData";

type ViewMode = "recipes" | "restaurants";

export default function RecentHistory() {
  const [viewMode, setViewMode] = useState<ViewMode>("recipes");
  
  // Khởi tạo state từ localStorage hoặc lấy 4 items đầu từ mockData
  const [recentRecipes, setRecentRecipes] = useState<Recipe[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('recentRecipes');
      return saved ? JSON.parse(saved) : mockPizzaRecipes.slice(0, 4);
    }
    return mockPizzaRecipes.slice(0, 4);
  });

  const [recentRestaurants, setRecentRestaurants] = useState<Restaurant[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('recentRestaurants');
      return saved ? JSON.parse(saved) : mockPizzaRestaurants.slice(0, 4);
    }
    return mockPizzaRestaurants.slice(0, 4);
  });

  // Lưu vào localStorage khi state thay đổi
  useEffect(() => {
    localStorage.setItem('recentRecipes', JSON.stringify(recentRecipes));
  }, [recentRecipes]);

  useEffect(() => {
    localStorage.setItem('recentRestaurants', JSON.stringify(recentRestaurants));
  }, [recentRestaurants]);

  const handleRemoveRecipe = (id: string) => {
    setRecentRecipes(prev => prev.filter(recipe => recipe.id !== id));
  };

  const handleRemoveRestaurant = (id: string) => {
    setRecentRestaurants(prev => prev.filter(restaurant => restaurant.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <UserNavbar />

      <div className="flex flex-1 max-h-screen">
        <Sidebar />

        <main className="flex-1 p-6 rounded-3xl mr-10">
          <div className="flex justify-between items-center mb-8">
            <h1 className="drop-shadow-title-top text-korofu-light-red">
              Recent History
            </h1>

            <div className="flex gap-4">
              <button
                onClick={() => setViewMode("recipes")}
                className={`medium-button ${
                  viewMode === "recipes" ? "bg-korofu-light-red text-korofu-light-yellow" : "bg-white"
                }`}
              >
                View Recipes
              </button>
              <button
                onClick={() => setViewMode("restaurants")}
                className={`medium-button ${
                  viewMode === "restaurants" ? "bg-korofu-light-yellow text-korofu-light-red" : "bg-white"
                }`}
              >
                View Restaurants
              </button>
            </div>
          </div>

          {/* Last Visited Time */}
          <p className="text-lg text-gray-600 mb-6">
            Last visited: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
          </p>

          <div className="grid grid-cols-2 gap-6">
            {viewMode === "recipes" ? (
              // Recipes History View
              recentRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                  contributor={recipe.contributor}
                  rating={recipe.rating}
                  imageUrl={recipe.imageUrl}
                  onRemove={handleRemoveRecipe}
                />
              ))
            ) : (
              // Restaurants History View
              recentRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  name={restaurant.name}
                  location={restaurant.location}
                  rating={restaurant.rating}
                  imageUrl={restaurant.imageUrl}
                />
              ))
            )}
          </div>

          {((viewMode === "recipes" && recentRecipes.length === 0) ||
            (viewMode === "restaurants" && recentRestaurants.length === 0)) && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No {viewMode === "recipes" ? "recipe" : "restaurant"} history yet.
              </p>
              <p className="text-lg text-gray-500 mt-2">
                Start exploring to build your history!
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}