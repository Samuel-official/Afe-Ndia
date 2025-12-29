import React from 'react';
import { Star, Quote } from 'lucide-react';
import { ReviewProps } from '../types';

const reviews: ReviewProps[] = [
  {
    name: "Emem Bassey",
    rating: 5,
    text: "Honestly, the vibe at night is unmatched. The lighting, the music, everything just feels right. Definitely my new spot.",
    date: "2 weeks ago"
  },
  {
    name: "David Okon",
    rating: 4,
    text: "Great food and affordable prices. The grilled fish is a must-try. Service can be a bit busy on weekends but worth it.",
    date: "1 month ago"
  },
  {
    name: "Sarah Udo",
    rating: 5,
    text: "Afe Ndia is a gem in Uyo. Perfect for a chill evening with friends. The cocktails are surprisingly good for the price!",
    date: "3 weeks ago"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <div className="flex justify-center gap-1 mb-4 text-brand-gold">
             {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#D4AF37" />)}
           </div>
           <h2 className="text-3xl md:text-4xl font-serif text-white">What People Are Saying</h2>
           <p className="text-gray-500 mt-2">Rated 4.1 Stars by our community</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white/5 p-8 border border-white/5 relative hover:border-brand-gold/30 transition-colors">
              <Quote className="text-brand-gold/20 absolute top-6 right-6" size={48} />
              <div className="flex gap-1 mb-4 text-brand-gold">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#D4AF37" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex justify-between items-end border-t border-white/10 pt-4">
                <span className="text-white font-serif text-lg">{review.name}</span>
                <span className="text-gray-600 text-xs uppercase">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;