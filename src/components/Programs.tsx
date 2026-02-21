const programs = [
  {
    title: "Student Packages",
    description: "No mercy for the youth. Build your foundation here. Valid student ID required.",
    price: "$49/mo"
  },
  {
    title: "Personal Training",
    description: "One-on-one torture sessions. We find your breaking point and push past it.",
    price: "$99/session"
  },
  {
    title: "New Year Deal",
    description: "Annual commitment. No cancellations. You're in this for the long haul.",
    price: "$599/yr"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="bg-zinc-950 py-32 z-10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-anton text-white text-5xl md:text-7xl uppercase tracking-widest mb-16 text-center">
          Our <span className="text-lime-400">Programs</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t-2 border-l-2 border-lime-400">
          {programs.map((prog, index) => (
            <div 
              key={index} 
              className="group border-r-2 border-b-2 border-lime-400 p-12 transition-none hover:bg-lime-400 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <h3 className="font-anton text-white text-3xl md:text-4xl uppercase tracking-wider mb-6 group-hover:text-zinc-950 transition-none">
                  {prog.title}
                </h3>
                <p className="font-sans font-bold text-zinc-400 group-hover:text-zinc-800 text-lg uppercase tracking-widest leading-relaxed transition-none">
                  {prog.description}
                </p>
              </div>
              <div className="mt-8 flex items-end justify-between">
                <span className="font-anton text-lime-400 text-4xl group-hover:text-zinc-950 transition-none">
                  {prog.price}
                </span>
                <button className="w-12 h-12 border-2 border-lime-400 group-hover:border-zinc-950 flex items-center justify-center text-lime-400 group-hover:text-zinc-950 transition-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
