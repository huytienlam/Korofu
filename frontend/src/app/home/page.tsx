"use client";

import { useState } from 'react';
import Image from 'next/image';
import UserNavbar from '../../components/UserNavbar';
import Sidebar from '../../components/Sidebar';

export default function UserHome() {
  const [username] = useState('Username');
  const [currentMood] = useState('happy');
  const moodTags = ['energetic', 'funky', 'happy', 'new'];

  return (
    <div className="min-h-screen bg-[#FFF5F1]">
      <UserNavbar username={username} />

      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-6">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 rounded-3xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-extrabold text-[#21120D]">Hey there, {username}!</h1>
          </div>

          {/* Mood Section */}
          <div className="bg-white border-2 border-black rounded-3xl p-6 mb-6 shadow-[8px_8px_0_#000]">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-4">😊</span>
              <p className="text-lg font-bold">You seem to be so happy these days!</p>
            </div>
            <p className="mb-2">Your mood</p>
            <div className="flex gap-2 flex-wrap">
              {moodTags.map((tag) => (
                <span
                  key={tag}
                  className={`px-4 py-1 rounded-full border-2 border-black ${
                    tag === currentMood ? 'bg-yellow-300' : 'bg-white'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Color Palette Section */}
          <div className="bg-white border-2 border-black rounded-3xl p-6 mb-6 shadow-[8px_8px_0_#000]">
            <p className="text-lg mb-4">Recently, you really seem to love a bright soft aqua.</p>
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full border-2 border-black bg-yellow-300"></div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-red-400"></div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-orange-400"></div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-cyan-300"></div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-gray-200"></div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-blue-400"></div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-purple-400"></div>
            </div>
          </div>

          {/* Today's Menu Section */}
          <div className="bg-white border-2 border-black rounded-3xl p-6 mb-6 shadow-[8px_8px_0_#000]">
            <h2 className="text-xl font-bold mb-4">Today's Menu</h2>
            <p className="mb-4">We think you will like these!</p>
            <p className="text-sm text-gray-600 mb-2">If you don't?</p>

            <div className="grid grid-cols-2 gap-4">
              <button className="w-full py-3 bg-blue-200 border-2 border-black rounded-xl text-center">
                Choose my own food!
              </button>
              <button className="w-full py-3 bg-pink-200 border-2 border-black rounded-xl text-center">
                Quick pick for me!
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {/* Food Cards */}
              <div className="flex justify-between items-center p-4 border-2 border-black rounded-xl bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg border-2 border-black"></div>
                  <div>
                    <h3 className="font-bold">Pizza</h3>
                    <p className="text-sm text-gray-600">Crust, mozzarella cheese, tomato sauce.</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2">🗑️</button>
                  <button className="p-2">❤️</button>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 border-2 border-black rounded-xl bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg border-2 border-black"></div>
                  <div>
                    <h3 className="font-bold">Pasta</h3>
                    <p className="text-sm text-gray-600">Pasta, sauce, meat, veggies, cheese.</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2">🗑️</button>
                  <button className="p-2">❤️</button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Dishes Section */}
          <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-[8px_8px_0_#000]">
            <h2 className="text-xl font-bold mb-4">These are your recent dishes!</h2>
            <p className="mb-6">Wanna give these lovelies a retry?</p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-full h-40 bg-gray-200 rounded-xl mb-2 border-2 border-black"></div>
                <p className="font-medium">Grilled Sausages</p>
              </div>
              <div className="text-center">
                <div className="w-full h-40 bg-gray-200 rounded-xl mb-2 border-2 border-black"></div>
                <p className="font-medium">Beef Noodles</p>
              </div>
              <div className="text-center">
                <div className="w-full h-40 bg-gray-200 rounded-xl mb-2 border-2 border-black"></div>
                <p className="font-medium">Fried Chicken</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
