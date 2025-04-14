"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Truck,
  CreditCard,
  Smartphone,
  ShoppingBag,
  Smile,
} from "lucide-react";
import { FaApple } from "react-icons/fa";

// Define the store advantages
const storeAdvantages = [
  {
    icon: <Truck className="w-8 h-8 text-green-600" />,
    title: (
      <>
        Enjoy <span className="text-green-600">two-hour delivery</span> from an
        Apple Store, <span className="text-green-600">free delivery</span>, or{" "}
        <span className="text-green-600">easy pickup.</span>
        <sup>2</sup>
      </>
    ),
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-500" />,
    title: (
      <>
        <span className="text-blue-500">Trade in your current device.</span> Get
        credit toward a new one.<sup>3</sup>
      </>
    ),
  },
  {
    icon: <CreditCard className="w-8 h-8 text-green-600" />,
    title: (
      <>
        Pay in full or <span className="text-green-600">pay over time.</span>{" "}
        Your choice.
      </>
    ),
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-blue-500" />,
    title: (
      <>
        Get a <span className="text-blue-500">personalized shopping</span>{" "}
        experience in the{" "}
        <span className="text-blue-500">Apple Store app.</span>
      </>
    ),
  },
  {
    icon: <Smile className="w-8 h-8 text-purple-500" />,
    title: (
      <>
        Make them yours.{" "}
        <span className="text-purple-500">
          Engrave a mix of emoji, names, and numbers for free.
        </span>
      </>
    ),
  },
  {
    icon: <FaApple className="w-8 h-8 text-orange-500" />,
    title: (
      <>
        <span className="text-orange-500">Customize</span> your Mac and create
        your own style of Apple Watch.
      </>
    ),
  },
];

export default function StoreAdvantages() {
  const [showArrows, setShowArrows] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Check if we can scroll left or right based on current scroll position
  const checkScrollability = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      setCanScrollLeft(scrollPosition > 0);
      setCanScrollRight(scrollPosition < maxScroll);
    }
  }, [scrollPosition]);

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);

    return () => {
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const newPosition = scrollContainerRef.current.scrollLeft;
      setScrollPosition(newPosition);

      // Update arrow visibility based on new scroll position
      const maxScroll =
        scrollContainerRef.current.scrollWidth -
        scrollContainerRef.current.clientWidth;
      setCanScrollLeft(newPosition > 0);
      setCanScrollRight(newPosition < maxScroll);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Approximately one card width + gap
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Approximately one card width + gap
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Title section - Separate from scrollable area */}
      <div className="max-w-[1200px] mx-auto px-6 mt-16 mb-6">
        <h2 className="text-[28px] font-semibold">
          The Apple Store difference.{" "}
          <span className="text-[#6e6e73] font-normal">
            Even more reasons to shop with us.
          </span>
        </h2>
      </div>

      {/* Scrollable section */}
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
        {canScrollLeft && (
          <button
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-200/70 hover:bg-gray-200/90 rounded-full p-4 shadow-md transition-opacity duration-300 ${
              showArrows ? "opacity-80" : "opacity-0"
            }`}
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-8 h-8 text-gray-600" />
          </button>
        )}

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-200/70 hover:bg-gray-200/90 rounded-full p-4 shadow-md transition-opacity duration-300 ${
              showArrows ? "opacity-80" : "opacity-0"
            }`}
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-8 h-8 text-gray-600" />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide w-full smooth-scroll pb-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
          onScroll={handleScroll}
        >
          <div className="flex pl-[max(1rem,calc((100%-1200px)/2+1rem))] pr-12 min-w-max">
            {storeAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="group p-4 overflow-visible" // Added padding and overflow-visible
              >
                <div className="bg-white rounded-3xl relative flex-shrink-0 w-[340px] h-[240px] border border-gray-200 transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-xl cursor-pointer overflow-hidden">
                  {/* Content */}
                  <div className="px-[30px] pt-[30px] flex flex-col h-full">
                    <div className="mb-4">{advantage.icon}</div>
                    <h3 className="text-[24px] leading-[28px] font-semibold">
                      {advantage.title}
                    </h3>
                  </div>

                  {/* Invisible link covering the entire card */}
                  <Link href="#" className="absolute inset-0 z-20">
                    <span className="sr-only">
                      Learn more about Apple Store advantages
                    </span>
                  </Link>
                </div>
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
