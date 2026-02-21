export default function TeamSection() {
  const trainers = [
    { name: "ALEX", role: "STRENGTH & CONDITIONING", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop" },
    { name: "SARAH", role: "FUNCTIONAL FITNESS & NUTRITION", image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2938&auto=format&fit=crop" },
    { name: "MARK", role: "10+ YEARS EXPERIENCE", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2940&auto=format&fit=crop" },
  ];

  return (
    <section className="bg-[#1A1A1A] py-32 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-2 text-center">
          MEET OUR TRAINERS
        </h2>
        <div className="w-16 h-1.5 bg-[#CCFF00] mb-20 text-center mx-auto"></div>

        {/* Trainers Circular Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 md:gap-20">
          {trainers.map((trainer, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
              {/* Circular image with neon tracking border */}
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-2 border-2 border-[#CCFF00] mb-6 overflow-hidden">
                <div 
                  className="w-full h-full rounded-full bg-cover bg-center grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                  style={{ backgroundImage: `url('${trainer.image}')` }}
                />
              </div>
              
              <h3 className="text-white text-xl font-black uppercase tracking-widest">{trainer.name}</h3>
              <p className="text-[#CCFF00] font-black text-[10px] tracking-widest uppercase mt-2">{trainer.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
