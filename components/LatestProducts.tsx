"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Define the latest products
const latestProducts = [
  {
    name: "iPhone 16 Pro",
    tagline: "Apple Intelligence",
    price: "From ₹119900.00",
    image: "/iphone16-pro.png",
    bgColor: "bg-black",
    textColor: "text-white",
    width: 300,
    height: 400,
  },
  {
    name: "MacBook Air",
    tagline: "Apple Intelligence",
    price: "From ₹99900.00",
    image: "/macbook-air.png",
    bgColor: "bg-[#f5f5f7]",
    textColor: "text-black",
    width: 400,
    height: 400,
  },
  {
    name: "iPad Air",
    tagline: "Apple Intelligence",
    price: "From ₹59900.00",
    image: "/ipad-air.png",
    bgColor: "bg-white",
    textColor: "text-black",
    borderClass: "border border-gray-200",
    width: 400,
    height: 400,
  },
  {
    name: "Apple Watch",
    tagline: "Thinstant connection.",
    price: "From ₹46900.00",
    image: "/apple-watch.png",
    bgColor: "bg-[#f5f5f7]",
    textColor: "text-black",
    taglineColor: "text-[#1d1d1f]",
    width: 300,
    height: 400,
  },
];

export default function LatestProducts() {
  return (
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
        {latestProducts.map((product, index) => (
          <motion.div
            key={product.name}
            className={`${product.bgColor} ${product.textColor} ${
              product.borderClass || ""
            } rounded-3xl overflow-hidden relative`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="p-8">
              <h3 className="text-3xl font-semibold mb-1">{product.name}</h3>
              <p
                className={`${product.taglineColor || "text-apple-blue"} mb-1`}
              >
                {product.tagline}
                {product.tagline === "Apple Intelligence" && <sup>Δ</sup>}
              </p>
              <p className="text-sm mb-4">
                {product.price}
                <sup>‡</sup>
              </p>
              <div className="h-[400px] flex items-center justify-center">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={product.width}
                  height={product.height}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
