/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { colors, allDishes } from "../../data/mockData";
import Wheel from "@uiw/react-color-wheel";
import DishCard from "../../components/Foodcards/Dish";
import Link from "next/link";

const moods = ["happy", "cheerful", "wants something heavy"];

const MAX_COLORS = 5;

export default function Preview() {
  const moodWithColors = useMemo(() => {
    return moods.map((mood) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return { mood, color: randomColor };
    });
  }, []);

  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [palette, setPalette] = useState<Array<string | null>>(
    Array(MAX_COLORS).fill(null)
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleColorChange = (color: any) => {
    setSelectedColor(color.hex);
    if (activeIndex !== null) {
      const newPalette = [...palette];
      newPalette[activeIndex] = color.hex;
      setPalette(newPalette);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <div className="relative z-10 mx-auto space-y-16">
          <div className="relative w-full h-20 flex items-center justify-center">
            {/* Hình chữ nhật hồng */}
            <div className="absolute w-80 h-8 bg-korofu-yellow z-0 translate-x-1.5"></div>

            {/* Chữ hiển thị trên */}
            <h1 className="text-4xl font-bold text-black text-center z-10">
              A Taste Of Korofu
            </h1>
          </div>
          {/* Tiêu đề */}
          <div className="text-center space-y-3">
            <p className="text-2xl text-black !font-[Quicksand] font-medium relative inline-block mb-10">
              Before you sign up, take a little walk through how we work.
              <br></br>
              Think of it as your appetizer before the full meal.
              <span className="relative inline-block" />
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-center gap-7 mb-20 mt-15 w-full">
          <div className="drop-shadow-title-middle text-korofu-green">
            Get Your Mood
          </div>
          <div className="max-w-[40rem] text-center justify-center text-black text-2xl font-medium font-['Quicksand']">
            Start with inputing how you feel today.
          </div>
          {/* Input Form */}
          <div className="w-[70%] mb-5">
            <div className="flex gap-4">
              <textarea
                placeholder="What are you feeling today?"
                className="llm-input bg-korofu-light-red text-korofu-light-yellow placeholder-korofu-light-yellow"
              />
              <button
                className={`llm-input-submit-button bg-korofu-light-yellow transition-all duration-200`}
              >
                <img src="/assets/icon/Send_Red.svg" className="h-10" />
              </button>
            </div>
          </div>
          <div className="max-w-[40rem] text-center justify-center text-black text-2xl font-medium font-['Quicksand']">
            We will interpret your feelings into keywords.
          </div>
          {/* Mood Tags */}
          <div className="flex flex-row gap-5 flex-wrap mb-15">
            {moodWithColors.map(({ mood, color }) => (
              <div key={mood} className={`mood-tag ${color}`}>
                {mood}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-center gap-7 mb-20 mt-15 w-full">
          <div className="drop-shadow-title-middle text-korofu-blue">
            Swatch Your Color Palette
          </div>
          <div className="max-w-[40rem] text-center justify-center text-black text-2xl font-medium font-['Quicksand']">
            Every color you pick adds flavor to your story.
          </div>
          <div className="flex items-center gap-16">
            {/* Color Wheel */}
            <div className="relative">
              <div className="w-64 h-64 rounded-full border-4 border-black shadow-[6px_6px_0_#000] overflow-hidden">
                <Wheel
                  color={selectedColor}
                  onChange={handleColorChange}
                  width={256}
                  height={256}
                />
              </div>
            </div>

            {/* Palette Preview */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <p className="text-2xl font-bold !font-[Quicksand] text-black mb-4">
                  Your color palette
                </p>
                <div className="flex gap-3">
                  {palette.map((color, index) => (
                    <div
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-9 h-9 rounded-full border-3 border-black cursor-pointer shadow-[3px_3px_0_#000] ${
                        activeIndex === index ? "ring-4 ring-yellow-400" : ""
                      }`}
                      style={{
                        backgroundColor: color || "#f0f0f0",
                        borderStyle: color ? "solid" : "dashed",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-center gap-7 mb-20 mt-15 w-full">
          <div className="drop-shadow-title-middle text-korofu-yellow mb-5">
            Your Food Has Arrived!
          </div>
          <div className="max-w-[45rem] text-center justify-center text-black text-2xl font-medium font-['Quicksand']">
            Once moods and colors are in, we deliver food suggestions that match
            your energy. Think of it as a menu written just for you.
          </div>
          <div className="grid grid-cols-2 gap-6">
            {allDishes.map((dish) => (
              <DishCard
                key={dish.id}
                id={dish.id}
                title={dish.title}
                subtitle={dish.subtitle}
                imageUrl={dish.imageUrl}
              />
            ))}
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-center gap-7 mb-20 mt-15 w-full">
          <div className="drop-shadow-title-middle text-korofu-light-yellow mb-5">
            Hungry For More?
          </div>
          <div className="max-w-[40rem] text-center justify-center text-black text-2xl font-medium font-['Quicksand']">
            Korofu is ready when you are. <br></br>
            Your next favorite meal is just one button away.
          </div>
          <Link href="/signup">
            <div className="large-button bg-korofu-light-red text-korofu-light-yellow">
              Sign Up Now!
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
