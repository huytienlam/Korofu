"use client";

import { useState } from "react";
import Link from "next/link";
import UserNavbar from "../../../components/UserNavbar";
import Sidebar from "../../../components/Sidebar";
import CancelPopup from "../../../components/Popups/Cancel";
import SkipPopup from "../../../components/Popups/Skip";

<<<<<<< Updated upstream
export default function CoursePicker() {
  const [showCancelPopup, setShowCancelPopup] = useState(false);

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
          <div className="skip-button">
            Skip
            <span className="ml-1 inline-flex items-center">
              <img
                src="/assets/icon/Skip_Yellow.png"
                alt="skip icon"
                className="w-10"
              ></img>
            </span>
          </div>

          <div className="relative flex flex-col justify-center items-center gap-4 mb-15">
            <div className="drop-shadow-title-middle text-korofu-light-yellow">
              Choose Your Course
=======
export default function MoodPicker() {
    const [showCancelPopup, setShowCancelPopup] = useState(false);
    const [showSkipPopup, setShowSkipPopup] = useState(false);

    // state for skip logic
    const [moodSkip, setMoodSkip] = useState(false);
    const [colorSkip, setColorSkip] = useState(false);

    return (
        <div className="min-h-screen">
            <UserNavbar username="Username" />
            
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
                                src="/assets/icon/Skip_Yellow.png"
                                alt="skip icon"
                                className="w-10"
                            ></img>
                        </span>
                    </div>

                    <div className="relative flex flex-col justify-center items-center gap-4 mb-15">
                        <div className="drop-shadow-title-middle text-korofu-light-yellow">
                            Mood Picker
                        </div>
                        <div className="max-w-[40rem] h-28 text-center justify-center text-black text-2xl font-medium font-['Quicksand']">
                            How are you feeling today? <br></br>
                            Let your mood guide you to the perfect bite!
                        </div>
                        
                    </div>
                </main>
>>>>>>> Stashed changes
            </div>
            <div className="max-w-[40rem] h-28 text-center justify-center text-black text-2xl font-medium font-['Quicksand']">
              Start your food adventure<br></br>
              by selecting a course to focus on.
            </div>
          </div>
        </main>
      </div>

<<<<<<< Updated upstream
      {/* Popup */}
      {showCancelPopup && (
        <CancelPopup onClose={() => setShowCancelPopup(false)} />
      )}
    </div>
  );
}
=======
            {/* Popup */}
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
>>>>>>> Stashed changes
