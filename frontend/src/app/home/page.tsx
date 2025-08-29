"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import UserNavbar from "../../components/UserNavbar";
import Sidebar from "../../components/Sidebar";
import Link from "next/link";
import { colors } from "../../data/mockData";
import DishCard from "../../components/Foodcards/Dish";
import Card from "../../components/Foodcards/Card";
import RestaurantCard from "../../components/Foodcards/Restaurant";

const moods = ["energetic", "funky", "happy", "new"];
const hardcodedColors = [
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#9D4EDD",
  "#d76f00ff",
  "#ae1562ff",
];
const TodayMenu = [
  {
    title: "Pizza",
    subtitle: "Crust, mozzarella cheese, tomato sauce.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg",
  },
  {
    title: "Pasta",
    subtitle: "Pasta, sauce, meat, veggies, cheese.",
    imageUrl:
      "https://www.allrecipes.com/thmb/IrY572TXic4UXXVn8EetsarI3S0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-269500-creamy-garlic-pasta-Beauties-4x3-f404628aad2a435a9985b2cf764209b5.jpg",
  },
];
const RecentDishes = [
  {
    id: 1,
    title: "Grilled Sausages",
    imageUrl:
      "https://www.allrecipes.com/thmb/IrY572TXic4UXXVn8EetsarI3S0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-269500-creamy-garlic-pasta-Beauties-4x3-f404628aad2a435a9985b2cf764209b5.jpg",
  },
  {
    id: 2,
    title: "Beef Noodles",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg",
  },
  {
    id: 3,
    title: "Fried Chicken",
    imageUrl:
      "https://www.allrecipes.com/thmb/IrY572TXic4UXXVn8EetsarI3S0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-269500-creamy-garlic-pasta-Beauties-4x3-f404628aad2a435a9985b2cf764209b5.jpg",
  },
];
const MockPizzaRestaurants = [
  {
    id: "1",
    name: "Pizza Hut",
    location: "123 Main Street, Downtown",
    rating: 5,
    imageUrl:
      "https://gigamall.com.vn/data/2019/09/20/13434233_LOGO-PIZZA-HUT-500x500.jpg",
  },
  {
    id: "2",
    name: "Domino's Pizza",
    location: "456 Oak Avenue, Midtown",
    rating: 5,
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/16/de/b7/6a/logo-domino-s-pizza.jpg",
  },
];

export default function UserHome() {
  const [username] = useState("Username");

  const moodWithColors = useMemo(() => {
    return moods.map((mood) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return { mood, color: randomColor };
    });
  }, []);

  return (
    <div className="min-h-screen">
      <UserNavbar />

      <div className="flex flex-1">
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 flex flex-col mr-10 p-2 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="drop-shadow-title-top text-white">
              Hey there, <span className="text-korofu-yellow">{username}!</span>
            </h1>
          </div>

          {/* Mood and Color Palette Sections - Side by Side */}
          <div className="flex gap-6 mb-6">
            {/* Mood Section */}
            <div
              className="bg-white border-2 border-black rounded-xl p-7 flex-1 shadow-[4px_4px_0_#000]
                            flex flex-col gap-5"
            >
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/assets/icon/Mood.png"
                  alt="Mood"
                  width={64}
                  height={64}
                />
                <div className="flex-1 font-semibold text-2xl min-h-15 flex items-center">
                  You seem to be so happy these days!
                </div>
              </div>
              <div className="text-4xl">
                <p className="text-2xl font-bold !font-[Quicksand] text-black mb-3">
                  Your mood
                </p>
                <div className="flex flex-row gap-4 flex-wrap w-full">
                  {moodWithColors.map(({ mood, color }) => (
                    <div key={mood} className={`mood-tag ${color}`}>
                      {mood}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Color Palette Section */}
            <div
              className="bg-white border-2 border-black rounded-xl p-7 flex-1 shadow-[4px_4px_0_#000]
                              flex flex-col gap-5"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full border-3 border-black shadow-[3px_3px_0_#000] bg-korofu-aqua"></div>
                <div className="flex-1 font-semibold text-2xl min-h-15 flex items-center">
                  Recently, you really seem to love a bright soft aqua.
                </div>
              </div>
              <div className="text-4xl">
                <p className="text-2xl font-bold !font-[Quicksand] text-black mb-3">
                  Your color palette
                </p>
                <div className="flex w-full gap-5">
                  {hardcodedColors.map((color, index) => (
                    <div
                      key={index}
                      className="w-9 h-9 rounded-full border-3 border-black shadow-[3px_3px_0_#000]"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Today's Menu Section */}
          <div
            className="bg-korofu-light-yellow border-2 border-black flex gap-15
                          rounded-xl p-8 mb-6 shadow-[4px_4px_0_#000]"
          >
            <div className="flex w-[35%] flex-col justify-between">
              <p className="text-3xl font-semibold">Today&apos;s Menu</p>
              <p className="text-2xl !font-[Quicksand] font-semibold">
                We think you will like these!<br></br>If you don’t?
              </p>
              <div className="flex flex-col gap-3">
                <button className="large-button bg-korofu-yellow w-full">
                  Choose my own food!
                </button>
                <button className="large-button bg-korofu-aqua w-full">
                  Quick pick for me!
                </button>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-5">
              {TodayMenu.map((dish, index) => (
                <DishCard
                  key={index}
                  id={index.toString()}
                  title={dish.title}
                  subtitle={dish.subtitle}
                  imageUrl={dish.imageUrl}
                />
              ))}
            </div>
          </div>

          {/* Recent Dishes Section */}
          <div
            className="bg-korofu-blue border-2 border-black flex gap-15
                          rounded-xl p-8 mb-6 shadow-[4px_4px_0_#000]"
          >
            <div className="flex w-[35%] flex-col justify-between">
              <p className="text-3xl font-semibold">
                These are your <br></br> recent dishes!
              </p>
              <p className="text-2xl !font-[Quicksand] font-semibold">
                We think you will like these!<br></br>If you don’t?
              </p>
            </div>
            <div className="justify-end flex-1 flex gap-5">
              {RecentDishes.map((dish) => (
                <Card
                  key={dish.id}
                  title={dish.title}
                  imageUrl={dish.imageUrl}
                />
              ))}
            </div>
          </div>

          {/* Nearby Offers Section */}
          <div
            className="bg-korofu-green border-2 border-black flex gap-15
                          rounded-xl p-8 mb-6 shadow-[4px_4px_0_#000]"
          >
            <div className="flex-1 flex flex-col gap-5">
              {MockPizzaRestaurants.map((restaurant) => (
                <RestaurantCard
                  id={restaurant.id}
                  key={restaurant.id}
                  name={restaurant.name}
                  location={restaurant.location}
                  imageUrl={restaurant.imageUrl}
                  rating={restaurant.rating}
                />
              ))}
            </div>
            <div className="flex w-[35%] flex-col justify-between">
              <p className="text-3xl font-semibold">Nearby Offers</p>
              <p className="text-2xl !font-[Quicksand] font-semibold">
                Hand-picked deals catered <br></br> just for you!
              </p>
              <div className="flex flex-col gap-3">
                <button className="large-button bg-korofu-pink w-full">
                  Any more new restaurants?
                </button>
                <button className="large-button bg-korofu-orange w-full">
                  I’d prefer my familiars.
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
