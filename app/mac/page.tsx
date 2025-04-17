import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function MacPage() {
  return (
    <div className="pt-12">
      {/* Mac Hero */}
      <section className="apple-hero bg-[#fbfbfd] text-black pt-16">
        <h2 className="apple-hero-title">Mac</h2>
        <h3 className="apple-hero-subtitle">Powerful. Capable. Magical.</h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <Link href="#" className="text-[#0066cc] text-xl font-medium hover:underline">
              Explore All Mac
              <ChevronRight className="inline-block w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link href="#" className="text-[#0066cc] text-xl font-medium hover:underline">
              Compare Mac
              <ChevronRight className="inline-block w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link href="#" className="text-[#0066cc] text-xl font-medium hover:underline">
              Why Mac
              <ChevronRight className="inline-block w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8 w-full max-w-[1200px]">
          <Image
            src="/placeholder.svg?height=600&width=1200&query=Mac family lineup with multiple models"
            alt="Mac Family"
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* MacBook Pro Section */}
      <section className="apple-hero bg-black text-white py-20">
        <h2 className="apple-hero-title">MacBook Pro</h2>
        <h3 className="apple-hero-subtitle">Supercharged by M3, M3 Pro, or M3 Max.</h3>

        <p className="mt-3 text-xl">From $1599</p>

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
            src="/placeholder.svg?height=800&width=1200&query=MacBook Pro with M3 chip"
            alt="MacBook Pro"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* MacBook Air Section */}
      <section className="apple-hero bg-[#fbfbfd] text-black py-20">
        <h2 className="apple-hero-title">MacBook Air</h2>
        <h3 className="apple-hero-subtitle">Supercharged by M2.</h3>

        <p className="mt-3 text-xl">From $999</p>

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
            src="/placeholder.svg?height=800&width=1200&query=MacBook Air with M2 chip"
            alt="MacBook Air"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Compare Models */}
      <section className="py-20 px-4">
        <h2 className="text-center text-4xl font-semibold mb-16">Which Mac is right for you?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* MacBook Air */}
          <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=400&width=400&query=MacBook Air"
              alt="MacBook Air"
              width={400}
              height={400}
              className="h-[200px] w-auto object-contain"
            />
            <h3 className="text-2xl font-semibold mt-4">MacBook Air</h3>
            <p className="text-xl mt-1">M2 chip</p>
            <p className="mt-2">From $999</p>

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

          {/* MacBook Pro 14" */}
          <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=400&width=400&query=MacBook Pro 14 inch"
              alt="MacBook Pro 14-inch"
              width={400}
              height={400}
              className="h-[200px] w-auto object-contain"
            />
            <h3 className="text-2xl font-semibold mt-4">MacBook Pro 14"</h3>
            <p className="text-xl mt-1">M3, M3 Pro, or M3 Max chip</p>
            <p className="mt-2">From $1599</p>

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

          {/* MacBook Pro 16" */}
          <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=400&width=400&query=MacBook Pro 16 inch"
              alt="MacBook Pro 16-inch"
              width={400}
              height={400}
              className="h-[200px] w-auto object-contain"
            />
            <h3 className="text-2xl font-semibold mt-4">MacBook Pro 16"</h3>
            <p className="text-xl mt-1">M3 Pro or M3 Max chip</p>
            <p className="mt-2">From $2499</p>

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

          {/* iMac */}
          <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=400&width=400&query=iMac with M3 chip"
              alt="iMac"
              width={400}
              height={400}
              className="h-[200px] w-auto object-contain"
            />
            <h3 className="text-2xl font-semibold mt-4">iMac</h3>
            <p className="text-xl mt-1">M3 chip</p>
            <p className="mt-2">From $1299</p>

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
            Compare all Mac models
            <ChevronRight className="inline-block w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Mac Accessories */}
      <section className="bg-[#f5f5f7] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-semibold mb-12">Accessories for Mac</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=200&width=200&query=Magic Keyboard"
                alt="Magic Keyboard"
                width={200}
                height={200}
                className="mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Magic Keyboard</h3>
              <p className="mb-4">Wireless. Rechargeable. Remarkably comfortable.</p>
              <p className="font-semibold mb-2">$99</p>
              <Link href="#" className="text-[#0066cc] hover:underline">
                Buy
                <ChevronRight className="inline-block w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=200&width=200&query=Magic Mouse"
                alt="Magic Mouse"
                width={200}
                height={200}
                className="mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Magic Mouse</h3>
              <p className="mb-4">Wireless. Multi-Touch surface. Optimized for macOS.</p>
              <p className="font-semibold mb-2">$79</p>
              <Link href="#" className="text-[#0066cc] hover:underline">
                Buy
                <ChevronRight className="inline-block w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=200&width=200&query=Magic Trackpad"
                alt="Magic Trackpad"
                width={200}
                height={200}
                className="mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Magic Trackpad</h3>
              <p className="mb-4">Wireless. Force Touch. Optimized for macOS.</p>
              <p className="font-semibold mb-2">$129</p>
              <Link href="#" className="text-[#0066cc] hover:underline">
                Buy
                <ChevronRight className="inline-block w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="#" className="text-[#0066cc] text-xl hover:underline">
              Shop all Mac accessories
              <ChevronRight className="inline-block w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* macOS Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=600&query=macOS Sonoma interface"
                alt="macOS Sonoma"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-semibold mb-4">macOS Sonoma</h2>
              <p className="text-xl mb-6">
                macOS Sonoma brings a rich set of features that elevate the Mac experience. Stunning screen savers that
                become your desktop wallpaper. Widgets that live right on your desktop and work with your iPhone
                widgets. New video conferencing features that make you the center of attention. Safari with profiles and
                web apps. And so much more.
              </p>
              <Link href="#" className="text-[#0066cc] text-xl hover:underline">
                Learn more about macOS
                <ChevronRight className="inline-block w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
