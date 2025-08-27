"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import UserNavbar from "../../../components/UserNavbar";
import Sidebar from "../../../components/Sidebar";
import CancelPopup from "../../../components/Popups/Cancel";
import SkipPopup from "../../../components/Popups/Skip";

export default function MoodPicker() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // initialize skip states from URL so they persist between pages
  const initialMoodSkip = searchParams?.get("moodSkip") === "true";
  const initialColorSkip = searchParams?.get("colorSkip") === "true";

  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [showSkipPopup, setShowSkipPopup] = useState(false);

  const [moodSkip, setMoodSkip] = useState(initialMoodSkip ?? false);
  const [colorSkip, setColorSkip] = useState(initialColorSkip ?? false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/choose-your-food/loading-mood?moodSkip=${moodSkip}&colorSkip=${colorSkip}`
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
          <div
            className="skip-button"
            onClick={() => setShowSkipPopup(true)}
          >
            Skip
            <span className="ml-1 inline-flex items-center">
              <img
                src="/assets/icon/Skip_Yellow.svg"
                alt="skip icon"
                className="w-10"
              />
            </span>
          </div>

          <div className="relative flex flex-col justify-center items-center gap-4 mb-15">
            <div className="drop-shadow-title-middle text-korofu-light-yellow">
              Mood Picker
            </div>
            <div className="max-w-[40rem] h-28 text-center justify-center text-black text-2xl font-medium font-['Quicksand']">
              How are you feeling today? <br />
              Let your mood guide you to the perfect bite!
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="w-[80%] mb-15">
            <div className="flex gap-4">
              <textarea
                placeholder="What are you feeling today?"
                className="llm-input bg-korofu-light-red text-korofu-light-yellow placeholder-korofu-light-yellow"
              />
              <button
                type="submit"
                className="llm-input-submit-button bg-korofu-light-yellow"
              >
                <img src="/assets/icon/Send_Red.svg" className="h-10" />
              </button>
            </div>
          </form>
        </main>
      </div>

      {/* Cancel Popup */}
      {showCancelPopup && (
        <CancelPopup onClose={() => setShowCancelPopup(false)} />
      )}

      {/* Skip Popup */}
      {showSkipPopup && (
        <SkipPopup
          onClose={() => setShowSkipPopup(false)}
          type="mood"
          setMoodSkip={setMoodSkip}
          setColorSkip={setColorSkip}
        />
      )}
    </div>
  );
}