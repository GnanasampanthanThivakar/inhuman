export default function VisionSection() {
  return (
    <section className="bg-[#1A1A1A] py-24 px-6 border-b border-black/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Slanted Image Grid */}
        <div className="relative w-full aspect-square md:aspect-[4/5] shadow-2xl overflow-hidden -skew-x-[4deg] bg-black">
          <div className="w-full h-full skew-x-[4deg] scale-110">
             <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2940&auto=format&fit=crop" 
              alt="Heavy Deadlift" 
              className="w-full h-full object-cover grayscale contrast-125 opacity-80" 
             />
          </div>
          {/* Neon accent box */}
          <div className="absolute bottom-10 -right-10 w-40 h-40 bg-[#CCFF00] mix-blend-overlay opacity-30 blur-2xl"></div>
        </div>

        <div>
          <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">
            OUR VISION
          </h2>
          <div className="w-16 h-1.5 bg-[#CCFF00] mb-8"></div>
          
          <div className="flex flex-col gap-6 text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
            <p>
              At Inhuman Unisex Gym, we believe fitness is more than a routine—it’s a lifestyle. Our state-of-the-art facility is designed to help you push past limits, build strength, and transform both body and mind. 
            </p>
            <p>
              Whether you’re a beginner or a seasoned athlete, our certified trainers and supportive community are here to guide you every step of the way. Step inside, feel the energy, and unleash the beast within you. We offer:
            </p>
            <ul className="flex flex-col gap-3 mt-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#CCFF00] -skew-x-12 shrink-0"></div>
                <span className="text-white font-bold tracking-wide uppercase text-xs">Modern equipment & spacious workout zones</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#CCFF00] -skew-x-12 shrink-0"></div>
                <span className="text-white font-bold tracking-wide uppercase text-xs">Certified trainers for personal guidance</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#CCFF00] -skew-x-12 shrink-0"></div>
                <span className="text-white font-bold tracking-wide uppercase text-xs">Nutrition & supplement support (Inpay installments)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#CCFF00] -skew-x-12 shrink-0"></div>
                <span className="text-white font-bold tracking-wide uppercase text-xs">Motivating environment for both men & women</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#CCFF00] -skew-x-12 shrink-0"></div>
                <span className="text-white font-bold tracking-wide uppercase text-xs">Flexible membership plans tailored to your goals</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
