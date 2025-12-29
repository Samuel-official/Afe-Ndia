import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-serif font-bold text-brand-gold mb-2">AFE NDIA</h3>
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Afe Ndia. All rights reserved.</p>
        </div>

        <div className="flex gap-2 text-xs uppercase tracking-widest text-gray-500">
          <span>Dine-in</span>
          <span className="text-brand-gold">•</span>
          <span>Takeaway</span>
          <span className="text-brand-gold">•</span>
          <span>Delivery</span>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
            <Twitter size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;