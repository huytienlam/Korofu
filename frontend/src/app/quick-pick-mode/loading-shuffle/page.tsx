"use client";

import UserNavbar from "../../../components/UserNavbar";
import Sidebar from "../../../components/Sidebar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function QuickPickModeLoadingShuffle() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/quick-pick-mode/food-recommendation-shuffle");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen">
      <UserNavbar />

      <div className="flex flex-1 max-h-screen">
        <Sidebar />

        <main className="flex-1 flex flex-col items-center justify-center mr-10">
          <p className="drop-shadow-loading-text text-korofu-aqua">
            Shuffling...
          </p>
          <p className="drop-shadow-loading-text text-korofu-aqua mb-30">
            Serving up your next craving!
          </p>
        </main>
      </div>
    </div>
  );
}
