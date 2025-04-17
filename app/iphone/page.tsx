import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function IPhonePage() {
  return (
    <div className="pt-12">
      {/* iPhone Hero */}
      <section className="apple-hero bg-[#fbfbfd] text-black pt-16">
        <h2 className="apple-hero-title">iPhone</h2>
        <h3 className="apple-hero-subtitle">Wonderful.</h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <Link href="#" className="text-[#0066cc] text-xl font-medium hover:underline">
              Explore All iPhone
              <ChevronRight className="inline-block w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link href="#" className="text-[#0066cc] text-xl font-medium hover:underline">
              Compare iPhone
              <ChevronRight className="inline-block w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link href="#" className="text-[#0066cc] text-xl font-medium hover:underline">
              Switch to iPhone
              <ChevronRight className="inline-block w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8 w-full max-w-[1200px]">
          <Image
            src="/placeholder.svg?height=600&width=1200&query=iPhone family lineup with multiple models"
            alt="iPhone Family"
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* iPhone 15 Pro Section */}
      <section className="apple-hero bg-black text-white py-20">
        <h2 className="apple-hero-title">iPhone 15 Pro</h2>
        <h3 className="apple-hero-subtitle">Titanium. So strong. So light. So Pro.</h3>

        <p className="mt-3 text-xl">From $999 or $41.62/mo. for 24 mo.</p>

        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="#"
            className="bg-[#0066cc] text-white px-5 py-3 rounded-full text-center min-w-[120px] hover:bg-[#0077ed] transition-colors"
          >
            Buy
          </Link>
          <Link href="#" className="text-[#0066cc] px-5 py-3 rounded-full text-center min-w-[120px] hover:underline">
            Learn more
            <ChevronRight className="inline-block w-4 h-4" />
          </Link>
        </div>

        <div className="mt-8 w-full max-w-[1200px]">
          <Image
            src="/placeholder.svg?height=800&width=1200&query=iPhone 15 Pro titanium finish with camera system closeup"
            alt="iPhone 15 Pro"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* iPhone 15 Section */}
      <section className="apple-hero bg-[#fbfbfd] text-black py-20">
        <h2 className="apple-hero-title">iPhone 15</h2>
        <h3 className="apple-hero-subtitle">New camera. New design. Newphoria.</h3>

        <p className="mt-3 text-xl">From $799 or $33.29/mo. for 24 mo.</p>

        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="#"
            className="bg-[#0066cc] text-white px-5 py-3 rounded-full text-center min-w-[120px] hover:bg-[#0077ed] transition-colors"
          >
            Buy
          </Link>
          <Link href="#" className="text-[#0066cc] px-5 py-3 rounded-full text-center min-w-[120px] hover:underline">
            Learn more
            <ChevronRight className="inline-block w-4 h-4" />
          </Link>
        </div>

        <div className="mt-8 w-full max-w-[1200px]">
          <Image
            src="/placeholder.svg?height=800&width=1200&query=iPhone 15 in multiple colors side view"
            alt="iPhone 15"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Compare Models */}
      <section className="py-20 px-4">
        <h2 className="text-center text-4xl font-semibold mb-16">Which iPhone is right for you?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* iPhone 15 Pro Max */}
          <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=400&width=200&query=iPhone 15 Pro Max"
              alt="iPhone 15 Pro Max"
              width={200}
              height={400}
              className="h-[300px] w-auto object-contain"
            />
            <div className="flex items-center justify-center mt-4">
              <div className="w-3 h-3 rounded-full bg-[#505050] mx-1"></div>
              <div className="w-3 h-3 rounded-full bg-[#f5f5f7] border border-gray-300 mx-1"></div>
              <div className="w-3 h-3 rounded-full bg-[#f1f2ed] mx-1"></div>
              <div className="w-3 h-3 rounded-full bg-[#3b3b3b] mx-1"></div>
            </div>
            <h3 className="text-2xl font-semibold mt-4">iPhone 15 Pro Max</h3>
            <p className="text-xl mt-1">The ultimate iPhone.</p>
            <p className="mt-2">From $1199</p>
            <p className="text-sm text-gray-500">or $49.95/mo. for 24 mo.</p>

            <Link
              href="#"
              className="bg-[#0066cc] text-white px-5 py-2 rounded-full text-center min-w-[120px] mt-4 hover:bg-[#0077ed] transition-colors"
            >
              Buy
            </Link>

            <Link href="#" className="text-[#0066cc] mt-3 hover:underline">
              Learn more
              <ChevronRight className="inline-block w-4 h-4" />
            </Link>
          </div>

          {/* iPhone 15 Pro */}
          <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=400&width=200&query=iPhone 15 Pro"
              alt="iPhone 15 Pro"
              width={200}
              height={400}
              className="h-[300px] w-auto object-contain"
            />
            <div className="flex items-center justify-center mt-4">
              <div className="w-3 h-3 rounded-full bg-[#505050] mx-1"></div>
              <div className="w-3 h-3 rounded-full bg-[#f5f5f7] border border-gray-300 mx-1"></div>
              <div className="w-3 h-3 rounded-full bg-[#f1f2ed] mx-1"></div>
              <div className="w-3 h-3 rounded-full bg-[#3b3b3b] mx-1"></div>
            </div>
            <h3 className="text-2xl font-semibold mt-4">iPhone 15 Pro</h3>
            <p className="text-xl mt-1">Pro. Beyond.</p>
            <p className="mt-2">From $999</p>
            <p className="text-sm text-gray-500">or $41.62/mo. for 24 mo.</p>

            <Link
              href="#"
              className="bg-[#0066cc] text-white px-5 py-2 rounded-full text-center min-w-[120px] mt-4 hover:bg-[#0077ed] transition-colors"
            >
              Buy
            </Link>

            <Link href="#" className="text-[#0066cc] mt-3 hover:underline">
              Learn more
              <ChevronRight className="inline-block w-4 h-4" />
            </Link>
          </div>

          {/* iPhone 15 Plus */}
          <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=400&width=200&query=iPhone 15 Plus"
              alt="iPhone 15 Plus"
              width={200}
              height={400}
              className="h-[300px] w-auto object-contain"
            />
            <div className="flex items-center justify-center mt-4">
              <div className="w-3 h-3 rounded-full bg-[#cee8e9] mx-1"></div>
              <div className="w-3 h-3 rounded-full bg-[#f4e8ce] mx-1"></div>
              <div className="w-3 h-3 rounded-full bg-[#f9e5d2] mx-1"></div>
              <div className="w-3 h-3 rounded-full bg-[#d2cdda] mx-1"></div>
              <div className="w-3 h-3 rounded-full bg-[#333333] mx-1"></div>
            </div>
            <h3 className="text-2xl font-semibold mt-4">iPhone 15 Plus</h3>
            <p className="text-xl mt-1">As amazing as ever.</p>
            <p className="mt-2">From $899</p>
            <p className="text-sm text-gray-500">or $37.45/mo. for 24 mo.</p>

            <Link
              href="#"
              className="bg-[#0066cc] text-white px-5 py-2 rounded-full text-center min-w-[120px] mt-4 hover:bg-[#0077ed] transition-colors"
            >
              Buy
            </Link>

            <Link href="#" className="text-[#0066cc] mt-3 hover:underline">
              Learn more
              <ChevronRight className="inline-block w-4 h-4" />
            </Link>
          </div>

          {/* iPhone 15 */}
          <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=400&width=200&query=iPhone 15"
              alt="iPhone 15"
              width={200}
              height={400}
              className="h-[300px] w-auto object-contain"
            />
            <div className="flex items-center justify-center mt-4">
              <div className="w-3 h-3 rounded-full bg-[#cee8e9] mx-1"></div>
              <div className="w-3 h-3 rounded-full bg-[#f4e8ce] mx-1"></div>
              <div className="w-3 h-3 rounded-full bg-[#f9e5d2] mx-1"></div>
              <div className="w-3 h-3 rounded-full bg-[#d2cdda] mx-1"></div>
              <div className="w-3 h-3 rounded-full bg-[#333333] mx-1"></div>
            </div>
            <h3 className="text-2xl font-semibold mt-4">iPhone 15</h3>
            <p className="text-xl mt-1">Newphoria.</p>
            <p className="mt-2">From $799</p>
            <p className="text-sm text-gray-500">or $33.29/mo. for 24 mo.</p>

            <Link
              href="#"
              className="bg-[#0066cc] text-white px-5 py-2 rounded-full text-center min-w-[120px] mt-4 hover:bg-[#0077ed] transition-colors"
            >
              Buy
            </Link>

            <Link href="#" className="text-[#0066cc] mt-3 hover:underline">
              Learn more
              <ChevronRight className="inline-block w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="#" className="text-[#0066cc] text-xl hover:underline">
            Compare all iPhone models
            <ChevronRight className="inline-block w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Ways to Buy Section */}
      <section className="bg-[#f5f5f7] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-4xl font-semibold mb-12">Ways to Buy iPhone</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              <Image
                src="/placeholder.svg?height=80&width=80&query=Apple Store icon"
                alt="Apple Store"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Buy directly from Apple</h3>
              <p className="mb-4">
                Get special carrier deals at Apple. Choose your carrier and save with special offers.
              </p>
              <Link href="#" className="text-[#0066cc] hover:underline">
                See all deals
                <ChevronRight className="inline-block w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <Image
                src="/placeholder.svg?height=80&width=80&query=Trade in icon"
                alt="Trade In"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Apple Trade In</h3>
              <p className="mb-4">Get credit toward a new iPhone when you trade in your eligible smartphone.</p>
              <Link href="#" className="text-[#0066cc] hover:underline">
                See what your device is worth
                <ChevronRight className="inline-block w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <Image
                src="/placeholder.svg?height=80&width=80&query=Financing icon"
                alt="Financing"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Pay monthly, interest-free</h3>
              <p className="mb-4">
                Pay over time, interest-free when you choose to check out with Apple Card Monthly Installments.
              </p>
              <Link href="#" className="text-[#0066cc] hover:underline">
                Learn more
                <ChevronRight className="inline-block w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
