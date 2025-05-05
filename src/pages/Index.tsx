
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  // Set page title and meta tags for SEO
  useEffect(() => {
    document.title = "CompanyName - Professional Digital Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "CompanyName provides professional web development, app development, UI/UX design, and digital marketing services for businesses of all sizes.");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        {/* Show condensed versions of each section on the homepage */}
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
