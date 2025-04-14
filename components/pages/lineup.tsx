"use client";

import type React from "react";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function MacComparison() {
  const [activeTab, setActiveTab] = useState("laptops");
  const laptopsScrollRef = useRef<HTMLDivElement>(null);
  const desktopsScrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current !== null) {
      ref.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current !== null) {
      ref.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-[#f5f5f7]">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-[48px] font-semibold text-[#1d1d1f] mb-16">
          Explore the lineup.
        </h2>

        {/* Tabs */}
        <div className="flex mb-12">
          <button
            className={`px-6 py-3 rounded-full text-sm font-medium ${
              activeTab === "laptops"
                ? "bg-[#1d1d1f] text-white"
                : "bg-transparent text-[#1d1d1f]"
            }`}
            onClick={() => setActiveTab("laptops")}
          >
            Laptops
          </button>
          <button
            className={`px-6 py-3 rounded-full text-sm font-medium ${
              activeTab === "desktops"
                ? "bg-[#1d1d1f] text-white"
                : "bg-transparent text-[#1d1d1f]"
            }`}
            onClick={() => setActiveTab("desktops")}
          >
            Desktops
          </button>
          <button
            className={`px-6 py-3 rounded-full text-sm font-medium ${
              activeTab === "displays"
                ? "bg-[#1d1d1f] text-white"
                : "bg-transparent text-[#1d1d1f]"
            }`}
            onClick={() => setActiveTab("displays")}
          >
            Displays
          </button>
        </div>

        {/* Laptop Comparison */}
        {activeTab === "laptops" && (
          <div className="relative">
            {/* Scroll buttons - only visible on larger screens */}
            <button
              onClick={() => scrollLeft(laptopsScrollRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-3 shadow-md hidden md:block"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scrollRight(laptopsScrollRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-3 shadow-md hidden md:block"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Scrollable container */}
            <div
              ref={laptopsScrollRef}
              className="flex overflow-x-auto pb-8 scrollbar-hide scroll-smooth -mx-6"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="pl-6 pr-12 flex">
                {/* MacBook Air */}
                <div className="flex-shrink-0 w-[372px] mr-6 first:ml-0 last:mr-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full h-[300px] mb-6">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HQahJo8zTB2fkqA5jiIPzmwwhMybm5.png"
                        alt="MacBook Air 13 and 15 inch"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex space-x-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      <div className="w-2 h-2 rounded-full bg-black"></div>
                    </div>

                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center mb-1">
                        <span className="text-[#f56300] text-sm font-medium mr-2">
                          New
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-1">
                        MacBook Air 13" and 15"
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">M4 chip</p>
                      <p className="mb-4">
                        Strikingly thin and fast so you can work, play, or
                        create anywhere.
                      </p>
                      <p className="font-medium mb-6">
                        From $999 or $83.25/mo. for 12 mo.<sup>2</sup>
                      </p>

                      <div className="flex justify-center space-x-4">
                        <Link
                          href="#"
                          className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors"
                        >
                          Learn more
                        </Link>
                        <Link
                          href="#"
                          className="text-[#0066cc] hover:underline flex items-center"
                        >
                          Buy <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="w-full border-t border-gray-300 pt-8 space-y-8">
                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">
                          13.6" or 15.3"
                        </h4>
                        <p className="text-sm">
                          Liquid Retina display with 500 nits of brightness
                          <br />
                          and support for 1 billion colors<sup>3</sup>
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="bg-black rounded-lg p-2 w-12 h-12 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              M4
                            </span>
                          </div>
                        </div>
                        <p className="text-sm">Apple M4 chip</p>
                      </div>

                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="w-8 h-8">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=32&width=32&query=colorful apple intelligence logo"
                              alt="Apple Intelligence"
                              width={32}
                              height={32}
                            />
                          </div>
                        </div>
                        <p className="text-sm">
                          Apple Intelligence<sup>Δ</sup>
                        </p>
                      </div>

                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">
                          Up to
                          <br />
                          18 hours
                        </h4>
                        <p className="text-sm">
                          battery life<sup>4</sup>
                        </p>
                      </div>

                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">4 ports</h4>
                        <p className="text-sm">
                          2x Thunderbolt 4 (USB-C),
                          <br />
                          headphone jack, MagSafe
                        </p>
                      </div>

                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">
                          2.7 lb. or 3.3 lb.
                        </h4>
                        <p className="text-sm">
                          Weight<sup>5</sup>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MacBook Pro */}
                <div className="flex-shrink-0 w-[372px] mr-6">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full h-[300px] mb-6">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HQahJo8zTB2fkqA5jiIPzmwwhMybm5.png"
                        alt="MacBook Pro 14 and 16 inch"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex space-x-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-black"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-semibold mb-1">
                        MacBook Pro 14" and 16"
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        M4, M4 Pro, or M4 Max chip
                      </p>
                      <p className="mb-4">
                        The most advanced Mac laptops for demanding workflows.
                      </p>
                      <p className="font-medium mb-6">
                        From $1599 or $133.25/mo. for 12 mo.<sup>2</sup>
                      </p>

                      <div className="flex justify-center space-x-4">
                        <Link
                          href="#"
                          className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors"
                        >
                          Learn more
                        </Link>
                        <Link
                          href="#"
                          className="text-[#0066cc] hover:underline flex items-center"
                        >
                          Buy <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="w-full border-t border-gray-300 pt-8 space-y-8">
                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">
                          14.2" or 16.2"
                        </h4>
                        <p className="text-sm">
                          Liquid Retina XDR display with up to 1600
                          <br />
                          nits peak brightness, 1,000,000:1 contrast
                          <br />
                          ratio, and P3 wide color
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="flex justify-center gap-1 mb-2">
                          <div className="bg-black rounded-lg p-2 w-12 h-12 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              M4
                            </span>
                          </div>
                          <div className="bg-black rounded-lg p-2 w-12 h-12 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              M4
                              <br />
                              PRO
                            </span>
                          </div>
                          <div className="bg-black rounded-lg p-2 w-12 h-12 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              M4
                              <br />
                              MAX
                            </span>
                          </div>
                        </div>
                        <p className="text-sm">
                          Apple M4, M4 Pro, or M4 Max chip
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="w-8 h-8">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=32&width=32&query=colorful apple intelligence logo"
                              alt="Apple Intelligence"
                              width={32}
                              height={32}
                            />
                          </div>
                        </div>
                        <p className="text-sm">
                          Apple Intelligence<sup>Δ</sup>
                        </p>
                      </div>

                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">
                          Up to
                          <br />
                          24 hours
                        </h4>
                        <p className="text-sm">
                          battery life<sup>4</sup>
                        </p>
                      </div>

                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">7 ports</h4>
                        <p className="text-sm">
                          3x Thunderbolt 4 (USB-C) or
                          <br />
                          3x Thunderbolt 5 (USB-C), HDMI, SDXC,
                          <br />
                          headphone jack, MagSafe
                        </p>
                      </div>

                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">
                          3.4 lb. or 4.7 lb.
                        </h4>
                        <p className="text-sm">
                          Weight<sup>5</sup>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktops Comparison */}
        {activeTab === "desktops" && (
          <div className="relative">
            {/* Scroll buttons - only visible on larger screens */}
            <button
              onClick={() => scrollLeft(desktopsScrollRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-3 shadow-md hidden md:block"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scrollRight(desktopsScrollRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-3 shadow-md hidden md:block"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Scrollable container */}
            <div
              ref={desktopsScrollRef}
              className="flex overflow-x-auto pb-8 scrollbar-hide scroll-smooth -mx-6"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="pl-6 pr-12 flex">
                {/* iMac */}
                <div className="flex-shrink-0 w-[372px] mr-6 first:ml-0 last:mr-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full h-[220px] mb-6">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0znJyMfeU5cKYfnTXbVbYFN01hiaeF.png"
                        alt="iMac"
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Color selection dots */}
                    <div className="flex space-x-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-[#4b91ff]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#ff7eaf]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#67c73a]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#ffd158]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#ff823c]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#b17aff]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#e1e1e6]"></div>
                    </div>

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-semibold mb-1">iMac</h3>
                      <p className="text-sm text-gray-600 mb-1">M4 chip</p>
                      <p className="mb-4">
                        A stunning all-in-one desktop for creativity and
                        productivity.
                      </p>

                      <p className="font-medium mb-6">
                        From $1299 or $108.25/mo. for 12 mo.<sup>2</sup>
                      </p>

                      <div className="flex justify-center space-x-4">
                        <Link
                          href="#"
                          className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors"
                        >
                          Learn more
                        </Link>
                        <Link
                          href="#"
                          className="text-[#0066cc] hover:underline flex items-center"
                        >
                          Buy <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="w-full border-t border-gray-300 pt-8 space-y-6">
                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">24"</h4>
                        <p className="text-sm">
                          4.5K Retina display with 500 nits of brightness
                          delivers
                          <br />
                          sharp and vibrant detail<sup>3</sup>
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="bg-black rounded-lg p-2 w-10 h-10 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              M4
                            </span>
                          </div>
                        </div>
                        <p className="text-sm">Apple M4 chip</p>
                      </div>

                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="w-8 h-8">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=32&width=32&query=colorful apple intelligence logo"
                              alt="Apple Intelligence"
                              width={32}
                              height={32}
                            />
                          </div>
                        </div>
                        <p className="text-sm">
                          Apple Intelligence<sup>Δ</sup>
                        </p>
                      </div>

                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">
                          Up to
                          <br />6 ports
                        </h4>
                        <p className="text-sm">
                          2x Thunderbolt / USB 4 or 4x Thunderbolt 4,
                          <br />
                          Gigabit Ethernet, headphone jack
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mac mini */}
                <div className="flex-shrink-0 w-[372px] mr-6">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full h-[220px] mb-6">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZxagP6O7mxyVwT6DAQoUUxof89UeXu.png"
                        alt="Mac mini"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-semibold mb-1">Mac mini</h3>
                      <p className="text-sm text-gray-600 mb-1">
                        M4 or M4 Pro chip
                      </p>
                      <p className="mb-4">
                        The mini-est, most affordable Mac with mighty
                        performance.
                      </p>

                      <p className="font-medium mb-6">
                        From $599 or $49.91/mo. for 12 mo.<sup>2</sup>
                      </p>

                      <div className="flex justify-center space-x-4">
                        <Link
                          href="#"
                          className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors"
                        >
                          Learn more
                        </Link>
                        <Link
                          href="#"
                          className="text-[#0066cc] hover:underline flex items-center"
                        >
                          Buy <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="w-full border-t border-gray-300 pt-8 space-y-6">
                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">—</h4>
                        <p className="text-sm">
                          Bring your own display, keyboard, and mouse
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="flex justify-center gap-1 mb-2">
                          <div className="bg-black rounded-lg p-2 w-10 h-10 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              M4
                            </span>
                          </div>
                          <div className="bg-black rounded-lg p-2 w-10 h-10 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              M4
                              <br />
                              PRO
                            </span>
                          </div>
                        </div>
                        <p className="text-sm">Apple M4 or M4 Pro chip</p>
                      </div>

                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="w-8 h-8">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=32&width=32&query=colorful apple intelligence logo"
                              alt="Apple Intelligence"
                              width={32}
                              height={32}
                            />
                          </div>
                        </div>
                        <p className="text-sm">
                          Apple Intelligence<sup>Δ</sup>
                        </p>
                      </div>

                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">8 ports</h4>
                        <p className="text-sm">
                          3x Thunderbolt 4 or 3x Thunderbolt 5, 2x USB-C,
                          <br />
                          HDMI, Gigabit Ethernet, headphone jack
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mac Studio */}
                <div className="flex-shrink-0 w-[372px] mr-6">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full h-[220px] mb-6">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-o5nqSP1XDfvae8Cuig9ROxB7dHS61g.png"
                        alt="Mac Studio"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="text-center mb-6">
                      {/* New label */}
                      <div className="flex items-center justify-center mb-1">
                        <span className="text-[#f56300] text-sm font-medium">
                          New
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-1">
                        Mac Studio
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        M4 Max or M3 Ultra chip
                      </p>
                      <p className="mb-4">
                        Powerful performance and extensive connectivity for pro
                        workflows.
                      </p>

                      <p className="font-medium mb-6">
                        From $1999 or $166.58/mo. for 12 mo.<sup>2</sup>
                      </p>

                      <div className="flex justify-center space-x-4">
                        <Link
                          href="#"
                          className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors"
                        >
                          Learn more
                        </Link>
                        <Link
                          href="#"
                          className="text-[#0066cc] hover:underline flex items-center"
                        >
                          Buy <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="w-full border-t border-gray-300 pt-8 space-y-6">
                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">—</h4>
                        <p className="text-sm">
                          Bring your own display, keyboard, and mouse
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="flex justify-center gap-1 mb-2">
                          <div className="bg-black rounded-lg p-2 w-10 h-10 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              M4
                              <br />
                              MAX
                            </span>
                          </div>
                          <div className="bg-black rounded-lg p-2 w-10 h-10 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              M3
                              <br />
                              ULTRA
                            </span>
                          </div>
                        </div>
                        <p className="text-sm">Apple M4 Max or M3 Ultra chip</p>
                      </div>

                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="w-8 h-8">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=32&width=32&query=colorful apple intelligence logo"
                              alt="Apple Intelligence"
                              width={32}
                              height={32}
                            />
                          </div>
                        </div>
                        <p className="text-sm">
                          Apple Intelligence<sup>Δ</sup>
                        </p>
                      </div>

                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">
                          12 ports
                        </h4>
                        <p className="text-sm">
                          4x or 6x Thunderbolt 5 (USB-C), 2x USB-A, up to
                          <br />
                          2x USB-C, HDMI, 10Gb Ethernet, SDXC, headphone jack
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mac Pro */}
                <div className="flex-shrink-0 w-[372px] mr-6">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full h-[220px] mb-6">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PVDBuxtBXuuyK6pcQGPAaislseT3ta.png"
                        alt="Mac Pro"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-semibold mb-1">Mac Pro</h3>
                      <p className="text-sm text-gray-600 mb-1">
                        M2 Ultra chip
                      </p>
                      <p className="mb-4">
                        A pro workstation with PCIe expansion for demanding
                        workflows.
                      </p>

                      <p className="font-medium mb-6">
                        From $6999 or $583.25/mo. for 12 mo.<sup>2</sup>
                      </p>

                      <div className="flex justify-center space-x-4">
                        <Link
                          href="#"
                          className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors"
                        >
                          Learn more
                        </Link>
                        <Link
                          href="#"
                          className="text-[#0066cc] hover:underline flex items-center"
                        >
                          Buy <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="w-full border-t border-gray-300 pt-8 space-y-6">
                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">—</h4>
                        <p className="text-sm">
                          Bring your own display, keyboard, and mouse
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="bg-black rounded-lg p-2 w-10 h-10 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              M2
                              <br />
                              ULTRA
                            </span>
                          </div>
                        </div>
                        <p className="text-sm">Apple M2 Ultra chip</p>
                      </div>

                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="w-8 h-8">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=32&width=32&query=colorful apple intelligence logo"
                              alt="Apple Intelligence"
                              width={32}
                              height={32}
                            />
                          </div>
                        </div>
                        <p className="text-sm">
                          Apple Intelligence<sup>Δ</sup>
                        </p>
                      </div>

                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">PCIe</h4>
                        <p className="text-sm">
                          Features seven expansion slots, six of which are PCIe
                          gen 4
                        </p>
                      </div>

                      <div className="text-center">
                        <h4 className="text-2xl font-semibold mb-1">
                          18 ports
                        </h4>
                        <p className="text-sm">
                          8x Thunderbolt 4, 3x USB-A, 2x HDMI, 2x 10Gb Ethernet,
                          <br />
                          2x Serial ATA, headphone jack
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder for Displays tab */}
        {activeTab === "displays" && (
          <div className="text-center py-12">
            <p className="text-gray-500">Display comparison coming soon</p>
          </div>
        )}
      </div>

      {/* Custom scrollbar hide styles */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        /* Smooth scrolling for all browsers */
        .scroll-smooth {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </section>
  );
}
