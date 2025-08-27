"use client";

import UserNavbar from '../../../components/UserNavbar';
import Sidebar from '../../../components/Sidebar';
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ChooseYourFoodLoadingMood() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // grab mood param (e.g., ?mood=happy)
  const mood = searchParams.get("mood");

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(`/choose-your-food/mood-picker-results?mood=${mood ?? ""}`);
    }, 2000);

    return () => clearTimeout(timer);
  }, [router, mood]);

  return (
    <div className="min-h-screen">
      <UserNavbar username="Username" />
      
      <div className="flex flex-1 max-h-screen">
        <Sidebar />
        
        <main className="flex-1 flex flex-col items-center justify-center mr-10">
          <p className="drop-shadow-loading-text text-korofu-light-yellow mb-30">
            Scanning your mood vibes...
          </p>
        </main>
      </div>
    </div>
  );
}