"use client";

import UserNavbar from '../../components/UserNavbar';
import Sidebar from '../../components/Sidebar';

export default function QuickPick() {
  return (
    <div className="min-h-screen bg-[#FFF5F1]">
      <UserNavbar username="Username" />

      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-6">
        <Sidebar />
        
        <main className="flex-1 p-6 rounded-3xl">
          <h1 className="text-3xl font-extrabold text-[#21120D] mb-8">Quick Pick Mode</h1>
          
          <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-[8px_8px_0_#000]">
            <p className="text-lg mb-4">Let us pick food for you quickly!</p>
            {/* Add your quick pick content here */}
          </div>
        </main>
      </div>
    </div>
  );
}
