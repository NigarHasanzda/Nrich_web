type ClubCardProps = {
  logo: string;
  name: string;
  league: string;
};

export default function ClubCard({ logo, name, league }: ClubCardProps) {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-[#F1F3F5] hover:shadow-md transition">
      
      <div className="w-[56px] h-[56px] rounded-full  flex items-center justify-center overflow-hidden">
        <img src={logo} alt={name} className="w-[56px] h-[56px] rounded-full " />
      </div>

      <div>
        <h4 className="font-bold text-[16px] text-[#1A1C1E]">{name}</h4>
        <p className="text-[14px] font-medium text-[#6C757D]">{league}</p>
      </div>
    </div>
  );
}