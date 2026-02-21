export default function ContestHero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 overflow-hidden">
      {/* Dark Grayscale Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-40 brightness-50"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438097545-a2c20c023d8c?q=80&w=2940&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center mt-10">
        <div className="bg-[#CCFF00] text-black font-black uppercase text-[10px] tracking-widest px-4 py-1 -skew-x-12 mb-6">
          <div className="skew-x-12">The Ultimate Challenge</div>
        </div>
        <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.95] mb-6 drop-shadow-2xl">
          INHUMAN <span className="text-[#CCFF00]">GAMES.</span>
        </h1>
        <p className="text-zinc-300 text-sm md:text-base font-medium max-w-2xl leading-relaxed drop-shadow-md">
          Step onto the competition floor. Test your strength, endurance, and mental fortitude against the best athletes in Vavuniya. Only the strongest survive.
        </p>
      </div>
    </section>
  );
}
