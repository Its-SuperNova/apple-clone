"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Define the help service cards
const helpServices = [
  {
    category: "APPLE SPECIALIST",
    title: "Shop one on one with a Specialist. Online or in a store.",
    description: "",
    image: "/store/help-services/specialist-in-store.png",
    bgColor: "bg-white",
    textColor: "text-black",
    borderClass: "border border-gray-200",
    imagePosition: "center top",
    textPosition: "top",
    overlayColor: "bg-gradient-to-b from-white/90 to-white/0",
  },
  {
    category: "",
    title: "Shop with a Specialist over video.",
    description: "Choose your next device in a guided, one-way video session.",
    image: "/store/help-services/specialist-video.png",
    bgColor: "bg-white",
    textColor: "text-black",
    borderClass: "border border-gray-200",
    imagePosition: "center",
    textPosition: "top",
    overlayColor: "bg-gradient-to-b from-white/90 to-white/0",
  },
  {
    category: "TODAY AT APPLE",
    title: "Join free sessions at your Apple Store.",
    description: "Learn about the latest features and how to go further with your Apple devices.",
    image: "/store/help-services/today-at-apple.png",
    bgColor: "bg-white",
    textColor: "text-black",
    borderClass: "border border-gray-200",
    imagePosition: "center",
    textPosition: "top",
    overlayColor: "bg-gradient-to-b from-white/90 to-white/0",
  },
  {
    category: "PERSONAL SETUP",
    title: "Set up your new device with help from a Specialist.",
    description:
      "Let us guide you through data transfer, the latest features, and more in an online, one-on-one session.",
    image: "/store/help-services/personal-setup.png",
    bgColor: "bg-white",
    textColor: "text-black",
    borderClass: "border border-gray-200",
    imagePosition: "center",
    textPosition: "top",
    overlayColor: "bg-gradient-to-b from-white/90 to-white/0",
  },
  {
    category: "",
    title: "Get expert service and support at the Genius Bar.",
    description: "Make a reservation at your nearest Apple Store.",
    image: "/store/help-services/genius-bar.png",
    bgColor: "bg-white",
    textColor: "text-black",
    borderClass: "border border-gray-200",
    imagePosition: "center",
    textPosition: "top",
    overlayColor: "bg-gradient-to-b from-white/90 to-white/0",
  },
]

export default function HelpServices() {
  const [showArrows, setShowArrows] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Check if we can scroll left or right based on current scroll position
  const checkScrollability = useCallback(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth
      setCanScrollLeft(scrollPosition > 0)
      setCanScrollRight(scrollPosition < maxScroll)
    }
  }, [scrollPosition])

  useEffect(() => {
    checkScrollability()
    window.addEventListener("resize", checkScrollability)

    return () => {
      window.removeEventListener("resize", checkScrollability)
    }
  }, [checkScrollability])

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const newPosition = scrollContainerRef.current.scrollLeft
      setScrollPosition(newPosition)

      // Update arrow visibility based on new scroll position
      const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
      setCanScrollLeft(newPosition > 0)
      setCanScrollRight(newPosition < maxScroll)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 480 // One card width
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 480 // One card width
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      {/* Title section - Separate from scrollable area */}
      <div className="max-w-[1200px] mx-auto px-6 mt-8">
        <h2 className="text-[28px] font-semibold ">
          Help is here. <span className="text-[#6e6e73] font-normal">Whenever and however you need it.</span>
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
            {helpServices.map((service, index) => (
              <div
                key={index}
                className="group p-4 overflow-visible" // Added padding and overflow-visible
              >
                <div
                  className={`${service.bgColor} ${service.textColor} rounded-3xl relative flex-shrink-0 w-[480px] h-[500px] ${service.borderClass || ""} transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-xl cursor-pointer overflow-hidden`}
                >
                  {/* Service image */}
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: service.imagePosition || "center",
                      backgroundRepeat: "no-repeat",
                      zIndex: 1,
                    }}
                  />

                  {/* Gradient overlay for text readability */}
                  <div
                    className={`absolute inset-0 w-full ${service.textPosition === "top" ? "h-48" : "h-full"} ${service.overlayColor} z-[2]`}
                  />

                  {/* Content overlay with higher z-index */}
                  <div className="relative z-10 p-8 flex flex-col h-full">
                    {service.category && (
                      <span className="text-xs uppercase tracking-wider mb-1">{service.category}</span>
                    )}
                    <h3 className="text-[28px] font-semibold mb-2 leading-tight">{service.title}</h3>
                    {service.description && <p className="text-[17px]">{service.description}</p>}

                    {/* Push link to bottom */}
                    <div className="mt-auto">
                      <Link href="#" className="text-apple-blue hover:underline text-[17px]">
                        Learn more &gt;
                      </Link>
                    </div>
                  </div>

                  {/* Invisible link covering the entire card */}
                  <Link href="#" className="absolute inset-0 z-20">
                    <span className="sr-only">Learn more about {service.title}</span>
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
  )
}
