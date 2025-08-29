// app/choose-your-food/food-recommendation-shuffle/page.tsx
"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import UserNavbar from "../../../components/UserNavbar";
import Sidebar from "../../../components/Sidebar";
import DishCard from "../../../components/Foodcards/Dish";

const shuffledDishes = [
  {
    title: "Thai Red Curry",
    subtitle: "Curry paste, coconut milk, meat, Thai basil.",
    imageUrl:
      "https://takestwoeggs.com/wp-content/uploads/2025/03/Thai-Red-Curry-2.jpg",
  },
  {
    title: "Ramen",
    subtitle: "Broth, noodles, tare, egg, scallions.",
    imageUrl:
      "https://soomfoods.com/cdn/shop/articles/45_d115125d-8365-4865-af0e-5a8f42b577af_1600x.png?v=1750100505",
  },
  {
    title: "Tacos",
    subtitle: "Tortillas, meat, onion, cilantro, salsa.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDlBVCkK2SizG-nsiurP2phVkoYWRLxpsxw&s",
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

const hardcodedColors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#9D4EDD"];

function FoodRecommendationShuffleContent() {
  const searchParams = useSearchParams();
  const moodSkip = searchParams.get("moodSkip") === "true";
  const colorSkip = searchParams.get("colorSkip") === "true";
  const palette = searchParams.get("palette")
    ? JSON.parse(decodeURIComponent(searchParams.get("palette")!))
    : [];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleCardClick = (index: number) =>
    setActiveIndex((prev) => (prev === index ? null : index));

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
            Destiny plated up just for you…
          </div>

          <div className="flex flex-row justify-between gap-12">
            <div className="flex flex-col gap-4">
              {shuffledDishes.map((dish, index) => (
                <DishCard
                  key={index}
                  id={index.toString()}
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
                    href="/discover/recipes"
                    className={
                      activeIndex === null ? "pointer-events-none" : ""
                    }
                  >
                    <button
                      className={`medium-button bg-korofu-light-red text-korofu-light-yellow 
                      ${
                        activeIndex === null
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={activeIndex === null}
                    >
                      View Recipes
                    </button>
                  </Link>

                  <Link
                    href="/discover/restaurants"
                    className={
                      activeIndex === null ? "pointer-events-none" : ""
                    }
                  >
                    <button
                      className={`medium-button bg-korofu-light-yellow text-korofu-light-red 
                      ${
                        activeIndex === null
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
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
                      pathname: "/choose-your-food/loading-food",
                      query: {
                        moodSkip: moodSkip.toString(),
                        colorSkip: colorSkip.toString(),
                        ...(palette.length > 0 && {
                          palette: encodeURIComponent(JSON.stringify(palette)),
                        }),
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

export default function FoodRecommendationShuffle() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FoodRecommendationShuffleContent />
    </Suspense>
  );
}
