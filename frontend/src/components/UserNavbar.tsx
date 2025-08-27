"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type UserNavbarProps = {
  username: string;
};

export default function UserNavbar({ username }: UserNavbarProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full-screen h-[100px] bg-[#F9F5F2] flex items-center justify-center">
      <div className="w-full px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/home" className="flex items-center">
          <Image
            src="/assets/logo/Logo_Yellow.png"
            alt="Korofu Logo"
            width={260}
            height={83}
            priority
          />
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            aria-label="mood"
          >
            <Image
              src="/assets/icon/Mood.png"        
              alt="Mood icon"
              width={48}
              height={48}
            />
          </button>
          <button
            aria-label="search"
          >
            <Image
              src="/assets/icon/Search_Hover.png"  
              alt="Search icon hover"
              width={48}
              height={48}
            />
          </button>
          <button
            aria-label="Notifications"
          >
            <Image
              src="/assets/icon/Notifications_Hover.png"  
              alt="Notifications icon hover"
              width={48}
              height={48}
            />
          </button>
          {/* Avatar + Username + Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-3"
            >
              <div className="relative w-12 h-12 rounded-full border-[2px] border-black shadow-[3px_3px_0_#000] overflow-hidden">
                <Image
                  src="/assets/elements/Avatar.png"
                  alt="User avatar"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <span className="font-extrabold text-[#211204]">{username}</span>
            </button>

            {/* Dropdown menu */}
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white border-2 border-black shadow-[4px_4px_0_#000] z-50">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
