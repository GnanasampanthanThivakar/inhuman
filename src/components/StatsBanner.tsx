export default function StatsBanner() {
  const stats = [
    { value: "11K", label: "Elite Members" },
    { value: "06", label: "Years of Prestige" },
    { value: "21", label: "Master Coaches" }
  ];

  return (
    <section className="bg-black py-24 relative overflow-hidden border-t border-white/5">
      {/* Background Image / Overlay - Grayscale and darkened */}
       <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-30 grayscale"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/80 to-black" />

      <div className="relative z-20 max-w-6xl mx-auto px-6">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-12 lg:p-20 flex flex-col items-center">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-8 bg-[#C5A059]"></div>
            <span className="text-[#C5A059] font-medium tracking-[0.2em] text-[10px] uppercase">By The Numbers</span>
            <div className="h-[1px] w-8 bg-[#C5A059]"></div>
          </div>

          <h2 className="text-white text-3xl md:text-5xl font-light uppercase leading-tight text-center mb-16 tracking-widest max-w-3xl">
            A Legacy of <span className="font-serif italic text-[#C5A059]">Refined</span> Strength.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center py-6 md:py-0">
                <span className="text-5xl lg:text-7xl font-light text-white mb-6 font-serif">{stat.value}</span>
                <span className="text-zinc-500 text-[10px] font-medium uppercase tracking-[0.2em] text-center">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
