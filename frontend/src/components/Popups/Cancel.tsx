"use client";

import Link from "next/link";

interface CancelPopupProps {
  onClose: () => void;
}

export default function CancelPopup({ onClose }: CancelPopupProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Transparent black overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Popup box */}
      <div className="popup">
        <p className="text-2xl mb-15 mt-3 font-semibold">
          Are you sure you want to cancel?
        </p>
        <div className="flex justify-center gap-6">
          <Link href="/home">
            <button className="small-button bg-korofu-light-red text-korofu-light-yellow">
              Yes
            </button>
          </Link>
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