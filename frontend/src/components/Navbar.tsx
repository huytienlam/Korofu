"use client";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
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
        <div className="flex items-center gap-10">
          {/* Navigation Links */}
          <div className="flex items-center max-md:hidden gap-10 text-lg font-medium text-black font-['Quicksand']">
            <Link href="/">Home</Link>
            <Link href="/preview">Preview</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className='flex items-center gap-7.5 font-semibold text-xl'>
            <Link href="/login">
              <button className="small-button bg-korofu-aqua w-35">
                Log In
              </button>
            </Link>
            <Link href="/signup">
              <button className="small-button bg-korofu-pink w-35">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
