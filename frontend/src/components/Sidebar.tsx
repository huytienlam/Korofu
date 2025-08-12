"use client";

import Link from "next/link";
import { useState } from "react";

type MenuItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const MENU_ITEMS: MenuItem[] = [
  { label: "Your Space", href: "/home", icon: <span>🏠</span> },
  { label: "Choose Your Food", href: "/choose-food", icon: <span>👁️</span> },
  { label: "Quick Pick Mode", href: "/quick-pick", icon: <span>⏩</span> },
  { label: "Food Preferences", href: "/preferences", icon: <span>✍️</span> },
  { label: "Discover More", href: "/discover", icon: <span>🧭</span> },
  { label: "Favorite Dishes", href: "/favorites", icon: <span>❤️</span> },
  { label: "Saved Collection", href: "/saved", icon: <span>🔖</span> },
  { label: "Recent History", href: "/history", icon: <span>🕓</span> },
  { label: "Our Community", href: "/community", icon: <span>👥</span> },
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <aside className="w-72 shrink-0 p-5 rounded-3xl bg-white border-2 border-black/80 shadow-[8px_8px_0_#000]">
      <div className="mb-6">
        {/* <h2 className="text-lg font-extrabold text-[#21120D]">Your Space</h2> */}
      </div>
      <nav className="space-y-3">
        {MENU_ITEMS.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActiveIndex(index)}
              className={[
                "flex items-center gap-3 px-4 py-3 rounded-2xl border-[2.5px] transition-colors",
                isActive
                  ? "bg-[#FFF5F1] border-black text-[#21120D]"
                  : "bg-white border-black hover:bg-[#FFF5F1]",
              ].join(" ")}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-extrabold text-[15px] text-[#21120D]">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
