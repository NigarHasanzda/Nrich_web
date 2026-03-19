"use client";
import React from "react";
import ClubCard from "../Cards/ClubCard";

export default function PartnerClubs() {
  const clubs = [
    {
      logo: "/Real.svg",
      name: "Real Madrid CF",
      league: "La Liga, Spain",
    },
    {
      logo: "/Manchester.svg",
      name: "Manchester City",
      league: "Premier League, UK",
    },
    {
      logo: "/Boyern.svg",
      name: "Bayern Munich",
      league: "Bundesliga, Germany",
    },
    {
      logo: "/JUventus.svg",
      name: "Juventus FC",
      league: "Serie A, Italy",
    },
    {
      logo: "/Chelsea.svg",
      name: "Chelsea FC",
      league: "Premier League, UK",
    },
    {
      logo: "/Liverpool.svg",
      name: "Liverpool FC",
      league: "Premier League, UK",
    },
  ];

  return (
    <section className="py-12">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-[20px] md:text-[22px] font-bold text-[#1A1C1E]">
          Partner Clubs
        </h3>

        <span className="text-[12px] md:text-[14px] font-bold bg-[#EEF4FF] text-[#1D61E7] px-3 py-1 rounded-full">
          500+ Organizations
        </span>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {clubs.map((club, i) => (
          <ClubCard key={i} {...club} />
        ))}
      </div>

    </section>
  );
}