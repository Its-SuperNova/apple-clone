"use client"

import { useEffect, useRef, useState } from "react"
import Lenis from "@studio-freight/lenis"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

// Add this component definition before the HomePage component
const VideoOnViewport = ({ src, className }: { src: string; className?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    if (isInView && videoRef.current && !hasPlayed) {
      videoRef.current.currentTime = 0
      videoRef.current
        .play()
        .then(() => {
          setHasPlayed(true)
        })
        .catch((error) => {
          console.error("Error playing video:", error)
        })
    }
  }, [isInView, hasPlayed])

  return (
    <div ref={ref} className="w-full">
      <video ref={videoRef} src={src} className={className} muted playsInline controls={false} loop={false} />
    </div>
  )
}

export default function HomePage() {
  // Initialize smooth scroll with useRef and useEffect
  const lenisRef = useRef<Lenis | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    // Create the animation frame update function
    function raf(time: number) {
      if (lenisRef.current) {
        lenisRef.current.raf(time)
      }
      requestAnimationFrame(raf)
    }

    // Start the animation loop
    requestAnimationFrame(raf)

    // Set loaded state after a short delay to allow for animations
    setTimeout(() => setIsLoaded(true), 300)

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
    }
  }, [])

  return (
    <div className="pt-12 bg-black">
      {/* iPhone 16 Hero Section with Blue Gradient */}
      <div className="min-h-[94vh] flex flex-col items-center justify-start pt-20 relative overflow-hidden bg-gradient-to-b from-[#0a1657] via-[#1e3a8a] to-[#3b82f6]">
        {/* Content positioned at the top */}
        <div className="text-center z-10 relative mb-12">
          <h1 className="text-5xl md:text-[56px] font-semibold mb-2 text-white">iPhone 16</h1>
          <p className="text-xl md:text-2xl mb-6 text-white">Built for Apple Intelligence.</p>

          <div className="flex space-x-5 justify-center">
            <Link
              href="/iphone"
              className="bg-white text-[#0a1657] px-[22px] py-[8px] rounded-full text-[17px] font-normal hover:bg-gray-100 transition-colors"
            >
              Learn more
            </Link>
            <Link
              href="/iphone"
              className="bg-transparent text-white px-[22px] py-[8px] rounded-full text-[17px] font-normal border border-white/30 hover:border-white transition-colors"
            >
              Buy
            </Link>
          </div>
        </div>

        {/* iPhone Image with animation */}
        <div className="relative w-full max-w-[1000px] mx-auto">
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wVOc3e1X5Z7tDVkGRwTDPj9OiTgiV4.png"
                alt="iPhone 16 in blue"
                width={1500}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* White divider/gap between sections */}
      <div className="h-2 bg-white w-full"></div>

      {/* iPad Pro Section with Black Background */}
      <div className="h-[100vh] flex flex-col items-center justify-start pt-24 md:pt-32 relative overflow-hidden bg-black">
        {/* Content positioned at the top */}
        <div className="text-center z-10 relative mb-12">
          <h2 className="text-[28px] font-semibold mb-2 text-white">iPad Pro</h2>
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[500px] mx-auto mb-6"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kElv9FifGZ5QHzGbRRTDCXlivlBVCC.png"
              alt="Thinpossible."
              width={500}
              height={100}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* iPad Pro Image with animation */}
        <div className="relative w-full max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full"
          >
            <Image
              src="/ipad-home.jpeg"
              alt="iPad Pro with M4 chip"
              width={1500}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Add this new div for the buttons below the image */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <div className="flex space-x-5 justify-center">
            <Link
              href="/ipad"
              className="bg-white text-black px-[22px] py-[8px] rounded-full text-[17px] font-normal hover:bg-gray-100 transition-colors"
            >
              Learn more
            </Link>
            <Link
              href="/ipad"
              className="bg-transparent text-white px-[22px] py-[8px] rounded-full text-[17px] font-normal border border-white/30 hover:border-white transition-colors"
            >
              Buy
            </Link>
          </div>
        </motion.div>
      </div>

      {/* White divider/gap between sections */}
      <div className="h-2 bg-white w-full"></div>

      {/* MacBook Air Section */}
      <div className="min-h-[80vh] flex flex-col items-center justify-start pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden bg-[#e3f2fd]">
        {/* Content */}
        <div className="text-center z-10 relative mb-8">
          <h2 className="text-5xl md:text-[56px] font-semibold mb-2 text-[#1d1d1f]">MacBook Air</h2>
          <p className="text-xl md:text-2xl mb-6 text-[#1d1d1f]">Sky blue color. Sky high performance with M4.</p>

          <div className="flex space-x-5 justify-center">
            <Link
              href="/mac"
              className="bg-[#0066cc] text-white px-[22px] py-[8px] rounded-full text-[17px] font-normal hover:bg-[#0077ed] transition-colors"
            >
              Learn more
            </Link>
            <Link
              href="/mac"
              className="bg-white text-[#0066cc] px-[22px] py-[8px] rounded-full text-[17px] font-normal border border-[#0066cc]/30 hover:border-[#0066cc] transition-colors"
            >
              Buy
            </Link>
          </div>
        </div>

        {/* MacBook Air Image */}
        <div className="relative w-full max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%281%29-Xs6uNntJT1h2D5vglQZtAUZhsK9uY5.png"
              alt="MacBook Air in sky blue"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg bg-gradient-to-r from-[#0066CC] via-[#8E64FF] to-[#E541ED] bg-clip-text text-transparent inline-block"
          >
            Built for Apple Intelligence.
          </motion.p>
        </div>
      </div>

      {/* White divider/gap between sections */}
      <div className="h-2 bg-white w-full"></div>

      {/* Apple Watch Section */}
      <div className="min-h-[80vh] flex flex-col items-center justify-start pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden bg-white">
        {/* Content */}
        <div className="text-center z-10 relative mb-8">
          <h2 className="text-5xl md:text-[56px] font-semibold mb-2 text-[#1d1d1f]">Apple Watch Series 10</h2>
          <p className="text-xl md:text-2xl mb-6 text-[#1d1d1f]">
            Thinnest. Biggest display. Advanced health features.
          </p>

          <div className="flex space-x-5 justify-center">
            <Link
              href="/watch"
              className="bg-[#0066cc] text-white px-[22px] py-[8px] rounded-full text-[17px] font-normal hover:bg-[#0077ed] transition-colors"
            >
              Learn more
            </Link>
            <Link
              href="/watch"
              className="bg-white text-[#0066cc] px-[22px] py-[8px] rounded-full text-[17px] font-normal border border-[#0066cc]/30 hover:border-[#0066cc] transition-colors"
            >
              Buy
            </Link>
          </div>
        </div>

        {/* Apple Watch Video */}
        <div className="relative w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full"
          >
            <VideoOnViewport
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/xlarge-i9I6q52IpCEqCiJ8OwScnLZXny8D6j.mp4"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
