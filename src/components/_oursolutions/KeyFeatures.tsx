"use client";
import React from "react";
import FeatureCard from "../Cards/FeaturesCard";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function KeyFeatures() {
  const features = [
    {
      icon: "/calendar.png",
      title: "Automated Scheduling",
      description:
        "Eliminate scheduling conflicts automatically with our smart booking engine.",
    },
    {
      icon: "/message.png",
      title: "Real-time Messaging",
      description:
        "Keep parents and coaches connected with instant in-app communication.",
    },
    {
      icon: "/card.png",
      title: "Secure Payments",
      description:
        "Collect fees safely with integrated billing and automatic payment reminders.",
    },
    {
      icon: "/degree.png",
      title: "Performance Tracking",
      description:
        "Monitor student progress and attendance with visual data dashboards.",
    },
        {
      icon: "/person.png",
      title: "Secure Payments",
      description:
        "Collect fees safely with integrated billing and automatic payment reminders.",
    },
    {
      icon: "/minibooks.png",
      title: "Performance Tracking",
      description:
        "Monitor student progress and attendance with visual data dashboards.",
    },
  ];

  return (
    <section id="features" className={`py-12 md:py-16 text-center ${quicksand.className}`}>
      
      <h2 className="text-[28px] md:text-[48px] font-semibold mb-10 text-[#1A1C1E]">
        Key Features
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-9">
        {features.map((item, i) => (
          <FeatureCard key={i} {...item} />
        ))}
      </div>

    </section>
  );
}