import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] pt-20 pb-10 text-zinc-400 z-20 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        
        {/* Brand & About */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="inline-block">
            <span className="font-black tracking-widest text-2xl uppercase">
              <span className="text-white">IN</span><span className="text-[#CCFF00]">HUMAN</span>
            </span>
          </Link>
          <p className="text-sm font-medium leading-relaxed max-w-xs">
            Push past limits, build strength, and transform both body and mind. The ultimate training sanctuary in Vavuniya.
          </p>
        </div>

        {/* Quick Links (Sitemap) */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-black tracking-widest text-sm uppercase">Sitemap</h4>
          <div className="flex flex-col gap-3 font-bold tracking-widest text-[10px] uppercase">
            <Link href="/" className="hover:text-[#CCFF00] transition-colors w-max">Home</Link>
            <Link href="/about" className="hover:text-[#CCFF00] transition-colors w-max">About Us</Link>
            <Link href="/classes" className="hover:text-[#CCFF00] transition-colors w-max">Classes</Link>
            <Link href="/shop" className="hover:text-[#CCFF00] transition-colors w-max">Gear Shop</Link>
            <Link href="/contest" className="hover:text-[#CCFF00] transition-colors w-max">Inhuman Games</Link>
            <Link href="/contact" className="hover:text-[#CCFF00] transition-colors w-max">Contact</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-black tracking-widest text-sm uppercase">Contact</h4>
          <div className="flex flex-col gap-4 text-sm font-medium">
            <p>
              <strong className="text-white block mb-1 tracking-widest text-[10px] uppercase">Address</strong>
              No-297, Pattanichoor<br />Mannar Road, Vavuniya 43000
            </p>
            <p>
              <strong className="text-white block mb-1 tracking-widest text-[10px] uppercase">Phone</strong>
              077 077 3034
            </p>
            <p>
              <strong className="text-white block mb-1 tracking-widest text-[10px] uppercase">Email</strong>
              join@inhumangym.com
            </p>
          </div>
        </div>

        {/* Hours & Social */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-black tracking-widest text-sm uppercase">Hours</h4>
          <div className="flex flex-col gap-2 text-sm font-medium">
            <p className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-white">Mon - Sun</span>
              <span>Open - 11:00 PM</span>
            </p>
          </div>

          <h4 className="text-white font-black tracking-widest text-sm uppercase mt-4">Socials</h4>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 bg-[#2A2A2A] hover:bg-[#CCFF00] hover:text-black transition-colors duration-300 flex items-center justify-center -skew-x-12 border border-white/5">
              <span className="skew-x-12 font-black text-[10px]">IG</span>
            </a>
            <a href="#" className="w-8 h-8 bg-[#2A2A2A] hover:bg-[#CCFF00] hover:text-black transition-colors duration-300 flex items-center justify-center -skew-x-12 border border-white/5">
              <span className="skew-x-12 font-black text-[10px]">FB</span>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-zinc-600 text-[10px] tracking-widest uppercase font-bold">
          &copy; 2026 Inhuman Unisex Gym. All rights reserved.
        </p>
        <div className="flex gap-6 text-[10px] tracking-widest uppercase font-bold text-zinc-600">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
