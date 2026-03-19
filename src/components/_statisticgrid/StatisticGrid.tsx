"use client";
import Image from "next/image";
import MovingIcon from "@mui/icons-material/Moving";

export default function StatisticsGrid() {
  return (
    <section className="py-24 ">
      <div className="w-[90%] mx-auto flex flex-col gap-8">

        {/* ROW 1: Custom width ilə (Learners, Image, Growth) */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 items-start">

          {/* 1: Learners */}
          <div className="w-[560px] h-[280px] bg-[#F8F9FA] rounded-[32px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] flex flex-col justify-center">
            <h2 className="text-[32px] leading-[40px] font-bold text-[#1A1C1E] mb-4">
              100K+ Learners Worldwide
            </h2>
            <p className="text-[16px] leading-[26px] text-[#6C757D]">
              Join thousands of happy students who are learning smarter, achieving more, and loving every step of their journey.
            </p>
          </div>

          {/* 2: Image */}
          <div
            className="w-[560px] h-[280px] rounded-2xl overflow-hidden bg-center bg-cover"
            style={{ backgroundImage: "url('/statisticgrid.png')" }}
          ></div>

          {/* 3: Growth */}
          <div className="w-[560px] h-[280px] bg-[#ffffff] rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[16px] font-semibold text-[#1A1C1E]">Growth</span>
              <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center">
                <MovingIcon sx={{ fontSize: 18 }} />
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="text-[64px] font-bold leading-none text-[#1A1C1E]">95%</h3>
              <p className="text-[14px] italic text-[#6C757D] mt-2">
                Student Satisfaction Rate
              </p>
            </div>
          </div>

        </div>
        {/* ROW 2: Custom width (Chart və Expert Courses) */}
        <div className="flex flex-wrap md:flex-nowrap gap-8">

          {/* 4: Chart Section - Geniş hissə */}
          <div className="w-full md:w-[68%] bg-[#F8F9FA] rounded-[32px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] flex flex-col lg:flex-row gap-12">
            <div className="flex flex-col justify-between shrink-0">
              <h2 className="text-[32px] leading-[40px] font-bold text-[#1A1C1E]">
                Student growth <br /> in every year <br /> with us.
              </h2>
              <div>
                <div className="grid grid-cols-5 gap-2 opacity-20 mb-6 w-fit">
                  {[...Array(15)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-black rounded-full" />
                  ))}
                </div>
                <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center">
                  <MovingIcon sx={{ fontSize: 18, color: "#1D61E7" }} />
                </div>
              </div>
            </div>

            {/* CHART DISPLAY */}
            <div className="flex-1 flex items-end gap-4 relative pt-10 min-h-[200px]">
              <div className="absolute top-[55%] w-full border-t border-dashed border-[#3B82F6] opacity-60" />
              {[
                { h: "22%" }, { h: "38%" }, { h: "58%" },
                { h: "72%" }, { h: "88%", active: true }, { h: "100%" },
              ].map((bar, i) => (
                <div key={i} className="flex flex-col items-center flex-1">
                  <div className="relative w-full flex items-end justify-center h-full">
                    {bar.active && (
                      <span className="absolute -top-8 text-[11px] bg-[#1D61E7] text-white px-2 py-1 rounded-md font-semibold whitespace-nowrap">
                        89%
                      </span>
                    )}
                    <div
                      className={`w-full max-w-[40px] ${bar.active ? "bg-[#1D61E7] rounded-[12px]" : "bg-[#E9ECEF] rounded-[10px]"
                        }`}
                      style={{ height: bar.h }}
                    />
                  </div>
                  <span className="text-[12px] text-[#ADB5BD] mt-4">
                    {["1st", "2nd", "3rd", "4th", "5th", "6th"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 5: Expert Courses - Dar hissə */}
          <div className="w-full md:w-[32%] bg-[#F8F9FA] rounded-[32px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] flex flex-col justify-center">
            <h2 className="text-[32px] font-bold leading-[40px] text-[#1A1C1E] mb-4">
              500+ Expert-Led Courses
            </h2>
            <p className="text-[16px] leading-[28px] text-[#6C757D]">
              Learn from industry-leading instructors across design, technology,
              business, and more.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}