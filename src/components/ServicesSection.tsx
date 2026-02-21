export default function ServicesSection() {
  const classes = [
    {
      title: "HIT REVOLUTION",
      desc: "Experience the ultimate calorie-burning workout with our high-intensity interval training class.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop"
    },
    {
      title: "POWERLIFTING MASTERY",
      desc: "Build strength and power with expert guidance in our powerlifting mastery program.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2940&auto=format&fit=crop"
    },
    {
       title: "MINDFUL MOVEMENT",
       desc: "Find balance and flexibility with our mindful movement class, designed to enhance your well-being.",
       image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-[#2A2A2A] py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-2 text-center">
          FEATURED CLASSES
        </h2>
        <div className="w-16 h-1.5 bg-[#CCFF00] mb-20 text-center mx-auto"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {classes.map((c, i) => (
            <div key={i} className="flex flex-col items-start group">
              {/* Slanted Image Container */}
              <div className="w-full aspect-[4/3] bg-[#1A1A1A] overflow-hidden -skew-x-[10deg] mb-8 shadow-2xl">
                 <div className="w-full h-full skew-x-[10deg] scale-125">
                   <img 
                    src={c.image} 
                    alt={c.title} 
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                   />
                 </div>
              </div>

              <h3 className="text-white font-black uppercase text-sm tracking-wide mb-3">{c.title}</h3>
              <p className="text-zinc-400 text-[13px] leading-relaxed font-medium">{c.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
