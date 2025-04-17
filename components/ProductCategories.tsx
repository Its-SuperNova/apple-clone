"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Define the product categories
const categories = [
  { name: "Mac", image: "/mac-category.png" },
  { name: "iPhone", image: "/iphone-category.png" },
  { name: "iPad", image: "/ipad-category.png" },
  { name: "Apple Watch", image: "/watch-category.png" },
  { name: "AirPods", image: "/airpods-category.png" },
  { name: "AirTag", image: "/airtag-category.png" },
  { name: "Apple TV 4K", image: "/appletv-category.png" },
  { name: "HomePod", image: "/homepod-category.png" },
  { name: "Accessories", image: "/accessories-category.png" },
];

export default function ProductCategories() {
  return (
    <motion.section
      className="py-8 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
        {categories.map((category, index) => (
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
  );
}
