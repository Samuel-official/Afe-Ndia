import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-brand-charcoal relative">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative">
           <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold/20 z-0"></div>
           <img 
            src="https://picsum.photos/seed/restaurantdark/800/1000" 
            alt="Interior of Afe Ndia" 
            className="relative z-10 w-full h-[500px] object-cover filter brightness-75 contrast-125 grayscale-[20%]"
           />
        </div>
        
        <div className="order-1 md:order-2 md:pl-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-2">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">More Than Just A Bar.</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Afe Ndia is where the rhythm of Uyo meets the comfort of home. Located in the heart of the city, we’ve crafted a space where great food, chilled drinks, and real conversations flow effortlessly. 
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Whether you're starting your night or winding down, our doors are open for affordable luxury and vibes that don't quit.
            </p>
            <div className="flex items-center gap-8 text-white">
               <div>
                  <span className="block text-3xl font-serif text-brand-gold">4.1</span>
                  <span className="text-xs uppercase tracking-wider text-gray-500">Rating</span>
               </div>
               <div className="h-10 w-px bg-white/10"></div>
               <div>
                  <span className="block text-3xl font-serif text-brand-gold">₦2k+</span>
                  <span className="text-xs uppercase tracking-wider text-gray-500">Per Person</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;