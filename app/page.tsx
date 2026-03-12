import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ModesSection from "@/components/Sections/Modes";
import DesignSection from "@/components/Sections/Design";
import TechnologySection from "@/components/Sections/Technology";
import PowerSection from "@/components/Sections/Power";
import HibernationSection from "@/components/Sections/Hibernation";
import SustainabilitySection from "@/components/Sections/Sustainability";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-[#000810] text-white min-h-[500vh]">
      <Navbar />
      <Hero />
      <ModesSection />
      <DesignSection />
      <TechnologySection />
      <PowerSection />
      <HibernationSection />
      <SustainabilitySection />
      <Footer />
    </main>
  );
}
