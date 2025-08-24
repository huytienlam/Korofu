"use client";

import UserNavbar from '../../components/UserNavbar';
import Sidebar from '../../components/Sidebar';
import RecipeCard from '@/components/Foodcards/Recipe';
export default function SavedCollection() {
  return (
    <div className="min-h-screen">
      <UserNavbar username="Username" />
      
      <div className="flex flex-1 max-h-screen">
        <Sidebar />
        
        <main className="flex-1 p-6 rounded-3xl">
          <h1 className="text-3xl font-extrabold text-[#21120D] mb-8">Saved Collection</h1>
          <div className="flex gap-6">
            <RecipeCard 
              tittle="Spaghetti Carbonara" 
              subtittle="HCMC." 
              rating={4}
            />
            <RecipeCard 
              tittle="Spaghetti Carbonara" 
              subtittle="HCMC." 
              rating={2}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
