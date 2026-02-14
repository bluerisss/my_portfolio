import NetworkBackground from "@/components/NetworkBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ArchitectureShowcase from "@/components/ArchitectureShowcase";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechnicalDepth from "@/components/TechnicalDepth";
import BlogInsights from "@/components/BlogInsights";
import ContactSection from "@/components/ContactSection";
import BootSequence from "@/components/BootSequence";
import GeometricElements from "@/components/GeometricElements";

export default function Home() {
  return (
    <BootSequence>
      <div className="relative min-h-screen bg-background">
        <NetworkBackground />
        <GeometricElements />
        <Navigation />
        <main className="relative z-10">
          <HeroSection />
          <div className="glow-line" />
          <ArchitectureShowcase />
          <div className="glow-line" />
          <FeaturedProjects />
          <div className="glow-line" />
          <TechnicalDepth />
          <div className="glow-line" />
          <BlogInsights />
          <div className="glow-line" />
          <ContactSection />
        </main>
      </div>
    </BootSequence>
  );
}
