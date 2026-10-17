"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <nav className="relative z-40 w-full bg-[#F9F5F2]">
      <div className="mx-auto flex min-h-20 w-full max-w-[1600px] items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:min-h-[100px] lg:px-10 lg:py-3">
        {/* Logo */}
        <Link href="/" className="flex min-w-0 items-center">
          <Image
            src="/assets/logo/Logo_Yellow.png"
            alt="Korofu Logo"
            width={260}
            height={83}
            priority
            className="h-auto w-40 sm:w-48 lg:w-[260px]"
          />
        </Link>
        <div className="hidden items-center gap-6 lg:flex xl:gap-10">
          {/* Navigation Links */}
          <div className="flex items-center gap-5 text-lg text-black !font-['Quicksand'] font-medium xl:gap-10">
            <Link href="/">Home</Link>
            <Link href="/preview">Preview</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className='flex items-center gap-7.5 font-semibold text-xl'>
            <Link href="/login">
              <button className="small-button bg-korofu-aqua w-35 rounded-sm">
                Log In
              </button>
            </Link>
            <Link href="/signup">
              <button className="small-button bg-korofu-pink w-35 rounded-sm">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md bg-transparent focus-visible:outline-2 focus-visible:outline-black lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="public-mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
      {menuOpen && (
        <div id="public-mobile-menu" className="absolute inset-x-0 top-full h-[calc(100dvh-5rem)] overflow-y-auto bg-[#F9F5F2] p-5 lg:hidden">
          <div className="mx-auto flex max-w-xl flex-col gap-4 text-lg font-semibold">
            <Link href="/">Home</Link>
            <Link href="/preview">Preview</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <div className="grid grid-cols-2 gap-3 pt-2 text-center">
              <Link href="/login" className="rounded-md border-2 border-black bg-korofu-aqua px-3 py-2 shadow-[3px_3px_0_#000]">Log In</Link>
              <Link href="/signup" className="rounded-md border-2 border-black bg-korofu-pink px-3 py-2 shadow-[3px_3px_0_#000]">Sign Up</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
