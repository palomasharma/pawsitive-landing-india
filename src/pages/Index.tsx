
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import WhyHappyPawsSection from "@/components/WhyHappyPawsSection";
import FinalCallToActionSection from "@/components/FinalCallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header>
        {/* Minimal header for now, could add a simple nav later if needed */}
      </header>
      <main className="flex-grow">
        <HeroSection />
        <BenefitsSection />
        <WhyHappyPawsSection />
        <FinalCallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
