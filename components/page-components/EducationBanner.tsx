import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface EducationBannerProps {
  productType: string
  linkHref?: string
}

export default function EducationBanner({ productType, linkHref = "#" }: EducationBannerProps) {
  return (
    <div className="bg-white border-b border-gray-200 text-center py-3 text-sm">
      <p>
        Buy {productType} with education savings.
        <sup>2</sup>{" "}
        <Link href={linkHref} className="text-[#0066cc] hover:underline inline-flex items-center">
          Shop <ChevronRight className="w-3 h-3" />
        </Link>
      </p>
    </div>
  )
}
