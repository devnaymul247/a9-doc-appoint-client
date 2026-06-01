import Banner from "@/components/Banner";
import TopRattedDoc from "@/components/TopRattedDoc";
import WhatPatientSaySection from "@/components/WhatPatientSaySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      
      <Banner />
      <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
        <TopRattedDoc></TopRattedDoc>
      </Suspense>
      <WhyChooseSection></WhyChooseSection>
      <WhatPatientSaySection></WhatPatientSaySection>
    </div>
  );
}
