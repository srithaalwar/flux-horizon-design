import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function CTASection() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observerRef.current?.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg mb-8 text-white/90">
            Let's create something amazing together. Contact us to discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
