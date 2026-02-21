export default function PhilosophySection() {
  return (
    <section id="philosophy" className="relative bg-white py-32 z-20 border-t-8 border-b-8 border-lime-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Grayscale Image */}
        <div className="relative aspect-square border-8 border-zinc-950 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale contrast-125"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop')" }}
          />
          {/* Stark overlay geometric block */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-lime-400 mix-blend-multiply opacity-50" />
          <div className="absolute bottom-4 right-4 bg-zinc-950 text-white font-anton text-2xl px-6 py-2 uppercase tracking-wider">
            Pain is Fuel
          </div>
        </div>

        {/* Right Side: Massive Typography */}
        <div className="flex flex-col items-start justify-center">
          <h2 className="font-anton text-zinc-950 text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight uppercase mb-8">
            We {"Don't"} Build Bodies.
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #09090b' }}>We Forge</span>
            <br />
            Machines.
          </h2>
          <div className="w-full h-1 bg-zinc-950 mb-8"></div>
          <p className="font-sans font-bold text-zinc-800 text-lg md:text-xl uppercase tracking-widest max-w-lg mb-8 leading-relaxed">
            Forget comfort. Forget easy. Our environment is designed to break the weak and temper the strong. If you want luxury, go somewhere else. If you want results, welcome to the iron asylum.
          </p>
          <button className="bg-zinc-950 text-white font-anton text-2xl uppercase tracking-widest px-10 py-4 border-4 border-zinc-950 hover:bg-white hover:text-zinc-950 transition-none rounded-none">
            Embrace The Grind
          </button>
        </div>
        
      </div>
    </section>
  );
}
