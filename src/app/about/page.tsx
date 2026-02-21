import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import VisionSection from "@/components/VisionSection";
import FacilityShowcase from "@/components/FacilityShowcase";
import TeamSection from "@/components/TeamSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Inhuman Gym",
  description: "Learn about the philosophy and facility behind Inhuman Gym.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] selection:bg-[#CCFF00] selection:text-black">
      <Navbar />
      <AboutHero />
      <VisionSection />
      <FacilityShowcase />
      <TeamSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
