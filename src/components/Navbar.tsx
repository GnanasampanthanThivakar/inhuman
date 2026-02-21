import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#1A1A1A] py-6 px-10 flex justify-between items-center fixed top-0 left-0 z-50">
      <Link href="/" className="flex items-center gap-3">
        <span className="font-black tracking-widest text-2xl uppercase">
          <span className="text-white">IN</span><span className="text-[#CCFF00]">HUMAN</span>
        </span>
      </Link>
      
      <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
        <Link href="/" className="hover:text-white transition-colors">HOME</Link>
        <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
        <Link href="/shop" className="hover:text-white transition-colors">SHOP</Link>
        <Link href="/contest" className="hover:text-white transition-colors">CONTEST</Link>
        <Link href="/contact" className="hover:text-white transition-colors">CONTACT</Link>
      </div>

      <div className="hidden md:flex gap-4">
        <button className="bg-white text-black font-black uppercase text-[10px] tracking-widest px-8 py-3 -skew-x-12 hover:bg-zinc-200 transition-colors">
          <div className="skew-x-12">JOIN NOW</div>
        </button>
        <button className="bg-[#CCFF00] text-black font-black uppercase text-[10px] tracking-widest px-8 py-3 -skew-x-12 hover:bg-white transition-colors">
          <div className="skew-x-12">LOGIN</div>
        </button>
      </div>
    </nav>
  );
}
