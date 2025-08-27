// app/choose-your-food/food-recommendation/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import UserNavbar from '../../../components/UserNavbar';
import Sidebar from '../../../components/Sidebar';
import DishCard from '../../../components/Foodcards/Dish';

const dishes = [
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
  {
    title: "Fried Chicken",
    subtitle: "Chicken, batter.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7uXAnhdOWJpu4Maf6a9yjc1RikPvL0nq_Q&s",
  },
];

const moods = ["happy", "cheerful", "wants something heavy"];

const colors = [
  "bg-korofu-yellow",
  "bg-korofu-aqua",
  "bg-korofu-pink",
  "bg-korofu-dark-red",
  "bg-korofu-indigo",
  "bg-korofu-gold",
  "bg-korofu-orange",
  "bg-korofu-purple",
  "bg-korofu-beige",
  "bg-korofu-blue",
  "bg-korofu-green",
  "bg-korofu-light-red",
  "bg-korofu-light-yellow",
];

const hardcodedColors = [
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#9D4EDD",
]

export default function FoodRecommendation() {
  const searchParams = useSearchParams();
  const moodSkip = searchParams.get("moodSkip") === "true";
  const colorSkip = searchParams.get("colorSkip") === "true";
  // palette can be read if you want to show the chosen colors
  const palette = searchParams.get("palette") ? JSON.parse(decodeURIComponent(searchParams.get("palette")!)) : [];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleCardClick = (index: number) => setActiveIndex((prev) => (prev === index ? null : index));

  const moodWithColors = useMemo(() => {
      return moods.map((mood) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return { mood, color: randomColor };
      });
    }, []);

  return (
    <div className="min-h-screen">
      <UserNavbar />
      <div className="flex flex-1 max-h-screen">
        <Sidebar />
        <main className="flex-1 flex flex-col mr-10">
          <div className="drop-shadow-title-top text-korofu-yellow">
            The food stars aligned and chose...
          </div>

          <div className="flex flex-row justify-between gap-12">
            <div className="flex flex-col gap-4">
              {dishes.map((dish, index) => (
                <DishCard
                  key={index}
                  title={dish.title}
                  subtitle={dish.subtitle}
                  imageUrl={dish.imageUrl}
                  active={activeIndex === index}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </div>

            <div className="flex flex-col justify-center align-center gap-4">
              {!moodSkip && (
                <div className="text-4xl p-4 rounded">
                  <p className="text-2xl font-bold !font-[Quicksand] text-black mb-4">
                    Your mood
                  </p>
                  <div className="flex flex-row gap-4 flex-wrap">
                    {moodWithColors.map(({ mood, color }) => (
                      <div key={mood} className={`mood-tag ${color}`}>
                        {mood}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!colorSkip && (
                <div className="text-4xl p-4 rounded">
                  <p className="text-2xl font-bold !font-[Quicksand] text-black mb-4">
                    Your color palette
                  </p>
                  <div className="flex gap-3">
                    {hardcodedColors.map((color, index) => (
                      <div
                        key={index}
                        className="w-9 h-9 rounded-full border-3 border-black shadow-[3px_3px_0_#000]"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-5 mt-6 mb-3">
                <div className="flex flex-row gap-6">
                  <Link
                    href="/quick-pick-mode/loading"
                    className={activeIndex === null ? "pointer-events-none" : ""}
                  >
                    <button
                      className={`medium-button bg-korofu-light-red text-korofu-light-yellow 
                      ${activeIndex === null ? "opacity-50 cursor-not-allowed" : ""}`}
                      disabled={activeIndex === null}
                    >
                      View Recipes
                    </button>
                  </Link>

                  <Link
                    href="/quick-pick-mode/loading"
                    className={activeIndex === null ? "pointer-events-none" : ""}
                  >
                    <button
                      className={`medium-button bg-korofu-light-yellow text-korofu-light-red 
                      ${activeIndex === null ? "opacity-50 cursor-not-allowed" : ""}`}
                      disabled={activeIndex === null}
                    >
                      View Restaurants
                    </button>
                  </Link>
                </div>
                <p className="text-xl text-center">
                  Hmm... not the one?&nbsp;
                  <Link
                    href={{
                      pathname: "/choose-your-food/loading-shuffle",
                      query: {
                        moodSkip: moodSkip.toString(),
                        colorSkip: colorSkip.toString(),
                        ...(palette.length > 0 && { palette: encodeURIComponent(JSON.stringify(palette)) }),
                      },
                    }}
                  >
                    <strong className="underline">Shuffle again!</strong>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}