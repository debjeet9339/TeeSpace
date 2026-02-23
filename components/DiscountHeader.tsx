'use client'

import { useState } from "react";
import Link from "next/link";

export default function DiscountHeader() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-linear-to-r from-emerald-400 to-green-300 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-6 text-sm sm:text-base font-semibold">

        {/* Animated Badge */}
        <span className="animate-pulse">🔥</span>

        {/* Message */}
        <p className="text-center">
          Free shipping on all Indian orders{" "}
          <span className="font-bold">₹500+</span>
        </p>

        {/* CTA Button */}
        <Link
          href="/shop"
          className="bg-white text-green-700 px-4 py-1.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          Shop Now
        </Link>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
          className="absolute right-4 text-white/80 hover:text-white text-lg"
        >
          ✕
        </button>
      </div>
    </div>
  );
}