"use client";

import { useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import UserNavbar from "../../../components/UserNavbar";
import Sidebar from "../../../components/Sidebar";
import SkipPopup from "../../../components/Popups/Skip";
import CancelPopup from "../../../components/Popups/Cancel";
import { colors } from "../../../data/mockData";

const moods = ["happy", "cheerful", "wants something heavy"];

export default function MoodPickerResults() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // load skip state from query
  const initialMoodSkip = searchParams?.get("moodSkip") === "true";
  const initialColorSkip = searchParams?.get("colorSkip") === "true";

  const [showSkipPopup, setShowSkipPopup] = useState(false);
  const [showCancelPopup, setShowCancelPopup] = useState(false);

  const [moodSkip, setMoodSkip] = useState(initialMoodSkip ?? false);
  const [colorSkip, setColorSkip] = useState(initialColorSkip ?? false);

  const moodWithColors = useMemo(() => {
    return moods.map((mood) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return { mood, color: randomColor };
    });
  }, []);

  const handleSpotOn = () => {
    // ✅ mood confirmed
    router.push(
      `/choose-your-food/color-palette-picker?moodSkip=false&colorSkip=${colorSkip}`
    );
  };

  const handleNope = () => {
    router.push(
      `/choose-your-food/mood-picker?moodSkip=${moodSkip}&colorSkip=${colorSkip}`
    );
  };

  return (
    <div className="min-h-screen">
      <UserNavbar />

      <div className="flex flex-1 max-h-screen">
        <Sidebar />

        <main className="relative flex-1 flex flex-col items-center justify-center mr-10">
          <div
            className="cancel-button"
            onClick={() => setShowCancelPopup(true)}
          >
            x
          </div>
          <div className="skip-button" onClick={() => setShowSkipPopup(true)}>
            Skip
            <span className="ml-1 inline-flex items-center">
              <img
                src="/assets/icon/Skip_Yellow.svg"
                alt="skip icon"
                className="w-10"
              />
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 mb-30">
            <div className="drop-shadow-title-middle text-korofu-light-yellow">
              Mood Picker
            </div>
            <div className="max-w-[40rem] text-center justify-center text-black text-2xl font-medium font-['Quicksand']">
              Does this match how you&apos;re feeling?
            </div>

            {/* Mood Tags */}
            <div className="flex flex-row gap-5 flex-wrap mt-5 mb-15">
              {moodWithColors.map(({ mood, color }) => (
                <div key={mood} className={`mood-tag ${color}`}>
                  {mood}
                </div>
              ))}
            </div>

            <div className="inline-flex justify-start items-center gap-12">
              <button
                onClick={handleSpotOn}
                className="large-button bg-korofu-light-red text-korofu-light-yellow"
              >
                Spot on!
              </button>

              <button
                onClick={handleNope}
                className="large-button bg-korofu-light-yellow text-korofu-light-red"
              >
                Nope, not quite.
              </button>
            </div>
          </div>
        </main>
      </div>

      {showSkipPopup && (
        <SkipPopup
          onClose={() => setShowSkipPopup(false)}
          type="mood"
          setMoodSkip={setMoodSkip}
          setColorSkip={setColorSkip}
        />
      )}
      {showCancelPopup && (
        <CancelPopup onClose={() => setShowCancelPopup(false)} />
      )}
    </div>
  );
}
