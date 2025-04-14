"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

interface FeatureCard {
  category: string
  title: string
  image: string
  bgColor: string
  textColor: string
}

interface FeatureCardsProps {
  sectionTitle: string
  cards: FeatureCard[]
  backgroundColor?: string
}

export default function FeatureCards({ sectionTitle, cards, backgroundColor = "bg-white" }: FeatureCardsProps) {
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
      const scrollAmount = 450 // Approximately one card width + gap
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450 // Approximately one card width + gap
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className={`py-20 ${backgroundColor}`}>
      {/* Title section */}
      <div className="max-w-[1440px] mx-auto px-6 mb-8">
        <h2 className="text-[48px] font-semibold text-[#1d1d1f]">{sectionTitle}</h2>
      </div>

      {/* Scrollable section */}
      <div
        className="relative w-full"
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-4 shadow-md transition-opacity duration-300 ${
              showArrows ? "opacity-80" : "opacity-0"
            }`}
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
        )}

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-4 shadow-md transition-opacity duration-300 ${
              showArrows ? "opacity-80" : "opacity-0"
            }`}
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
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
          <div className="flex pl-[max(1rem,calc((100%-1440px)/2+1rem))] pr-12 min-w-max">
            {cards.map((card, index) => (
              <div key={index} className="group p-4 overflow-visible">
                <div
                  className={`${card.bgColor} rounded-3xl relative flex-shrink-0 w-[410px] h-[740px] transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl cursor-pointer overflow-hidden`}
                >
                  {/* Card content */}
                  <div className="p-8 flex flex-col h-full">
                    <div className="mb-auto relative z-10">
                      <p className={`text-sm font-medium opacity-80 ${card.textColor} leading-tight`}>
                        {card.category}
                      </p>
                      <h3 className={`text-[28px] font-semibold mt-1 ${card.textColor} leading-none`}>{card.title}</h3>
                    </div>

                    {/* Background image */}
                    <div
                      className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                      style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    {/* Plus button */}
                    <div className="relative z-10 mt-auto self-end">
                      <button
                        className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center hover:bg-[#444444] transition-colors"
                        aria-label="Learn more"
                      >
                        <Plus className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
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
      </div>
    </section>
  )
}
