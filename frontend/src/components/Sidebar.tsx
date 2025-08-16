"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

type MenuIconSet = {
  default: string;
  hover: string;
  active: string;
};

type MenuItem = {
  label: string;
  href: string;
  icon: MenuIconSet;
};

const MENU_ITEMS: MenuItem[] = [
  {
    label: "Your Space",
    href: "/home",
    icon: {
      default: "/assets/icon/Your Space_Default.png",
      hover: "/assets/icon/Your Space_Hover.png",
      active: "/assets/icon/Your Space_Active.png",
    },
  },
  {
    label: "Choose Your Food",
    href: "/choose-food",
    icon: {
      default: "/assets/icon/Choose Your Food_Default.png",
      hover: "/assets/icon/Choose Your Food_Hover.png",
      active: "/assets/icon/Choose Your Food_Active.png",
    },
  },
  {
    label: "Quick Pick Mode",
    href: "/quick-pick",
    icon: {
      default: "/assets/icon/Quick Pick Mode_Default.png",
      hover: "/assets/icon/Quick Pick Mode_Hover.png",
      active: "/assets/icon/Quick Pick Mode_Active.png",
    },
  },
  {
    label: "Food Preferences",
    href: "/preferences",
    icon: {
      default: "/assets/icon/Food Preferences_Default.png",
      hover: "/assets/icon/Food Preferences_Hover.png",
      active: "/assets/icon/Food Preferences_Active.png",
    },
  },
  {
    label: "Discover More",
    href: "/discover",
    icon: {
      default: "/assets/icon/Discover More_Default.png",
      hover: "/assets/icon/Discover More_Hover.png",
      active: "/assets/icon/Discover More_Active.png",
    },
  },
  {
    label: "Favorite Dishes",
    href: "/favorites",
    icon: {
      default: "/assets/icon/Favorite Dishes_Default.png",
      hover: "/assets/icon/Favorite Dishes_Hover.png",
      active: "/assets/icon/Favorite Dishes_Active.png",
    },
  },
  {
    label: "Saved Collection",
    href: "/saved",
    icon: {
      default: "/assets/icon/Saved Collection_Default.png",
      hover: "/assets/icon/Saved Collection_Hover.png",
      active: "/assets/icon/Saved Collection_Active.png",
    },
  },
  {
    label: "Recent History",
    href: "/history",
    icon: {
      default: "/assets/icon/Recent History_Default.png",
      hover: "/assets/icon/Recent History_Hover.png",
      active: "/assets/icon/Recent History_Active.png",
    },
  },
  {
    label: "Our Community",
    href: "/community",
    icon: {
      default: "/assets/icon/Our Community_Default.png",
      hover: "/assets/icon/Our Community_Hover.png",
      active: "/assets/icon/Our Community_Active.png",
    },
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[300px] h-screen flex flex-col">
      {MENU_ITEMS.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className="group relative w-[300px] h-[56px]"
          >
            {/* Default */}
            {!isActive && (
              <Image
                src={item.icon.default}
                alt={`${item.label} icon`}
                fill
                className="object-contain block group-hover:hidden"
              />
            )}

            {/* Hover */}
            {!isActive && (
              <Image
                src={item.icon.hover}
                alt={`${item.label} icon hover`}
                fill
                className="object-contain hidden group-hover:block"
              />
            )}

            {/* Active */}
            {isActive && (
              <Image
                src={item.icon.active}
                alt={`${item.label} icon active`}
                fill
                className="object-contain"
              />
            )}
          </Link>
        );
      })}
    </aside>
  );
}
