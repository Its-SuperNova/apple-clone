"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, ShoppingBag, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-black/80 backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1024px] mx-auto px-4 h-12 flex items-center justify-between">
          <div className="hidden md:flex items-center justify-between w-full">
            <Link href="/" className="text-xs text-white opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src="/bitten-fruit-silhouette.png"
                alt="Apple"
                width={18}
                height={18}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <Link href="/store" className="text-xs text-white opacity-80 hover:opacity-100 transition-opacity">
              Store
            </Link>
            <Link href="/mac" className="text-xs text-white opacity-80 hover:opacity-100 transition-opacity">
              Mac
            </Link>
            <Link href="/ipad" className="text-xs text-white opacity-80 hover:opacity-100 transition-opacity">
              iPad
            </Link>
            <Link href="/iphone" className="text-xs text-white opacity-80 hover:opacity-100 transition-opacity">
              iPhone
            </Link>
            <Link href="/watch" className="text-xs text-white opacity-80 hover:opacity-100 transition-opacity">
              Watch
            </Link>
            <Link href="/airpods" className="text-xs text-white opacity-80 hover:opacity-100 transition-opacity">
              AirPods
            </Link>
            <Link href="/tv-home" className="text-xs text-white opacity-80 hover:opacity-100 transition-opacity">
              TV & Home
            </Link>
            <Link href="/entertainment" className="text-xs text-white opacity-80 hover:opacity-100 transition-opacity">
              Entertainment
            </Link>
            <Link href="/accessories" className="text-xs text-white opacity-80 hover:opacity-100 transition-opacity">
              Accessories
            </Link>
            <Link href="/support" className="text-xs text-white opacity-80 hover:opacity-100 transition-opacity">
              Support
            </Link>
            <button className="text-xs text-white opacity-80 hover:opacity-100 transition-opacity">
              <Search className="w-4 h-4" />
            </button>
            <button className="text-xs text-white opacity-80 hover:opacity-100 transition-opacity">
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>

          <div className="flex md:hidden items-center justify-between w-full">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-white">
              <Menu className="w-6 h-6" />
            </button>

            <Link href="/" className="text-xs text-white opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src="/bitten-fruit-silhouette.png"
                alt="Apple"
                width={18}
                height={18}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>

            <button className="text-white opacity-80 hover:opacity-100 transition-opacity">
              <ShoppingBag className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black z-50 pt-12 overflow-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-6 p-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search apple.com"
                className="w-full bg-[#1d1d1f] text-white rounded-lg py-3 px-4 pl-10"
              />
              <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
            </div>

            <Link
              href="/store"
              className="text-white text-2xl font-semibold py-2 border-b border-[#424245]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Store
            </Link>
            <Link
              href="/mac"
              className="text-white text-2xl font-semibold py-2 border-b border-[#424245]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mac
            </Link>
            <Link
              href="/ipad"
              className="text-white text-2xl font-semibold py-2 border-b border-[#424245]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              iPad
            </Link>
            <Link
              href="/iphone"
              className="text-white text-2xl font-semibold py-2 border-b border-[#424245]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              iPhone
            </Link>
            <Link
              href="/watch"
              className="text-white text-2xl font-semibold py-2 border-b border-[#424245]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Watch
            </Link>
            <Link
              href="/airpods"
              className="text-white text-2xl font-semibold py-2 border-b border-[#424245]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AirPods
            </Link>
            <Link
              href="/tv-home"
              className="text-white text-2xl font-semibold py-2 border-b border-[#424245]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              TV & Home
            </Link>
            <Link
              href="/entertainment"
              className="text-white text-2xl font-semibold py-2 border-b border-[#424245]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Entertainment
            </Link>
            <Link
              href="/accessories"
              className="text-white text-2xl font-semibold py-2 border-b border-[#424245]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accessories
            </Link>
            <Link
              href="/support"
              className="text-white text-2xl font-semibold py-2 border-b border-[#424245]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </Link>
          </div>
        </motion.div>
      )}
    </>
  )
}
