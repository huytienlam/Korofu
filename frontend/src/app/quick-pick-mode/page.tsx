"use client";

import Link from "next/link";
import UserNavbar from "../../components/UserNavbar";
import Sidebar from "../../components/Sidebar";

export default function QuickPickMode() {
  return (
    <div className="min-h-screen">
      <UserNavbar />

      <div className="flex flex-1 max-h-screen">
        <Sidebar />
<<<<<<< Updated upstream

        <main className="flex-1 flex flex-col items-center justify-center">
=======
        
        <main className="flex-1 flex flex-col items-center justify-center mr-10">
>>>>>>> Stashed changes
          <div className="flex flex-col justify-center items-center gap-4 mb-30">
            <div className="drop-shadow-title-middle text-korofu-aqua">
              Quick Pick Mode
            </div>
            <div className="max-w-[40rem] h-28 text-center justify-center text-black text-2xl font-medium font-['Quicksand']">
              Feeling spontaneous? Skip the picks - we’ll analyze your vibe and
              serve up a delicious match.
            </div>
            <div className="inline-flex justify-start items-center gap-12">
              <Link href="/quick-pick-mode/loading">
                <button
                  data-color="Yellow"
                  data-size="Large"
                  className="large-button bg-korofu-yellow"
                >
                  <span className="large-button-text">Surprise me!</span>
                </button>
              </Link>

              <Link href="/choose-your-food">
                <button
                  data-color="Pink"
                  data-size="Large"
                  className="large-button bg-korofu-pink"
                >
                  <span className="large-button-text">
                    I’d rather pick myself.
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
