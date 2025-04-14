"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Repeat,
  GraduationCap,
  Laptop,
  Truck,
  Video,
  Users,
  ShoppingBag,
  Plus,
} from "lucide-react";

// Define the card data
const buyingBenefits = [
  {
    icon: <CreditCard className="w-10 h-10" />,
    title: "Pay over time, interest-free.",
    description:
      "When you choose to check out with Apple Card Monthly Installments.",
    footnote: "2",
  },
  {
    icon: <Repeat className="w-10 h-10" />,
    title: "Save with Apple Trade In.",
    description:
      "Get credit toward your next Mac when you trade in an eligible device.",
    footnote: "5",
  },
  {
    icon: <GraduationCap className="w-10 h-10" />,
    title: "Save with education pricing.",
    description:
      "Students and educators can save exclusively through the Apple Store.",
    footnote: "6",
  },
  {
    icon: <Laptop className="w-10 h-10" />,
    title: "Customize your Mac.",
    description: "Choose your chip, memory, storage, even color.",
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Get flexible delivery and easy pickup.",
    description:
      "Choose from two-hour delivery from an Apple Store, free delivery, or easy pickup options.",
  },
  {
    icon: <Video className="w-10 h-10" />,
    title: "Shop live with a Specialist.",
    description:
      "Let us guide you live over video and answer all of your questions.",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Meet your new Mac with Personal Setup.",
    description:
      "Jump into online sessions with a Specialist to set up your Mac and discover new features.",
  },
  {
    icon: <ShoppingBag className="w-10 h-10" />,
    title: "Explore a shopping experience designed around you.",
    description: "Use the Apple Store app to get a more personal way to shop.",
  },
];

export default function WhyAppleBestPlace() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Check if we can scroll left or right based on current scroll position
  useEffect(() => {
    const checkScrollability = () => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const maxScroll =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;
        setCanScrollLeft(scrollPosition > 0);
        setCanScrollRight(scrollPosition < maxScroll - 5); // Small buffer to ensure we detect the end correctly
      }
    };

    checkScrollability();
    window.addEventListener("resize", checkScrollability);

    return () => {
      window.removeEventListener("resize", checkScrollability);
    };
  }, [scrollPosition]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const newPosition = scrollContainerRef.current.scrollLeft;
      setScrollPosition(newPosition);

      // Update arrow visibility based on new scroll position
      const maxScroll =
        scrollContainerRef.current.scrollWidth -
        scrollContainerRef.current.clientWidth;
      setCanScrollLeft(newPosition > 0);
      setCanScrollRight(newPosition < maxScroll - 5); // Small buffer to ensure we detect the end correctly
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450; // Approximately one card width + gap
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450; // Approximately one card width + gap
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-[#f5f5f7] relative">
      <div className="max-w-[1440px] mx-auto px-1">
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-[48px] font-semibold text-[#1d1d1f] max-w-[520px] leading-tight">
            Why Apple is the best place to buy Mac.
          </h2>
          <Link
            href="/mac"
            className="text-[#0066cc] hover:underline flex items-center text-lg"
          >
            Shop Mac <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Scrollable container with fixed width */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-16 scrollbar-hide scroll-smooth -mx-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={handleScroll}
          >
            <div className="flex pl-6 pr-12">
              {buyingBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[410px] h-[300px] mr-6 first:ml-0 last:mr-0 bg-white rounded-2xl p-8 relative"
                >
                  <div className="mb-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-2 text-[#1d1d1f]">
                    {benefit.title}
                    {benefit.footnote && <sup>{benefit.footnote}</sup>}
                  </h3>

                  <p className="text-[#1d1d1f] text-base">
                    {benefit.description}
                  </p>

                  <button
                    className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-[#86868b] flex items-center justify-center hover:bg-[#6e6e73] transition-colors"
                    aria-label="Learn more"
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows at bottom right - positioned relative to the outer container */}
          <div className="absolute bottom-0 right-6 flex space-x-2 z-10 bg-[#f5f5f7]">
            <button
              onClick={scrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                canScrollLeft
                  ? "bg-[#1d1d1f] text-white"
                  : "bg-[#e5e5e5] text-[#86868b] cursor-not-allowed"
              }`}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={scrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                canScrollRight
                  ? "bg-[#1d1d1f] text-white"
                  : "bg-[#e5e5e5] text-[#86868b] cursor-not-allowed"
              }`}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
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
