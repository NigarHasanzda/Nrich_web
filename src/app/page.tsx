import HeroSection from "@/components/_home/HeroSection";
import ContactSection from "@/components/_contact/ContactSection";
import Image from "next/image";
import FAQSection from "@/components/_faq/Faq";
import OurWork from "@/components/_ournetwork/OurWork";
import OurSolutions from "@/components/_oursolutions/OurSolutions";
import OurSolutionKeyFeature from "@/components/_oursolutions/OurSolutionKeyFeature";
import AboutSection from "@/components/_aboutus/AboutUS";
import StatisticsGrid from "@/components/_statisticgrid/StatisticGrid";
import StudentFeedbackCard from "@/components/_feedback/StudentFeedback";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <StudentFeedbackCard/>
      <StatisticsGrid/>
      <AboutSection/>
      <OurSolutionKeyFeature/>
      {/* <OurWork/> */}
      <FAQSection/>
      <ContactSection/>
    </>
  );
}
