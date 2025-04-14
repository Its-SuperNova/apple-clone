import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function QuickLinks() {
  return (
    <div className="bg-[#f5f5f7] py-6">
      <div className="max-w-[1140px] mx-auto px-4">
        <h2 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">Quick Links</h2>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/store-finder"
            className="inline-flex items-center px-4 py-1.5 text-sm rounded-full border border-[#d2d2d7] bg-white text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white transition-colors"
          >
            Find a Store <ArrowUpRight className="ml-1 w-2.5 h-2.5" />
          </Link>
          <Link
            href="/order-status"
            className="inline-flex items-center px-4 py-1.5 text-sm rounded-full border border-[#d2d2d7] bg-white text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white transition-colors"
          >
            Order Status <ArrowUpRight className="ml-1 w-2.5 h-2.5" />
          </Link>
          <Link
            href="/shopping-help"
            className="inline-flex items-center px-4 py-1.5 text-sm rounded-full border border-[#d2d2d7] bg-white text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white transition-colors"
          >
            Shopping Help <ArrowUpRight className="ml-1 w-2.5 h-2.5" />
          </Link>
          <Link
            href="/returns"
            className="inline-flex items-center px-4 py-1.5 text-sm rounded-full border border-[#d2d2d7] bg-white text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white transition-colors"
          >
            Returns <ArrowUpRight className="ml-1 w-2.5 h-2.5" />
          </Link>
          <Link
            href="/your-saves"
            className="inline-flex items-center px-4 py-1.5 text-sm rounded-full border border-[#d2d2d7] bg-white text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white transition-colors"
          >
            Your Saves <ArrowUpRight className="ml-1 w-2.5 h-2.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
