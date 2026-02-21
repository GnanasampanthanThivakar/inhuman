export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Background Image of Dumbbell Rack */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-50 brightness-50"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2940&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent" />

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center mt-10">
        <h1 className="text-white text-5xl md:text-[5.5rem] font-black tracking-tight uppercase leading-[0.95] mb-6 drop-shadow-2xl shadow-black">
          UNLEASH YOUR<br/>
          <span className="text-[#CCFF00]">INNER BEAST</span>
        </h1>
        
        <p className="text-zinc-300 text-sm md:text-base font-medium max-w-lg leading-relaxed mb-10 drop-shadow-md">
          Transform your body and mind with InHuman Gym's cutting-edge training programs and exclusive facilities.
        </p>
        
        {/* Slanted Button */}
        <button className="bg-[#CCFF00] text-black font-black uppercase tracking-widest text-xs px-12 py-4 -skew-x-12 hover:bg-white transition-colors duration-300">
          <div className="skew-x-12">EXPLORE CLASSES</div>
        </button>
      </div>
    </section>
  );
}
