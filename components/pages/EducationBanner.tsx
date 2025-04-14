import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function EducationBanner() {
  return (
    <div className="bg-white border-b border-gray-200 text-center py-3 text-sm">
      <p>
        Buy Mac with education savings.
        <sup>2</sup>{" "}
        <Link
          href="#"
          className="text-[#0066cc] hover:underline inline-flex items-center"
        >
          Shop <ChevronRight className="w-3 h-3" />
        </Link>
      </p>
    </div>
  );
}
