"use client";
import React from "react";
import FeatureCard from "../Cards/FeaturesCard";
import { Quicksand } from "next/font/google";


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function OurSolutions() {
  const solutions = [
    {
      icon: "/calendar.png",
      title: "Football Academies",
      description:
        "Manage tryouts, team rosters, and seasonal tournament scheduling with ease.",
    },
    {
      icon: "/person.png",
      title: "Tennis Clubs",
      description:
        "Optimize court bookings, private lesson scheduling, and club membership billing.",
    },
    {
      icon: "/kubok.png",
      title: "Swimming Schools",
      description:
        "Track level progression, certificate issuance, and lane availability in real-time.",
    },
  ];

  return (
    <section className="py-12 md:py-16 text-center">
      
      <h2 className={`text-[28px] md:text-[48px]  ${quicksand.className} font-semibold mb-10 text-[#1A1C1E]`}>
        Our Solutions
      </h2>

      <div className="grid md:grid-cols-3 gap-9">
        {solutions.map((item, i) => (
          <FeatureCard key={i} {...item} />
        ))}
      </div>

    </section>
  );
}