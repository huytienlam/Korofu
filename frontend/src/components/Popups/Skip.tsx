"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface SkipPopupProps {
  onClose: () => void;
  type: "mood" | "color" | "both";
  setMoodSkip: (value: boolean) => void;
  setColorSkip: (value: boolean) => void;
}

export default function SkipPopup({
  onClose,
  type,
  setMoodSkip,
  setColorSkip,
}: SkipPopupProps) {
  const router = useRouter();

  // Popup text depending on type
  const messages = {
    mood: "Skipping the mood? Your cravings might stay hidden!",
    color: "Skipping the color palette? You might miss a perfect match!",
    both: "Looks like you skipped both mood and color. Proceed with Quick Pick Mode?",
  };

  // Handle Yes click logic
  const handleYes = () => {
    if (type === "mood") {
      setMoodSkip(true);
      router.push("/choose-your-food/color-palette-picker"); // 👉 move to next page
    } else if (type === "color") {
      setColorSkip(true);
      router.push("/choose-your-food/loading-food"); // 👉 move to recommendations
    } else if (type === "both") {
      setMoodSkip(true);
      setColorSkip(true);
      router.push("/quick-pick-mode/food-recommendation"); // 👉 special flow
    }
  };

  // Handle No logic
  const handleNo = () => {
    if (type === "mood") {
      setMoodSkip(false);
      onClose();
    } else if (type === "color") {
      setColorSkip(false);
      onClose();
    } else if (type === "both") {
      setColorSkip(false); // Reset color skip back to false
      router.push("/color-palette");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>

      {/* Popup */}
      <div className="popup">
        <p className="text-2xl mb-15 mt-3 font-semibold">{messages[type]}</p>
        <div className="flex justify-center gap-6">
          <button
            onClick={handleYes}
            className="small-button bg-korofu-light-red text-korofu-light-yellow"
          >
            Yes
          </button>
          <button
            onClick={handleNo}
            className="small-button bg-korofu-light-yellow text-korofu-light-red"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}