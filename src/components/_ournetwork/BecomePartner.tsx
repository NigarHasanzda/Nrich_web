export default function BecomePartner() {
  return (
    <section className="mt-8 md:mt-12">
      <div className="relative 
        min-h-[220px] md:h-[272px] 
        bg-[#2F66D0] text-white 
        rounded-[20px] md:rounded-2xl 
        px-6 py-8 md:p-10 
        flex flex-col md:flex-row 
        justify-between items-start md:items-center 
        gap-6 md:gap-0 
        overflow-hidden"
      >
        {/* Text */}
        <div className="max-w-full  md:max-w-[30%]">
          <h2 className="text-[22px] md:text-[30px]   leading-snug font-bold mb-3">
            Ready to take your club to the next level?
          </h2>

          <p className="text-[14px] md:text-[16px] font-medium opacity-80">
            Join over 500 sports organizations using our software suite to optimize player performance.
          </p>
        </div>

        {/* Button */}
        <button className="bg-white text-[#2F66D0] 
          w-full md:w-[225px] 
          h-[44px] md:h-[48px] 
          text-[14px] md:text-[16px] 
          font-bold rounded-full 
          hover:scale-105 transition"
        >
          Become a Partner →
        </button>

        {/* Background circle */}
        <div className="absolute 
          right-[-40px] top-[-40px] 
          md:right-[-50px] md:top-[-50px] 
          w-32 h-32 md:w-48 md:h-48 
          bg-white opacity-10 rounded-full"
        />
      </div>
    </section>
  );
}