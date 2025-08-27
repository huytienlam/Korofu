"use client";

import UserNavbar from "../../components/UserNavbar";
import Sidebar from "../../components/Sidebar";
import RecipeCard from "@/components/Foodcards/Recipe";
export default function SavedCollection() {
  return (
    <div className="min-h-screen">
      <UserNavbar />

      <div className="flex flex-1 max-h-screen">
        <Sidebar />

        <main className="flex-1 p-6 rounded-3xl mr-10">
          <h1 className="text-3xl font-extrabold text-[#21120D] mb-8">
            Saved Collection
          </h1>
          <div className="flex gap-6">
            <RecipeCard
              title="Margherita Pizza"
              contributor="HCMC."
              rating={4}
              imageUrl= "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg"
              />
            <RecipeCard
              title="Spaghetti Carbonara"
              contributor="HCMC."
              rating={2}
              imageUrl="https://www.allrecipes.com/thmb/IrY572TXic4UXXVn8EetsarI3S0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-269500-creamy-garlic-pasta-Beauties-4x3-f404628aad2a435a9985b2cf764209b5.jpg"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
