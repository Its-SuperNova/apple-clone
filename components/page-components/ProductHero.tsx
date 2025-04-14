"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface ProductHeroProps {
  title: string
  tagline: string
  videoSrc?: string
  imageSrc?: string
  backgroundColor?: string
  taglineClassName?: string
}

const Video: React.FC<{
  src: string
  loop?: boolean
  muted?: boolean
}> = ({ src, loop = true, muted = true }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay prevented:", error)
        })
      }
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      controls={false}
      loop={loop}
      muted={muted}
      autoPlay
      playsInline
      className="w-full h-full object-cover"
    />
  )
}

export default function ProductHero({
  title,
  tagline,
  videoSrc,
  imageSrc,
  backgroundColor = "bg-white",
  taglineClassName = "text-[28px] text-[#1d1d1f] leading-tight mt-4 md:mt-0 font-semibold",
}: ProductHeroProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top

      // Calculate progress based on section position
      // When section is at the top of viewport, progress is 0
      // When section is at the bottom of viewport, progress is 1
      let progress = 0

      if (sectionTop <= 0) {
        // Section has started to move up
        const sectionHeight = rect.height
        const visibleHeight = Math.max(0, Math.min(sectionHeight, sectionHeight + sectionTop))
        progress = 1 - visibleHeight / sectionHeight
      }

      // Limit progress to 0-1 range
      progress = Math.max(0, Math.min(1, progress))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate styles based on scroll progress
  const scale = 1 - scrollProgress * 0.4 // Scale from 1.0 to 0.6
  const borderRadius = scrollProgress * 40 // Border radius from 0 to 40px
  const marginTop = scrollProgress * 80 // Margin top from 0 to 80px

  return (
    <div className={backgroundColor}>
      {/* Header section with title */}
      <div className="pt-20 max-w-[1440px] mx-auto pb-10 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="text-[80px] font-semibold text-[#1d1d1f] leading-tight">{title}</h1>
          <p className={taglineClassName}>{tagline}</p>
        </div>
      </div>

      {/* Video/Image section with scroll-based animation */}
      <div ref={sectionRef} className="flex justify-center items-center min-h-[100vh]">
        <div
          className="w-[100vw] aspect-video overflow-hidden"
          style={{
            transform: `scale(${scale})`,
            borderRadius: `${borderRadius}px`,
            marginTop: `${marginTop}px`,
            transformOrigin: "center",
            transition: "transform 0.1s linear, border-radius 0.1s linear, margin-top 0.1s linear",
          }}
        >
          {videoSrc ? (
            <Video src={videoSrc} loop={true} muted={true} />
          ) : imageSrc ? (
            <Image src={imageSrc || "/placeholder.svg"} alt={`${title} hero image`} fill className="object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">No media provided</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
