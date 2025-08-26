"use client";

import { useState } from 'react';
import Image from 'next/image';
import UserNavbar from '../../components/UserNavbar';
import Sidebar from '../../components/Sidebar';
import Link from 'next/link';

export default function UserHome() {
  const [username] = useState('Username');
  const [currentMood] = useState('happy');
  const moodTags = ['energetic', 'funky', 'happy', 'new'];

  return (
    <div className="min-h-screen">
      <UserNavbar username="Username" />
      
      <div className="flex flex-1 max-h-screen">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 rounded-3xl mr-10">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-extrabold text-[#21120D]">Hey there, {username}!</h1>
          </div>

          {/* Mood and Color Palette Sections - Side by Side */}
          <div className="flex gap-6 mb-6">
            {/* Mood Section */}
            <div className="bg-white border-2 border-black rounded-3xl p-6 flex-1 shadow-[8px_8px_0_#000]">
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
            <div className="bg-white border-2 border-black rounded-3xl p-6 flex-1 shadow-[8px_8px_0_#000]">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-cyan-300 border-2 border-black mr-4"></div>
                <p className="text-lg font-bold">Recently, you really seem to love a bright soft aqua.</p>
              </div>
              <p className="mb-2">Your color palette</p>
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
          </div>

          {/* Today's Menu Section */}
          <div className="bg-white border-2 border-black rounded-3xl p-6 mb-6 shadow-[8px_8px_0_#000]">
            <div className="flex gap-6">
              {/* Left side - Menu options */}
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-4">Today's Menu</h2>
                <p className="mb-4 font-medium">We think you will like these!</p>
                <p className="text-sm text-gray-600 mb-4">If you don't?</p>
                
                <div className="space-y-3">
                  <button className="w-full py-3 bg-yellow-200 border-2 border-black rounded-xl text-center font-semibold ">
                    <Link href="/choose-food">
                    Choose my own food!
                    </Link>
                  </button>
                  <button className="w-full py-3 bg-cyan-200 border-2 border-black rounded-xl text-center font-semibold">
                    <Link href="/quick-pick">
                    Quick pick for me!                    
                    </Link>
                  </button>
                </div>
              </div>

              {/* Right side - Food cards */}
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-center p-4 border-2 border-black rounded-xl bg-white shadow-[4px_4px_0_#000]">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-lg border-2 border-black overflow-hidden">
                      <Image
                        src="/assets/elements/Handdrawn Pizza.svg"
                        alt="Pizza"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Pizza</h3>
                      <p className="text-sm text-gray-600">Crust, mozzarella cheese, tomato sauce.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded">🗑️</button>
                    <button className="p-2 hover:bg-gray-100 rounded">❤️</button>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 border-2 border-black rounded-xl bg-white shadow-[4px_4px_0_#000]">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-lg border-2 border-black overflow-hidden bg-gradient-to-br from-yellow-200 to-orange-200">
                      <div className="w-full h-full flex items-center justify-center text-2xl">🍝</div>
                    </div>
                    <div>
                      <h3 className="font-bold">Pasta</h3>
                      <p className="text-sm text-gray-600">Pasta, sauce, meat, veggies, cheese.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded">🗑️</button>
                    <button className="p-2 hover:bg-gray-100 rounded">❤️</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Dishes Section */}
          <div className="bg-white border-2 border-black rounded-3xl p-6 mb-6 shadow-[8px_8px_0_#000]">
            <div className="flex gap-6">
              {/* Left side - Description */}
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-4">These are your recent dishes!</h2>
                <p className="text-lg">Wanna give these lovelies a retry?</p>
              </div>

              {/* Right side - Dish cards */}
              <div className="flex-1">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-full h-40 bg-gray-200 rounded-xl mb-2 border-2 border-black shadow-[4px_4px_0_#000]"></div>
                    <p className="font-medium">Grilled Sausages</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-40 bg-gray-200 rounded-xl mb-2 border-2 border-black shadow-[4px_4px_0_#000]"></div>
                    <p className="font-medium">Beef Noodles</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-40 bg-gray-200 rounded-xl mb-2 border-2 border-black shadow-[4px_4px_0_#000]"></div>
                    <p className="font-medium">Fried Chicken</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Offers Section */}
          <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-[8px_8px_0_#000]">
            <div className="flex gap-6">
              {/* Left side - Restaurant listings */}
              <div className="flex-1 space-y-4">
                <div className="p-4 border-2 border-black rounded-xl bg-white shadow-[4px_4px_0_#000]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-red-500 rounded"></div>
                    <h3 className="font-bold">Pizza Hut</h3>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">224 Nguyễn Thị Minh Khai, Phường 6, Quận 3, TPHCM</p>
                  <div className="flex gap-2">
                    <button className="p-1">✏️</button>
                    <button className="p-1">🔖</button>
                  </div>
                </div>

                <div className="p-4 border-2 border-black rounded-xl bg-white shadow-[4px_4px_0_#000]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded"></div>
                    <h3 className="font-bold">Domino's Pizza</h3>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">24 Pham Hong Thai Street, Ben Nghe Ward, District 1</p>
                  <div className="flex gap-2">
                    <button className="p-1">✏️</button>
                    <button className="p-1">🔖</button>
                  </div>
                </div>
              </div>

              {/* Right side - Offers call to action */}
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-4">Nearby Offers</h2>
                <p className="text-lg mb-6">Hand-picked deals catered just for you!</p>
                
                <div className="space-y-3">
                  <button className="w-full py-3 bg-blue-200 border-2 border-black rounded-xl text-center font-medium">
                    Any more new restaurants?
                  </button>
                  <button className="w-full py-3 bg-pink-200 border-2 border-black rounded-xl text-center font-medium">
                    I'd prefer my familiars.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
