"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { wishlistCount } = useWishlist();

  return (
    <header className="glass fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="text-xl font-black tracking-[0.3em] text-white">
              CURATED
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-neutral-500 border-l border-border pl-3">
              Premium Finds
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300 uppercase tracking-wider"
            >
              Explore
            </Link>
            <Link
              href="/wishlist"
              className="relative text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300 uppercase tracking-wider flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              Wishlist
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-4 w-5 h-5 bg-accent text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-neutral-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border/50 mt-2 pt-4 slide-up">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors uppercase tracking-wider"
              >
                Explore
              </Link>
              <Link
                href="/wishlist"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Wishlist
                {wishlistCount > 0 && (
                  <span className="ml-2 w-5 h-5 bg-accent text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
