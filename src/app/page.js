import Banner from "@/components/Banner";
import WhatPatientSaySection from "@/components/WhatPatientSaySection";
import WhyChooseSection from "@/components/WhyChooseSection";

export default function Home() {
  return (
    <div>
      
      <Banner />
      <WhyChooseSection></WhyChooseSection>
      <WhatPatientSaySection></WhatPatientSaySection>
    </div>
  );
}
