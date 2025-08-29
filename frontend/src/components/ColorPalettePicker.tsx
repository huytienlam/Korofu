/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Wheel from "@uiw/react-color-wheel";
import LoadingScreen from "./LoadingScreen";

const MAX_PALETTE_COLORS = 10;

export default function ColorPalettePicker() {
  const [selectedColor, setSelectedColor] = useState("#50af63");
  const [colorPalette, setColorPalette] = useState([
    "#FFD21E", // yellow
    "#FF6B35", // orange
    "#00C8C8", // teal
    "#9B59B6", // purple
    "#FF69B4", // pink
    "#8B4513", // dark brown
    "#50af63", // green
  ]);
  const [showLimitMessage, setShowLimitMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleColorChange = (color: { hex: string }) => {
    setSelectedColor(color.hex);
  };

  const addToPalette = () => {
    if (colorPalette.includes(selectedColor)) {
      return; // Color already exists
    }

    if (colorPalette.length >= MAX_PALETTE_COLORS) {
      // FIFO: Remove oldest color and add new one
      setColorPalette([...colorPalette.slice(1), selectedColor]);

      // Show notification
      setShowLimitMessage(true);
      setTimeout(() => setShowLimitMessage(false), 3000);
    } else {
      // Normal add
      setColorPalette([...colorPalette, selectedColor]);
    }
  };

  const removeFromPalette = (index: number) => {
    setColorPalette(colorPalette.filter((_, i) => i !== index));
  };

  const handleServeColors = () => {
    setIsLoading(true);
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
      // Here you can add logic to navigate to results or next step
    }, 3000);
  };

  const isPaletteFull = colorPalette.length >= MAX_PALETTE_COLORS;
  const canAddColor = !colorPalette.includes(selectedColor);

  // Create arrays for top and bottom rows
  const topRowColors = colorPalette.slice(0, 5);
  const bottomRowColors = colorPalette.slice(5, 10);

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-[#21120D] mb-8 text-center tracking-tight">
        Color Palette Picker
      </h1>

      {/* Description */}
      <div className="text-center mb-12">
        <p className="text-2xl font-bold text-[#21120D] mb-2">
          Select the colors you&apos;re drawn to,
        </p>
        <p className="text-2xl font-bold text-[#21120D]">
          and your food will match the mood.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex items-center gap-12">
        {/* Left Side - Color Wheel */}
        <div className="flex flex-col items-center">
          {/* Color Wheel */}
          <div className="relative mb-6">
            <div className="w-64 h-64 rounded-full border-4 border-black shadow-[6px_6px_0_#000] overflow-hidden">
              <Wheel
                color={selectedColor}
                onChange={handleColorChange}
                width={256}
                height={256}
              />
            </div>
          </div>

          {/* Hex Input */}
          <div className="w-full max-w-48">
            <input
              type="text"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-full px-4 py-3 text-lg font-mono font-bold text-[#21120D] bg-white border-2 border-black rounded-xl shadow-[3px_3px_0_#000] focus:outline-none focus:shadow-[4px_4px_0_#000] transition-shadow"
              placeholder="#FFFFFF"
            />
          </div>
        </div>

        {/* Right Side - Color Palette */}
        <div className="flex flex-col items-center">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-[#21120D]">
              Your color palette
            </h3>
            <p className="text-sm text-[#21120D] opacity-70 mt-1">
              {colorPalette.length}/{MAX_PALETTE_COLORS} colors
            </p>
            {isPaletteFull && (
              <p className="text-xs text-[#21120D] opacity-60 mt-1">
                New colors will replace oldest ones
              </p>
            )}
          </div>

          {/* Color Swatches - 2 Rows Layout */}
          <div className="flex flex-col gap-3 mb-8">
            {/* Top Row - 5 colors */}
            <div className="flex gap-3 justify-center">
              {Array.from({ length: 5 }).map((_, index) => {
                const color = topRowColors[index];
                const actualIndex = index;

                if (color) {
                  return (
                    <div key={`top-${index}`} className="relative group">
                      <div
                        className="w-12 h-12 rounded-full border-3 border-black shadow-[3px_3px_0_#000] cursor-pointer hover:shadow-[4px_4px_0_#000] transition-shadow"
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      />
                      {/* Remove button */}
                      <button
                        onClick={() => removeFromPalette(actualIndex)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 border-2 border-black rounded-full shadow-[2px_2px_0_#000] text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                      {/* Order indicator for oldest color */}
                      {actualIndex === 0 && isPaletteFull && (
                        <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 border border-black rounded-full text-white text-xs flex items-center justify-center font-bold">
                          1
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={`top-empty-${index}`}
                      className="w-12 h-12 rounded-full border-3 border-dashed border-gray-400 bg-gray-100"
                    />
                  );
                }
              })}
            </div>

            {/* Bottom Row - 5 colors */}
            <div className="flex gap-3 justify-center">
              {Array.from({ length: 5 }).map((_, index) => {
                const color = bottomRowColors[index];
                const actualIndex = index + 5;

                if (color) {
                  return (
                    <div key={`bottom-${index}`} className="relative group">
                      <div
                        className="w-12 h-12 rounded-full border-3 border-black shadow-[3px_3px_0_#000] cursor-pointer hover:shadow-[4px_4px_0_#000] transition-shadow"
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      />
                      {/* Remove button */}
                      <button
                        onClick={() => removeFromPalette(actualIndex)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 border-2 border-black rounded-full shadow-[2px_2px_0_#000] text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                      {/* Order indicator for oldest color */}
                      {actualIndex === 0 && isPaletteFull && (
                        <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 border border-black rounded-full text-white text-xs flex items-center justify-center font-bold">
                          1
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={`bottom-empty-${index}`}
                      className="w-12 h-12 rounded-full border-3 border-dashed border-gray-400 bg-gray-100"
                    />
                  );
                }
              })}
            </div>
          </div>

          {/* Add Button */}
          <div className="flex justify-center mb-4">
            <button
              onClick={addToPalette}
              disabled={!canAddColor}
              className={`px-6 py-3 border-2 border-black rounded-xl shadow-[3px_3px_0_#000] transition-all duration-200 font-bold text-[#21120D] ${
                canAddColor
                  ? "bg-[#FFD21E] hover:shadow-[4px_4px_0_#000] active:shadow-[2px_2px_0_#000] active:translate-x-1 active:translate-y-1"
                  : "bg-gray-300 opacity-50 cursor-not-allowed"
              }`}
            >
              {isPaletteFull ? "Replace Oldest Color" : "Add to Palette"}
            </button>
          </div>

          {/* Limit Message */}
          {showLimitMessage && (
            <div className="mt-4 px-4 py-2 bg-orange-100 border-2 border-orange-500 rounded-xl text-orange-700 font-bold text-sm animate-bounce">
              Oldest color replaced with new one!
            </div>
          )}
        </div>
      </div>

      {/* Serve my colors Button */}
      <div className="mt-12">
        <button
          onClick={handleServeColors}
          className="px-12 py-6 bg-[#FFD21E] border-3 border-black rounded-2xl shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#000] active:shadow-[4px_4px_0_#000] active:translate-x-1 active:translate-y-1 transition-all duration-200 font-bold text-[#21120D] text-xl"
        >
          Serve my colors!
        </button>
      </div>
    </div>
  );
}
