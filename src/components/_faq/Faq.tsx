"use client";
import { useState } from "react";

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet consectetur sit amet?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt diam elit rhoncus fames ac morbi. A id porttitor turpis nisl eget massa non.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur sit amet?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt diam elit rhoncus fames ac morbi.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur sit amet?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt diam elit rhoncus fames ac morbi.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur sit amet?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt diam elit rhoncus fames ac morbi.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur sit amet?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt diam elit rhoncus fames ac morbi.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 py-10">
      <div className="w-full max-w-[95%] md:max-w-[75%] bg-white rounded-[28px] md:rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] py-10 md:py-16 px-5 md:px-24">
        
        <div className="flex items-center justify-center mb-8 md:mb-12">
          <div className="bg-[#EEF4FF] flex items-center justify-center p-2 md:p-4 w-[110px] md:w-[132px] rounded-full">
            <span className="bg-[#1D61E7] w-[90px] md:w-[100px] h-[36px] md:h-[41px] flex items-center justify-center text-white rounded-full text-[14px] md:text-[16px] font-semibold tracking-wide">
              FAQ
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          {faqData.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`group cursor-pointer py-5 md:py-8 ${
                  index !== faqData.length - 1 ? "border-b border-[#F1F3F5]" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                <div className="flex justify-between items-start md:items-center gap-4">
                  <h3
                    className={`text-[15px] md:text-[18px] leading-snug font-semibold transition-colors duration-300 ${
                      isActive ? "text-[#1D61E7]" : "text-[#1A1C1E]"
                    }`}
                  >
                    {item.question}
                  </h3>

                  <div className="flex-shrink-0 mt-1 md:mt-0">
                    {isActive ? (
                      <span className="text-[#1D61E7] text-lg md:text-xl font-light">—</span>
                    ) : (
                      <span className="text-[#ADB5BD] text-xl md:text-2xl font-light group-hover:text-[#1D61E7] transition-colors">
                        +
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isActive ? "max-h-40 md:max-h-40 opacity-100 mt-3 md:mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#6C757D] text-[14px] md:text-[16px] leading-[1.8] md:leading-[1.9] max-w-full md:max-w-[60%] font-normal">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}