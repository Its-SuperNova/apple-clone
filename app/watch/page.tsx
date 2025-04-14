"use client";
import ProductHero from "@/components/page-components/ProductHero";
import FeatureCards from "@/components/page-components/FeatureCards";
import BuyingBenefits from "@/components/page-components/BuyingBenefits";
import {
  CreditCard,
  Repeat,
  GraduationCap,
  Laptop,
  Truck,
  Video,
  Users,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

// Feature cards data based on the reference images
const watchFeatureCards = [
  {
    category: "Health",
    title: "Knows you by heart.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-OQPap0kPyjpXFXtsM4EJQzBfnGQj93.jpeg",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    category: "Fitness",
    title: "Every move counts.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-ygrosAs1cVIamgvvcm87EAgYlBFC9s.jpeg",
    bgColor: "bg-[#e8cdc2]",
    textColor: "text-black",
  },
  {
    category: "Connectivity",
    title: "The right call for staying in touch.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-NIO6CYct6KTXV0vD97wWdtZarS9kFJ.jpeg",
    bgColor: "bg-[#e6f2ff]",
    textColor: "text-black",
  },
  {
    category: "Safety",
    title: "Good help is easy to find.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-qNYLIs7RcRNUG4xQaJuqshN9M79SYR.jpeg",
    bgColor: "bg-[#d8e8c5]",
    textColor: "text-black",
  },
  {
    category: "Apple Watch + iPhone",
    title: "Dynamic duo.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-ZzsSWDDLaNAZMoTmaRVE2fY4hp0ACQ.jpeg",
    bgColor: "bg-[#f5f5f7]",
    textColor: "text-black",
  },
  {
    category: "Personalization",
    title: "Make it you-nique.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-mWCTGJf3yzqCapxuRBUOjGwTYtkTIf.jpeg",
    bgColor: "bg-[#f8f3ee]",
    textColor: "text-black",
  },
  {
    category: "Apple Watch Ultra 2",
    title: "The ultimate sports and adventure watch.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-TRcqD0OiOqEKJpzqe5gl0gyQKAMOcH.jpeg",
    bgColor: "bg-[#1d1d1f]",
    textColor: "text-white",
  },
  {
    category: "Apple Watch For Your Kids",
    title: "Independence for them. Peace of mind for you.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.jpg-uXN5CTpbTx0tAKgweGBRiwekiVwAOs.jpeg",
    bgColor: "bg-white",
    textColor: "text-black",
  },
];

// Buying benefits data
const watchBuyingBenefits = [
  {
    icon: <CreditCard className="w-10 h-10" />,
    title: "Pay over time, interest-free.",
    description:
      "When you choose to check out with Apple Card Monthly Installments.",
    footnote: "2",
  },
  {
    icon: <Repeat className="w-10 h-10" />,
    title: "Save with Apple Trade In.",
    description:
      "Get credit toward your next Apple Watch when you trade in an eligible device.",
    footnote: "5",
  },
  {
    icon: <GraduationCap className="w-10 h-10" />,
    title: "Save with education pricing.",
    description:
      "Students and educators can save exclusively through the Apple Store.",
    footnote: "6",
  },
  {
    icon: <Laptop className="w-10 h-10" />,
    title: "Customize your Apple Watch.",
    description: "Choose your case size, finish, and band.",
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Get flexible delivery and easy pickup.",
    description:
      "Choose from two-hour delivery from an Apple Store, free delivery, or easy pickup options.",
  },
  {
    icon: <Video className="w-10 h-10" />,
    title: "Shop live with a Specialist.",
    description:
      "Let us guide you live over video and answer all of your questions.",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Meet your new Apple Watch with Personal Setup.",
    description:
      "Jump into online sessions with a Specialist to set up your Apple Watch and discover new features.",
  },
  {
    icon: <ShoppingBag className="w-10 h-10" />,
    title: "Explore a shopping experience designed around you.",
    description: "Use the Apple Store app to get a more personal way to shop.",
  },
];

export default function WatchPage() {
  return (
    <div className="pt-12">
      {/* Custom banner for Apple Fitness+ */}
      <div className="bg-white border-b border-gray-200 text-center py-3 text-sm">
        <p>
          Get 3 months of Apple Fitness+ when you buy any Apple Watch.
          <Link
            href="/shop/apple-watch"
            className="text-[#0066cc] hover:underline ml-1"
          >
            Shop Apple Watch <ChevronRight className="inline-block w-3 h-3" />
          </Link>
        </p>
      </div>

      <ProductHero
        title="Apple Watch"
        tagline="The ultimate device for a healthy life."
        videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/watch-vGH69yyBHj2Amz1HeUHTyoqhUC25TC.mp4"
        backgroundColor="bg-white"
        taglineClassName="text-[28px] text-[#1d1d1f] leading-tight mt-4 md:mt-0 font-semibold"
      />

      <FeatureCards
        sectionTitle="Get to know Apple Watch."
        cards={watchFeatureCards}
        backgroundColor="bg-[#f5f5f7]"
      />

      <section className="py-20 bg-[#f5f5f7]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-[48px] font-semibold text-[#1d1d1f]">
              Explore the lineup.
            </h2>
            <Link href="#" className="text-[#0066cc] hover:underline">
              Compare all models{" "}
              <ChevronRight className="inline-block w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Apple Watch Series 10 */}
            <div className="flex flex-col items-center">
              {/* Product Image - Fixed Height */}
              <div className="h-[300px] w-full flex items-center justify-center">
                <Image
                  src="/watch/apple-watch-series-10-mint.jpeg"
                  alt="Apple Watch Series 10"
                  width={300}
                  height={300}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Color Options - Fixed Height */}
              <div className="h-[24px] flex items-center justify-center mt-4">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 rounded-full bg-[#d8e4dc] border border-gray-300"></div>
                  <div className="w-4 h-4 rounded-full bg-[#9d7a9b] border border-gray-300"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
                  <div className="w-4 h-4 rounded-full bg-black border border-gray-700"></div>
                </div>
              </div>

              {/* New Label - Fixed Height */}
              <div className="h-[24px] flex items-center justify-center">
                <span className="text-[#f56300] text-sm font-medium">New</span>
              </div>

              {/* Product Name - Fixed Height */}
              <div className="h-[40px] flex items-center justify-center">
                <h3 className="text-2xl font-semibold">
                  Apple Watch Series 10
                </h3>
              </div>

              {/* Product Description - Fixed Height */}
              <div className="h-[60px] flex items-center justify-center px-4">
                <p className="text-center">
                  Thinnest. Biggest display. Advanced health features.
                </p>
              </div>

              {/* Price - Fixed Height */}
              <div className="h-[40px] flex items-center justify-center">
                <p className="font-medium">
                  From $399 or $33.25/mo. for 12 mo.<sup>2</sup>
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
                  <Link
                    href="#"
                    className="text-[#0066cc] hover:underline flex items-center"
                  >
                    Buy <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Apple Watch Ultra 2 */}
            <div className="flex flex-col items-center">
              {/* Product Image - Fixed Height */}
              <div className="h-[300px] w-full flex items-center justify-center">
                <Image
                  src="/watch/apple-watch-ultra-2.jpeg"
                  alt="Apple Watch Ultra 2"
                  width={300}
                  height={300}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Color Options - Fixed Height */}
              <div className="h-[24px] flex items-center justify-center mt-4">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 rounded-full bg-[#424242] border border-gray-400"></div>
                  <div className="w-4 h-4 rounded-full bg-[#e3e3e3] border border-gray-300"></div>
                </div>
              </div>

              {/* New Label - Fixed Height */}
              <div className="h-[24px] flex items-center justify-center">
                <span className="text-[#f56300] text-sm font-medium">New</span>
              </div>

              {/* Product Name - Fixed Height */}
              <div className="h-[40px] flex items-center justify-center">
                <h3 className="text-2xl font-semibold">Apple Watch Ultra 2</h3>
              </div>

              {/* Product Description - Fixed Height */}
              <div className="h-[60px] flex items-center justify-center px-4">
                <p className="text-center">
                  The ultimate sports and adventure watch.
                </p>
              </div>

              {/* Price - Fixed Height */}
              <div className="h-[40px] flex items-center justify-center">
                <p className="font-medium">
                  From $799 or $66.58/mo. for 12 mo.<sup>2</sup>
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
                  <Link
                    href="#"
                    className="text-[#0066cc] hover:underline flex items-center"
                  >
                    Buy <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Apple Watch SE */}
            <div className="flex flex-col items-center">
              {/* Product Image - Fixed Height */}
              <div className="h-[300px] w-full flex items-center justify-center">
                <Image
                  src="/watch/apple-watch-series-10-purple.jpeg"
                  alt="Apple Watch SE"
                  width={300}
                  height={300}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Color Options - Fixed Height */}
              <div className="h-[24px] flex items-center justify-center mt-4">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 rounded-full bg-[#9d7a9b] border border-gray-300"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
                  <div className="w-4 h-4 rounded-full bg-[#d8e4dc] border border-gray-300"></div>
                </div>
              </div>

              {/* New Label - Fixed Height */}
              <div className="h-[24px] flex items-center justify-center">
                <span className="text-[#f56300] text-sm font-medium">New</span>
              </div>

              {/* Product Name - Fixed Height */}
              <div className="h-[40px] flex items-center justify-center">
                <h3 className="text-2xl font-semibold">Apple Watch SE</h3>
              </div>

              {/* Product Description - Fixed Height */}
              <div className="h-[60px] flex items-center justify-center px-4">
                <p className="text-center">
                  All the essentials. Light on price.
                </p>
              </div>

              {/* Price - Fixed Height */}
              <div className="h-[40px] flex items-center justify-center">
                <p className="font-medium">
                  From $249 or $20.75/mo. for 12 mo.<sup>2</sup>
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
                  <Link
                    href="#"
                    className="text-[#0066cc] hover:underline flex items-center"
                  >
                    Buy <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications Comparison */}
          <div className="mt-16 border-t border-gray-300 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Series 10 Specs */}
              <div className="flex flex-col items-center">
                {/* Case Size - Fixed Height */}
                <div className="h-[100px] flex flex-col items-center justify-center">
                  <div className="h-[60px] flex items-center justify-center">
                    <Image
                      src="/watch/icons/series-10-case.png"
                      alt="Apple Watch Series 10 case sizes"
                      width={60}
                      height={60}
                      className="h-[56px] w-[41px]"
                    />
                  </div>
                  <h4 className="text-[12px] font-semibold text-center">
                    46mm or 42mm
                  </h4>
                  <p className="text-[12px] text-center">
                    aluminum or titanium case
                  </p>
                </div>

                {/* Display Features - Fixed Height */}
                <div className="h-[160px] flex flex-col items-center justify-start mt-8">
                  <div className="h-[60px] flex items-center justify-center">
                    <Image
                      src="/watch/icons/display-icon.png"
                      alt="Apple Watch display"
                      width={60}
                      height={60}
                      className="h-[56px] w-[35px]"
                    />
                  </div>
                  <div className="text-center text-sm space-y-1 mt-2">
                    <p>Always-On Retina display</p>
                    <p>Up to 2000 nits brightness</p>
                  </div>
                </div>

                {/* Chip - Fixed Height */}
                <div className="h-[100px] flex flex-col items-center justify-start mt-8">
                  <div className="h-[60px] flex items-center justify-center">
                    <div className="w-[48px] h-[48px] bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        S10
                      </span>
                    </div>
                  </div>
                  <p className="text-center text-sm mt-2">S10 SiP</p>
                  <p className="text-center text-sm">Double tap gesture</p>
                </div>

                {/* Additional Features */}
                <div className="h-[80px] flex flex-col items-center justify-center mt-8">
                  <p className="text-center text-sm">
                    Faster on-device Siri with health data access
                  </p>
                  <p className="text-center text-sm mt-2">
                    Precision Finding for iPhone<sup>12</sup>
                  </p>
                </div>

                {/* Health Features - Fixed Height */}
                <div className="h-[180px] flex flex-col items-center justify-start mt-8">
                  <div className="h-[60px] flex items-center justify-center">
                    <Image
                      src="/watch/icons/heart-icon.png"
                      alt="Heart rate features"
                      width={60}
                      height={60}
                      className="h-[56px] w-[40px]"
                    />
                  </div>
                  <div className="text-center text-sm space-y-1 mt-2">
                    <p>ECG app</p>
                    <p>High and low heart rate notifications</p>
                    <p>Irregular rhythm notifications</p>
                    <p>Low cardio fitness notifications</p>
                    <p>Sleep apnea notifications</p>
                  </div>
                </div>

                {/* Battery - Fixed Height */}
                <div className="h-[100px] flex flex-col items-center justify-start mt-8">
                  <div className="h-[60px] flex items-center justify-center">
                    <Image
                      src="/watch/icons/battery-icon.png"
                      alt="Battery life"
                      width={60}
                      height={60}
                      className="h-[56px] w-[46px]"
                    />
                  </div>
                  <p className="text-center text-sm mt-2">
                    Up to 18 hours of battery life
                  </p>
                  <p className="text-center text-sm">
                    Up to 36 hours in Low Power Mode
                  </p>
                </div>
              </div>

              {/* Ultra 2 Specs */}
              <div className="flex flex-col items-center">
                {/* Case Size - Fixed Height */}
                <div className="h-[100px] flex flex-col items-center justify-center">
                  <div className="h-[60px] flex items-center justify-center">
                    <Image
                      src="/watch/icons/ultra-2-case.png"
                      alt="Apple Watch Ultra 2 case"
                      width={60}
                      height={60}
                      className="h-[56px] w-[41px]"
                    />
                  </div>
                  <h4 className="text-[12px] font-semibold text-center">
                    49mm
                  </h4>
                  <p className="text-[12px] text-center">titanium case</p>
                </div>

                {/* Display Features - Fixed Height */}
                <div className="h-[160px] flex flex-col items-center justify-start mt-8">
                  <div className="h-[60px] flex items-center justify-center">
                    <Image
                      src="/watch/icons/display-icon.png"
                      alt="Apple Watch display"
                      width={60}
                      height={60}
                      className="h-[56px] w-[35px]"
                    />
                  </div>
                  <div className="text-center text-sm space-y-1 mt-2">
                    <p>Always-On Retina display</p>
                    <p>Up to 3000 nits brightness</p>
                    <p>Sapphire crystal</p>
                    <p>Flat front crystal</p>
                  </div>
                </div>

                {/* Chip - Fixed Height */}
                <div className="h-[100px] flex flex-col items-center justify-start mt-8">
                  <div className="h-[60px] flex items-center justify-center">
                    <div className="w-[48px] h-[48px] bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-medium">S9</span>
                    </div>
                  </div>
                  <p className="text-center text-sm mt-2">S9 SiP</p>
                  <p className="text-center text-sm">Double tap gesture</p>
                </div>

                {/* Additional Features */}
                <div className="h-[80px] flex flex-col items-center justify-center mt-8">
                  <p className="text-center text-sm">
                    Faster on-device Siri with health data access
                  </p>
                  <p className="text-center text-sm mt-2">
                    Precision Finding for iPhone<sup>12</sup>
                  </p>
                </div>

                {/* Health Features - Fixed Height */}
                <div className="h-[180px] flex flex-col items-center justify-start mt-8">
                  <div className="h-[60px] flex items-center justify-center">
                    <Image
                      src="/watch/icons/heart-icon.png"
                      alt="Heart rate features"
                      width={60}
                      height={60}
                      className="h-[56px] w-[40px]"
                    />
                  </div>
                  <div className="text-center text-sm space-y-1 mt-2">
                    <p>ECG app</p>
                    <p>High and low heart rate notifications</p>
                    <p>Irregular rhythm notifications</p>
                    <p>Low cardio fitness notifications</p>
                    <p>Sleep apnea notifications</p>
                    <p>Depth gauge and water temperature sensor</p>
                  </div>
                </div>

                {/* Battery - Fixed Height */}
                <div className="h-[100px] flex flex-col items-center justify-start mt-8">
                  <div className="h-[60px] flex items-center justify-center">
                    <Image
                      src="/watch/icons/battery-icon.png"
                      alt="Battery life"
                      width={60}
                      height={60}
                      className="h-[56px] w-[46px]"
                    />
                  </div>
                  <p className="text-center text-sm mt-2">
                    Up to 36 hours of battery life
                  </p>
                  <p className="text-center text-sm">
                    Up to 72 hours in Low Power Mode
                  </p>
                </div>
              </div>

              {/* SE Specs */}
              <div className="flex flex-col items-center">
                {/* Case Size - Fixed Height */}
                <div className="h-[100px] flex flex-col items-center justify-center">
                  <div className="h-[60px] flex items-center justify-center">
                    <Image
                      src="/watch/icons/se-case.png"
                      alt="Apple Watch SE case"
                      width={60}
                      height={60}
                      className="h-[56px] w-[41px]"
                    />
                  </div>
                  <h4 className="text-[12px] font-semibold text-center">
                    44mm or 40mm
                  </h4>
                  <p className="text-[12px] text-center">aluminum case</p>
                </div>

                {/* Display Features - Fixed Height */}
                <div className="h-[160px] flex flex-col items-center justify-start mt-8">
                  <div className="h-[60px] flex items-center justify-center">
                    <Image
                      src="/watch/icons/display-icon.png"
                      alt="Apple Watch display"
                      width={60}
                      height={60}
                      className="h-[56px] w-[35px]"
                    />
                  </div>
                  <div className="text-center text-sm space-y-1 mt-2">
                    <p>Retina display</p>
                    <p>Up to 1000 nits brightness</p>
                    <p>Ion-X glass</p>
                  </div>
                </div>

                {/* Chip - Fixed Height */}
                <div className="h-[100px] flex flex-col items-center justify-start mt-8">
                  <div className="h-[60px] flex items-center justify-center">
                    <div className="w-[48px] h-[48px] bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-medium">S8</span>
                    </div>
                  </div>
                  <p className="text-center text-sm mt-2">S8 SiP</p>
                  <p className="text-center text-sm">—</p>
                </div>

                {/* Additional Features */}
                <div className="h-[80px] flex flex-col items-center justify-center mt-8">
                  <p className="text-center text-sm">Siri</p>
                  <p className="text-center text-sm mt-2">Find iPhone</p>
                </div>

                {/* Health Features - Fixed Height */}
                <div className="h-[180px] flex flex-col items-center justify-start mt-8">
                  <div className="h-[60px] flex items-center justify-center">
                    <Image
                      src="/watch/icons/heart-icon.png"
                      alt="Heart rate features"
                      width={60}
                      height={60}
                      className="h-[56px] w-[40px]"
                    />
                  </div>
                  <div className="text-center text-sm space-y-1 mt-2">
                    <p>High and low heart rate notifications</p>
                    <p>Irregular rhythm notifications</p>
                    <p>Low cardio fitness notifications</p>
                  </div>
                </div>

                {/* Battery - Fixed Height */}
                <div className="h-[100px] flex flex-col items-center justify-start mt-8">
                  <div className="h-[60px] flex items-center justify-center">
                    <Image
                      src="/watch/icons/battery-icon.png"
                      alt="Battery life"
                      width={60}
                      height={60}
                      className="h-[56px] w-[46px]"
                    />
                  </div>
                  <p className="text-center text-sm mt-2">
                    Up to 18 hours of battery life
                  </p>
                  <p className="text-center text-sm">Low Power Mode</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BuyingBenefits
        title="Why Apple is the best place to buy Apple Watch."
        shopLinkText="Shop Apple Watch"
        shopLinkHref="/watch"
        benefits={watchBuyingBenefits}
      />
    </div>
  );
}
