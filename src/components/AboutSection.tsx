export default function AboutSection() {
  return (
    <section className="bg-[#1A1A1A] py-32 px-6 border-b border-black/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
        
        <div>
          <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">
            UNLEASH THE BEAST
          </h2>
          <div className="w-16 h-1.5 bg-[#CCFF00] mb-8"></div>
          
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg font-medium">
            At Inhuman Unisex Gym, we believe fitness is more than a routine—it’s a lifestyle. Our state-of-the-art facility in Vavuniya is designed to help you push past limits, build strength, and transform both body and mind. Step inside, feel the energy, and unleash the beast within you.
          </p>
        </div>

        {/* Slanted Image slightly overlapping */}
        <div className="relative w-full aspect-video md:aspect-[4/3] shadow-2xl overflow-hidden -skew-x-3 bg-black">
          <div className="w-full h-full skew-x-3 scale-110">
             <img 
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2938&auto=format&fit=crop" 
              alt="Gym Workout" 
              className="w-full h-full object-cover grayscale contrast-125 opacity-80" 
             />
          </div>
        </div>

      </div>
    </section>
  );
}
