import React from 'react';
import { Link } from 'react-router-dom';

const AboutCTA = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-primary">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.png"
          alt="Warehouse background"
          className="w-full h-full object-cover object-center mix-blend-overlay opacity-30"
        />
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-wide mb-3">
          READY TO FIND THE RIGHT PACKAGING SOLUTION?
        </h2>
        
        <p className="text-white/80 text-[15px] mb-8 font-medium">
          Partner with Athaang Enerplast for trusted sourcing, technical expertise & dependable supply.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/quote" className="bg-brand-green text-white px-8 py-3 rounded text-[15px] font-bold hover:bg-green-600 transition-colors">
            Request a Quote
          </Link>
          <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded text-[15px] font-bold hover:bg-white/10 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
