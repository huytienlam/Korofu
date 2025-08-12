"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
type MenuItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const MENU_ITEMS: MenuItem[] = [
  {
    label: "Your Space",
    href: "/home",
    icon: (
      <Image
        src="/assets/icon/Home.png"
        alt="Home"
        width={20}
        height={20}
        className="scale-150"
      />
    ),
  },
  {
    label: "Choose Your Food",
    href: "/choose-food",
    icon: (
      <Image
        src="/assets/icon/Eye.png"
        alt="Eye"
        width={20}
        height={20}
        className="scale-150"
      />
    ),
  },
  {
    label: "Quick Pick Mode",
    href: "/quick-pick",
    icon: (
      <Image
        src="/assets/icon/Fast forward.png"
        alt="Fast forward"
        width={20}
        height={20}
        className="scale-150"
      />
    ),
  },
  {
    label: "Food Preferences",
    href: "/preferences",
    icon: (
      <Image
        src="/assets/icon/Edit.png"
        alt="Edit"
        width={20}
        height={20}
        className="scale-150"
      />
    ),
  },
  {
    label: "Discover More",
    href: "/discover",
    icon: (
      <Image
        src="/assets/icon/Compass.png"
        alt="Compass"
        width={20}
        height={20}
        className="scale-150"
      />
    ),
  },
  {
    label: "Favorite Dishes",
    href: "/favorites",
    icon: (
      <Image
        src="/assets/icon/Heart.png"
        alt="Heart"
        width={20}
        height={20}
        className="scale-150"
      />
    ),
  },
  {
    label: "Saved Collection",
    href: "/saved",
    icon: (
      <Image
        src="/assets/icon/Bookmark.png"
        alt="Bookmark"
        width={20}
        height={20}
        className="scale-150"
      />
    ),
  },
  {
    label: "Recent History",
    href: "/history",
    icon: (
      <Image
        src="/assets/icon/Stop circle.png"
        alt="History"
        width={20}
        height={20}
        className="scale-150"
      />
    ),
  },
  {
    label: "Our Community",
    href: "/community",
    icon: (
      <Image
        src="/assets/icon/Users.png"
        alt="Users"
        width={20}
        height={20}
        className="scale-150"
      />
    ),
  },
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
              <div className="flex items-center justify-center w-5 h-5">
                {item.icon}
              </div>
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
