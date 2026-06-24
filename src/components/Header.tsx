import { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Calendar, Menu, X, CheckSquare } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Challenges", href: "#challenges" },
    { label: "Services", href: "#services" },
    { label: "Manifesto", href: "#why-me" },
    { label: "Engagements", href: "#engagement" }
  ];

  const handleLinkClick = (e: MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "py-4 bg-brand-dark/85 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LOGO */}
          <a 
            href="#" 
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex items-center gap-2.5 group"
          >

            <div>
              <span className="font-display font-black text-lg text-white tracking-tight leading-none uppercase block">
                REHAN JOE
              </span>
              <span className="font-mono text-[8px] text-brand-gold tracking-[0.25em] uppercase leading-none block mt-0.5">
                GROWTH ADVISOR
              </span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-mono text-xs text-zinc-400 hover:text-white uppercase tracking-widest transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={(e) => handleLinkClick(e, "#footer-cta")}
              className="cursor-pointer font-mono text-xs text-brand-gold hover:text-white border border-brand-gold/30 hover:border-brand-gold px-4 py-2 rounded-sm uppercase tracking-widest bg-brand-gold/5 hover:bg-brand-gold/15 transition-all duration-300"
            >
              Consultation
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-zinc-950 border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-mono text-sm text-zinc-300 hover:text-white uppercase tracking-widest py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              onClick={(e) => handleLinkClick(e, "#footer-cta")}
              className="w-full cursor-pointer font-mono text-xs text-center text-black bg-brand-gold py-3 rounded-sm uppercase tracking-widest font-bold"
            >
              Schedule Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
