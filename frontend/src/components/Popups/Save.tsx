"use client";
import { useState } from "react";

interface SavePopupProps {
  onClose: () => void;
  profileData: any; // pass from ProfilePage
}

export default function SavePopup({ onClose, profileData }: SavePopupProps) {
  const [success, setSuccess] = useState(false);

  const handleYes = () => {
    try {
      localStorage.setItem("userProfile", JSON.stringify(profileData)); // ✅ real save
      setSuccess(true);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  if (success) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={onClose}
        ></div>

        <div className="popup relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-3xl font-bold !font-[Quicksand] text-gray-700 hover:text-black"
          >
            ✕
          </button>
          <p className="text-2xl my-15 font-semibold text-center">
            Your changes are successfully saved.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="popup">
        <p className="text-2xl mb-15 mt-3 font-semibold text-center">
          Are you sure you want to save<br/>
          all changes?
        </p>
        <div className="flex justify-center gap-6">
          <button
            onClick={handleYes}
            className="small-button bg-korofu-light-red text-korofu-light-yellow"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="small-button bg-korofu-light-yellow text-korofu-light-red"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
