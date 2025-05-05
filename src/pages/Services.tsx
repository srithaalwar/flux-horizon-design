
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";

const Services = () => {
  useEffect(() => {
    document.title = "Our Services | CompanyName";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore our comprehensive digital services including web development, app development, UI/UX design, and digital marketing solutions.");
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow pt-24">
        <div className="container py-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of digital solutions to help your business thrive in today's competitive market.
          </p>
        </div>
        <ServicesSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
