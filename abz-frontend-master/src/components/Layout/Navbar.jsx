"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white font-medium shadow-sm w-full">
      <div className="max-w-8xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <ShieldCheck className="text-blue-500" size={20} />
          <span className="font-bold text-2xl">CyberNeoGen</span>
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden md:flex space-x-6 mx-auto">
          <Link
            href="/"
            className="text-base font-semibold hover:text-blue-400 transition"
          >
            Home
          </Link>
          <Link
            href="/explore"
            className="text-base font-semibold hover:text-blue-400 transition"
          >
            Explore
          </Link>
          <Link
            href="/blog"
            className="text-base font-semibold hover:text-blue-400 transition"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-base font-semibold hover:text-blue-400 transition"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-base font-semibold hover:text-blue-400 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/login"
            className="px-4 py-1.5 text-base border border-white/30 rounded-full hover:bg-white/10 transition focus:outline-none"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-1.5 text-base bg-blue-600 hover:bg-blue-700 rounded-full transition focus:outline-none"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
