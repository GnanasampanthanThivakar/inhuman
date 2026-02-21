export default function FacilityShowcase() {
  const images = [
    "https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop"
  ];

  return (
    <section className="bg-[#2A2A2A] py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-2 text-center">
          INSIDE THE FACILITY
        </h2>
        <div className="w-16 h-1.5 bg-[#CCFF00] mb-16 text-center mx-auto"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {images.map((src, i) => (
            <div key={i} className="group overflow-hidden bg-black -skew-x-6 relative aspect-square shadow-xl">
              <div className="w-full h-full skew-x-6 scale-125">
                 <img 
                  src={src} 
                  alt="Facility" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                 />
              </div>
              {/* Neon border effect on hover */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#CCFF00] transition-colors duration-500 z-10 pointer-events-none skew-x-6 scale-[1.1]"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
