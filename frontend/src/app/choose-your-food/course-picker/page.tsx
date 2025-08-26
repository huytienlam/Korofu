"use client";

import { useState } from "react";
import Link from "next/link";
import UserNavbar from '../../../components/UserNavbar';
import Sidebar from '../../../components/Sidebar';
import CancelPopup from "../../../components/Popups/Cancel";

const courses = [
  { label: "Breakfast", color: "bg-korofu-yellow" },
  { label: "Dessert",   color: "bg-korofu-pink" },
  { label: "Lunch",     color: "bg-korofu-orange" },
  { label: "Snack",     color: "bg-korofu-aqua" },
  { label: "Dinner",    color: "bg-korofu-blue" },
  { label: "Beverage",  color: "bg-korofu-purple" },
];

export default function CoursePicker() {
    const [showCancelPopup, setShowCancelPopup] = useState(false);

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
                    <div className="relative flex flex-col justify-center items-center gap-4 mb-15">
                        <div className="drop-shadow-title-middle text-korofu-light-yellow">
                            Choose Your Course
                        </div>
                        <div className="max-w-[40rem] h-28 text-center justify-center text-black text-2xl font-medium font-['Quicksand']">
                            Start your food adventure<br></br>
                            by selecting a course to focus on.
                        </div>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                            {courses.map((course) => (
                                <Link href="/choose-your-food/mood-picker" key={course.label}>
                                    <button
                                        data-color={course.label}
                                        data-size="Medium"
                                        className={`medium-button ${course.color}`}
                                    >
                                        {course.label}
                                    </button>
                                </Link>
                            ))}
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