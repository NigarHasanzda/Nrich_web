import { Quicksand } from "next/font/google";


type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-white  min-h-[232px]  rounded-[24px] py-8  px-10 text-left shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition">
      
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F1F3F5] mb-4">
        <img src={icon} alt={title} className="w-6 h-6 object-contain" />
      </div>

      <h3 className={`text-[18px] md:text-[22px] font-semibold mb-2 text-[#1A1C1E] ${quicksand.className}`}>
        {title}
      </h3>

      <p className={`text-[14px] md:text-[16px] text-[#6C757D] w-[80%] leading-[1.6] ${quicksand.className}`}>
        {description}
      </p>
    </div>
  );
}