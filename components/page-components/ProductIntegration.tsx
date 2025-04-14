"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

interface IntegrationItem {
  id: string
  title: string
  content: string
  imageSrc: string
  imageAlt: string
}

interface ProductIntegrationProps {
  title: string
  items: IntegrationItem[]
  backgroundColor?: string
}

export default function ProductIntegration({ title, items, backgroundColor = "bg-white" }: ProductIntegrationProps) {
  const [activeItem, setActiveItem] = useState(items[0]?.id || "")

  const toggleItem = (itemId: string) => {
    setActiveItem(activeItem === itemId ? "" : itemId)
  }

  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-[48px] font-semibold text-[#1d1d1f] mb-16">{title}</h2>

        <div className="flex flex-col md:flex-row">
          {/* Accordion controls */}
          <div className="md:w-1/2 pr-8">
            {items.map((item) => (
              <div key={item.id} className="border-b border-gray-200 py-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={activeItem === item.id}
                  aria-controls={`content-${item.id}`}
                >
                  <h3 className="text-2xl font-semibold text-[#1d1d1f]">{item.title}</h3>
                  {activeItem === item.id ? (
                    <ChevronUp className="w-6 h-6 text-[#1d1d1f]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#1d1d1f]" />
                  )}
                </button>
                {activeItem === item.id && (
                  <div id={`content-${item.id}`} className="mt-4 text-[#1d1d1f]">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image display */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            {items.map(
              (item) =>
                activeItem === item.id && (
                  <div key={item.id} className="relative h-[500px] w-full">
                    <Image
                      src={item.imageSrc || "/placeholder.svg"}
                      alt={item.imageAlt}
                      fill
                      className="object-contain"
                    />
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
