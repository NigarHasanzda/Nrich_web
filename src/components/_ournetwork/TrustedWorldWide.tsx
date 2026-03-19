"use client";
import React from "react";

export default function TrustedWorldwide() {
    const logos = [
        "/Nike.svg",
        "/Adidas.svg",
        "/Converse.svg",
        "/NB.svg",
        "/Puma.svg",
        "/Nike.svg",
        "/Adidas.svg",
    ];

    return (
        <section className="text-center py-10 md:py-16">

            <p className="text-blue-600 text-[12px] md:text-[14px] font-bold tracking-wide">
                OUR NETWORK
            </p>

            <h2 className="text-[28px] md:text-[48px] font-bold text-[#1A1C1E] mt-2 mb-4">
                Trusted worldwide
            </h2>

            <div className="w-[50px] md:w-[70px] h-[3px] bg-[#2563EB] mx-auto mb-[40px] md:mb-[60px]" />

            {/* Logos */}
            <div className="   flex flex-wrap    justify-center md:justify-between   items-center   gap-y-6 md:gap-y-0 gap-x-8 md:gap-x-0 opacity-80">
                {logos.map((logo, i) => (
                    <img
                        key={i}
                        src={logo}
                        className="w-[80px] md:w-[112px] object-contain"
                    />
                ))}
            </div>

        </section>
    );
}