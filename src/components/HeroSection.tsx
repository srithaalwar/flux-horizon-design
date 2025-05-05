
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight reveal">
            Elevate Your Digital <span className="text-gradient">Presence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mx-auto max-w-2xl reveal">
            We create stunning digital experiences that transform your brand, engage your audience, and drive exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              number: "01",
              title: "Strategy",
              description: "We develop comprehensive strategies that align with your business goals and target audience.",
            },
            {
              number: "02",
              title: "Design",
              description: "Our creative team crafts beautiful, intuitive designs that elevate your brand identity.",
            },
            {
              number: "03",
              title: "Development",
              description: "We build high-performance digital solutions using the latest technologies and best practices.",
            },
          ].map((item, index) => (
            <div 
              key={index}
              className={`p-6 border border-border rounded-lg bg-card hover:shadow-md transition-all duration-300 reveal`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-sm font-semibold text-primary mb-2">
                {item.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/10 to-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
