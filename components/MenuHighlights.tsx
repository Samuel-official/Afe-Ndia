import React from 'react';
import { MenuItemProps } from '../types';

const menuItems: MenuItemProps[] = [
  {
    title: "Signature Chapman",
    category: "Drinks",
    image: "https://picsum.photos/seed/chapman/600/800"
  },
  {
    title: "Spicy Grilled Catfish",
    category: "Grills",
    image: "https://picsum.photos/seed/grilledfish/600/800"
  },
  {
    title: "Peppered Asun",
    category: "Local Specials",
    image: "https://picsum.photos/seed/meatdish/600/800"
  },
  {
    title: "Classic Mojito",
    category: "Cocktails",
    image: "https://picsum.photos/seed/mojito/600/800"
  }
];

const MenuHighlights: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-gold/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-brand-gold text-sm font-bold uppercase tracking-widest">Taste the Night</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">Menu Highlights</h2>
          </div>
          <button className="text-white border-b border-brand-gold pb-1 hover:text-brand-gold transition-colors text-sm uppercase tracking-widest">
            View Full Menu
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden h-[400px] cursor-pointer">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 md:opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                <h3 className="text-2xl text-white font-serif">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;