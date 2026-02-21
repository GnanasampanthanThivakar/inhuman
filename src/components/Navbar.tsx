"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="w-full bg-[#1A1A1A] py-6 px-6 md:px-10 flex justify-between items-center fixed top-0 left-0 z-50 border-b border-black/20">
        <Link href="/" className="flex items-center gap-3 z-50" onClick={() => setIsOpen(false)}>
          <span className="font-black tracking-widest text-2xl uppercase">
            <span className="text-white">IN</span><span className="text-[#CCFF00]">HUMAN</span>
          </span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
          <Link href="/shop" className="hover:text-white transition-colors">SHOP</Link>
          <Link href="/contest" className="hover:text-white transition-colors">CONTEST</Link>
          <Link href="/contact" className="hover:text-white transition-colors">CONTACT</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="bg-white text-black font-black uppercase text-[10px] tracking-widest px-8 py-3 -skew-x-12 hover:bg-zinc-200 transition-colors">
            <div className="skew-x-12">JOIN NOW</div>
          </button>
          <button className="bg-[#CCFF00] text-black font-black uppercase text-[10px] tracking-widest px-8 py-3 -skew-x-12 hover:bg-white transition-colors">
            <div className="skew-x-12">LOGIN</div>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden z-50 text-white p-2 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#1A1A1A] flex flex-col items-center justify-center pt-20 pb-10 px-6 min-h-screen">
          <div className="flex flex-col items-center gap-10 text-white font-black tracking-widest text-xl uppercase mt-8">
            <Link href="/" onClick={toggleMenu} className="hover:text-[#CCFF00] transition-colors">HOME</Link>
            <Link href="/about" onClick={toggleMenu} className="hover:text-[#CCFF00] transition-colors">ABOUT</Link>
            <Link href="/shop" onClick={toggleMenu} className="hover:text-[#CCFF00] transition-colors">SHOP</Link>
            <Link href="/contest" onClick={toggleMenu} className="hover:text-[#CCFF00] transition-colors">CONTEST</Link>
            <Link href="/contact" onClick={toggleMenu} className="hover:text-[#CCFF00] transition-colors">CONTACT</Link>
          </div>
          
          <div className="flex flex-col w-full gap-4 mt-16 max-w-xs">
            <button className="w-full bg-white text-black font-black uppercase text-sm tracking-widest px-8 py-4 -skew-x-12 hover:bg-zinc-200 transition-colors">
              <div className="skew-x-12">JOIN NOW</div>
            </button>
            <button className="w-full bg-[#CCFF00] text-black font-black uppercase text-sm tracking-widest px-8 py-4 -skew-x-12 hover:bg-white transition-colors">
              <div className="skew-x-12">LOGIN</div>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
