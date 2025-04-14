"use client";

import EducationBanner from "@/components/page-components/EducationBanner";
import ProductHero from "@/components/page-components/ProductHero";
import FeatureCards from "@/components/page-components/FeatureCards";
import ProductComparison from "@/components/page-components/ProductComparison";
import BuyingBenefits from "@/components/page-components/BuyingBenefits";
import ProductIntegration from "@/components/page-components/ProductIntegration";
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

// Feature cards data
const macFeatureCards = [
  {
    category: "Apple Intelligence and macOS",
    title: "Easy to use. Easy to love.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-KRQzctfqbMwZv4C4x4shNwFghjIhKh.jpeg",
    bgColor: "bg-gradient-to-br from-orange-200 to-blue-200",
    textColor: "text-black",
  },
  {
    category: "Performance and Battery Life",
    title: "Go fast. Go far.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-d8nTzryrCdfur0xydbhe7OTas841fb.jpeg",
    bgColor: "bg-[#000814]",
    textColor: "text-white",
  },
  {
    category: "Mac and iPhone",
    title: "Dream team.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-nOxVNRdS9vY6ujgzWWP65Zbbh4wd1L.jpeg",
    bgColor: "bg-[#f0f7f0]",
    textColor: "text-black",
  },
  {
    category: "Compatibility",
    title: "Mac runs your favorite apps.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-e3xvwGksoZKJYl4A73IZZN8W1XWxHg.jpeg",
    bgColor: "bg-[#a8d5f2]",
    textColor: "text-black",
  },
  {
    category: "Privacy and Security",
    title: "Your business is nobody else's.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-1UemmuWNMYUliaqP0EJGx8zFwVlHn3.jpeg",
    bgColor: "bg-gradient-to-b from-red-500 to-purple-500",
    textColor: "text-white",
  },
  {
    category: "Durability",
    title: "Built to stand the test of time.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-06Pdok8if8dnzydcwbuJs1nT6tPmI8.jpeg",
    bgColor: "bg-[#121212]",
    textColor: "text-white",
  },
  {
    category: "Apple Values",
    title: "Our values drive everything we do.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-kpgpENjDw1g7TFVfYCYJ59kj6Nyosx.jpeg",
    bgColor: "bg-gradient-to-b from-teal-400 to-blue-500",
    textColor: "text-white",
  },
];

// Buying benefits data
const macBuyingBenefits = [
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
      "Get credit toward your next Mac when you trade in an eligible device.",
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
    title: "Customize your Mac.",
    description: "Choose your chip, memory, storage, even color.",
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
    title: "Meet your new Mac with Personal Setup.",
    description:
      "Jump into online sessions with a Specialist to set up your Mac and discover new features.",
  },
  {
    icon: <ShoppingBag className="w-10 h-10" />,
    title: "Explore a shopping experience designed around you.",
    description: "Use the Apple Store app to get a more personal way to shop.",
  },
];

// Product integration data
const macIntegrationItems = [
  {
    id: "mac-iphone",
    title: "Mac and iPhone",
    content:
      "Answer calls or messages from your iPhone directly on your Mac. See and control what's on your iPhone from your Mac with iPhone Mirroring. Use Universal Clipboard to copy images, video, or text from your iPhone, then paste into another app on your nearby Mac. And thanks to iCloud, you can access your files from either your iPhone or your Mac. And so much more.",
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SnYYoiTCDODCh1WZxy0mMOsBkqqMRI.png",
    imageAlt: "Mac and iPhone integration showing Universal Clipboard",
  },
  {
    id: "mac-ipad",
    title: "Mac and iPad",
    content:
      "Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display, so you can work on one screen while you reference the other. You can even start a Final Cut Pro project on your iPad and continue it on your Mac.",
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wwiQScVF5Ht18VR0UWwKbIufKqGzuY.png",
    imageAlt: "Mac and iPad integration showing Sidecar feature",
  },
  {
    id: "mac-watch",
    title: "Mac and Apple Watch",
    content:
      "Automatically log in to your Mac when you're wearing your Apple Watch with Auto Unlock. No password typing required.",
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-y9fnX9De15yEoj8kgWBnGhB6wZ62bI.png",
    imageAlt: "Mac and Apple Watch integration showing Auto Unlock",
  },
];

// Comparison tabs and content
const macComparisonTabs = [
  { id: "laptops", label: "Laptops" },
  { id: "desktops", label: "Desktops" },
  { id: "displays", label: "Displays" },
];

// Complete Mac comparison content with all products
const macComparisonContent = [
  {
    tabId: "laptops",
    products: [
      {
        id: "macbook-air",
        image: "/mac/macbook-air.png",
        imageAlt: "MacBook Air 13 and 15 inch",
        colors: (
          <>
            <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
            <div className="w-4 h-4 rounded-full bg-gray-800 border border-gray-700"></div>
            <div className="w-4 h-4 rounded-full bg-blue-100 border border-blue-200"></div>
            <div className="w-4 h-4 rounded-full bg-amber-700 border border-amber-800"></div>
          </>
        ),
        newLabel: true,
        title: 'MacBook Air 13" and 15"',
        subtitle: "M3 chip",
        description:
          "Strikingly thin and fast so you can work, play, or create anywhere.",
        price: "From $999 or $83.25/mo. for 12 mo.",
        priceNote: "2",
        learnMoreLink: "#",
        buyLink: "#",
        specs: [
          {
            label: '13.6" or 15.3"',
            value: (
              <>
                Liquid Retina display with 500 nits of brightness
                <br />
                and support for 1 billion colors
              </>
            ),
            footnote: "3",
          },
          {
            label: "M3",
            value: "Apple M3 chip with 8-core CPU, 10-core GPU",
          },
          {
            label: "Up to 18 hours",
            value: "Battery life",
            footnote: "4",
          },
          {
            label: "1080p FaceTime HD camera",
            value: "With advanced image signal processor",
          },
          {
            label: "2.7 pounds",
            value: "For 13-inch model",
          },
        ],
      },
      {
        id: "macbook-pro",
        image: "/mac/macbook-pro.png",
        imageAlt: "MacBook Pro 14 and 16 inch",
        colors: (
          <>
            <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
            <div className="w-4 h-4 rounded-full bg-gray-800 border border-gray-700"></div>
          </>
        ),
        newLabel: true,
        title: 'MacBook Pro 14" and 16"',
        subtitle: "M3, M3 Pro, or M3 Max chip",
        description: "The most advanced Mac laptops for demanding workflows.",
        price: "From $1599 or $133.25/mo. for 12 mo.",
        priceNote: "2",
        learnMoreLink: "#",
        buyLink: "#",
        specs: [
          {
            label: '14.2" or 16.2"',
            value: (
              <>
                Liquid Retina XDR display with 1000 nits of brightness
                <br />
                and support for 1 billion colors
              </>
            ),
            footnote: "3",
          },
          {
            label: "M3",
            value: "Up to M3 Max chip with 16-core CPU, 40-core GPU",
          },
          {
            label: "Up to 22 hours",
            value: "Battery life",
            footnote: "4",
          },
          {
            label: "1080p FaceTime HD camera",
            value: "With advanced image signal processor",
          },
          {
            label: "3.4 or 4.7 pounds",
            value: "Depending on model",
          },
        ],
      },
    ],
  },
  {
    tabId: "desktops",
    products: [
      {
        id: "imac",
        image: "/mac/imac.png",
        imageAlt: "iMac 24-inch",
        colors: (
          <>
            <div className="w-4 h-4 rounded-full bg-blue-500 border border-blue-600"></div>
            <div className="w-4 h-4 rounded-full bg-green-500 border border-green-600"></div>
            <div className="w-4 h-4 rounded-full bg-pink-500 border border-pink-600"></div>
            <div className="w-4 h-4 rounded-full bg-purple-500 border border-purple-600"></div>
          </>
        ),
        newLabel: true,
        title: 'iMac 24"',
        subtitle: "M3 chip",
        description: "A colorful all-in-one desktop that transforms any space.",
        price: "From $1299 or $108.25/mo. for 12 mo.",
        priceNote: "2",
        learnMoreLink: "#",
        buyLink: "#",
        specs: [
          {
            label: '24"',
            value: (
              <>
                4.5K Retina display with 500 nits of brightness
                <br />
                and support for 1 billion colors
              </>
            ),
            footnote: "3",
          },
          {
            label: "M3",
            value: "Apple M3 chip with 8-core CPU, up to 10-core GPU",
          },
          {
            label: "1080p FaceTime HD camera",
            value: "With advanced image signal processor",
          },
          {
            label: "Six-speaker system",
            value: "With force-cancelling woofers",
          },
          {
            label: "Matching Magic Keyboard and Magic Mouse",
            value: "Or Magic Trackpad",
          },
        ],
      },
      {
        id: "mac-mini",
        image: "/mac/mac-mini.png",
        imageAlt: "Mac mini",
        colors: (
          <>
            <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
          </>
        ),
        newLabel: true,
        title: "Mac mini",
        subtitle: "M2 or M2 Pro chip",
        description: "Massive performance in a minimal footprint.",
        price: "From $599 or $49.91/mo. for 12 mo.",
        priceNote: "2",
        learnMoreLink: "#",
        buyLink: "#",
        specs: [
          {
            label: "M2",
            value: "Apple M2 or M2 Pro chip",
          },
          {
            label: "Up to 32GB",
            value: "Unified memory",
          },
          {
            label: "Up to 8TB",
            value: "SSD storage",
          },
          {
            label: "Thunderbolt 4 ports",
            value: "Up to four",
          },
          {
            label: "Support for up to 3 displays",
            value: "With M2 Pro chip",
          },
        ],
      },
      {
        id: "mac-studio",
        image: "/mac/mac-studio.png",
        imageAlt: "Mac Studio",
        colors: (
          <>
            <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
          </>
        ),
        newLabel: false,
        title: "Mac Studio",
        subtitle: "M2 Max or M2 Ultra chip",
        description: "Outrageous performance for pros.",
        price: "From $1999 or $166.58/mo. for 12 mo.",
        priceNote: "2",
        learnMoreLink: "#",
        buyLink: "#",
        specs: [
          {
            label: "M2 Max",
            value: "Up to M2 Ultra chip with 24-core CPU, 76-core GPU",
          },
          {
            label: "Up to 192GB",
            value: "Unified memory",
          },
          {
            label: "Up to 8TB",
            value: "SSD storage",
          },
          {
            label: "Up to 6 Thunderbolt 4 ports",
            value: "Plus HDMI, USB-A, and more",
          },
          {
            label: "Support for up to 8 displays",
            value: "With M2 Ultra chip",
          },
        ],
      },
      {
        id: "mac-pro",
        image: "/mac/mac-pro.png",
        imageAlt: "Mac Pro",
        colors: (
          <>
            <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
          </>
        ),
        newLabel: false,
        title: "Mac Pro",
        subtitle: "M2 Ultra chip",
        description: "The ultimate Mac for the most demanding workflows.",
        price: "From $6999 or $583.25/mo. for 12 mo.",
        priceNote: "2",
        learnMoreLink: "#",
        buyLink: "#",
        specs: [
          {
            label: "M2 Ultra",
            value: "Apple M2 Ultra chip with 24-core CPU, 76-core GPU",
          },
          {
            label: "Up to 192GB",
            value: "Unified memory",
          },
          {
            label: "Up to 8TB",
            value: "SSD storage",
          },
          {
            label: "7 PCIe expansion slots",
            value: "For maximum flexibility",
          },
          {
            label: "Support for up to 8 displays",
            value: "With M2 Ultra chip",
          },
        ],
      },
    ],
  },
  {
    tabId: "displays",
    products: [
      {
        id: "studio-display",
        image: "/mac/studio-display.png",
        imageAlt: "Studio Display",
        colors: (
          <>
            <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
          </>
        ),
        newLabel: false,
        title: "Studio Display",
        subtitle: "The perfect Mac companion",
        description:
          "A 27-inch 5K Retina display with an advanced camera and amazing audio.",
        price: "From $1599 or $133.25/mo. for 12 mo.",
        priceNote: "2",
        learnMoreLink: "#",
        buyLink: "#",
        specs: [
          {
            label: '27"',
            value: (
              <>
                5K Retina display with 600 nits of brightness
                <br />
                and support for 1 billion colors
              </>
            ),
            footnote: "3",
          },
          {
            label: "12MP Ultra Wide camera",
            value: "With Center Stage",
          },
          {
            label: "Six-speaker system",
            value: "With Spatial Audio",
          },
          {
            label: "Three-mic array",
            value: "Studio-quality",
          },
          {
            label: "One Thunderbolt 3 port",
            value: "Plus three USB-C ports",
          },
        ],
      },
      {
        id: "pro-display-xdr",
        image: "/mac/pro-display-xdr.png",
        imageAlt: "Pro Display XDR",
        colors: (
          <>
            <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400"></div>
          </>
        ),
        newLabel: false,
        title: "Pro Display XDR",
        subtitle: "Extreme Dynamic Range",
        description: "A 32-inch 6K Retina display with Extreme Dynamic Range.",
        price: "From $4999 or $416.58/mo. for 12 mo.",
        priceNote: "2",
        learnMoreLink: "#",
        buyLink: "#",
        specs: [
          {
            label: '32"',
            value: (
              <>
                6K Retina display with 1600 nits of peak brightness
                <br />
                and Extreme Dynamic Range
              </>
            ),
            footnote: "3",
          },
          {
            label: "1,000,000:1 contrast ratio",
            value: "For incredible image quality",
          },
          {
            label: "P3 wide color gamut",
            value: "With 10-bit color depth",
          },
          {
            label: "Reference modes",
            value: "For professional workflows",
          },
          {
            label: "Nano-texture glass option",
            value: "For reduced reflectivity",
          },
        ],
      },
    ],
  },
];

export default function MacPage() {
  return (
    <div className="pt-12">
      <EducationBanner productType="Mac" linkHref="#" />

      <ProductHero
        title="Mac"
        tagline="If you can dream it, Mac can do it."
        videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mac-SrzDkcjYz8LbrKHOX1zfMmpIrU8SL4.mp4"
      />

      <FeatureCards sectionTitle="Get to know Mac." cards={macFeatureCards} />

      <ProductComparison
        title="Explore the lineup."
        tabs={macComparisonTabs}
        tabContents={macComparisonContent}
      />

      <BuyingBenefits
        title="Why Apple is the best place to buy Mac."
        shopLinkText="Shop Mac"
        shopLinkHref="/mac"
        benefits={macBuyingBenefits}
      />

      <ProductIntegration
        title="Significant others."
        items={macIntegrationItems}
      />
    </div>
  );
}
