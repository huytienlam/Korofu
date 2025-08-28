// app/choose-your-food/loading-food/page.tsx
"use client";

import UserNavbar from '../../../components/UserNavbar';
import Sidebar from '../../../components/Sidebar';
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ChooseYourFoodLoadingFood() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const moodSkip = searchParams.get("moodSkip") === "true";
  const colorSkip = searchParams.get("colorSkip") === "true";
  const palette = searchParams.get("palette") ? JSON.parse(decodeURIComponent(searchParams.get("palette")!)) : [];

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(
        `/choose-your-food/food-recommendation?moodSkip=${moodSkip}&colorSkip=${colorSkip}&palette=${encodeURIComponent(JSON.stringify(palette))}`
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [router, moodSkip, colorSkip, palette]);

  return (
    <div className="min-h-screen">
      <UserNavbar username="Username" />
      <div className="flex flex-1 max-h-screen">
        <Sidebar />
        <main className="flex-1 flex flex-col items-center justify-center mr-10">
          <p className="drop-shadow-loading-text text-korofu-yellow">
            One moment...
          </p>
          <p className="drop-shadow-loading-text text-korofu-yellow mb-30">
            Your perfect bite is loading!
          </p>
        </main>
      </div>
    </div>
  );
}