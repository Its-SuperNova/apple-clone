"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the experience cards
const experienceCards = [
  {
    title: (
      <>
        <span className="text-blue-500">Apple Intelligence.</span>
        <br />
        Write, express yourself, and get things done effortlessly.<sup>Δ</sup>
      </>
    ),
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kJJ5drSMsuH4dkGRy6bdY67bH1lhnX.png",
    bgColor: "bg-white",
    textColor: "text-black",
    imagePosition: "bottom right",
  },
  {
    label: "MLS SEASON PASS",
    title: <>Sign up for MLS Season Pass on Apple TV.</>,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9tPeEFbafTPgRTUF2i5RFNGq0pgwMN.png",
    bgColor: "bg-white",
    textColor: "text-black",
    imagePosition: "center right",
    logo: "/apple-tv-mls-logo.png",
    logoAlt: "Apple TV MLS Season Pass",
  },
  {
    title: (
      <>
        Six Apple services.
        <br />
        One easy subscription.
      </>
    ),
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qa4fGqxA8cSn5YE3UxyjpQt1MBJJJp.png",
    bgColor: "bg-white",
    textColor: "text-black",
    imagePosition: "center",
  },
  {
    title: (
      <>
        We've got you covered.
        <br />
        <span className="text-base font-normal">
          AppleCare+ now comes with unlimited repairs for accidental damage
          protection.
        </span>
      </>
    ),
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7jAN8ukel1lM9CYngUAJiYzh8XVoum.png",
    bgColor: "bg-white",
    textColor: "text-black",
    imagePosition: "center",
  },
  {
    title: <>Discover all the ways to use Apple Pay.</>,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eNkDHprnz3KvOZ808NoH65ajunPHld.png",
    bgColor: "bg-white",
    textColor: "text-black",
    imagePosition: "center",
  },
  {
    label: "HOME",
    title: <>See how one app can control your entire home.</>,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-11tQD32RM5h0Lckp9hX1PDBoqLDzw7.png",
    bgColor: "bg-white",
    textColor: "text-black",
    imagePosition: "center",
  },
];

export default function AppleExperience() {
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
      const scrollAmount = 500; // Approximately one card width + gap
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 500; // Approximately one card width + gap
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
          The Apple experience.{" "}
          <span className="text-[#6e6e73] font-normal">
            Do even more with Apple products and services.
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
            {experienceCards.map((card, index) => (
              <div
                key={index}
                className="group p-4 overflow-visible" // Added padding and overflow-visible
              >
                <div className="bg-white rounded-3xl relative flex-shrink-0 w-[480px] h-[500px] border border-gray-200 transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-xl cursor-pointer overflow-hidden">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: card.imagePosition || "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />

                  {/* Content overlay */}
                  <div className="relative z-10 p-8 flex flex-col h-full">
                    {card.label && (
                      <span className="text-sm uppercase tracking-wider mb-1 font-medium">
                        {card.label}
                      </span>
                    )}
                    <h3 className="text-[24px] leading-[28px] font-semibold max-w-[70%]">
                      {card.title}
                    </h3>

                    {/* Logo if available */}
                    {card.logo && (
                      <div className="mt-auto mb-4">
                        <Image
                          src={card.logo || "/placeholder.svg"}
                          alt={card.logoAlt || "Logo"}
                          width={120}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>

                  {/* Invisible link covering the entire card */}
                  <Link href="#" className="absolute inset-0 z-20">
                    <span className="sr-only">
                      Learn more about{" "}
                      {typeof card.title === "string"
                        ? card.title
                        : "this Apple service"}
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
