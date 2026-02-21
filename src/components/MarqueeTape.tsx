export default function MarqueeTape() {
  return (
    <div className="relative w-full overflow-hidden bg-lime-400 py-4 -skew-y-2 translate-y-8 z-30 border-y-4 border-zinc-950 shadow-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* We double the content to create a seamless infinite loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center justify-around w-full">
            <span className="text-zinc-950 font-anton text-4xl uppercase tracking-widest mx-4">
              NO SHORTCUTS
            </span>
            <span className="text-zinc-950 font-anton text-4xl uppercase mx-4">•</span>
            <span className="text-zinc-950 font-anton text-4xl uppercase tracking-widest mx-4">
              NO EXCUSES
            </span>
            <span className="text-zinc-950 font-anton text-4xl uppercase mx-4">•</span>
            <span className="text-zinc-950 font-anton text-4xl uppercase tracking-widest mx-4">
              JUST CONSISTENCY
            </span>
            <span className="text-zinc-950 font-anton text-4xl uppercase mx-4">•</span>
            <span className="text-zinc-950 font-anton text-4xl uppercase tracking-widest mx-4">
              NO SHORTCUTS
            </span>
            <span className="text-zinc-950 font-anton text-4xl uppercase mx-4">•</span>
            <span className="text-zinc-950 font-anton text-4xl uppercase tracking-widest mx-4">
              NO EXCUSES
            </span>
            <span className="text-zinc-950 font-anton text-4xl uppercase mx-4">•</span>
            <span className="text-zinc-950 font-anton text-4xl uppercase tracking-widest mx-4">
              JUST CONSISTENCY
            </span>
            <span className="text-zinc-950 font-anton text-4xl uppercase mx-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
