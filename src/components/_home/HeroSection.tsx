import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-white pt-20 pb-32 overflow-hidden flex flex-col items-center">
      {/* Background Floating Icons */}
      <div className="absolute top-20 left-[15%] opacity-60">
        <Image src="/Chart.svg" alt="icon" width={40} height={40} className="shadow-sm rounded-lg p-2 bg-white" />
      </div>
      <div className="absolute top-20 right-[15%] opacity-60">
        <Image src="/Chart.svg" alt="icon" width={40} height={40} className="shadow-sm rounded-lg p-2 bg-[red]" />
      </div>
      <div className="absolute top-1/2 left-[10%] -translate-y-full opacity-60">
        <Image src="/Chart.svg" alt="icon" width={40} height={40} className="shadow-sm rounded-lg p-2 bg-white" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center px-4 6xl flex-col flex align-center justify-center relative z-10">
        <h1 className="text-[72px] md:text-[72px] font-bold text-[#333] mb-6 tracking-tight">
          Smart Sports Software
        </h1>
        <h2 className="text-[30px] md:text-[30px] w-[660px] font-[400] text-[#111111] mb-6">
          Run your after-school & youth programs in one platform.
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Plan programs, schedule sessions, manage staff, message in real time, and trigger 
          payouts — without spreadsheets. <span className="text-black font-medium text-base">Cut admin by up to 50% and reclaim 80 hours per month.</span>
        </p>

        <button className="bg-[#2563EB] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-blue-700 transition-colors">
          Get Started 
          <span className="text-xl">→</span>
        </button>
      </div>

      {/* Visual Cards Container */}
      <div className="mt-16 relative w-full max-w-6xl h-[400px] flex justify-center items-end">
        
        {/* Calendar Card (Left) */}
        <div className="absolute left-[5%] -top-[95px] bottom-10 -rotate-6  rounded-[32px] p-6 flex items-center justify-center  z-0">
          <Image src="/Calendar.svg" alt="Calendar" width={400} height={220} className="object-contain" />
        </div>

        {/* Bear Image (Center) */}
        <div className="relative z-20 w-[320px] -top-[55px] h-[380px] bg-[#F7F3F0] rounded-[32px] overflow-hidden shadow-2xl flex items-end justify-center border-b-4 border-white">
          <Image src="/bear.svg" alt="Bear Character" width={280} height={340} className="object-contain" />
        </div>

        {/* Analytics Card (Right) */}
        <div className="absolute right-[1%] -top-[140px] rotate-6   rounded-[32px] p-6 flex items-center justify-center  z-10">
          <Image src="/Analitcy.png" alt="Analytics" width={420} height={220} className="object-contain" />
        </div>

      </div>
    </section>
  );
}