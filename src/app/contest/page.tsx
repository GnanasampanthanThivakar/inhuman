import Navbar from "@/components/Navbar";
import ContestHero from "@/components/ContestHero";
import ContestForm from "@/components/ContestForm";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contest Registration | Inhuman Gym",
  description: "Register for the upcoming Inhuman Games fitness competition.",
};

export default function ContestPage() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] selection:bg-[#CCFF00] selection:text-black">
      <Navbar />
      <ContestHero />
      <ContestForm />
      <CTABanner />
      <Footer />
    </main>
  );
}
