
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const About = () => {
  useEffect(() => {
    document.title = "About Us | CompanyName";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about CompanyName's mission, values, team, and our journey to becoming a leading digital services provider.");
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow pt-24">
        <div className="container py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Us</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            We're a team of digital experts passionate about creating exceptional experiences.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At CompanyName, our mission is to empower businesses through innovative digital solutions that drive growth and create meaningful connections with their audience.
              </p>
              <p className="text-muted-foreground">
                We believe in combining technical excellence with creative thinking to deliver results that exceed expectations and help our clients stay ahead in a rapidly evolving digital landscape.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground mb-4">
                We envision a world where technology enhances human experiences and enables businesses of all sizes to thrive in the digital economy.
              </p>
              <p className="text-muted-foreground">
                Our goal is to be recognized as the premier digital partner for businesses seeking innovative, effective, and sustainable digital solutions that drive real-world results.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">We constantly explore new technologies and approaches to deliver cutting-edge solutions.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-muted-foreground">We maintain the highest standards in everything we do, from code to client communication.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-muted-foreground">We build relationships on trust, transparency, and honest communication.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-muted-foreground">We work closely with our clients as true partners in their digital journey.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Results</h3>
                <p className="text-muted-foreground">We focus on delivering measurable outcomes that drive real business value.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <p className="text-muted-foreground">We're committed to continuous learning and improvement for ourselves and our clients.</p>
              </div>
            </div>
          </div>
        </div>
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
