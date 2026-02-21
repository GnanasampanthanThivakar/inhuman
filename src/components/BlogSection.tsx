export default function BlogSection() {
  const posts = [
    {
      title: "10 Essential Bodyweight Exercises",
      category: "FITNESS",
      date: "Oct 24, 2026",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2938&auto=format&fit=crop"
    },
    {
      title: "Nutrition Tips For Muscle Growth",
      category: "NUTRITION",
      date: "Oct 22, 2026",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop"
    },
    {
      title: "How To Stay Motivated All Year",
      category: "LIFESTYLE",
      date: "Oct 18, 2026",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-zinc-950 py-32 relative overflow-hidden border-t border-white/5 border-b border-b-white/5">
      
      {/* Background Faded Text Right Side */}
      <div className="absolute top-40 right-0 w-full overflow-hidden pointer-events-none flex justify-end z-0">
        <h2 className="text-[12vw] font-black tracking-tighter text-white whitespace-nowrap opacity-[0.03] select-none uppercase leading-none translate-x-[20%]">
          BLOG
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="bg-[#D4FF00] inline-block px-3 py-1 rounded-md font-bold text-black text-xs tracking-widest mb-4 uppercase">
              Our News
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-tight tracking-tight uppercase">
              Latest News & Articles
            </h2>
          </div>
          <button className="hidden md:inline-block bg-transparent text-white border-2 border-white/20 font-bold text-sm tracking-wide px-8 py-4 rounded-md hover:border-[#D4FF00] hover:text-[#D4FF00] transition-colors uppercase">
            View All Posts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-colors pb-6">
              <div 
                className="w-full aspect-[4/3] bg-cover bg-center mb-6 overflow-hidden relative"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
                <div className="absolute top-4 left-4 bg-[#D4FF00] px-3 py-1 rounded text-black text-xs font-bold tracking-widest uppercase">
                  {post.category}
                </div>
              </div>
              
              <div className="px-6">
                <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                  </svg>
                  {post.date}
                </div>
                
                <h3 className="text-white text-2xl font-black leading-snug uppercase group-hover:text-[#D4FF00] transition-colors">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
