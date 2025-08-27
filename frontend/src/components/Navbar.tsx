"use client";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className='w-full-screen h-[100px] bg-[#F9F5F2] flex items-center justify-center'>
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
            <Link href="/home">Home</Link>
            <Link href="/preview">Preview</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className='flex items-center gap-10 font-["SFUFutura"] font-semibold text-xl'>
            <button className="px-6 py-2 bg-[#4FD3C6] text-black rounded-[5px] border-[2px] border-black shadow-[3px_3px_0_#000] hover:bg-white transition-colors">
              Log In
            </button>
            <button className="px-6 py-2 bg-[#FF91E8] text-black rounded-[5px] border-[2px] border-black shadow-[3px_3px_0_#000] hover:bg-white transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
