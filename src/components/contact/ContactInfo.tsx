import { Phone, Mail, MapPin } from "lucide-react";
export default function ContactInfo() {
  return (
    <div className="bg-blue-600 min-h-[647px] w-[599px] text-white rounded-2xl p-10 px-12 relative overflow-hidden flex flex-col">
      
      {/* TITLE */}
      <h2 className="text-[36px] font-semibold">Contact Us</h2>

      {/* CONTACT INFO */}
      <div className="space-y-7 text-sm mt-40">
        <div className="flex items-center gap-3">
          <Phone size={21} />
          <span className="text-[18px] text-[#FFFFFF]">050 000 00 00</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail size={21} />
          <span className="text-[18px] text-[#FFFFFF]">hello@example.com</span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin size={21} />
          <span className="text-[18px] text-[#FFFFFF]">123 Samad street</span>
        </div>
      </div>

      {/* SOCIALS */}
      <div className="flex gap-4 mt-35">
        <div className="w-9 h-9 bg-white text-blue-600 flex items-center justify-center rounded-full cursor-pointer">
          f
        </div>
        <div className="w-9 h-9 bg-white text-blue-600 flex items-center justify-center rounded-full cursor-pointer">
          ig
        </div>
        <div className="w-9 h-9 bg-white text-blue-600 flex items-center justify-center rounded-full cursor-pointer">
          wa
        </div>
      </div>

      {/* DECOR */}
      <div className="absolute bottom-[-150px] right-[-120px] w-90 h-90 bg-white/10 rounded-full" />
      <div className="absolute bottom-[100px] right-[120px] w-36 h-36 bg-white/10 rounded-full" />
    </div>
  );
}