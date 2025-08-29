"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FF6D4D] relative">
      {/* Logo box */}
      <div className="rounded-[11px] absolute top-7 left-7 w-15 h-15 flex items-center justify-center border-3 border-black bg-white shadow-[4px_4px_0_#000]">
        <Link href="/">
          <Image
            src="/assets/logo/Logo Bowl Red.svg"
            alt="Logo"
            width={48}
            height={48}
          />
        </Link>
      </div>

      {/* Login Form */}
      <div className="w-100 h-auto bg-white border-3 border-black rounded-lg shadow-[4px_4px_0_#000] p-6 text-center">
        {/* Title */}
        <Image
          src="/assets/signup-logo/Logo.png"
          alt="Logo"
          width={240}
          height={240}
          className="mx-auto block -mt-5"
        />
        {/* Inputs */}
        <div className="space-y-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-75 border-2 text-black border-black rounded-sm px-3 py-2 focus:outline-none shadow-[4px_4px_0_#000]"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-75 border-2 text-black border-black rounded-sm px-3 py-2 focus:outline-none shadow-[4px_4px_0_#000]"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-75 border-2 border-black rounded-sm px-3 py-2 pr-10 shadow-[4px_4px_0_#000] focus:outline-none"
            />

            <span
              className="absolute right-3 top-2.5 mr-5 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Image
                src="/assets/login-logo/Eye.png"
                alt="eye"
                width={20}
                height={20}
              />
            </span>
          </div>
          <div className="relative">
            <input
              type={confirmPassword ? "text" : "password"}
              placeholder="Re-enter Password"
              className="w-75 border-2 border-black rounded-sm px-3 py-2 pr-10 shadow-[4px_4px_0_#000] focus:outline-none"
            />

            {/* help me make this toggle to show password or hide it */}
            <span
              className="absolute right-3 top-2.5 mr-5 cursor-pointer"
              onClick={() => setConfirmPassword(!confirmPassword)}
            >
              <Image
                src="/assets/login-logo/Eye.png"
                alt="eye"
                width={20}
                height={20}
              />
            </span>
          </div>
        </div>
        {/* Sign Up button */}
        <Link href="/login">
          <button className="w-75 py-2 bg-[#FF6D4D] border-2 border-black rounded-sm shadow-[4px_4px_0_#000] text-[#FFF5CC] font-semibold mb-3  hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            Sign Up
          </button>
        </Link>

        {/* Links */}
        <div className="text-sm mb-4 text-center">
          <span className="font-semibold">Already have an account? </span>
          <Link
            href="/login"
            className="text-[#FF6D4D] font-semibold hover:underline"
          >
            Login Now!
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 h-0.5 bg-black"></div>
          <span className="text-sm font-bold">More Login Methods</span>
          <div className="flex-1 h-0.5 bg-black"></div>
        </div>
        {/* Social login */}
        <div className="flex justify-center gap-3 mb-2">
          <Image
            src="/assets/login-logo/googleIcon.png"
            alt="Google"
            width={60}
            height={60}
            className="w-auto h-auto"
          />
          <Image
            src="/assets/login-logo/appleIcon.png"
            alt="Apple"
            width={60}
            height={60}
            className="w-auto h-auto"
          />
          <Image
            src="/assets/login-logo/facebookIcon.png"
            alt="Facebook"
            width={50}
            height={50}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
