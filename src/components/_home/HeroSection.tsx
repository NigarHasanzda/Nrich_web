"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] md:h-fit pt-16 md:pt-24 md:pb-20 flex flex-col items-center select-none overflow-hidden">

      {[
        { src: "/rocket.png", pos: "top-[15%] right-[10%] md:top-[19%] md:right-[22%]", rotate: "rotate-18", bg: "bg-[#FFF7ED]" },
        { src: "/degree.png", pos: "top-[10%] left-[8%] md:top-[12%] md:left-[17%]", rotate: "-rotate-19", bg: "bg-gray-100" },
        { src: "/attachment.svg", pos: "top-[25%] left-[12%] md:top-[30%] md:left-[23%]", rotate: "-rotate-[20deg]", bg: "bg-red-100" },
      ].map((icon, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className={`absolute ${icon.pos} ${icon.rotate} hidden sm:flex items-center justify-center w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] rounded-xl ${icon.bg} transition-transform hover:scale-110 duration-300 z-0`}
        >
          <Image src={icon.src} alt="icon" width={20} height={20} className="w-5 h-5 xl:w-6 xl:h-6" />
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto text-center px-6 relative z-10 flex flex-col items-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-[clamp(28px,8vw,72px)] font-semibold md:font-extrabold w-[85%] md:w-[100%] text-[#333] mb-4 md:mb-6 tracking-tighter leading-[1.05] ${quicksand.className}`}
        >
          Smart Sports Software
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[clamp(14px,4vw,30px)] w-[70%] md:w-[800px] font-normal text-[#111111] mb-4 md:mb-6 leading-snug"
        >
          Run your after-school & youth programs in one platform.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-500 text-[12px] sm:text-base md:text-lg mb-8 md:mb-10 max-w-2xl leading-relaxed"
        >
          Plan programs, schedule sessions, manage staff, message in real time, and trigger payouts — without spreadsheets.
          <br className="hidden md:block" />
          <span className="text-black font-semibold">
            Cut admin by up to 50% and reclaim 80 hours per month.
          </span>
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#2563EB] text-white px-8 md:px-10 h-[50px] md:h-[60px] rounded-full text-[12px] sm:text-[16px] md:text-[18px] font-semibold flex items-center justify-center gap-2 md:gap-3 shadow-xl shadow-blue-200/50 hover:bg-blue-700 transition-all active:scale-95"
        >
          Get Started <ArrowRightAltIcon />
        </motion.button>
      </div>


      <div className="mt-14 md:mt-20 relative w-full max-w-7xl flex justify-center items-end px-4 min-h-[300px] md:min-h-[400px]">

        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="absolute left-[9%] sm:left-[2%] md:left-[8%] bottom-[59%] md:bottom-[25%] w-[120px] sm:w-[250px] md:w-[350px] -rotate-9 lg:w-[400px] z-0"
        >
          <Image src="/Calendar.svg" alt="Calendar" width={400} height={220} className="object-contain w-full h-auto" />
        </motion.div>

    
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-20 w-[120px] sm:w-[200px] md:w-[280px] bottom-[170px] md:bottom-[30px] md:h-[450px] lg:w-[350px] xl:w-[380px] aspect-[0.85] bg-[#F7EFEB] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex items-end justify-center"
        >
          <Image src="/bear.svg" alt="Bear" width={280} height={340} className="object-contain" priority />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="absolute right-[9%] sm:right-[-2%] md:right-[9%] bottom-[59%] md:bottom-[30%] w-[120px] sm:w-[240px] md:w-[340px] lg:w-[380px] rotate-5 z-10"
        >
          <Image src="/Analitcy.png" alt="Analytics" width={420} height={220} className="object-contain w-full h-auto" />
        </motion.div>

      </div>
    </section>
  );
}