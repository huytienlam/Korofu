"use client";

import UserNavbar from '../../components/UserNavbar';
import Sidebar from '../../components/Sidebar';

export default function SavedCollection() {
  return (
    <div className="min-h-screen">
      <UserNavbar username="Username" />

      <div className="min-h-screen flex mt-5">
        <Sidebar />
        
        <main className="flex-1 p-6 rounded-3xl">
          <h1 className="text-3xl font-extrabold text-[#21120D] mb-8">Saved Collection</h1>
          
          <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-[8px_8px_0_#000]">
            <p className="text-lg mb-4">Your saved food items</p>
            {/* Add your saved collection content here */}
          </div>
        </main>
      </div>
    </div>
  );
}
