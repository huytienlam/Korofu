"use client";

import { useState } from "react";
import Link from "next/link";
import UserNavbar from '../../../components/UserNavbar';
import Sidebar from '../../../components/Sidebar';
import CancelPopup from "../../../components/Popups/Cancel";
import SkipPopup from "../../../components/Popups/Skip";

export default function ColorPicker() {
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
                    {/* Cancel button */}
                    <div
                        className="cancel-button"
                        onClick={() => setShowCancelPopup(true)}
                    >
                        x
                    </div>

                    {/* Skip button */}
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
                            />
                        </span>
                    </div>

                    {/* Color Picker text */}
                    <div className="relative flex flex-col justify-center items-center gap-4 mb-15">
                        <div className="drop-shadow-title-middle text-korofu-light-yellow">
                            Color Picker
                        </div>
                        <div className="max-w-[40rem] h-28 text-center justify-center text-black text-2xl font-medium font-['Quicksand']">
                            Pick your color palette! <br />
                            Let your vibes shape the flavors you’ll see.
                        </div>
                    </div>
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
                    type="color"
                    setMoodSkip={setMoodSkip}
                    setColorSkip={setColorSkip}
                />
            )}
        </div>
    );
}