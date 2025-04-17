"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, HelpCircle, MapPin } from "lucide-react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  // Initialize smooth scroll with useRef and useEffect
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Create the animation frame update function
    function raf(time: number) {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="pt-12">
      {/* Promo Banner */}
      <div className="bg-[#f5f5f7] py-3 text-center">
        <p className="text-sm">
          Get up to 12 months of No Cost EMI¹ plus up to ₹8000.00 instant
          cashback⁴§ on selected products with eligible cards.{" "}
          <Link href="#" className="text-apple-blue hover:underline">
            See offers <ArrowUpRight className="inline-block w-3 h-3" />
          </Link>
        </p>
      </div>

      {/* Store Hero Section */}
      <motion.section
        className="py-16 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1d1d1f]">
              Store.{" "}
              <span className="text-[#6e6e73] font-normal">
                The best way to buy the products you love.
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-start space-y-6 flex-col">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center mr-3">
                  <HelpCircle className="w-6 h-6 text-[#1d1d1f]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Need shopping help?</h3>
                  <Link
                    href="#"
                    className="text-apple-blue hover:underline flex items-center"
                  >
                    Ask a Specialist <ArrowUpRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center mr-3">
                  <MapPin className="w-6 h-6 text-[#1d1d1f]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Visit an Apple Store</h3>
                  <Link
                    href="#"
                    className="text-apple-blue hover:underline flex items-center"
                  >
                    Find one near you <ArrowUpRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Product Categories */}
      <motion.section
        className="py-8 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {[
            { name: "Mac", image: "/mac-category.png" },
            { name: "iPhone", image: "/iphone-category.png" },
            { name: "iPad", image: "/ipad-category.png" },
            { name: "Apple Watch", image: "/watch-category.png" },
            { name: "AirPods", image: "/airpods-category.png" },
            { name: "AirTag", image: "/airtag-category.png" },
            { name: "Apple TV 4K", image: "/appletv-category.png" },
            { name: "HomePod", image: "/homepod-category.png" },
            { name: "Accessories", image: "/accessories-category.png" },
          ].map((category, index) => (
            <motion.div
              key={category.name}
              className="flex flex-col items-center"
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
                <span className="text-sm md:text-base text-center">
                  {category.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* The Latest Section */}
      <motion.section
        className="py-16 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
          The latest.{" "}
          <span className="text-[#6e6e73] font-normal">
            Take a look at what's new right now.
          </span>
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* iPhone 16 Pro Card */}
          <motion.div
            className="bg-black text-white rounded-3xl overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8">
              <h3 className="text-3xl font-semibold mb-1">iPhone 16 Pro</h3>
              <p className="text-apple-blue mb-1">
                Apple Intelligence<sup>Δ</sup>
              </p>
              <p className="text-sm mb-4">
                From ₹119900.00<sup>‡</sup>
              </p>
              <div className="h-[400px] flex items-center justify-center">
                <Image
                  src="/iphone16-pro.png"
                  alt="iPhone 16 Pro"
                  width={300}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* MacBook Air Card */}
          <motion.div
            className="bg-[#f5f5f7] rounded-3xl overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-8">
              <h3 className="text-3xl font-semibold mb-1">MacBook Air</h3>
              <p className="text-apple-blue mb-1">
                Apple Intelligence<sup>Δ</sup>
              </p>
              <p className="text-sm mb-4">
                From ₹99900.00<sup>‡</sup>
              </p>
              <div className="h-[400px] flex items-center justify-center">
                <Image
                  src="/macbook-air.png"
                  alt="MacBook Air"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* iPad Air Card */}
          <motion.div
            className="bg-white rounded-3xl overflow-hidden relative border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-8">
              <h3 className="text-3xl font-semibold mb-1">iPad Air</h3>
              <p className="text-apple-blue mb-1">
                Apple Intelligence<sup>Δ</sup>
              </p>
              <p className="text-sm mb-4">
                From ₹59900.00<sup>‡</sup>
              </p>
              <div className="h-[400px] flex items-center justify-center">
                <Image
                  src="/ipad-air.png"
                  alt="iPad Air"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Apple Watch Card */}
          <motion.div
            className="bg-[#f5f5f7] rounded-3xl overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="p-8">
              <h3 className="text-3xl font-semibold mb-1">Apple Watch</h3>
              <p className="text-[#1d1d1f] mb-1">Thinstant connection.</p>
              <p className="text-sm mb-4">
                From ₹46900.00<sup>‡</sup>
              </p>
              <div className="h-[400px] flex items-center justify-center">
                <Image
                  src="/apple-watch.png"
                  alt="Apple Watch"
                  width={300}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
