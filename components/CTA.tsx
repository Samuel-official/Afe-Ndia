import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-brand-gold text-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Pull Up. Chill. <br/>Enjoy the Night.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <button className="px-8 py-4 bg-black text-brand-gold font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors">
                    Visit Afe Ndia
                </button>
                <button className="px-8 py-4 border-2 border-black text-black font-bold uppercase tracking-widest hover:bg-black hover:text-brand-gold transition-colors">
                    Order Delivery
                </button>
            </div>
        </div>
    </section>
  );
};

export default CTA;