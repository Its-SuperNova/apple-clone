"use client"

import EducationBanner from "@/components/page-components/EducationBanner"
import ProductHero from "@/components/page-components/ProductHero"
import FeatureCards from "@/components/page-components/FeatureCards"
import BuyingBenefits from "@/components/page-components/BuyingBenefits"
import { CreditCard, Repeat, GraduationCap, Laptop, Truck, Video, Users, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

// Feature cards data with the provided images
const ipadFeatureCards = [
  {
    category: "Apple Intelligence",
    title: "Personal, private, powerful.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-F09ZDM9Oye9u3kkRmUbrhmywlZurGZ.jpeg",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    category: "Productivity",
    title: "Your workplace can be any place.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-tBydjauZgIRrT022Yp4ziahZkMXfsW.jpeg",
    bgColor: "bg-[#f5f5f7]",
    textColor: "text-white",
  },
  {
    category: "Creativity",
    title: "Take your inner artist out and about.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-soHPh1s4qejpglCwSjteil3yIvVUjj.jpeg",
    bgColor: "bg-[#000814]",
    textColor: "text-white",
  },
  {
    category: "Learning",
    title: "Your classroom can be anywhere.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-L5LeY6hz4unulY2nqaKqXVrjOnZOnw.jpeg",
    bgColor: "bg-[#f0f7f0]",
    textColor: "text-white",
  },
  {
    category: "Entertainment",
    title: "Kick back. Tune in. Game on.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-EUUqs5IG6K74seDEjV4d8Yrl75CeF8.jpeg",
    bgColor: "bg-[#1d1d1f]",
    textColor: "text-white",
  },
  {
    category: "Apple Pencil",
    title: "Dream it up. Jot it down.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-Q9F5emJTckOYLppwssFci3F7WmzgeU.jpeg",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    category: "",
    title: "",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-h3n0o665H4k3XcrKw4LgqBPH5l348x.png",
    bgColor: "bg-black",
    textColor: "text-white",
  },
]

// Buying benefits data
const ipadBuyingBenefits = [
  {
    icon: <CreditCard className="w-10 h-10" />,
    title: "Pay over time, interest-free.",
    description: "When you choose to check out with Apple Card Monthly Installments.",
    footnote: "2",
  },
  {
    icon: <Repeat className="w-10 h-10" />,
    title: "Save with Apple Trade In.",
    description: "Get credit toward your next iPad when you trade in an eligible device.",
    footnote: "5",
  },
  {
    icon: <GraduationCap className="w-10 h-10" />,
    title: "Save with education pricing.",
    description: "Students and educators can save exclusively through the Apple Store.",
    footnote: "6",
  },
  {
    icon: <Laptop className="w-10 h-10" />,
    title: "Customize your iPad.",
    description: "Choose your model, storage, connectivity, and accessories.",
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Get flexible delivery and easy pickup.",
    description: "Choose from two-hour delivery from an Apple Store, free delivery, or easy pickup options.",
  },
  {
    icon: <Video className="w-10 h-10" />,
    title: "Shop live with a Specialist.",
    description: "Let us guide you live over video and answer all of your questions.",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Meet your new iPad with Personal Setup.",
    description: "Jump into online sessions with a Specialist to set up your iPad and discover new features.",
  },
  {
    icon: <ShoppingBag className="w-10 h-10" />,
    title: "Explore a shopping experience designed around you.",
    description: "Use the Apple Store app to get a more personal way to shop.",
  },
]

export default function IPadPage() {
  return (
    <div className="pt-12">
      <EducationBanner productType="iPad" linkHref="#" />

      <ProductHero
        title="iPad"
        tagline="Touch, draw, and type on one magical device."
        videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ipad-9vaMkIK8QyMyVlGAqRsIJsd3SgjD1M.mp4"
        backgroundColor="bg-white"
        taglineClassName="text-[28px] text-[#1d1d1f] leading-tight mt-4 md:mt-0 font-semibold"
      />

      <FeatureCards sectionTitle="Get to know iPad." cards={ipadFeatureCards} backgroundColor="bg-[#f5f5f7]" />

      <section className="py-20 bg-[#f5f5f7]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-[48px] font-semibold text-[#1d1d1f]">Explore the lineup.</h2>
            <Link href="#" className="text-[#0066cc] hover:underline">
              Compare all models <ChevronRight className="inline-block w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* iPad Pro */}
            <div className="flex flex-col items-center">
              {/* Product Image - Fixed Height */}
              <div className="h-[300px] w-full flex items-center justify-center">
                <Image
                  src="/ipad/ipad-pro-new.png"
                  alt="iPad Pro"
                  width={300}
                  height={300}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Color Options - Fixed Height */}
              <div className="h-[24px] flex items-center justify-center mt-4">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gray-800 border border-gray-700"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
                </div>
              </div>

              {/* New Label - Fixed Height */}
              <div className="h-[24px] flex items-center justify-center">{/* No "New" label for iPad Pro */}</div>

              {/* Product Name - Fixed Height */}
              <div className="h-[40px] flex items-center justify-center">
                <h3 className="text-2xl font-semibold">iPad Pro</h3>
              </div>

              {/* Product Description - Fixed Height */}
              <div className="h-[60px] flex items-center justify-center px-4">
                <p className="text-center">The ultimate iPad experience with the most advanced technology.</p>
              </div>

              {/* Price - Fixed Height */}
              <div className="h-[40px] flex items-center justify-center">
                <p className="font-medium">
                  From $999 or $83.25/mo. for 12 mo.<sup>2</sup>
                </p>
              </div>

              {/* Buttons - Fixed Height */}
              <div className="h-[60px] flex items-center justify-center mt-4">
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors"
                  >
                    Learn more
                  </Link>
                  <Link href="#" className="text-[#0066cc] hover:underline flex items-center">
                    Buy <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* iPad Air */}
            <div className="flex flex-col items-center">
              {/* Product Image - Fixed Height */}
              <div className="h-[300px] w-full flex items-center justify-center">
                <Image
                  src="/ipad/ipad-air-new.png"
                  alt="iPad Air"
                  width={300}
                  height={300}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Color Options - Fixed Height */}
              <div className="h-[24px] flex items-center justify-center mt-4">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border border-blue-600"></div>
                  <div className="w-4 h-4 rounded-full bg-purple-500 border border-purple-600"></div>
                  <div className="w-4 h-4 rounded-full bg-pink-500 border border-pink-600"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
                </div>
              </div>

              {/* New Label - Fixed Height */}
              <div className="h-[24px] flex items-center justify-center">
                <span className="text-[#f56300] text-sm font-medium">New</span>
              </div>

              {/* Product Name - Fixed Height */}
              <div className="h-[40px] flex items-center justify-center">
                <h3 className="text-2xl font-semibold">iPad Air</h3>
              </div>

              {/* Product Description - Fixed Height */}
              <div className="h-[60px] flex items-center justify-center px-4">
                <p className="text-center">Serious performance in a thin and light design.</p>
              </div>

              {/* Price - Fixed Height */}
              <div className="h-[40px] flex items-center justify-center">
                <p className="font-medium">
                  From $599 or $49.91/mo. for 12 mo.<sup>2</sup>
                </p>
              </div>

              {/* Buttons - Fixed Height */}
              <div className="h-[60px] flex items-center justify-center mt-4">
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors"
                  >
                    Learn more
                  </Link>
                  <Link href="#" className="text-[#0066cc] hover:underline flex items-center">
                    Buy <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* iPad */}
            <div className="flex flex-col items-center">
              {/* Product Image - Fixed Height */}
              <div className="h-[300px] w-full flex items-center justify-center">
                <Image
                  src="/ipad/ipad-new.png"
                  alt="iPad"
                  width={300}
                  height={300}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Color Options - Fixed Height */}
              <div className="h-[24px] flex items-center justify-center mt-4">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border border-blue-600"></div>
                  <div className="w-4 h-4 rounded-full bg-pink-500 border border-pink-600"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-500 border border-yellow-600"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
                </div>
              </div>

              {/* New Label - Fixed Height */}
              <div className="h-[24px] flex items-center justify-center">
                <span className="text-[#f56300] text-sm font-medium">New</span>
              </div>

              {/* Product Name - Fixed Height */}
              <div className="h-[40px] flex items-center justify-center">
                <h3 className="text-2xl font-semibold">iPad</h3>
              </div>

              {/* Product Description - Fixed Height */}
              <div className="h-[60px] flex items-center justify-center px-4">
                <p className="text-center">The colorful, all-screen iPad for the things you do every day.</p>
              </div>

              {/* Price - Fixed Height */}
              <div className="h-[40px] flex items-center justify-center">
                <p className="font-medium">
                  From $349 or $29.08/mo. for 12 mo.<sup>2</sup>
                </p>
              </div>

              {/* Buttons - Fixed Height */}
              <div className="h-[60px] flex items-center justify-center mt-4">
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors"
                  >
                    Learn more
                  </Link>
                  <Link href="#" className="text-[#0066cc] hover:underline flex items-center">
                    Buy <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* iPad mini */}
            <div className="flex flex-col items-center">
              {/* Product Image - Fixed Height */}
              <div className="h-[300px] w-full flex items-center justify-center">
                <Image
                  src="/ipad/ipad-mini-new.png"
                  alt="iPad mini"
                  width={300}
                  height={300}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Color Options - Fixed Height */}
              <div className="h-[24px] flex items-center justify-center mt-4">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 rounded-full bg-purple-500 border border-purple-600"></div>
                  <div className="w-4 h-4 rounded-full bg-pink-500 border border-pink-600"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-800 border border-gray-700"></div>
                </div>
              </div>

              {/* New Label - Fixed Height */}
              <div className="h-[24px] flex items-center justify-center">{/* No "New" label for iPad mini */}</div>

              {/* Product Name - Fixed Height */}
              <div className="h-[40px] flex items-center justify-center">
                <h3 className="text-2xl font-semibold">iPad mini</h3>
              </div>

              {/* Product Description - Fixed Height */}
              <div className="h-[60px] flex items-center justify-center px-4">
                <p className="text-center">The full iPad experience in an ultraportable design.</p>
              </div>

              {/* Price - Fixed Height */}
              <div className="h-[40px] flex items-center justify-center">
                <p className="font-medium">
                  From $499 or $41.58/mo. for 12 mo.<sup>2</sup>
                </p>
              </div>

              {/* Buttons - Fixed Height */}
              <div className="h-[60px] flex items-center justify-center mt-4">
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors"
                  >
                    Learn more
                  </Link>
                  <Link href="#" className="text-[#0066cc] hover:underline flex items-center">
                    Buy <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications Comparison */}
          <div className="mt-16 border-t border-gray-300 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Display Specs */}
              <div className="flex flex-col items-center">
                {/* Display Size - Fixed Height */}
                <div className="h-[60px] flex items-center justify-center">
                  <h4 className="text-xl font-semibold text-center">13" or 11"</h4>
                </div>

                {/* Display Features - Fixed Height */}
                <div className="h-[120px] flex items-center justify-center">
                  <div className="text-center text-sm space-y-2">
                    <p>Ultra Retina XDR display²</p>
                    <p>ProMotion technology</p>
                    <p>P3 wide color</p>
                    <p>Nano-texture display glass option</p>
                  </div>
                </div>

                {/* Chip - Fixed Height */}
                {/* iPad Pro - M4 chip */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TN2icEClKqfsuZpbodeD3p1xLz832S.png"
                      alt="M4 chip"
                      className="w-[40px] h-[40px] object-contain"
                    />
                  </div>
                </div>
                <div className="h-[30px] flex items-center justify-center">
                  <p className="text-center text-sm">M4 chip</p>
                </div>

                {/* Apple Intelligence - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4Lt8kdw8g27DmhB6BtAE5LNkofsK88.png"
                      alt="Apple Intelligence"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[30px] flex items-center justify-center">
                  <p className="text-center text-sm">Apple Intelligence¹</p>
                </div>

                {/* Camera - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QOA43PtZuENp8ziGDG87fimTbjp3qI.png"
                      alt="iPad Pro camera system"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[60px] flex items-center justify-center">
                  <div className="text-center text-sm">
                    <p>12MP Wide camera</p>
                    <p>4K video, ProRes</p>
                  </div>
                </div>

                {/* Front Camera - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vayHJI0clQvUAI87o6LKcqYYZGCkkj.png"
                      alt="iPad Pro front camera"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[60px] flex items-center justify-center">
                  <div className="text-center text-sm">
                    <p>Landscape 12MP Center Stage camera</p>
                    <p>TrueDepth camera system</p>
                  </div>
                </div>

                {/* Apple Pencil - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dTI3Vji7bfLllVxmO7SXGWS1MsjJ6X.png"
                      alt="Apple Pencil"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[60px] flex items-center justify-center">
                  <div className="text-center text-sm">
                    <p>Supports Apple Pencil Pro</p>
                    <p>Supports Apple Pencil (USB-C)</p>
                  </div>
                </div>

                {/* Keyboard - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VjOVRcq87VMw4I4X7yHxdGpmSwAPJM.png"
                      alt="Magic Keyboard"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[40px] flex items-center justify-center">
                  <p className="text-center text-sm">Supports Magic Keyboard for iPad Pro</p>
                </div>
              </div>

              {/* iPad Air Specs */}
              <div className="flex flex-col items-center">
                {/* Display Size - Fixed Height */}
                <div className="h-[60px] flex items-center justify-center">
                  <h4 className="text-xl font-semibold text-center">13" or 11"</h4>
                </div>

                {/* Display Features - Fixed Height */}
                <div className="h-[120px] flex items-center justify-center">
                  <div className="text-center text-sm space-y-2">
                    <p>Liquid Retina display²</p>
                    <p>P3 wide color</p>
                  </div>
                </div>

                {/* Chip - Fixed Height */}
                {/* iPad Air - M3 chip */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5uc7U4gcQCBDZKBqBCePM3HROeOqIv.png"
                      alt="M3 chip"
                      className="w-[40px] h-[40px] object-contain"
                    />
                  </div>
                </div>
                <div className="h-[30px] flex items-center justify-center">
                  <p className="text-center text-sm">M3 chip</p>
                </div>

                {/* Apple Intelligence - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4Lt8kdw8g27DmhB6BtAE5LNkofsK88.png"
                      alt="Apple Intelligence"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[30px] flex items-center justify-center">
                  <p className="text-center text-sm">Apple Intelligence¹</p>
                </div>

                {/* Camera - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HbXqDspFXNcfWsHU1QEI2WqvgXAtHy.png"
                      alt="iPad Air camera"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[60px] flex items-center justify-center">
                  <div className="text-center text-sm">
                    <p>12MP Wide camera</p>
                    <p>4K video</p>
                  </div>
                </div>

                {/* Front Camera - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vayHJI0clQvUAI87o6LKcqYYZGCkkj.png"
                      alt="iPad Air front camera"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[60px] flex items-center justify-center">
                  <div className="text-center text-sm">
                    <p>Landscape 12MP Center Stage camera</p>
                  </div>
                </div>

                {/* Apple Pencil - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dTI3Vji7bfLllVxmO7SXGWS1MsjJ6X.png"
                      alt="Apple Pencil"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[60px] flex items-center justify-center">
                  <div className="text-center text-sm">
                    <p>Supports Apple Pencil Pro</p>
                    <p>Supports Apple Pencil (USB-C)</p>
                  </div>
                </div>

                {/* Keyboard - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VjOVRcq87VMw4I4X7yHxdGpmSwAPJM.png"
                      alt="Magic Keyboard"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[40px] flex items-center justify-center">
                  <p className="text-center text-sm">Supports Magic Keyboard for iPad Air</p>
                </div>
              </div>

              {/* iPad Specs */}
              <div className="flex flex-col items-center">
                {/* Display Size - Fixed Height */}
                <div className="h-[60px] flex items-center justify-center">
                  <h4 className="text-xl font-semibold text-center">11"</h4>
                </div>

                {/* Display Features - Fixed Height */}
                <div className="h-[120px] flex items-center justify-center">
                  <div className="text-center text-sm space-y-2">
                    <p>Liquid Retina display²</p>
                    <p>sRGB color</p>
                  </div>
                </div>

                {/* Chip - Fixed Height */}
                {/* iPad - A16 chip */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O1uLFN2L8qdlm4YftYcusmC1dWkG5L.png"
                      alt="A16 chip"
                      className="w-[40px] h-[40px] object-contain"
                    />
                  </div>
                </div>
                <div className="h-[30px] flex items-center justify-center">
                  <p className="text-center text-sm">A16 chip</p>
                </div>

                {/* Apple Intelligence - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <span className="text-xl font-medium">—</span>
                  </div>
                </div>
                <div className="h-[30px] flex items-center justify-center">
                  <p className="text-center text-sm opacity-0">Apple Intelligence¹</p>
                </div>

                {/* Camera - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RwET0viDbywZPC0ojGIWDGNOnH4NAQ.png"
                      alt="iPad camera"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[60px] flex items-center justify-center">
                  <div className="text-center text-sm">
                    <p>12MP Wide camera</p>
                    <p>4K video</p>
                  </div>
                </div>

                {/* Front Camera - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vayHJI0clQvUAI87o6LKcqYYZGCkkj.png"
                      alt="iPad front camera"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[60px] flex items-center justify-center">
                  <div className="text-center text-sm">
                    <p>Landscape 12MP Center Stage camera</p>
                  </div>
                </div>

                {/* Apple Pencil - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dTI3Vji7bfLllVxmO7SXGWS1MsjJ6X.png"
                      alt="Apple Pencil"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[60px] flex items-center justify-center">
                  <div className="text-center text-sm">
                    <p>Supports Apple Pencil (USB-C)</p>
                    <p>Supports Apple Pencil (1st generation)²</p>
                  </div>
                </div>

                {/* Keyboard - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VjOVRcq87VMw4I4X7yHxdGpmSwAPJM.png"
                      alt="Magic Keyboard Folio"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[40px] flex items-center justify-center">
                  <p className="text-center text-sm">Supports Magic Keyboard Folio</p>
                </div>
              </div>

              {/* iPad mini Specs */}
              <div className="flex flex-col items-center">
                {/* Display Size - Fixed Height */}
                <div className="h-[60px] flex items-center justify-center">
                  <h4 className="text-xl font-semibold text-center">8.3"</h4>
                </div>

                {/* Display Features - Fixed Height */}
                <div className="h-[120px] flex items-center justify-center">
                  <div className="text-center text-sm space-y-2">
                    <p>Liquid Retina display²</p>
                    <p>P3 wide color</p>
                  </div>
                </div>

                {/* Chip - Fixed Height */}
                {/* iPad mini - A17 Pro chip */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-y7rVjslMEzQVGEmXcFNnvOT6Wk39wh.png"
                      alt="A17 Pro chip"
                      className="w-[40px] h-[40px] object-contain"
                    />
                  </div>
                </div>
                <div className="h-[30px] flex items-center justify-center">
                  <p className="text-center text-sm">A17 Pro chip</p>
                </div>

                {/* Apple Intelligence - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4Lt8kdw8g27DmhB6BtAE5LNkofsK88.png"
                      alt="Apple Intelligence"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[30px] flex items-center justify-center">
                  <p className="text-center text-sm">Apple Intelligence¹</p>
                </div>

                {/* Camera - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lwwAbybO2cmi9kXLGJhpt1KooR315G.png"
                      alt="iPad mini camera"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[60px] flex items-center justify-center">
                  <div className="text-center text-sm">
                    <p>12MP Wide camera</p>
                    <p>4K video</p>
                  </div>
                </div>

                {/* Front Camera - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SRF4FxdFGg0z7skgRT9HRzvTxyxEgo.png"
                      alt="iPad mini front camera"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[60px] flex items-center justify-center">
                  <div className="text-center text-sm">
                    <p>12MP Center Stage camera</p>
                  </div>
                </div>

                {/* Apple Pencil - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dTI3Vji7bfLllVxmO7SXGWS1MsjJ6X.png"
                      alt="Apple Pencil"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[60px] flex items-center justify-center">
                  <div className="text-center text-sm">
                    <p>Supports Apple Pencil Pro</p>
                    <p>Supports Apple Pencil (USB-C)</p>
                  </div>
                </div>

                {/* Keyboard - Fixed Height */}
                <div className="h-[80px] flex items-center justify-center mt-8">
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NuxNitwb4PVQ8DnH5Cvbzm7XCLpnmZ.png"
                      alt="Bluetooth Keyboard"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="h-[40px] flex items-center justify-center">
                  <p className="text-center text-sm">Supports Bluetooth keyboards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BuyingBenefits
        title="Why Apple is the best place to buy iPad."
        shopLinkText="Shop iPad"
        shopLinkHref="/ipad"
        benefits={ipadBuyingBenefits}
      />
    </div>
  )
}
