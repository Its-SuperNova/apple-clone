import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-xs">
      <div className="max-w-[980px] mx-auto px-4 py-12">
        <div className="border-b border-[#d2d2d7] pb-5">
          <p className="leading-[1.33337]">
            1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in
            device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade
            in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device
            purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device
            matching the description provided when estimate was made. Sales tax may be assessed on full value of a new
            device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving
            this information). Offer may not be available in all stores, and may vary between in-store and online
            trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to
            refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple's
            trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
          </p>
          <p className="mt-3 leading-[1.33337]">
            Apple Vision Pro has not been authorized as required by the rules of the Federal Communications Commission.
            This device is not, and may not be, offered for sale or lease, or sold or leased, until authorization is
            obtained.
          </p>
          <p className="mt-3 leading-[1.33337]">
            Apple TV+ is $9.99/month after free trial. One subscription per Family Sharing group. Offer good for 3
            months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other
            terms apply.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-5 border-b border-[#d2d2d7]">
          <div>
            <h3 className="font-semibold text-xs text-[#1d1d1f] mb-2">Shop and Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Store
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Mac
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  iPad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  iPhone
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Watch
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  AirPods
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  TV & Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  AirTag
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xs text-[#1d1d1f] mb-2">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Apple Music
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Apple TV+
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Apple Fitness+
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Apple News+
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Apple Arcade
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  iCloud
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Apple One
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Apple Card
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Apple Books
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Apple Podcasts
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  App Store
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xs text-[#1d1d1f] mb-2">Apple Store</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Find a Store
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Genius Bar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Today at Apple
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Apple Camp
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Apple Store App
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Certified Refurbished
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Apple Trade In
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Financing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Carrier Deals at Apple
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Order Status
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shopping Help
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xs text-[#1d1d1f] mb-2">For Business</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Apple and Business
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shop for Business
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-xs text-[#1d1d1f] mt-5 mb-2">For Education</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Apple and Education
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shop for K-12
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shop for College
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-xs text-[#1d1d1f] mt-5 mb-2">For Healthcare</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Apple in Healthcare
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Health on Apple Watch
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xs text-[#1d1d1f] mb-2">Apple Values</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Environment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Inclusion and Diversity
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Racial Equity and Justice
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Supplier Responsibility
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-xs text-[#1d1d1f] mt-5 mb-2">About Apple</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Apple Leadership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Career Opportunities
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Ethics & Compliance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact Apple
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-5 text-xs">
          <p className="mb-3">
            More ways to shop:{" "}
            <Link href="#" className="text-[#0066cc] hover:underline">
              Find an Apple Store
            </Link>{" "}
            or{" "}
            <Link href="#" className="text-[#0066cc] hover:underline">
              other retailer
            </Link>{" "}
            near you. Or call 1-800-MY-APPLE.
          </p>

          <div className="flex flex-col md:flex-row md:justify-between border-t border-[#d2d2d7] pt-5">
            <p>Copyright © 2023 Apple Inc. All rights reserved.</p>

            <ul className="flex flex-wrap gap-x-4 mt-2 md:mt-0">
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Sales and Refunds
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Site Map
                </Link>
              </li>
            </ul>

            <p className="mt-2 md:mt-0">United States</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
