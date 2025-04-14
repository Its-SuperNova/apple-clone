"use client";

import EducationBanner from "@/components/pages/EducationBanner";
import MacHero from "@/components/pages/VideoHero";
import styles from "./styles.module.css";
import FeatureCards from "@/components/pages/features";
import Lineup from "@/components/pages/lineup";
export default function MacPage() {
  return (
    <div className="pt-12">
      <EducationBanner />
      <MacHero />
      <FeatureCards />
      <Lineup />
    </div>
  );
}
