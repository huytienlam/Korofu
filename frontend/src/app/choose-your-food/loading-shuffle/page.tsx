// app/choose-your-food/loading-shuffle/page.tsx
"use client";

import UserNavbar from "../../../components/UserNavbar";
import Sidebar from "../../../components/Sidebar";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function ChooseYourFoodLoadingShuffleContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const moodSkip = searchParams.get("moodSkip") === "true";
  const colorSkip = searchParams.get("colorSkip") === "true";

  useEffect(() => {
    const palette = searchParams.get("palette")
      ? JSON.parse(decodeURIComponent(searchParams.get("palette")!))
      : [];
    const timer = setTimeout(() => {
      router.push(
        `/choose-your-food/food-recommendation-shuffle?moodSkip=${moodSkip}&colorSkip=${colorSkip}&palette=${encodeURIComponent(
          JSON.stringify(palette)
        )}`
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [router, moodSkip, colorSkip, searchParams]);

  return (
    <div className="min-h-screen">
      <UserNavbar username="Username" />
      <div className="flex flex-1 max-h-screen">
        <Sidebar />
        <main className="flex-1 flex flex-col items-center justify-center mr-10">
          <p className="drop-shadow-loading-text text-korofu-yellow">
            Shuffling...
          </p>
          <p className="drop-shadow-loading-text text-korofu-yellow mb-30">
            Fresh flavors coming right up!
          </p>
        </main>
      </div>
    </div>
  );
}

export default function ChooseYourFoodLoadingShuffle() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChooseYourFoodLoadingShuffleContent />
    </Suspense>
  );
}
