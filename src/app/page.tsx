import HeroSection from "@/components/_home/HeroSection";
import ContactSection from "@/components/_contact/ContactSection";
import Image from "next/image";
import FAQSection from "@/components/_faq/Faq";
import OurWork from "@/components/_ournetwork/OurWork";
import OurSolutions from "@/components/_oursolutions/OurSolutions";
import OurSolutionKeyFeature from "@/components/_oursolutions/OurSolutionKeyFeature";
import AboutSection from "@/components/_aboutus/AboutUS";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <OurSolutionKeyFeature/>
      <OurWork/>
      <FAQSection/>
      <ContactSection/>
    </>
  );
}
