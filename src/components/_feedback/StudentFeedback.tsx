"use client";
import { Star, ArrowDown } from "lucide-react";
import FadeInRightWhenVisible from "../../FadeInWhenVisible/FadeInWhenVisible"
import FadeInLeftWhenVisible from "../../FadeInWhenVisible/FadeInLeftWhenVisible"
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function StudentFeedbackSection() {
  return (
    <section className=" py-10 md:py-28">
      <div className="w-[90%] max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center relative gap-10">




          <div className="absolute -left-1 md:left-[15%] -top-5 flex flex-col items-center transform -translate-x-1/2 md:translate-x-0 hidden md:flex">
            <div className="w-[4px] h-50 bg-gradient-to-b from-transparent via-gray-300 to-gray-800 mb-4" />
            <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-500">
              <ArrowDown size={16} strokeWidth={1.7} color="black" />
            </div>
          </div>


        <FadeInRightWhenVisible>
          <div className="bg-white rounded-[32px] shadow-[0px_20px_50px_rgba(0,0,0,0.04)] px-8 md:px-10 py-10 max-w-[660px] w-full md:ml-32 flex-shrink-0">


            <div className="flex items-center mb-5">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-[2px] border-white overflow-hidden bg-gray-200" >
                    <img src={`/StudentProfile.png`}
                      alt="student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}


                <div className="w-10 h-10 rounded-full bg-black text-white text-[10px] font-semibold flex items-center justify-center">
                  12k+
                </div>
              </div>
            </div>


            <p className={`text-[#8B909A] font-medium text-[14px] md:text-[18px] mb-3 ${quicksand.className}`}>
              Thousands of Happy students
            </p>


            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>

            <p className={`text-[#1A1C1E] text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] font-[400]  md:font-[500] ${quicksand.className}`}>
              Join thousands of happy students who are learning smarter,
              achieving more, and loving every step of their journey.
            </p>
          </div>
        </FadeInRightWhenVisible>
      </div>
    </section>
  );
}