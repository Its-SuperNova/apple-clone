"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on the homepage
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update the getBgColor function to use #f5f5f7 with 100% opacity for non-home pages
  const getBgColor = () => {
    if (isHomePage) {
      return isScrolled
        ? "bg-black/70 backdrop-blur-md"
        : "bg-black/50 backdrop-blur-sm";
    } else {
      return "bg-[#f5f5f7]"; // Solid light gray for all other pages
    }
  };

  // Update the getTextColor function to match the new background colors
  const getTextColor = () => {
    return isHomePage ? "text-white" : "text-[#1d1d1f]";
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${getBgColor()}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1024px] mx-auto px-4 h-12 flex items-center justify-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-between w-full">
            <Link
              href="/"
              className={`${getTextColor()} opacity-80 hover:opacity-100 transition-opacity`}
            >
              <FaApple className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/store"
              className={`text-xs ${getTextColor()} opacity-80 hover:opacity-100 transition-opacity`}
            >
              Store
            </Link>

            <Link
              href="/mac"
              className={`text-xs ${getTextColor()} opacity-80 hover:opacity-100 transition-opacity`}
            >
              Mac
            </Link>

            <Link
              href="/ipad"
              className={`text-xs ${getTextColor()} opacity-80 hover:opacity-100 transition-opacity`}
            >
              iPad
            </Link>

            <Link
              href="/iphone"
              className={`text-xs ${getTextColor()} opacity-80 hover:opacity-100 transition-opacity`}
            >
              iPhone
            </Link>

            <Link
              href="/watch"
              className={`text-xs ${getTextColor()} opacity-80 hover:opacity-100 transition-opacity`}
            >
              Watch
            </Link>

            <Link
              href="/airpods"
              className={`text-xs ${getTextColor()} opacity-80 hover:opacity-100 transition-opacity`}
            >
              AirPods
            </Link>

            <Link
              href="/tv-home"
              className={`text-xs ${getTextColor()} opacity-80 hover:opacity-100 transition-opacity`}
            >
              TV & Home
            </Link>

            <Link
              href="/entertainment"
              className={`text-xs ${getTextColor()} opacity-80 hover:opacity-100 transition-opacity`}
            >
              Entertainment
            </Link>

            <Link
              href="/accessories"
              className={`text-xs ${getTextColor()} opacity-80 hover:opacity-100 transition-opacity`}
            >
              Accessories
            </Link>

            <Link
              href="/support"
              className={`text-xs ${getTextColor()} opacity-80 hover:opacity-100 transition-opacity`}
            >
              Support
            </Link>

            <button
              className={`${getTextColor()} opacity-80 hover:opacity-100 transition-opacity`}
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              className={`${getTextColor()} opacity-80 hover:opacity-100 transition-opacity`}
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-between w-full">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={getTextColor()}
            >
              <Menu className="w-6 h-6" />
            </button>

            <Link
              href="/"
              className={`${getTextColor()} opacity-80 hover:opacity-100 transition-opacity`}
            >
              <FaApple className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity" />
            </Link>

            <button
              className={`${getTextColor()} opacity-80 hover:opacity-100 transition-opacity`}
            >
              <ShoppingBag className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#f5f5f7] z-50 pt-12 overflow-auto md:hidden">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#1d1d1f]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-6 p-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search apple.com"
                className="w-full bg-[#e8e8ed] text-[#1d1d1f] rounded-lg py-3 px-4 pl-10"
              />
              <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-500" />
            </div>

            <Link
              href="/store"
              className="text-[#1d1d1f] text-2xl font-semibold py-2 border-b border-[#d2d2d7]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Store
            </Link>
            <Link
              href="/mac"
              className="text-[#1d1d1f] text-2xl font-semibold py-2 border-b border-[#d2d2d7]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mac
            </Link>
            <Link
              href="/ipad"
              className="text-[#1d1d1f] text-2xl font-semibold py-2 border-b border-[#d2d2d7]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              iPad
            </Link>
            <Link
              href="/iphone"
              className="text-[#1d1d1f] text-2xl font-semibold py-2 border-b border-[#d2d2d7]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              iPhone
            </Link>
            <Link
              href="/watch"
              className="text-[#1d1d1f] text-2xl font-semibold py-2 border-b border-[#d2d2d7]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Watch
            </Link>
            <Link
              href="/airpods"
              className="text-[#1d1d1f] text-2xl font-semibold py-2 border-b border-[#d2d2d7]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AirPods
            </Link>
            <Link
              href="/tv-home"
              className="text-[#1d1d1f] text-2xl font-semibold py-2 border-b border-[#d2d2d7]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              TV & Home
            </Link>
            <Link
              href="/entertainment"
              className="text-[#1d1d1f] text-2xl font-semibold py-2 border-b border-[#d2d2d7]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Entertainment
            </Link>
            <Link
              href="/accessories"
              className="text-[#1d1d1f] text-2xl font-semibold py-2 border-b border-[#d2d2d7]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accessories
            </Link>
            <Link
              href="/support"
              className="text-[#1d1d1f] text-2xl font-semibold py-2 border-b border-[#d2d2d7]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
