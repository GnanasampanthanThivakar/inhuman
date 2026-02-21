import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BMICalculator from "@/components/BMICalculator";
import TeamSection from "@/components/TeamSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#CCFF00] selection:text-black bg-[#1A1A1A]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BMICalculator />
      <TeamSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
