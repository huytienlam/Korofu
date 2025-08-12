"use client";

import Image from "next/image";
import Link from "next/link";

type UserNavbarProps = {
  username: string;
};

export default function UserNavbar({ username }: UserNavbarProps) {
  return (
    <nav className="w-full bg-[#FFF5F1]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo/Logo Full Yellow.svg"
            alt="Korofu Logo"
            width={150}
            height={45}
            priority
          />
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button aria-label="mood" className="grid place-items-center w-12 h-12 rounded-full bg-[#FFD21E] border-[3px] border-black shadow-[3px_3px_0_#000] text-xl">
            😊
          </button>
          <button aria-label="search" className="grid place-items-center w-12 h-12 rounded-full bg-[#FF8A63] border-[3px] border-black shadow-[3px_3px_0_#000] text-xl">
            🔍
          </button>
          <button aria-label="notifications" className="grid place-items-center w-12 h-12 rounded-full bg-[#FF6F61] border-[3px] border-black shadow-[3px_3px_0_#000] text-xl">
            🔔
          </button>
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full border-[3px] border-black shadow-[3px_3px_0_#000] overflow-hidden bg-white">
              <Image
                src="/assets/elements/3d_avatar.png"
                alt="User avatar"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <span className="font-extrabold text-[#21120D]">{username}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
