"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function UserNavbar() {
  const [username, setUsername] = useState<string>("Username");

  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      try {
        const parsedProfile = JSON.parse(savedProfile);
        if (parsedProfile.name) {
          setUsername(parsedProfile.name);
        }
      } catch (error) {
        console.error("Error parsing saved profile:", error);
      }
    }
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
          <button aria-label="mood">
            <Image
              src="/assets/icon/Mood.png"
              alt="Mood icon"
              width={48}
              height={48}
            />
          </button>
          <button aria-label="search">
            <Image
              src="/assets/icon/Search_Hover.png"
              alt="Search icon hover"
              width={48}
              height={48}
            />
          </button>
          <button aria-label="Notifications">
            <Image
              src="/assets/icon/Notifications_Hover.png"
              alt="Notifications icon hover"
              width={48}
              height={48}
            />
          </button>
          <a href="/profile">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full border-[2px] border-black shadow-[3px_3px_0_#000] overflow-hidden">
                <Image
                  src="/assets/elements/Avatar.png"
                  alt="User avatar"
                  fill
                  sizes="48px"
                  className="object-cover"
                />{" "}
              </div>
              <span className="font-extrabold text-[#211204]">{username}</span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
