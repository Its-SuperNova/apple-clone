"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Define the product categories
const categories = [
  { name: "Mac", image: "/store/product-categories/mac-lineup.png" },
  { name: "iPhone", image: "/store/product-categories/iphone-lineup.png" },
  { name: "iPad", image: "/store/product-categories/ipad-lineup.png" },
  { name: "Apple Watch", image: "/store/product-categories/apple-watch-lineup.png" },
  { name: "AirPods", image: "/store/product-categories/airpods-pro.png" },
  { name: "AirTag", image: "/store/product-categories/airtag.png" },
  { name: "Apple TV 4K", image: "/store/product-categories/apple-tv.png" },
  { name: "HomePod", image: "/store/product-categories/homepod.png" },
  { name: "Accessories", image: "/store/product-categories/accessories-lineup.png" },
]

export default function ProductCategories() {
  const [showArrows, setShowArrows] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Check scrollability on mount and window resize
  useEffect(() => {
    const checkScrollability = () => {
      const scrollContainer = scrollContainerRef.current
      if (scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth
        setCanScrollLeft(scrollPosition > 0)
        setCanScrollRight(scrollPosition < maxScroll)
      }
    }

    checkScrollability()
    window.addEventListener("resize", checkScrollability)

    return () => {
      window.removeEventListener("resize", checkScrollability)
    }
  }, [scrollPosition])

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
      const scrollAmount = 300 // Adjust scroll amount as needed
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300 // Adjust scroll amount as needed
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.section
      className="py-8 relative w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      {/* Left Arrow - Higher z-index */}
      {canScrollLeft && (
        <button
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-opacity duration-300 ${
            showArrows ? "opacity-100" : "opacity-0"
          }`}
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Right Arrow - Higher z-index */}
      {canScrollRight && (
        <button
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-opacity duration-300 ${
            showArrows ? "opacity-100" : "opacity-0"
          }`}
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Scrollable Container - Full width with left padding to align first item with title */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide w-full smooth-scroll"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
        onScroll={handleScroll}
      >
        <div className="flex pl-[max(1rem,calc((100%-1200px)/2+1rem))] pr-12 space-x-8 md:space-x-12 min-w-max">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="flex flex-col items-center flex-shrink-0 w-24 md:w-32"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Link
                href={`/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex flex-col items-center"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 relative mb-2">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm md:text-base text-center">{category.name}</span>
              </Link>
            </motion.div>
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
  )
}
