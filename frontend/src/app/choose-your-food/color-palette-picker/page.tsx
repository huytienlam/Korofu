/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Wheel from "@uiw/react-color-wheel";
import UserNavbar from "../../../components/UserNavbar";
import Sidebar from "../../../components/Sidebar";
import CancelPopup from "../../../components/Popups/Cancel";
import SkipPopup from "../../../components/Popups/Skip";

const MAX_COLORS = 5;

function ColorPickerContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ✅ read moodSkip & mood from query params
  const initialMoodSkip = searchParams?.get("moodSkip") === "true";
  const mood = searchParams?.get("mood") || "";

  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [showSkipPopup, setShowSkipPopup] = useState(false);

  const [moodSkip, setMoodSkip] = useState<boolean>(initialMoodSkip);
  const [colorSkip, setColorSkip] = useState<boolean>(false);

  // color palette state
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [palette, setPalette] = useState<Array<string | null>>(
    Array(MAX_COLORS).fill(null)
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleColorChange = (color: { hex: string }) => {
    setSelectedColor(color.hex);
    if (activeIndex !== null) {
      const newPalette = [...palette];
      newPalette[activeIndex] = color.hex;
      setPalette(newPalette);
    }
  };

  const hasPickedColor = palette.some((c) => c !== null);

  // ✅ preserve both moodSkip & mood when moving forward
  const handleServeColors = () => {
    router.push(
      `/choose-your-food/loading-food?moodSkip=${moodSkip}&colorSkip=false&mood=${encodeURIComponent(
        mood
      )}&palette=${encodeURIComponent(JSON.stringify(palette))}`
    );
  };

  const handleSkipConfirm = (_type: "color" | "both") => {
    if (_type === "both") {
      router.push(
        `/choose-your-food/loading-food?moodSkip=true&colorSkip=true&mood=${encodeURIComponent(
          mood
        )}&palette=${encodeURIComponent(JSON.stringify(palette))}`
      );
    } else {
      router.push(
        `/choose-your-food/loading-food?moodSkip=${moodSkip}&colorSkip=true&mood=${encodeURIComponent(
          mood
        )}&palette=${encodeURIComponent(JSON.stringify(palette))}`
      );
    }
  };

  // skip type depends on moodSkip
  const skipType: "color" | "both" = moodSkip ? "both" : "color";

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

          <div className="relative flex flex-col justify-center items-center gap-4 mb-10">
            <div className="drop-shadow-title-middle text-korofu-light-yellow">
              Color Palette Picker
            </div>
            <div className="max-w-[40rem] text-center justify-center text-black text-2xl font-medium font-['Quicksand']">
              Select the colors you&apos;re drawn to,
              <br />
              and your food will match the mood.
            </div>
          </div>

          <div className="flex items-center gap-16 mb-12">
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

            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <p className="text-2xl font-bold !font-[Quicksand] text-black mb-4">
                  Your color palette
                </p>
                <div className="flex gap-3">
                  {palette.map((color, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setActiveIndex(index);
                      }}
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

              <button
                onClick={handleServeColors}
                disabled={!hasPickedColor}
                className={`medium-button ${
                  hasPickedColor
                    ? "bg-korofu-yellow"
                    : "bg-gray-300 opacity-50 cursor-not-allowed"
                }`}
              >
                Serve my colors!
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Popups */}
      {showCancelPopup && (
        <CancelPopup onClose={() => setShowCancelPopup(false)} />
      )}
      {showSkipPopup && (
        <SkipPopup
          onClose={() => setShowSkipPopup(false)}
          type={skipType}
          setMoodSkip={setMoodSkip}
          setColorSkip={setColorSkip}
        />
      )}
    </div>
  );
}

export default function ColorPicker() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ColorPickerContent />
    </Suspense>
  );
}
