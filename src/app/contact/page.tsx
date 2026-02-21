import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | Inhuman Gym",
  description: "Get in touch with Inhuman Gym for membership and training inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] selection:bg-[#CCFF00] selection:text-black">
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      {/* Map Placeholder or Visual Divider */}
      <div className="w-full h-64 bg-black flex items-center justify-center grayscale opacity-80 border-b border-black/20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop')" }}>
        <h2 className="text-[#CCFF00] text-xl font-black uppercase tracking-widest bg-black/80 px-8 py-4 -skew-x-12 backdrop-blur-sm shadow-xl">
          <div className="skew-x-12">COME VISIT US</div>
        </h2>
      </div>
      <Footer />
    </main>
  );
}
