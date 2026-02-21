"use client";
import { useState } from "react";

export default function ShopGrid() {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Inhuman 100% Whey Isolate",
      category: "SUPPLEMENTS",
      price: "LKR 13,500",
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=2940&auto=format&fit=crop",
      description: "25g premium protein per scoop. Rapid absorption for immediate post-workout recovery."
    },
    {
      id: 2,
      name: "The 'Founders' Heavyweight Tee",
      category: "APPAREL",
      price: "LKR 8,500",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2960&auto=format&fit=crop",
      description: "Oversized fit, acid-washed black. Built to withstand the most brutal training sessions."
    },
    {
      id: 3,
      name: "Tactical Sweat Towel",
      category: "ACCESSORIES",
      price: "LKR 4,500",
      image: "https://images.unsplash.com/photo-1616422285623-1311099b244d?q=80&w=2834&auto=format&fit=crop",
      description: "Ultra-absorbent microfiber with magnetic gym-clip. Leave no trace behind."
    }
  ];

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-[#1A1A1A] py-24 px-6 border-b border-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">
            THE DROP <span className="text-[#CCFF00]">VOL 1.</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#CCFF00] mx-auto"></div>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-lg">
            <input 
              type="text" 
              placeholder="Search gear, supplements..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#2A2A2A] border border-white/10 text-white font-medium px-6 py-4 focus:outline-none focus:border-[#CCFF00] transition-colors rounded-none italic"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#CCFF00" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-[#2A2A2A] border border-white/5 flex flex-col relative overflow-hidden shadow-2xl">
              {/* Product Image Container */}
              <div className="relative aspect-square w-full bg-black overflow-hidden border-b border-white/5">
                <div className="w-full h-full scale-105 group-hover:scale-110 transition-transform duration-700">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 border border-white/10">
                  <span className="text-[#CCFF00] font-black uppercase tracking-widest text-[9px]">{product.category}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="text-white font-black uppercase tracking-wide text-lg leading-tight">{product.name}</h3>
                  <span className="text-white font-black tracking-widest bg-[#111] px-2 py-1">{product.price}</span>
                </div>
                <p className="text-zinc-400 font-medium text-xs leading-relaxed mb-6">{product.description}</p>
                
                <div className="mt-auto">
                  <button className="w-full bg-[#111] border border-white/10 text-white font-black uppercase tracking-widest text-[10px] px-6 py-4 -skew-x-12 hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-all duration-300">
                    <div className="skew-x-12 flex justify-center items-center gap-2">
                      <span>ADD TO CART</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
