"use client";

export default function ContactFormSection() {
  return (
    <section className="bg-[#1A1A1A] py-24 px-6 border-b border-black/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Contact Information Side */}
        <div className="flex flex-col">
          <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">
            CONTACT <span className="text-[#CCFF00]">US</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#CCFF00] mb-10"></div>
          
          <div className="flex flex-col gap-10 text-zinc-400 text-sm md:text-base font-medium">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 bg-[#2A2A2A] flex items-center justify-center -skew-x-12 border border-white/5 shadow-xl shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#CCFF00" className="w-5 h-5 skew-x-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-wider mb-1">Location</h4>
                <p>No-297, Pattanichoor<br/>Mannar Road, Vavuniya 43000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 bg-[#2A2A2A] flex items-center justify-center -skew-x-12 border border-white/5 shadow-xl shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#CCFF00" className="w-5 h-5 skew-x-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-wider mb-1">Email</h4>
                <p>join@inhumangym.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 bg-[#2A2A2A] flex items-center justify-center -skew-x-12 border border-white/5 shadow-xl shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#CCFF00" className="w-5 h-5 skew-x-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.21-.535a2.25 2.25 0 00-2.56.884l-1.15 1.5c-3.15-1.56-5.69-4.1-7.25-7.25l1.5-1.15a2.25 2.25 0 00.884-2.56l-.535-3.21C10.716 2.601 10.266 2.25 9.75 2.25h-1.372c-8.284 0-15 6.716-15 15z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-wider mb-1">Phone</h4>
                <p>077 077 3034</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex gap-4">
            <div className="w-10 h-10 bg-[#2A2A2A] hover:bg-[#CCFF00] hover:text-black transition-colors duration-300 flex items-center justify-center -skew-x-12 cursor-pointer border border-white/5">
              <span className="skew-x-12 font-black">IG</span>
            </div>
            <div className="w-10 h-10 bg-[#2A2A2A] hover:bg-[#CCFF00] hover:text-black transition-colors duration-300 flex items-center justify-center -skew-x-12 cursor-pointer border border-white/5">
              <span className="skew-x-12 font-black">FB</span>
            </div>
             <div className="w-10 h-10 bg-[#2A2A2A] hover:bg-[#CCFF00] hover:text-black transition-colors duration-300 flex items-center justify-center -skew-x-12 cursor-pointer border border-white/5">
              <span className="skew-x-12 font-black">X</span>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-[#2A2A2A] p-8 md:p-12 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00] mix-blend-overlay opacity-10 blur-3xl pointer-events-none"></div>
          <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-white font-bold tracking-widest text-[10px] uppercase">Your Name</label>
              <input type="text" className="bg-[#1A1A1A] border border-white/10 text-white font-medium px-4 py-3 focus:outline-none focus:border-[#CCFF00] transition-colors rounded-none" placeholder="JOHN DOE" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-white font-bold tracking-widest text-[10px] uppercase">Email Address</label>
              <input type="email" className="bg-[#1A1A1A] border border-white/10 text-white font-medium px-4 py-3 focus:outline-none focus:border-[#CCFF00] transition-colors rounded-none" placeholder="JOHN@EXAMPLE.COM" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white font-bold tracking-widest text-[10px] uppercase">Subject</label>
              <select className="bg-[#1A1A1A] border border-white/10 text-zinc-400 font-medium px-4 py-3 focus:outline-none focus:border-[#CCFF00] transition-colors rounded-none appearance-none">
                <option>Membership Inquiry</option>
                <option>Personal Training</option>
                <option>Drop-in Pass</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white font-bold tracking-widest text-[10px] uppercase">Message</label>
              <textarea rows={4} className="bg-[#1A1A1A] border border-white/10 text-white font-medium px-4 py-3 focus:outline-none focus:border-[#CCFF00] transition-colors rounded-none resize-none" placeholder="HOW CAN WE HELP YOU CRUSH YOUR GOALS?"></textarea>
            </div>

            <button type="submit" className="bg-[#CCFF00] text-black font-black uppercase tracking-widest text-xs px-12 py-4 mt-4 -skew-x-12 hover:bg-white transition-colors duration-300 w-max">
              <div className="skew-x-12">SEND MESSAGE</div>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
