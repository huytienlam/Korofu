"use client";

import { useState } from "react";
import LoadingScreen from "./LoadingScreen";

type MoodPickerProps = {
  showMoodPicker: boolean;
  onSkip?: () => void; // Callback to go back to prompt
  onSkipToColorPalette?: () => void; // Callback to go to color palette
};

// Predefined color palette for mood tags
const MOOD_COLORS = [
  "#FFD21E", // yellow
  "#FF6B35", // orange
  "#00C8C8", // teal
  "#9B59B6", // purple
  "#FF69B4", // pink
  "#8B4513", // dark brown
  "#50af63", // green
  "#FF4757", // red
  "#2ED573", // lime green
  "#1E90FF", // dodger blue
  "#FFA502", // orange
  "#A55EEA", // purple
];

const MOOD_TAGS = [
  "Happy",
  "Excited",
  "Relaxed",
  "Cozy",
  "Adventurous",
  "Comfortable",
  "Energetic",
  "Peaceful",
  "Curious",
];

export default function MoodPicker({
  showMoodPicker,
  onSkip,
  onSkipToColorPalette,
}: MoodPickerProps) {
  const [mood, setMood] = useState("");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Generate random colors for mood tags
  const getMoodTagColor = (index: number) => {
    return MOOD_COLORS[index % MOOD_COLORS.length];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mood.trim()) {
      console.log("Mood submitted:", mood);
      setIsLoading(true);
      // Simulate loading time
      setTimeout(() => {
        setIsLoading(false);
        setMood("");
        // Here you can add logic to navigate to results or next step
      }, 3000);
    }
  };

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
  };

  const handleSpotOn = () => {
    if (selectedMood) {
      console.log("Mood confirmed:", selectedMood);
      setIsLoading(true);
      // Simulate loading time
      setTimeout(() => {
        setIsLoading(false);
        // Here you can add logic to navigate to results or next step
      }, 3000);
    }
  };

  const handleNotQuite = () => {
    console.log("Mood not quite right, going back");
    setSelectedMood(null);
    if (onSkip) {
      onSkip(); // Call parent's function to go back to prompt
    }
  };

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Show mood picker screen
  if (showMoodPicker) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-[#21120D] mb-8 text-center tracking-tight">
          How are you feeling today?
        </h1>

        {/* Description */}
        <div className="text-center mb-12">
          <p className="text-2xl font-bold text-[#21120D] mb-2">
            Pick a mood that matches your vibe,
          </p>
          <p className="text-2xl font-bold text-[#21120D]">
            and we&apos;ll find the perfect food for you.
          </p>
        </div>

        {/* Mood Tags */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {MOOD_TAGS.map((moodTag, index) => {
            const tagColor = getMoodTagColor(index);
            return (
              <button
                key={moodTag}
                onClick={() => handleMoodSelect(moodTag)}
                className={`px-6 py-4 border-2 border-black rounded-2xl shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] active:shadow-[2px_2px_0_#000] active:translate-x-1 active:translate-y-1 transition-all duration-200 font-bold text-[#21120D] ${
                  selectedMood === moodTag
                    ? "shadow-[6px_6px_0_#000]"
                    : "hover:bg-opacity-90"
                }`}
                style={{
                  backgroundColor:
                    selectedMood === moodTag ? tagColor : tagColor,
                  opacity: selectedMood === moodTag ? 1 : 0.8,
                }}
              >
                {moodTag}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-6">
          <button
            onClick={handleSpotOn}
            disabled={!selectedMood}
            className={`px-8 py-4 border-2 border-black rounded-2xl shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] active:shadow-[2px_2px_0_#000] active:translate-x-1 active:translate-y-1 transition-all duration-200 font-bold text-[#21120D] ${
              selectedMood
                ? "bg-[#FFD21E] hover:bg-[#FFE55C]"
                : "bg-gray-300 opacity-50 cursor-not-allowed"
            }`}
          >
            Spot on!
          </button>
          <button
            onClick={handleNotQuite}
            className="px-8 py-4 bg-[#FFF5C0] border-2 border-black rounded-2xl shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] active:shadow-[2px_2px_0_#000] active:translate-x-1 active:translate-y-1 transition-all duration-200 font-bold text-red-600"
          >
            Nope, not quite.
          </button>
        </div>
      </div>
    );
  }

  // Show original prompt screen
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-[#21120D] mb-8 text-center tracking-tight">
        What&apos;s your mood today?
      </h1>

      {/* Description */}
      <div className="text-center mb-12">
        <p className="text-2xl font-bold text-[#21120D] mb-2">
          Tell us how you&apos;re feeling,
        </p>
        <p className="text-2xl font-bold text-[#21120D]">
          and we&apos;ll find the perfect food for you.
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="I'm feeling..."
            className="flex-1 px-6 py-4 text-lg font-bold text-[#21120D] bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0_#000] focus:outline-none focus:shadow-[6px_6px_0_#000] transition-shadow placeholder-[#21120D] placeholder-opacity-50"
          />
          <button
            type="submit"
            disabled={!mood.trim()}
            className={`px-6 py-4 border-2 border-black rounded-2xl shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] active:shadow-[2px_2px_0_#000] active:translate-x-1 active:translate-y-1 transition-all duration-200 font-bold text-[#21120D] ${
              mood.trim()
                ? "bg-[#FFD21E] hover:bg-[#FFE55C]"
                : "bg-gray-300 opacity-50 cursor-not-allowed"
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#21120D]"
            >
              <path
                d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
