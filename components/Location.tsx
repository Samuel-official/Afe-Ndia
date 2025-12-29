import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="relative bg-brand-charcoal">
      <div className="grid md:grid-cols-2 h-full">
        {/* Map Placeholder */}
        <div className="h-[400px] md:h-auto w-full bg-gray-800 relative group overflow-hidden">
          <img 
            src="https://picsum.photos/seed/mapview/800/600?grayscale" 
            alt="Map Location" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <a 
               href="https://maps.google.com/?q=149+Aka+Etinan+Road,+Uyo,+Akwa+Ibom" 
               target="_blank" 
               rel="noreferrer"
               className="bg-brand-gold hover:bg-white text-black px-6 py-3 font-bold uppercase tracking-widest transition-colors flex items-center gap-2 shadow-xl"
             >
               <MapPin size={18} /> Open in Maps
             </a>
          </div>
        </div>

        {/* Info */}
        <div className="p-12 md:p-20 flex flex-col justify-center bg-zinc-900">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-6">Find Us</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Visit Afe Ndia</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-brand-gold mt-1" size={24} />
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-1">Address</h4>
                <p className="text-gray-400">149 Aka Etinan Road,<br/>Uyo 521110, Akwa Ibom</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-brand-gold mt-1" size={24} />
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-1">Opening Hours</h4>
                <p className="text-gray-400">Mon - Sun: 12:00 PM - Late</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-brand-gold mt-1" size={24} />
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-1">Contact</h4>
                <p className="text-gray-400">+234 123 456 7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;