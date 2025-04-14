"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, MapPin } from "lucide-react"

export default function StoreHero() {
  return (
    <motion.section
      className="py-16 px-6 md:px-12 lg:px-12 max-w-[1200px] mx-auto"
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
          <h1 className="text-[48px] font-semibold text-[#1d1d1f] leading-[1.05]">
            Store. <span className="text-[#6e6e73] font-normal">The best way to buy the products you love.</span>
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
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image
                  src="/store/hero/specialist-profile.png"
                  alt="Apple Specialist"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-[14px]">Need shopping help?</h3>
                <Link href="#" className="text-apple-blue hover:underline flex items-center text-[14px]">
                  Ask a Specialist <ArrowUpRight className="ml-1 w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center mr-3">
                <MapPin className="w-6 h-6 text-[#1d1d1f]" />
              </div>
              <div>
                <h3 className="font-medium text-[14px]">Visit an Apple Store</h3>
                <Link href="#" className="text-apple-blue hover:underline flex items-center text-[14px]">
                  Find one near you <ArrowUpRight className="ml-1 w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
