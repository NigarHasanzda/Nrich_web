"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import FadeInLeftWhenVisible from "@/FadeInWhenVisible/FadeInLeftWhenVisible";

export default function ContactInfo() {
  return (
    <FadeInLeftWhenVisible>
      <div className="bg-blue-600 h-auto md:min-h-[647px] w-full md:w-[599px] text-white rounded-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between">
        
        {/* TOP CONTENT */}
        <div>
          <h2 className="text-[24px] md:text-[30px] lg:text-[36px] font-semibold">
            Contact Us
          </h2>

          <div className="space-y-6 md:space-y-7 text-sm mt-8 md:mt-16 lg:mt-32">
            <div className="flex items-center gap-3">
              <Phone size={20} />
              <span className="text-[14px] md:text-[16px] lg:text-[18px]">
                050 000 00 00
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} />
              <span className="text-[14px] md:text-[16px] lg:text-[18px]">
                hello@example.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={20} />
              <span className="text-[14px] md:text-[16px] lg:text-[18px]">
                123 Samad street
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM (SOCIALS) */}
        <div className="mt-8 md:mt-12 lg:mt-0 flex flex-col gap-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-white text-blue-600 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
              f
            </div>
            <div className="w-8 h-8 md:w-9 md:h-9 bg-white text-blue-600 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
              ig
            </div>
            <div className="w-8 h-8 md:w-9 md:h-9 bg-white text-blue-600 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
              wa
            </div>
          </div>
        </div>

        {/* DECORATIVE CIRCLES */}
        <div className="absolute bottom-[-120px] md:bottom-[-150px] right-[-80px] md:right-[-120px] w-64 h-64 md:w-90 md:h-90 bg-white/10 rounded-full" />
        <div className="absolute bottom-[60px] md:bottom-[100px] right-[60px] md:right-[120px] w-24 h-24 md:w-36 md:h-36 bg-white/10 rounded-full" />
      </div>
    </FadeInLeftWhenVisible>
  );
}