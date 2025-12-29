import React from 'react';
import { Utensils, Martini, ShoppingBag, Truck, Music } from 'lucide-react';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    icon: Utensils,
    title: "Quality Food",
    description: "Authentic local flavors and perfectly grilled continental dishes."
  },
  {
    icon: Martini,
    title: "Drinks & Cocktails",
    description: "Ice-cold beers, premium spirits, and signature house mixes."
  },
  {
    icon: ShoppingBag,
    title: "Quick Takeaway",
    description: "Grab your favorites on the go without missing a beat."
  },
  {
    icon: Truck,
    title: "Swift Delivery",
    description: "Bring the Afe Ndia experience directly to your doorstep."
  },
  {
    icon: Music,
    title: "Night Vibes",
    description: "The perfect playlist and ambiance for a relaxed evening."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-widest">Experience The Best</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mt-2">What We Offer</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-6 rounded-sm bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-brand-gold/30 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center mb-4 text-brand-gold group-hover:scale-110 transition-transform duration-300 border border-brand-gold/20">
                <feature.icon size={24} />
              </div>
              <h3 className="text-white font-serif text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;