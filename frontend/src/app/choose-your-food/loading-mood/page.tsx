"use client";

import UserNavbar from '../../../components/UserNavbar';
import Sidebar from '../../../components/Sidebar';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ChooseYourFoodLoadingMood() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/choose-your-food/mood-picker-results");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

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