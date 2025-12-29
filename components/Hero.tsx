import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/nightclub/1920/1080"
          alt="Bar Ambiance"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-brand-gold uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-bold">
            Food. Drinks. Music. Vibes.
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Where Uyo Comes <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
              Alive at Night
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-10 font-light">
            Experience the pulse of the city in a setting designed for relaxed luxury and unforgettable conversations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="px-8 py-4 bg-brand-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 min-w-[200px]">
              Order Now
            </button>
            <a href="#location" className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 min-w-[200px] flex items-center justify-center gap-2">
              Get Directions <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;