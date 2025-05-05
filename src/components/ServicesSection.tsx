
import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ServicesSection() {
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

  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with cutting-edge technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
      link: "/services/web-development"
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional experiences on any device.",
      features: ["iOS & Android", "Intuitive UX", "Offline Capabilities"],
      link: "/services/app-development"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality to create delightful experiences.",
      features: ["User Research", "Wireframing", "Prototyping"],
      link: "/services/ui-ux-design"
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing solutions that increase visibility, drive traffic, and generate leads.",
      features: ["SEO", "Content Marketing", "Social Media"],
      link: "/services/digital-marketing"
    },
    {
      title: "Branding",
      description: "Comprehensive branding services that establish a strong, cohesive identity for your business.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
      link: "/services/branding"
    },
    {
      title: "Consulting",
      description: "Expert guidance on digital strategy, technology implementation, and business growth.",
      features: ["Tech Strategy", "Process Optimization", "Growth Planning"],
      link: "/services/consulting"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            Comprehensive digital solutions tailored to your specific needs and business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-border hover:shadow-lg transition-all duration-300 reveal hover-scale"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link to={service.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
