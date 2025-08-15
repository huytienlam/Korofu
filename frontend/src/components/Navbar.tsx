'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";

export const Navbar = () => {

  return (
    <nav className='block top-0 left-0 right-0 z-50 bg-[#F9F5F2]'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/assets/logo/Logo Full Yellow.svg" alt="Logo" width={180} height={32} />
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="flex items-center max-md:hidden space-x-10">
            <Link href="/home" className="text-[#21120D] hover:text-[#21120D]/80">
              Home
            </Link>
            <Link href="/preview" className="text-[#21120D] hover:text-[#21120D]/80">
              Preview
            </Link>
            <Link href="/about" className="text-[#21120D] hover:text-[#21120D]/80">
              About
            </Link>
            <Link href="/contact" className="text-[#21120D] hover:text-[#21120D]/80">  
              Contact
            </Link>
          </div>
          <div className='flex items-center space-x-4'>
            <button className="px-6 py-2 bg-[#00E5A1] text-black rounded-lg hover:bg-[#00D194] transition-colors font-medium">
              Log In
            </button>
            <button className="px-6 py-2 bg-[#FF8FE5] text-black rounded-lg hover:bg-[#FF7AE0] transition-colors font-medium">
              Sign Up
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};