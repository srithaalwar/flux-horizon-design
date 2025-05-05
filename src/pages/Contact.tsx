
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | CompanyName";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get in touch with CompanyName for inquiries about our services, partnership opportunities, or to discuss your next project.");
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow pt-24">
        <div className="container py-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Get in touch with our team to see how we can help you achieve your goals.
          </p>
        </div>
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
