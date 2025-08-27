"use client";

import { useRouter, useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const currentParams = new URLSearchParams(searchParams.toString());

  const moodAlreadySkipped = currentParams.get("moodSkip") === "true";

  // Messages depending on type and moodSkip
  const messages = {
    mood: "Skipping the mood?\nYour cravings might stay hidden!",
    color: moodAlreadySkipped
      ? "Looks like you skipped both mood and color. Proceed with Quick Pick Mode?"
      : "Skipping the color palette?\nYou might miss a perfect match!",
    both: "Looks like you skipped both mood and color. Proceed with Quick Pick Mode?",
  };

  const handleYes = () => {
    if (type === "mood") {
      setMoodSkip(true);
      currentParams.set("moodSkip", "true");
      router.push(`/choose-your-food/color-palette-picker?${currentParams.toString()}`);
    } else if (type === "color") {
      if (moodAlreadySkipped) {
        // skip both → quick pick
        setColorSkip(true);
        currentParams.set("colorSkip", "true");
        router.push(`/quick-pick-mode/loading?${currentParams.toString()}`);
      } else {
        // skip color only
        setColorSkip(true);
        currentParams.set("colorSkip", "true");
        router.push(`/choose-your-food/loading-food?${currentParams.toString()}`);
      }
    } else if (type === "both") {
      setMoodSkip(true);
      setColorSkip(true);
      currentParams.set("moodSkip", "true");
      currentParams.set("colorSkip", "true");
      router.push(`/quick-pick-mode/loading?${currentParams.toString()}`);
    }
  };

  const handleNo = () => {
    // Always just stay on the page, close popup
    setMoodSkip(false);
    setColorSkip(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="popup">
        <p className="text-2xl mb-15 mt-3 font-semibold whitespace-pre-line">
          {messages[type]}
        </p>
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