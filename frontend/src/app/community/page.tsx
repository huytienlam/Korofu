"use client";

import UserNavbar from "../../components/UserNavbar";
import Sidebar from "../../components/Sidebar";

export default function OurCommunity() {
  return (
    <div className="min-h-screen">
      <UserNavbar />

      <div className="flex flex-1 max-h-screen">
        <Sidebar />

        <main className="flex-1 p-6 rounded-3xl mr-10">
          <h1 className="text-3xl font-extrabold text-[#21120D] mb-8">
            Our Community
          </h1>

          <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-[8px_8px_0_#000]">
            <p className="text-lg mb-4">Connect with food lovers</p>
            {/* Add your community content here */}
          </div>
        </main>
      </div>
    </div>
  );
}
