"use client"

import React from "react"
import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"

interface Tab {
  id: string
  label: string
}

interface ProductSpec {
  label: string
  value: React.ReactNode
  footnote?: string
}

interface Product {
  id: string
  image: string
  imageAlt: string
  colors?: React.ReactNode
  newLabel?: boolean
  title: string
  subtitle: string
  description: string
  price: string
  priceNote?: string
  learnMoreLink?: string
  buyLink?: string
  specs: ProductSpec[]
}

interface TabContent {
  tabId: string
  products: Product[]
}

interface ProductComparisonProps {
  title: string
  tabs: Tab[]
  tabContents: TabContent[]
  backgroundColor?: string
}

export default function ProductComparison({
  title,
  tabs,
  tabContents,
  backgroundColor = "bg-[#f5f5f7]",
}: ProductComparisonProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "")
  const scrollRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({})

  // Initialize refs for each tab
  tabs.forEach((tab) => {
    if (!scrollRefs.current[tab.id]) {
      scrollRefs.current[tab.id] = React.createRef<HTMLDivElement>()
    }
  })

  const scrollLeft = (tabId: string) => {
    const ref = scrollRefs.current[tabId]
    if (ref && ref.current) {
      ref.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollRight = (tabId: string) => {
    const ref = scrollRefs.current[tabId]
    if (ref && ref.current) {
      ref.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  // Find the active tab content
  const activeTabContent = tabContents.find((content) => content.tabId === activeTab)

  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-[48px] font-semibold text-[#1d1d1f] mb-16">{title}</h2>

        {/* Tabs */}
        <div className="flex mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-3 rounded-full text-sm font-medium ${
                activeTab === tab.id ? "bg-[#1d1d1f] text-white" : "bg-transparent text-[#1d1d1f]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTabContent && (
          <div className="relative">
            {/* Scroll buttons - only visible on larger screens */}
            <button
              onClick={() => scrollLeft(activeTab)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-3 shadow-md hidden md:block"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scrollRight(activeTab)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-3 shadow-md hidden md:block"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Scrollable container */}
            <div
              ref={scrollRefs.current[activeTab]}
              className="flex overflow-x-auto pb-8 scrollbar-hide scroll-smooth -mx-6"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="pl-6 pr-12 flex">
                {activeTabContent.products.map((product, index) => (
                  <div key={product.id} className="flex-shrink-0 w-[372px] mr-6 first:ml-0 last:mr-0">
                    <div className="flex flex-col items-center">
                      <div className="relative w-full h-[300px] mb-6">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.imageAlt}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {product.colors && <div className="flex space-x-2 mb-4">{product.colors}</div>}

                      <div className="text-center mb-6">
                        {product.newLabel && (
                          <div className="flex items-center justify-center mb-1">
                            <span className="text-[#f56300] text-sm font-medium mr-2">New</span>
                          </div>
                        )}
                        <h3 className="text-2xl font-semibold mb-1">{product.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">{product.subtitle}</p>
                        <p className="mb-4">{product.description}</p>
                        <p className="font-medium mb-6">
                          {product.price}
                          {product.priceNote && <sup>{product.priceNote}</sup>}
                        </p>

                        <div className="flex justify-center space-x-4">
                          {product.learnMoreLink && (
                            <Link
                              href={product.learnMoreLink}
                              className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors"
                            >
                              Learn more
                            </Link>
                          )}
                          {product.buyLink && (
                            <Link href={product.buyLink} className="text-[#0066cc] hover:underline flex items-center">
                              Buy <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* Specs */}
                      <div className="w-full border-t border-gray-300 pt-8 space-y-8">
                        {product.specs.map((spec, specIndex) => (
                          <div key={specIndex} className="text-center">
                            <h4 className="text-2xl font-semibold mb-1">{spec.label}</h4>
                            <div className="text-sm">
                              {spec.value}
                              {spec.footnote && <sup>{spec.footnote}</sup>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Smooth scrolling for all browsers */
        .scroll-smooth {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </section>
  )
}
