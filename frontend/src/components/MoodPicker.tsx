"use client";

import { useState } from "react";

type MoodPickerProps = {
  showMoodPicker: boolean;
  onSkip?: () => void;
  onSkipToColorPalette?: () => void;
};

export default function MoodPicker({ showMoodPicker, onSkip, onSkipToColorPalette }: MoodPickerProps) {
  const [mood, setMood] = useState("");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mood.trim()) {
      // Handle mood submission here
      console.log("Mood submitted:", mood);
      setMood("");
    }
  };

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
  };

  const handleSpotOn = () => {
    if (selectedMood) {
      console.log("Mood confirmed:", selectedMood);
      // Handle mood confirmation here
    }
  };

  const handleNotQuite = () => {
    console.log("Mood not quite right, going back");
    setSelectedMood(null);
    if (onSkip) {
      onSkip();
    }
  };

  // Show mood picker screen
  if (showMoodPicker) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-[#21120D] mb-8 text-center tracking-tight">
          Mood Picker
        </h1>
        
        {/* Question */}
        <div className="text-center mb-12">
          <p className="text-2xl font-bold text-[#21120D]">
            Does this match how you're feeling?
          </p>
        </div>

        {/* Mood Tags */}
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => handleMoodSelect("happy")}
            className={`px-6 py-3 rounded-full border-2 border-black shadow-[3px_3px_0_#000] hover:shadow-[4px_4px_0_#000] transition-shadow font-bold text-[#21120D] ${
              selectedMood === "happy" 
                ? "bg-[#FFD21E] shadow-[4px_4px_0_#000]" 
                : "bg-[#FFD21E]"
            }`}
          >
            happy
          </button>
          
          <button
            onClick={() => handleMoodSelect("energetic")}
            className={`px-6 py-3 rounded-full border-2 border-black shadow-[3px_3px_0_#000] hover:shadow-[4px_4px_0_#000] transition-shadow font-bold text-[#21120D] ${
              selectedMood === "energetic" 
                ? "bg-[#00C8C8] shadow-[4px_4px_0_#000]" 
                : "bg-[#00C8C8]"
            }`}
          >
            energetic
          </button>
          
          <button
            onClick={() => handleMoodSelect("wants something heavy")}
            className={`px-6 py-3 rounded-full border-2 border-black shadow-[3px_3px_0_#000] hover:shadow-[4px_4px_0_#000] transition-shadow font-bold text-[#21120D] ${
              selectedMood === "wants something heavy" 
                ? "bg-[#FF69B4] shadow-[4px_4px_0_#000]" 
                : "bg-[#FF69B4]"
            }`}
          >
            wants something heavy
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-6">
          <button
            onClick={handleSpotOn}
            disabled={!selectedMood}
            className="px-8 py-4 bg-[#F88366] border-2 border-black rounded-2xl shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] active:shadow-[2px_2px_0_#000] active:translate-x-1 active:translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[4px_4px_0_#000] disabled:active:translate-x-0 disabled:active:translate-y-0 font-bold text-white"
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
        Mood Picker
      </h1>
      
      {/* Prompt Text */}
      <div className="text-center mb-16">
        <p className="text-2xl font-bold text-[#21120D] mb-3">
          How are you feeling today?
        </p>
        <p className="text-xl text-[#21120D] opacity-80">
          Let your mood guide you to the perfect bite!
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-3xl">
        <div className="flex gap-4 items-end">
          {/* Input Field */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="What are you feeling today?"
              className="w-full px-8 py-6 text-xl font-medium text-[#21120D] bg-[#FF8A63] border-[3px] border-black rounded-3xl shadow-[6px_6px_0_#000] placeholder-[#21120D] placeholder-opacity-70 focus:outline-none focus:shadow-[8px_8px_0_#000] focus:border-[#FF6F61] transition-all duration-200"
            />
          </div>
          
          {/* Send Button */}
          <button
            type="submit"
            disabled={!mood.trim()}
            className="px-8 py-6 bg-[#FFD21E] border-[3px] border-black rounded-3xl shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#000] hover:bg-[#FFE066] active:shadow-[4px_4px_0_#000] active:translate-x-1 active:translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[6px_6px_0_#000] disabled:active:translate-x-0 disabled:active:translate-y-0 flex items-center justify-center"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#21120D]"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
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
