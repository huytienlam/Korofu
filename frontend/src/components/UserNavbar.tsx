"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type UserNavbarProps = {
  username?: string; // optional prop
};

const mockDataNotification = [
  {
    id: 1,
    name: "Anna",
    content: "just shared a story about her favorite spaghetti bolognese! 🍝✨",
    src: "/assets/elements/Avatar.png",
  },
  {
    id: 2,
    name: "Chloe",
    content:
      "just shared a fresh green salad story to match her calm mood. 🥬🌿",
    src: "/assets/elements/Avatar.png",
  },
  {
    id: 3,
    name: "Sophia ",
    content: "is feeling blue and found comfort in blueberry pancakes. 🫐🥞",
    src: "/assets/elements/Avatar.png",
  },
  {
    id: 4,
    name: "Lara",
    content: "chose yellow curry for a cheerful vibe — see her story now! 💛🍛",
    src: "/assets/elements/Avatar.png",
    isRead: true,
  },
  {
    id: 5,
    name: "Linh",
    content: "posted a heartfelt memory linked to her mom's chicken soup.",
    src: "/assets/elements/Avatar.png",
  },
];

export default function UserNavbar({ username }: UserNavbarProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [notificationFilter, setNotificationFilter] = useState<
    "all" | "unread"
  >("all");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  // Đóng dropdown avatar khi click bên ngoài
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Đóng dropdown notification khi click bên ngoài
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setOpenNotification(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [localUsername, setLocalUsername] = useState<string>(
    username || "Username"
  );

  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      try {
        const parsedProfile = JSON.parse(savedProfile);
        if (parsedProfile.name) {
          setLocalUsername(parsedProfile.name);
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
              onClick={() => router.push("/discover")}
            />
          </button>
          {/* Notifications + Toggle Dropdown  */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setOpenNotification((prev) => !prev)}
              aria-label="Notifications"
            >
              <Image
                src="/assets/icon/Notifications_Hover.png"
                alt="Notifications icon hover"
                width={48}
                height={48}
                className="cursor-pointer"
              />
            </button>

            {/* Notification Dropdown */}
            {openNotification && (
              <div className="rounded-lg absolute right-0 mt-2 w-70 bg-white border-2 border-black shadow-[4px_4px_0_#000] z-50 max-h-96 overflow-y-auto">
                {/* Header */}
                <div className="px-4 py-3">
                  <h3 className="font-bold text-2xl text-black">
                    Notifications
                  </h3>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => setNotificationFilter("all")}
                      className={`px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000] text-sm font-semibold rounded-full ${
                        notificationFilter === "all"
                          ? "bg-[#ADDFFF]"
                          : "bg-white hover:bg-gray-50"
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setNotificationFilter("unread")}
                      className={`px-3 py-1 border-2 border-black shadow-[2px_2px_0_#000] text-sm font-semibold rounded-full ${
                        notificationFilter === "unread"
                          ? "bg-[#ADDFFF]"
                          : "bg-white hover:bg-gray-50"
                      }`}
                    >
                      Unread
                    </button>
                  </div>
                </div>

                {/* Notification List */}
                <div className="max-h-64 overflow-y-auto">
                  {mockDataNotification.map((notification) => (
                    <div
                      key={notification.id}
                      className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative w-10 h-10 rounded-full border-2 border-black shadow-[2px_2px_0_#000] overflow-hidden flex-shrink-0">
                          <Image
                            src={notification.src}
                            alt="User avatar"
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-black leading-tight">
                            <span className="font-bold">
                              {notification.name}
                            </span>{" "}
                            {notification.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Avatar + Username + Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-3"
            >
              <div className="relative w-12 h-12 rounded-full border-[2px] border-black shadow-[3px_3px_0_#000] overflow-hidden cursor-pointer">
                <Image
                  src="/assets/elements/Avatar.png"
                  alt="User avatar"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <span className="font-extrabold text-[#211204] cursor-pointer">
                {localUsername}
              </span>
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
