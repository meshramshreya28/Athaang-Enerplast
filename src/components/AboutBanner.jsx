import React from 'react';
import { motion } from 'framer-motion';

const AboutBanner = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-primary">
      {/* Abstract White Architecture / Polymer Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.png"
          alt="Abstract Polymer Architecture"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        {/* Soft Light & Glassmorphism Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-green/10 text-brand-green text-sm font-bold tracking-widest uppercase mb-6 border border-brand-green/20 backdrop-blur-md">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            Supplying Expertise.<br />Building Trust.
          </h1>
          <p className="text-lg md:text-xl text-paragraph leading-relaxed">
            Trusted supplier of specialty films, polymer materials & industrial packaging solutions backed by 28+ years of technical expertise.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutBanner;
