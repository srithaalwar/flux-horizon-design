
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-gradient"
        >
          CompanyName
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Portfolio
            </Link>
            <Link
              to="/testimonials"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Testimonials
            </Link>
            <Link
              to="/about"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="container h-full flex flex-col py-20">
          <nav className="flex flex-col space-y-6 text-xl">
            <Link
              to="/"
              className="text-foreground/80 hover:text-foreground transition-colors"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-foreground/80 hover:text-foreground transition-colors"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-foreground/80 hover:text-foreground transition-colors"
              onClick={toggleMobileMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/testimonials"
              className="text-foreground/80 hover:text-foreground transition-colors"
              onClick={toggleMobileMenu}
            >
              Testimonials
            </Link>
            <Link
              to="/about"
              className="text-foreground/80 hover:text-foreground transition-colors"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link to="/contact" onClick={toggleMobileMenu}>
              <Button className="w-full">Contact Us</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
