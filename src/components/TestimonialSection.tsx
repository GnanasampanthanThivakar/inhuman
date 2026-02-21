export default function TestimonialSection() {
  return (
    <section className="bg-[#111111] py-32 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20">
        
        {/* Slanted Image Container */}
        <div className="w-56 h-80 bg-white -skew-x-[12deg] overflow-hidden shrink-0 shadow-2xl flex items-center justify-center">
          <div className="w-full h-full skew-x-[12deg] scale-125">
             <img 
               src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop" 
               alt="Testimonial" 
               className="w-full h-full object-cover object-center grayscale contrast-125" 
             />
          </div>
        </div>
        
        <div className="flex flex-col gap-8 max-w-xl">
          <h3 className="text-white text-2xl md:text-3xl font-bold leading-snug tracking-tight">
            "InHuman didn't just change my body, it changed my mindset. I discovered a strength I never knew I had. This place is the real deal."
          </h3>
          <p className="text-[#CCFF00] font-black text-xs tracking-widest uppercase">
            - Jessica L.
          </p>
        </div>

      </div>
    </section>
  );
}
