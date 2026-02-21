import Navbar from "@/components/Navbar";
import ShopHero from "@/components/ShopHero";
import ShopGrid from "@/components/ShopGrid";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Shop | Inhuman Gym",
  description: "Official Inhuman Gym merchandise, apparel, and supplements.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] selection:bg-[#CCFF00] selection:text-black">
      <Navbar />
      <ShopHero />
      <ShopGrid />
      <CTABanner />
      <Footer />
    </main>
  );
}
