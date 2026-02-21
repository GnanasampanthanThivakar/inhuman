"use client";

import { useState } from "react";

export default function ContestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="bg-[#1A1A1A] py-24 px-6 border-b border-black/20">
      <div className="max-w-4xl mx-auto bg-[#2A2A2A] p-8 md:p-12 shadow-2xl relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00] mix-blend-overlay opacity-10 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 mb-10 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">
            REGISTER <span className="text-[#CCFF00]">NOW</span>
          </h2>
          <p className="text-zinc-400 font-medium text-sm">Secure your spot in the next Inhuman Games. Spaces are extremely limited.</p>
        </div>

        {isSubmitted ? (
          <div className="relative z-10 text-center py-10">
            <h3 className="text-[#CCFF00] text-3xl font-black uppercase tracking-widest mb-4">REGISTRATION RECEIVED!</h3>
            <p className="text-zinc-300 font-medium max-w-lg mx-auto">We've got your details. Prepare yourself; our team will contact you shortly with the competition itinerary and ruleset.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 bg-transparent border-2 border-white text-white font-black uppercase tracking-widest text-[10px] px-8 py-3 -skew-x-12 hover:bg-white hover:text-black transition-colors duration-300"
            >
              <div className="skew-x-12">REGISTER ANOTHER ATHLETE</div>
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-white font-bold tracking-widest text-[10px] uppercase">Athlete Full Name</label>
                <input required type="text" className="bg-[#1A1A1A] border border-white/10 text-white font-medium px-4 py-3 focus:outline-none focus:border-[#CCFF00] transition-colors rounded-none" placeholder="JOHN DOE" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-white font-bold tracking-widest text-[10px] uppercase">Email Address</label>
                <input required type="email" className="bg-[#1A1A1A] border border-white/10 text-white font-medium px-4 py-3 focus:outline-none focus:border-[#CCFF00] transition-colors rounded-none" placeholder="JOHN@EXAMPLE.COM" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-white font-bold tracking-widest text-[10px] uppercase">Phone Number</label>
                <input required type="tel" className="bg-[#1A1A1A] border border-white/10 text-white font-medium px-4 py-3 focus:outline-none focus:border-[#CCFF00] transition-colors rounded-none" placeholder="077 XXXXXXXX" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white font-bold tracking-widest text-[10px] uppercase">Competition Category</label>
                <select required className="bg-[#1A1A1A] border border-white/10 text-zinc-300 font-medium px-4 py-3 focus:outline-none focus:border-[#CCFF00] transition-colors rounded-none appearance-none">
                  <option value="" disabled selected>Select Category</option>
                  <option value="powerlifting">Powerlifting (SBD)</option>
                  <option value="crossfit">CrossFit / Functional Fitness</option>
                  <option value="bodybuilding">Bodybuilding Showdown</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-white font-bold tracking-widest text-[10px] uppercase">Current Weight (KG)</label>
                <input required type="number" className="bg-[#1A1A1A] border border-white/10 text-white font-medium px-4 py-3 focus:outline-none focus:border-[#CCFF00] transition-colors rounded-none" placeholder="85" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white font-bold tracking-widest text-[10px] uppercase">T-Shirt Size</label>
                <select required className="bg-[#1A1A1A] border border-white/10 text-zinc-300 font-medium px-4 py-3 focus:outline-none focus:border-[#CCFF00] transition-colors rounded-none appearance-none">
                  <option value="" disabled selected>Select Size</option>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">X-Large</option>
                  <option value="XXL">XX-Large</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white font-bold tracking-widest text-[10px] uppercase">Emergency Contact Name & Phone</label>
              <input required type="text" className="bg-[#1A1A1A] border border-white/10 text-white font-medium px-4 py-3 focus:outline-none focus:border-[#CCFF00] transition-colors rounded-none" placeholder="JANE DOE - 077 XXXXXXXX" />
            </div>

            <button type="submit" className="bg-[#CCFF00] text-black font-black uppercase tracking-widest text-sm px-12 py-5 mt-6 -skew-x-12 hover:bg-white transition-colors duration-300 w-full shadow-lg">
              <div className="skew-x-12">CONFIRM REGISTRATION</div>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
