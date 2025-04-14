"use client";

import type React from "react";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the latest products
const latestProducts = [
  {
    name: "iPhone 16 Pro",
    tagline: "Apple Intelligence",
    price: "From $999 or $41.62/mo. for 24 mo.*",
    image: "/store/latest-products/iphone-pro.png",
    bgColor: "bg-black",
    textColor: "text-white",
    hasGradientTagline: true,
  },
  {
    name: "MacBook Air",
    tagline: "Apple Intelligence",
    price: "From $999 or $41.62/mo. for 24 mo.*",
    image: "/store/latest-products/macbook-air.png",
    bgColor: "bg-[#f5f5f7]",
    textColor: "text-black",
    hasGradientTagline: true,
  },
  {
    name: "iPad Air",
    tagline: "Apple Intelligence",
    price: "From $599 or $49.91/mo. for 12 mo.*",
    image: "/store/latest-products/ipad.png",
    bgColor: "bg-white",
    textColor: "text-black",
    hasGradientTagline: true,
    borderClass: "border border-gray-200",
  },
  {
    name: "Apple Watch",
    tagline: "Thinstant connection.",
    price: "From $399 or $33.25/mo. for 12 mo.*",
    image: "/store/latest-products/apple-watch.png",
    bgColor: "bg-[#f5f5f7]",
    textColor: "text-black",
    taglineColor: "text-[#2997ff]",
  },
  {
    name: "iPhone 16",
    tagline: "Brilliant. In every way.",
    price: "From $799 or $33.29/mo. for 24 mo.*",
    image: "/store/latest-products/iphone-16.png",
    bgColor: "bg-black",
    textColor: "text-white",
    taglineColor: "text-[#2997ff]",
  },
  {
    name: "Mac mini",
    tagline: "More muscle. More hustle.",
    price: "From $599 or $49.91/mo. for 12 mo.*",
    image: "/store/latest-products/mac-mini.png",
    bgColor: "bg-[#f5f5f7]",
    textColor: "text-black",
    taglineColor: "text-[#2997ff]",
  },
  {
    name: "iPad",
    tagline: "Colorfully capable.",
    price: "From $449 or $37.41/mo. for 12 mo.*",
    image: "/store/latest-products/ipad-keyboard.png",
    bgColor: "bg-white",
    textColor: "text-black",
    taglineColor: "text-[#2997ff]",
    borderClass: "border border-gray-200",
  },
  {
    name: "MacBook Pro",
    tagline: "Mind-blowing. Head-turning.",
    price: "From $1599 or $133.25/mo. for 12 mo.*",
    image: "/store/latest-products/macbook-pro.png",
    bgColor: "bg-black",
    textColor: "text-white",
    taglineColor: "text-[#2997ff]",
  },
];

export default function LatestProducts() {
  const [showArrows, setShowArrows] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScrollability = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      setCanScrollLeft(scrollContainer.scrollLeft > 0);
      setCanScrollRight(
        scrollContainer.scrollLeft <
          scrollContainer.scrollWidth - scrollContainer.clientWidth
      );
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      checkScrollability();
      scrollContainer.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      }
    };
  }, [checkScrollability]);

  const scroll = useCallback((direction: "left" | "right") => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollAmount = 400; // Approximately one card width
      const newScrollLeft =
        direction === "left"
          ? scrollContainer.scrollLeft - scrollAmount
          : scrollContainer.scrollLeft + scrollAmount;

      scrollContainer.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  }, []);

  // Handle wheel events for horizontal scrolling with mouse wheel
  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (e.deltaY !== 0 && scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollBy({
        left: e.deltaY < 0 ? -100 : 100,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      {/* Title section - Separate from scrollable area */}
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[28px] font-semibold mb-4">
          The latest.{" "}
          <span className="text-[#6e6e73] font-normal">
            Take a look at what's new right now.
          </span>
        </h2>
      </div>

      {/* Scrollable section - Using exact same structure as ProductCategories */}
      <motion.section
        className="py-4 relative w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        {/* Left Arrow */}
        <button
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-200/70 hover:bg-gray-200/90 rounded-full p-4 shadow-md transition-opacity duration-300 ${
            showArrows && canScrollLeft ? "opacity-80" : "opacity-0"
          } ${canScrollLeft ? "cursor-pointer" : "cursor-default"}`}
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-8 h-8 text-gray-600" />
        </button>

        {/* Right Arrow */}
        <button
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-200/70 hover:bg-gray-200/90 rounded-full p-4 shadow-md transition-opacity duration-300 ${
            showArrows && canScrollRight ? "opacity-80" : "opacity-0"
          } ${canScrollRight ? "cursor-pointer" : "cursor-default"}`}
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-8 h-8 text-gray-600" />
        </button>

        {/* Scrollable Container - Using exact same structure as ProductCategories */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide w-full smooth-scroll"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
          onWheel={handleWheel}
        >
          <div className="flex pl-[max(1rem,calc((100%-1200px)/2+1rem))] pr-12 space-x-6 min-w-max">
            {latestProducts.map((product, index) => (
              <div
                key={product.name}
                className={`${product.bgColor} ${
                  product.textColor
                } rounded-3xl overflow-hidden relative flex-shrink-0 w-[400px] h-[500px] ${
                  product.borderClass || ""
                }`}
              >
                {/* Product image as background */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center 60%",
                    backgroundRepeat: "no-repeat",
                    zIndex: 1,
                  }}
                />

                {/* Content at the top with higher z-index */}
                <div className="relative z-10 p-8">
                  <h3 className="text-[28px] font-semibold mb-1 leading-tight">
                    {product.name}
                  </h3>

                  {product.hasGradientTagline ? (
                    <p className="text-[17px] mb-1">
                      <span className="bg-gradient-to-r from-[#0066CC] via-[#8E64FF] to-[#E541ED] bg-clip-text text-transparent inline-block">
                        Apple Intelligence<sup>Δ</sup>
                      </span>
                    </p>
                  ) : (
                    <p className={`${product.taglineColor} text-[17px] mb-1`}>
                      {product.tagline}
                    </p>
                  )}

                  <p className="text-[14px] opacity-90">{product.price}</p>
                </div>

                {/* Invisible link covering the entire card */}
                <Link href="#" className="absolute inset-0 z-20">
                  <span className="sr-only">
                    Learn more about {product.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Custom scrollbar hide styles */}
        <style jsx global>{`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          /* Smooth scrolling for all browsers */
          .smooth-scroll {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
        `}</style>
      </motion.section>
    </>
  );
}
