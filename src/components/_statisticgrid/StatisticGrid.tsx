"use client";
import React from "react";
import MovingIcon from "@mui/icons-material/Moving";

export default function StatisticsGrid() {
  return (
    <section id="#statistic" className="py-16 bg-white">
      <div className="w-[90%] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* ÜST SIRA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          
          {/* 1 */}
          <div className="md:col-span-4 bg-white rounded-[24px] p-6 md:p-8 border border-[#E9ECEF] shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col justify-center min-h-[260px] md:h-[300px]">
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#1A1C1E] leading-tight mb-4 md:mb-6">
              100,000+ <br /> Organizations
            </h2>
            <p className="text-[14px] md:text-[15px] leading-[22px] md:leading-[24px] text-[#6C757D]">
              Utilize at least 3-5 apps to run their business. NRICH's all-in-one
              solution provides your business the competitive advantage it needs
              to support your mission and community.
            </p>
          </div>

          {/* 2 IMAGE */}
          <div className="md:col-span-4 rounded-[24px] overflow-hidden min-h-[260px] md:h-[300px]">
            <img
              src="/statisticgrid.png"
              alt="statistics"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 3 */}
          <div className="md:col-span-4 bg-white rounded-[24px] p-6 md:p-8 border border-[#E9ECEF] shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col justify-between min-h-[260px] md:h-[300px]">
            <div className="flex items-start justify-between">
              <h3 className="text-[14px] md:text-[15px] font-bold text-[#1A1C1E] leading-snug max-w-[180px]">
                Growth: Administrative Efficiency.
              </h3>
              <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                <MovingIcon sx={{ fontSize: 16, color: "#1A1C1E" }} />
              </div>
            </div>

            <div>
              <span className="text-[56px] md:text-[72px] font-bold text-[#1A1C1E] leading-none tracking-tighter">
                80%
              </span>
              <p className="text-[13px] md:text-[14px] leading-[20px] text-[#6C757D] mt-4 md:mt-6">
                Automate 80% of your repetitive tasks today with plans to
                automate 90% by 2027.
              </p>
            </div>
          </div>
        </div>

        {/* ALT SIRA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 4 */}
          <div className="md:col-span-8 bg-white rounded-[24px] p-6 md:p-10 border border-[#E9ECEF] shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row gap-8 min-h-[320px] md:h-[350px]">
            
            <div className="flex flex-col justify-between shrink-0">
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#1A1C1E] leading-[34px] md:leading-[38px]">
                Student growth <br /> in every year <br /> with us.
              </h2>

              <div className="space-y-6 mt-6 lg:mt-0">
                <div className="grid grid-cols-5 gap-2 w-fit">
                  {[...Array(15)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-[#D1D5DB] rounded-full" />
                  ))}
                </div>

                <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center">
                  <MovingIcon sx={{ fontSize: 20, color: "#1D61E7" }} />
                </div>
              </div>
            </div>

            {/* CHART */}
            <div className="flex-1 flex items-end justify-between gap-2 md:gap-3 relative pt-12">
              <div className="absolute top-[58%] left-0 w-full border-t border-dashed border-[#3B82F6]" />

              {[
                { h: "20%", label: "1st" },
                { h: "35%", label: "2nd" },
                { h: "50%", label: "3rd" },
                { h: "65%", label: "4th" },
                { h: "85%", label: "5th", active: true },
                { h: "100%", label: "6th" },
              ].map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  
                  <div className="relative w-full flex items-end justify-center h-40 md:h-48">
                    
                    {bar.active && (
                      <span className="absolute -top-8 md:-top-10 text-[11px] md:text-[12px] bg-[#1D61E7] text-white px-2 py-1 rounded font-bold shadow-sm">
                        89%
                      </span>
                    )}

                    <div
                      className={`w-full max-w-[40px] md:max-w-[50px] ${
                        bar.active ? "bg-[#1D61E7]" : "bg-[#F1F3F5]"
                      } rounded-lg`}
                      style={{ height: bar.h }}
                    />
                  </div>

                  <span className="text-[11px] md:text-[12px] font-medium text-[#ADB5BD] mt-3 md:mt-4 uppercase">
                    {bar.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 5 */}
          <div className="md:col-span-4 bg-white rounded-[24px] p-6 md:p-10 border border-[#E9ECEF] shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col justify-center min-h-[260px] md:h-[350px]">
            <h2 className="text-[48px] md:text-[64px] font-bold text-[#1A1C1E] leading-none mb-4">
              80 hours
            </h2>
            <p className="text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] text-[#6C757D]">
              Every month, our unified platform gives you back two full work weeks
              to grow your mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}