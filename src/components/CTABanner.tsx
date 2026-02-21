export default function CTABanner() {
  return (
    <section className="bg-[#CCFF00] py-24 px-6 flex flex-col items-center justify-center text-center">
      <h2 className="text-[#1A1A1A] text-3xl md:text-4xl font-black uppercase tracking-tight mb-10">
        READY TO TRANSFORM?
      </h2>
      <button className="bg-[#111] text-white font-black uppercase tracking-widest text-[11px] px-12 py-5 transform -skew-x-12 shadow-2xl hover:bg-white hover:text-black transition-colors duration-300">
        <div className="transform skew-x-12">JOIN INHUMAN GYM TODAY</div>
      </button>
    </section>
  );
}
