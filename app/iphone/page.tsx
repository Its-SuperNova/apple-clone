"use client";

import EducationBanner from "@/components/page-components/EducationBanner";
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
import Image from "next/image";

// iPhone feature cards data based on the provided images
const iphoneFeatureCards = [
  {
    category: "Apple Intelligence",
    title: "AI-opening possibilities.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-g5kqVLDV0IAjCLXD7l7PQAWBA9qJ08.jpeg",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    category: "Cutting-Edge Camera",
    title: "Picture your best photos and videos.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-DaOrgBUeNiPulbCkvY9GG7wf69yimx.jpeg",
    bgColor: "bg-[#3b5998]",
    textColor: "text-white",
  },
  {
    category: "Chip and Battery Life",
    title: "Fast that lasts.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-zNqnZPYNqSMcjjReBmOxohyBOBRJ8p.jpeg",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    category: "Innovation",
    title: "Beautiful and durable, by design.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-gxr7YmLgHN13wkldnehFXKrv2Mdst4.jpeg",
    bgColor: "bg-[#f5f5f7]",
    textColor: "text-black",
  },
  {
    category: "Environment",
    title: "Recycle. Reuse. Repeat.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-IhWssy1bnRvfekHnTRydhDbZ2kYWkL.jpeg",
    bgColor: "bg-[#f5f5f7]",
    textColor: "text-black",
  },
  {
    category: "Privacy",
    title: "Your data. Just where you want it.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-YztYIJcnybbXdIEoSZ4FprKRIbf0kD.jpeg",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    category: "Customization",
    title: "Make it you. Through and through.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-OC3MZAh6W2b251aXq5iL4ih4dSGHsc.jpeg",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    category: "Peace of Mind",
    title: "Helpful features. On and off the grid.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.jpg-Ln52mkIPs8aD1To6Qf9DJ3La6JC41s.jpeg",
    bgColor: "bg-[#1a3c5b]",
    textColor: "text-white",
  },
];

// Buying benefits data
const iphoneBuyingBenefits = [
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
      "Get credit toward your next iPhone when you trade in an eligible device.",
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
    title: "Customize your iPhone.",
    description: "Choose your storage, color, and more.",
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
    title: "Meet your new iPhone with Personal Setup.",
    description:
      "Jump into online sessions with a Specialist to set up your iPhone and discover new features.",
  },
  {
    icon: <ShoppingBag className="w-10 h-10" />,
    title: "Explore a shopping experience designed around you.",
    description: "Use the Apple Store app to get a more personal way to shop.",
  },
];

// Update the iphoneProducts array to have consistent spec rows with minus symbols in the specified positions
// For rows with minus symbols, don't include an icon

const iphoneProducts = [
  {
    id: "iphone-16-pro",
    image: "/iphone/iphone-16-pro-gold.png",
    imageAlt: "iPhone 16 Pro",
    colors: (
      <>
        <div className="w-4 h-4 rounded-full bg-[#F9E5C9] border border-gray-300"></div>
        <div className="w-4 h-4 rounded-full bg-[#E3E4DF] border border-gray-300"></div>
        <div className="w-4 h-4 rounded-full bg-[#505355] border border-gray-300"></div>
        <div className="w-4 h-4 rounded-full bg-black border border-gray-300"></div>
      </>
    ),
    newLabel: true,
    title: "iPhone 16 Pro",
    subtitle: "The ultimate iPhone.",
    description:
      "Featuring the A18 Pro chip with 6-core GPU and Camera Control.",
    price: "From $999 or $41.62/mo. for 24 mo.",
    priceNote: "2",
    learnMoreLink: "#",
    buyLink: "#",
    specs: [
      {
        icon: "/iphone/icons/apple-intelligence.png",
        iconAlt: "Apple Intelligence",
        value: "Apple Intelligence",
        footnote: "1",
      },
      {
        icon: "/iphone/icons/a18-pro.png",
        iconAlt: "A18 Pro chip",
        value: "A18 Pro chip with 6-core GPU",
      },
      {
        icon: "/iphone/icons/camera-control.png",
        iconAlt: "Camera Control",
        value: "Camera Control",
      },
      {
        icon: "/iphone/icons/pro-camera.png",
        iconAlt: "Pro camera system",
        value: (
          <div className="space-y-3">
            <div>Pro camera system</div>
            <div>Our most advanced 48MP Fusion camera</div>
            <div>5× Telephoto camera</div>
            <div>48MP Ultra Wide camera</div>
            <div>Visual Intelligence to learn about your surroundings</div>
          </div>
        ),
      },
      {
        icon: "/iphone/icons/battery.png",
        iconAlt: "Battery",
        value: "Up to 33 hours video playback",
        footnote: "2",
      },
    ],
  },
  {
    id: "iphone-16",
    image: "/iphone/iphone-16-blue.png",
    imageAlt: "iPhone 16",
    colors: (
      <>
        <div className="w-4 h-4 rounded-full bg-[#7C95EA] border border-gray-300"></div>
        <div className="w-4 h-4 rounded-full bg-[#F9E5C9] border border-gray-300"></div>
        <div className="w-4 h-4 rounded-full bg-[#E3E4DF] border border-gray-300"></div>
        <div className="w-4 h-4 rounded-full bg-black border border-gray-300"></div>
      </>
    ),
    newLabel: true,
    title: "iPhone 16",
    subtitle: "A total powerhouse.",
    description: "Featuring the A18 chip with 5-core GPU and Camera Control.",
    price: "From $799 or $33.29/mo. for 24 mo.",
    priceNote: "2",
    learnMoreLink: "#",
    buyLink: "#",
    specs: [
      {
        icon: "/iphone/icons/apple-intelligence.png",
        iconAlt: "Apple Intelligence",
        value: "Apple Intelligence",
        footnote: "1",
      },
      {
        icon: "/iphone/icons/a18.png",
        iconAlt: "A18 chip",
        value: "A18 chip with 5-core GPU",
      },
      {
        icon: "/iphone/icons/camera-control.png",
        iconAlt: "Camera Control",
        value: "Camera Control",
      },
      {
        icon: "/iphone/icons/dual-camera.png",
        iconAlt: "Advanced dual-camera system",
        value: (
          <div className="space-y-3">
            <div>Advanced dual-camera system</div>
            <div>48MP Fusion camera</div>
            <div>2× Telephoto</div>
            <div>12MP Ultra Wide camera</div>
            <div>Visual Intelligence to learn about your surroundings</div>
          </div>
        ),
      },
      {
        icon: "/iphone/icons/battery.png",
        iconAlt: "Battery",
        value: "Up to 27 hours video playback",
        footnote: "2",
      },
    ],
  },
  {
    id: "iphone-se",
    image: "/iphone/iphone-se-white.png",
    imageAlt: "iPhone SE",
    colors: (
      <>
        <div className="w-4 h-4 rounded-full bg-black border border-gray-300"></div>
      </>
    ),
    newLabel: true,
    title: "iPhone SE",
    subtitle: "Latest iPhone. Greatest price.",
    description: "Featuring the A15 Bionic chip with 4-core GPU.",
    price: "From $599 or $24.95/mo. for 24 mo.",
    priceNote: "2",
    learnMoreLink: "#",
    buyLink: "#",
    specs: [
      {
        icon: "/iphone/icons/apple-intelligence.png",
        iconAlt: "Apple Intelligence",
        value: "Apple Intelligence",
        footnote: "1",
      },
      {
        icon: "/iphone/icons/a16.png",
        iconAlt: "A15 chip",
        value: "A15 chip with 4-core GPU",
      },
      {
        // No icon for Camera Control on iPhone SE
        value: "—",
      },
      {
        icon: "/iphone/icons/single-camera.png",
        iconAlt: "Single camera system",
        value: (
          <div className="space-y-3">
            <div>2-in-1 camera system</div>
            <div>48MP Fusion camera</div>
            <div>2× Telephoto</div>
            <div>—</div>
            <div>Visual Intelligence to learn about your surroundings</div>
          </div>
        ),
      },
      {
        icon: "/iphone/icons/battery.png",
        iconAlt: "Battery",
        value: "Up to 26 hours video playback",
        footnote: "2",
      },
    ],
  },
  {
    id: "iphone-15",
    image: "/iphone/iphone-15-pink.png",
    imageAlt: "iPhone 15",
    colors: (
      <>
        <div className="w-4 h-4 rounded-full bg-[#F9E5C9] border border-gray-300"></div>
        <div className="w-4 h-4 rounded-full bg-[#F8D3D8] border border-gray-300"></div>
        <div className="w-4 h-4 rounded-full bg-[#E3E4DF] border border-gray-300"></div>
        <div className="w-4 h-4 rounded-full bg-black border border-gray-300"></div>
      </>
    ),
    newLabel: false,
    title: "iPhone 15",
    subtitle: "As amazing as ever.",
    description: "Featuring the A16 Bionic chip with 5-core GPU.",
    price: "From $699 or $29.12/mo. for 24 mo.",
    priceNote: "2",
    learnMoreLink: "#",
    buyLink: "#",
    specs: [
      {
        // No icon for Apple Intelligence on iPhone 15
        value: "—",
      },
      {
        icon: "/iphone/icons/a16.png",
        iconAlt: "A16 Bionic chip",
        value: "A16 Bionic chip with 5-core GPU",
      },
      {
        // No icon for Camera Control on iPhone 15
        value: "—",
      },
      {
        icon: "/iphone/icons/advanced-dual-camera.png",
        iconAlt: "Dual-camera system",
        value: (
          <div className="space-y-3">
            <div>Dual-camera system</div>
            <div>48MP Main camera</div>
            <div>2× Telephoto</div>
            <div>Ultra Wide camera</div>
            <div>—</div>
          </div>
        ),
      },
      {
        icon: "/iphone/icons/battery.png",
        iconAlt: "Battery",
        value: "Up to 26 hours video playback",
        footnote: "2",
      },
    ],
  },
];

export default function IPhonePage() {
  return (
    <div className="pt-12">
      <EducationBanner productType="iPhone" linkHref="#" />

      <ProductHero
        title="iPhone"
        tagline="Designed to be loved."
        videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iphone-HUijDu3mWxxNn9YasA3SXSKSyp5m5t.mp4"
        backgroundColor="bg-white"
        taglineClassName="text-[28px] text-[#1d1d1f] leading-tight mt-4 md:mt-0 font-semibold"
      />

      <FeatureCards
        sectionTitle="Get to know iPhone."
        cards={iphoneFeatureCards}
        backgroundColor="bg-[#f5f5f7]"
      />

      <section className="py-20 bg-[#f5f5f7]">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-[48px] font-semibold text-[#1d1d1f] mb-16">
            Explore the lineup.
          </h2>

          <div className="relative">
            {/* Scrollable container */}
            <div className="flex overflow-x-auto pb-8 scrollbar-hide scroll-smooth -mx-6">
              <div className="pl-6 pr-12 flex">
                {iphoneProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 w-[372px] mr-6 first:ml-0 last:mr-0"
                  >
                    <div className="flex flex-col h-full">
                      {/* Product image - fixed height */}
                      <div className="relative w-full h-[300px] flex items-center justify-center">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.imageAlt}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      {/* Color options - fixed height */}
                      <div className="h-[40px] flex items-center justify-center">
                        <div className="flex space-x-2">{product.colors}</div>
                      </div>

                      {/* New label - fixed height */}
                      <div className="h-[24px] flex items-center justify-center">
                        {product.newLabel && (
                          <span className="text-[#f56300] text-sm font-medium">
                            New
                          </span>
                        )}
                      </div>

                      {/* Product title - fixed height */}
                      <div className="h-[36px] flex items-center justify-center">
                        <h3 className="text-2xl font-semibold">
                          {product.title}
                        </h3>
                      </div>

                      {/* Subtitle - fixed height */}
                      <div className="h-[24px] flex items-center justify-center">
                        <p className="text-sm text-gray-600">
                          {product.subtitle}
                        </p>
                      </div>

                      {/* Description - fixed height */}
                      <div className="h-[48px] flex items-center justify-center text-center px-4">
                        <p className="text-sm">{product.description}</p>
                      </div>

                      {/* Price - fixed height */}
                      <div className="h-[36px] flex items-center justify-center">
                        <p className="font-medium">
                          {product.price}
                          {product.priceNote && <sup>{product.priceNote}</sup>}
                        </p>
                      </div>

                      {/* Buttons - fixed height */}
                      <div className="h-[60px] flex items-center justify-center">
                        <div className="flex space-x-4">
                          <a
                            href={product.learnMoreLink || "#"}
                            className="bg-[#0066cc] text-white px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors"
                          >
                            Learn more
                          </a>
                          <a
                            href={product.buyLink || "#"}
                            className="text-[#0066cc] hover:underline flex items-center"
                          >
                            Buy <span className="ml-1">›</span>
                          </a>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-full border-t border-gray-300 my-6"></div>

                      {/* Specs - each with fixed height */}
                      <div className="w-full">
                        {product.specs.map((spec, specIndex) => (
                          <div key={specIndex} className="text-center mb-8">
                            <div className="h-[60px] flex items-center justify-center">
                              {spec.icon ? (
                                <div className="flex items-center justify-center w-[40px] h-[40px]">
                                  <Image
                                    src={spec.icon || "/placeholder.svg"}
                                    alt={spec.iconAlt || "Feature icon"}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                  />
                                </div>
                              ) : (
                                <div className="w-[40px] h-[40px] flex items-center justify-center">
                                  {/* Empty div with same dimensions as icons for consistent spacing */}
                                </div>
                              )}
                            </div>
                            <div className="min-h-[100px] flex items-start justify-center">
                              <div className="text-xs text-center w-full">
                                {spec.value}
                                {spec.footnote && <sup>{spec.footnote}</sup>}
                              </div>
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
        </div>

        {/* Custom scrollbar hide styles */}
        <style jsx global>{`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }

          /* Smooth scrolling for all browsers */
          .scroll-smooth {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
        `}</style>
      </section>

      <BuyingBenefits
        title="Why Apple is the best place to buy iPhone."
        shopLinkText="Shop iPhone"
        shopLinkHref="/iphone"
        benefits={iphoneBuyingBenefits}
      />
    </div>
  );
}
