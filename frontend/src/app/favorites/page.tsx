"use client";

import { useState } from "react";
import UserNavbar from "../../components/UserNavbar";
import Sidebar from "../../components/Sidebar";
import DishCard from "../../components/Foodcards/Dish";
import { mockPizzaDishes, Dish } from "../../data/mockData";

export default function FavoriteDishes() {
  const [favoriteDishes, setFavoriteDishes] = useState<Dish[]>(mockPizzaDishes);

  const handleRemove = (id: string) => {
    setFavoriteDishes(prev => prev.filter(dish => dish.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <UserNavbar />

      <div className="flex flex-1 max-h-screen">
        <Sidebar />

        <main className="flex-1 p-6 rounded-3xl mr-10">
          <h1 className="drop-shadow-title-top text-korofu-light-red">
            Favorite Dishes
          </h1>

          <div className="grid grid-cols-2 gap-6">
            {favoriteDishes.map((dish) => (
              <DishCard
                key={dish.id}
                id={dish.id}
                title={dish.title}
                subtitle={dish.description}
                imageUrl={dish.imageUrl}
                onRemove={handleRemove}
              />
            ))}
          </div>

          {favoriteDishes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No favorite dishes yet. Start adding some!</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}