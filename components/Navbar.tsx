import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl md:text-3xl font-serif font-bold tracking-tighter text-brand-gold">
          AFE NDIA
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-brand-gold transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#location"
            className="px-6 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition-all duration-300 uppercase text-xs font-bold tracking-widest"
          >
            Find Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-6 animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-serif text-white hover:text-brand-gold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#location"
            className="w-full text-center py-3 bg-brand-gold text-black font-bold uppercase tracking-widest"
            onClick={() => setMobileMenuOpen(false)}
          >
            Visit Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;