"use client";

import { useState } from "react";
import UserNavbar from "../../components/UserNavbar";
import Sidebar from "../../components/Sidebar";
import RecipeCard from "../../components/Foodcards/Recipe";
import RestaurantCard from "../../components/Foodcards/Restaurant";
import { mockPizzaRecipes, mockPizzaRestaurants, Recipe, Restaurant } from "../../data/mockData";

type ViewMode = "recipes" | "restaurants";

export default function SavedCollection() {
  const [viewMode, setViewMode] = useState<ViewMode>("recipes");
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>(mockPizzaRecipes);
  const [savedRestaurants, setSavedRestaurants] = useState<Restaurant[]>(mockPizzaRestaurants);

  const handleRemoveRecipe = (id: string) => {
    setSavedRecipes(prev => prev.filter(recipe => recipe.id !== id));
  };

  const handleRemoveRestaurant = (id: string) => {
    setSavedRestaurants(prev => prev.filter(restaurant => restaurant.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <UserNavbar />

      <div className="flex flex-1 max-h-screen">
        <Sidebar />

        <main className="flex-1 p-6 rounded-3xl mr-10">
          <div className="flex justify-between items-center mb-8">
            <h1 className="drop-shadow-title-top text-korofu-light-red">
              Saved Collection
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

          <div className="grid grid-cols-2 gap-6">
            {viewMode === "recipes" ? (
              // Recipes View
              savedRecipes.map((recipe) => (
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
              // Restaurants View
              savedRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  id={restaurant.id}
                  name={restaurant.name}
                  location={restaurant.location}
                  rating={restaurant.rating}
                  imageUrl={restaurant.imageUrl}
                  onRemove={handleRemoveRestaurant}
                />
              ))
            )}
          </div>

          {((viewMode === "recipes" && savedRecipes.length === 0) ||
            (viewMode === "restaurants" && savedRestaurants.length === 0)) && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No saved {viewMode === "recipes" ? "recipes" : "restaurants"} yet.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}