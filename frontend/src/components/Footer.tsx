'use client'

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#F9F5F2] px-3 py-20 gap-15 flex flex-col items-center justify-center space-y-6">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/logo/Logo_Red.png" // thay logo của bạn
            alt="Korofu Logo"
            width={260}
            height={83}
            className="object-contain"
          />
        </div>

        {/* Nội dung bên phải */}
        <div className="flex flex-col gap-0 text-black text-center md:text-left">
          {/* Bản quyền */}
          <p className="text-xl font-bold">© 2025 Korofu. All rights reserved.</p>

          {/* Policy */}
          <div className="flex justify-center md:justify-end gap-4 text-xl">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:underline">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
      <div className="gap-5 flex flex-col items-center justify-center">
        {/* Menu links */}
        <div className="flex justify-center gap-6 text-center text-xl">
            <Link href="/">Home</Link>
            <Link href="/preview">Preview</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </div>

          {/* Social icons */}
        <div className="flex justify-center gap-4">
            <Image src="/assets/icon/fb.png" alt="icon1" width={48} height={48} />
            <Image src="/assets/icon/insta.png" alt="icon2" width={48} height={48} />
            <Image src="/assets/icon/mail.png" alt="icon3" width={48} height={48} />
            <Image src="/assets/icon/gg.png" alt="icon4" width={48} height={48} />
            <Image src="/assets/icon/apple.png" alt="icon5" width={48} height={48} />
        </div>
    </div>
    </footer>
  )
}
