import React from 'react';
import { motion } from 'framer-motion';

const AboutBanner = () => {
  return (
    <div className="relative pt-36 pb-24 overflow-hidden bg-primary">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.png"
          alt="Warehouse with film rolls"
          className="w-full h-full object-cover object-center mix-blend-overlay opacity-60"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(16,42,67,0.95) 0%, rgba(16,42,67,0.75) 45%, rgba(16,42,67,0.3) 100%)"
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="text-white/80 text-sm font-medium mb-6 tracking-wide">
            Home &gt; About Us
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-bold text-white leading-tight mb-4 tracking-tight">
            ABOUT <br />
            ATHAANG ENERPLAST
          </h1>
          
          <h2 className="text-xl md:text-2xl font-bold text-brand-green mb-6">
            Trusted Supply Partner. Consistent Quality. Lasting Partnerships.
          </h2>
          
          <p className="text-[#F1F5F9] font-medium text-[16px] leading-[1.7] opacity-90">
            Athaang Enerplast is a trusted supplier of specialty films, polymer materials, and packaging solutions. Backed by over 28 years of technical expertise and a strong supplier network, we help businesses source the right materials with consistent quality and dependable service.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutBanner;
