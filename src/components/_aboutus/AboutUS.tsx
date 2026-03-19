"use client";
import Image from "next/image";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SHARED_CONTENT = {
  title: "Powered by People.\nGuided by Purpose.",
  description:
    "With roots in sport ops and design-engineering work, we build fast, human tools that keep programs aligned, daily.",
};

const sections = [
  { tag: "Who We Are", image: "/Aboutimg1.png", imageLeft: true },
  { tag: "Our Mission", image: "/Aboutimg2.png", imageLeft: false },
  { tag: "Our Vision", image: "/Aboutimg3.png", imageLeft: true },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-[1240px] mx-auto">
        <h1 className={`text-[48px] md:text-[64px] font-bold text-center text-[#1A1C1E] mb-2 tracking-tight ${quicksand.className}`}>
          About Us
        </h1>
        <h3 className={`text-[18px] md:text-[30px] font-medium text-center text-[#1A1C1E] mb-26 tracking-tight ${quicksand.className}`}>
          Operators, Not Just Coders. 
        </h3>
        <div className="flex flex-col gap-4">
          {sections.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between gap-1 md:gap-24 ${
                item.imageLeft ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Şəkil */}
              <div className="flex-shrink-0 w-full max-w-[441px] md:w-[441px] h-auto md:h-[441px] rounded-[40px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.tag}
                  width={561}
                  height={461}
                  className="w-full h-auto md:h-[461px] object-cover block"
                  priority={index === 0}
                />
              </div>

              {/* Mətn */}
              <div className="w-full md:flex-1 flex flex-col items-start mt-8 md:mt-0">
                <span className="bg-[#EEF4FF] text-[#1D61E7] text-[13px] font-bold uppercase tracking-[0.1em] px-4 py-1.5 rounded-lg mb-8">
                  {item.tag}
                </span>

                <h2
                  className={`text-[26px] md:text-[42px] leading-[1.05] ${quicksand.className} font-semibold text-[#1A1C1E] mb-8 whitespace-pre-line tracking-tight`}
                >
                  {SHARED_CONTENT.title}
                </h2>

                <p className={`text-[#6C757D] text-[18px] md:text-[20px] leading-[1.6] max-w-[500px] ${quicksand.className} font-medium`}>
                  {SHARED_CONTENT.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}