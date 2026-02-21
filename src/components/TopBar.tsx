export default function TopBar() {
  return (
    <div className="bg-black border-b border-white/10 text-zinc-400 text-[10px] font-medium tracking-[0.2em] py-3 px-6 hidden md:flex justify-between items-center z-50 relative uppercase">
      <div className="flex gap-6 max-w-7xl mx-auto w-full justify-between items-center">
        <div className="flex gap-10">
          <span className="flex items-center gap-2 hover:text-[#C5A059] transition-colors cursor-pointer">
            SUPPORT@INHUMANWELLNESS.COM
          </span>
          <span className="flex items-center gap-2 hover:text-[#C5A059] transition-colors cursor-pointer">
            GET DIRECTIONS
          </span>
          <span className="flex items-center gap-2 hover:text-[#C5A059] transition-colors cursor-pointer">
            +1 (800) 123-4567
          </span>
        </div>
        <div className="flex gap-8 text-[#C5A059]">
           <span className="hover:text-white transition-colors cursor-pointer">INSTAGRAM</span>
           <span className="hover:text-white transition-colors cursor-pointer">VIMEO</span>
           <span className="hover:text-white transition-colors cursor-pointer">LINKEDIN</span>
        </div>
      </div>
    </div>
  );
}
