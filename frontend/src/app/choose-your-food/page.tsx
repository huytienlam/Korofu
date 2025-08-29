"use client";

import Link from "next/link";
import UserNavbar from "../../components/UserNavbar";
import Sidebar from "../../components/Sidebar";

export default function ChooseYourFood() {
  return (
    <div className="min-h-screen">
      <UserNavbar />

      <div className="flex flex-1 max-h-screen">
        <Sidebar />

        <main className="flex-1 flex flex-col items-center justify-center mr-10">
          <div className="flex flex-col justify-center items-center gap-4 mb-30">
            <div className="drop-shadow-title-middle text-korofu-yellow">
              Choose Your Food
            </div>
            <div className="max-w-[40rem] h-28 text-center justify-center text-black text-2xl font-medium font-['Quicksand']">
              Set the mood, pick a color,<br></br>
              and we’ll find your perfect dish!
            </div>
            <div className="inline-flex justify-start items-center gap-12">
              <Link href="/choose-your-food/course-picker">
                <button
                  data-color="Green"
                  data-size="Large"
                  className="large-button bg-korofu-green"
                >
                  Let&apos;s go!
                </button>
              </Link>

              <Link href="/quick-pick-mode">
                <button
                  data-color="Beige"
                  data-size="Large"
                  className="large-button bg-korofu-beige"
                >
                  Wow me instead?
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
