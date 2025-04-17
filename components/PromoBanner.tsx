import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <div className="bg-[#f5f5f7] py-3 text-center">
      <p className="text-sm">
        Get up to 12 months of No Cost EMI¹ plus up to ₹8000.00 instant
        cashback⁴§ on selected products with eligible cards.{" "}
        <Link href="#" className="text-apple-blue hover:underline">
          See offers <ArrowUpRight className="inline-block w-3 h-3" />
        </Link>
      </p>
    </div>
  );
}
