export default function WhyChooseUs() {
  const features = [
    { title: "Bespoke Equipment", desc: "Sourced from the world's finest artisans of fitness hardware." },
    { title: "Elite Master Trainers", desc: "Globally recognized experts devoted to your physique." },
    { title: "Curated Nutrition", desc: "Private culinary planning tailored to cellular optimization." },
    { title: "Absolute Privacy", desc: "A serene, distraction-free environment for deep focus." }
  ];

  return (
    <section className="bg-black py-32 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        
        {/* Left Side: Monochromatic Sculpture/High-End Visual */}
        <div className="relative h-[600px] flex justify-center items-center group">
          {/* Subtle elegant backdrop elements replacing the loud blob */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-[3/4] border border-[#C5A059]/30 z-0"></div>
          <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-[3/4] border border-white/10 z-0"></div>
          
          <div 
            className="absolute inset-0 m-12 bg-cover bg-center grayscale contrast-125 brightness-75 group-hover:grayscale-0 transition-all duration-1000 z-10"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2940&auto=format&fit=crop')" }}
          />
        </div>

        {/* Right Side: Editorial Content */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#C5A059]"></div>
            <span className="text-[#C5A059] font-medium tracking-[0.2em] text-[10px] uppercase">The Standard</span>
          </div>

          <h2 className="text-white text-4xl md:text-5xl font-light leading-[1.2] tracking-wide uppercase mb-8">
            Uncompromising
            <br />
            <span className="font-serif italic text-[#C5A059]">Excellence</span>.
          </h2>
          
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-12 font-light tracking-wide max-w-lg">
            We do not compromise on quality, atmosphere, or exclusivity. Inhuman represents the absolute zenith of physical culture, designed specifically for those accustomed to the finest things in life.
          </p>

          <div className="flex flex-col gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-6 border-b border-white/10 pb-6 group">
                 <span className="text-[#C5A059] font-serif italic text-sm mt-1">0{index + 1}</span>
                 <div>
                   <h4 className="text-white font-medium text-xs tracking-[0.2em] uppercase mb-2 group-hover:text-[#C5A059] transition-colors">{feature.title}</h4>
                   <p className="text-zinc-500 font-light text-xs tracking-wide">{feature.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
