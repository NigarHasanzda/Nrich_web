"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-white pt-16 md:pt-24 pb-20 flex flex-col items-center select-none overflow-hidden">
      
{[

  { 
    src: "/rocket.png", 
    pos: "top-[19%] right-[22%]", 
    rotate: "rotate-18",
    bg: "bg-[#FFF7ED]"
  },

  // LEFT TOP (degree)
  { 
    src: "/degree.png", 
    pos: "top-[15%] left-[22%]", 
    rotate: "-rotate-19",
    bg: "bg-gray-100"
  },

  // LEFT BOTTOM (attachment under degree)
  { 
    src: "/attachment.svg", 
    pos: "top-[38%] left-[28%]", 
    rotate: "-rotate-[20deg]",
    bg: "bg-red-100"
  },
].map((icon, i) => (
  <div 
    key={i} 
    className={`absolute ${icon.pos} ${icon.rotate} hidden md:flex items-center justify-center w-[50px] h-[50px] rounded-xl ${icon.bg} transition-transform hover:scale-110 duration-300`}
  >
    <Image 
      src={icon.src} 
      alt="icon" 
      width={24} 
      height={24} 
      className="drop-shadow-sm"
    />
  </div>
))}

      {/* Hero Text */}
      <div className="max-w-5xl mx-auto text-center px-6 relative z-10 flex flex-col items-center">
        <h1 className="text-[clamp(40px,8vw,72px)] font-extrabold text-[#333] mb-6 tracking-tighter leading-[1.05]">
          Smart Sports Software
        </h1>
        <h2 className="text-[clamp(20px,4vw,30px)] max-w-[700px] font-normal text-[#111111] mb-6 leading-snug">
          Run your after-school & youth programs in one platform.
        </h2>
        <p className="text-gray-500 text-base md:text-lg mb-10 max-w-2xl leading-relaxed">
          Plan programs, schedule sessions, manage staff, message in real time, and trigger payouts — without spreadsheets. <br className="hidden md:block" />
          <span className="text-black font-semibold">Cut admin by up to 50% and reclaim 80 hours per month.</span>
        </p>
        <button className="bg-[#2563EB] text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 shadow-xl shadow-blue-200/50 hover:bg-blue-700 transition-all">
          Get Started <span className="text-2xl">→</span>
        </button>
      </div>

      {/* Hero Images Area */}
      <div className="mt-20 relative w-full max-w-6xl flex justify-center items-end px-4 flex-wrap gap-6">
        {/* Calendar Card */}
        <div className="absolute left-[-5%] sm:left-[2%] md:left-[8%] bottom-[15%] w-[35%] max-w-[400px] z-0">
          <Image src="/Calendar.svg" alt="Calendar" width={400} height={220} className="object-contain drop-shadow-2xl" />
        </div>

        {/* Main Character */}
        <div className="relative z-20 w-[180px] sm:w-[260px] md:w-[320px] aspect-[0.85] bg-[#F7EFEB] rounded-[40px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex items-end justify-center border-b-8 border-white">
          <Image src="/bear.svg" alt="Bear Character" width={280} height={340} className="object-contain h-[90%]  w-auto" />
        </div>

        {/* Analytics Card */}
        <div className="absolute right-[-5%] sm:right-[2%] md:right-[5%] bottom-[25%] w-[38%] max-w-[420px] z-10">
          <Image src="/Analitcy.png" alt="Analytics" width={420} height={220} className="object-contain drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}