"use client";

import { useState } from "react";
import Link from "next/link";
import UserNavbar from "../../../components/UserNavbar";
import Sidebar from "../../../components/Sidebar";
import CancelPopup from "../../../components/Popups/Cancel";
import SkipPopup from "../../../components/Popups/Skip";

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
            </div>
            <div className="max-w-[40rem] h-28 text-center justify-center text-black text-2xl font-medium font-['Quicksand']">
              Start your food adventure<br></br>
              by selecting a course to focus on.
            </div>
          </div>
        </main>
      </div>

      {/* Popup */}
      {showCancelPopup && (
        <CancelPopup onClose={() => setShowCancelPopup(false)} />
      )}
    </div>
  );
}
