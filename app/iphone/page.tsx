"use client";

import EducationBanner from "@/components/page-components/EducationBanner";
import ProductHero from "@/components/page-components/ProductHero";
import FeatureCards from "@/components/page-components/FeatureCards";
import ProductComparison from "@/components/page-components/ProductComparison";
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

// Comparison tabs and content
const iphoneComparisonTabs = [
  { id: "iphone16", label: "iPhone 16" },
  { id: "iphone15", label: "iPhone 15" },
  { id: "iphonese", label: "iPhone SE" },
];

// This is a simplified version - you would need to add all the product data
const iphoneComparisonContent = [
  {
    tabId: "iphone16",
    products: [
      {
        id: "iphone16-pro-max",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HQahJo8zTB2fkqA5jiIPzmwwhMybm5.png",
        imageAlt: "iPhone 16 Pro Max",
        colors: (
          <>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </>
        ),
        newLabel: true,
        title: "iPhone 16 Pro Max",
        subtitle: "A17 Pro chip",
        description: "The ultimate iPhone experience with the largest display.",
        price: "From $1199 or $49.95/mo. for 24 mo.",
        priceNote: "2",
        learnMoreLink: "#",
        buyLink: "#",
        specs: [
          {
            label: '6.9"',
            value: (
              <>
                Super Retina XDR display with ProMotion
                <br />
                and Always-On
              </>
            ),
            footnote: "3",
          },
          {
            label: "A17 Pro chip",
            value: "A17 Pro chip with 6-core GPU",
          },
          // Add more specs as needed
        ],
      },
      // Add more products as needed
    ],
  },
  // Add more tab contents as needed
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

      <ProductComparison
        title="Which iPhone is right for you?"
        tabs={iphoneComparisonTabs}
        tabContents={iphoneComparisonContent}
      />

      <BuyingBenefits
        title="Why Apple is the best place to buy iPhone."
        shopLinkText="Shop iPhone"
        shopLinkHref="/iphone"
        benefits={iphoneBuyingBenefits}
      />
    </div>
  );
}
