"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import PromoBanner from "@/components/PromoBanner";
import StoreHero from "@/components/StoreHero";
import ProductCategories from "@/components/ProductCategories";
import LatestProducts from "@/components/LatestProducts";
import HelpServices from "@/components/HelpServices";
import StoreAdvantages from "@/components/StoreAdvantages";
import AppleExperience from "@/components/AppleExperience";
import QuickLinks from "@/components/QuickLink";

export default function Home() {
  // Initialize smooth scroll with useRef and useEffect
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    // Create the animation frame update function
    function raf(time: number) {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="pt-12">
      <PromoBanner />
      <StoreHero />
      <ProductCategories />
      <LatestProducts />
      <HelpServices />
      <StoreAdvantages />
      <AppleExperience />
      <QuickLinks />
    </div>
  );
}
