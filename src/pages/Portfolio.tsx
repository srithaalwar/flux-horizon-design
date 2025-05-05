
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Our Portfolio | CompanyName";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Browse our portfolio of successful projects across web development, app development, branding, and digital marketing.");
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow pt-24">
        <div className="container py-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Portfolio</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their goals.
          </p>
        </div>
        <PortfolioSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
