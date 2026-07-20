import React from 'react';
import { motion } from 'framer-motion';

const AboutBanner = () => {
  return (
    <div className="relative pt-24 pb-8 overflow-hidden bg-primary">
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
            background: `linear-gradient(
              90deg,
              rgba(10,18,32,0.73) 0%,
              rgba(10,18,32,0.63) 25%,
              rgba(10,18,32,0.40) 45%,
              rgba(10,18,32,0.10) 65%,
              rgba(10,18,32,0) 80%
            )`
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
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-bold text-white leading-tight mb-2 tracking-tight">
            About <br />
            Athaang Enerplast
          </h1>

          <h2 className="text-xl md:text-2xl font-bold text-brand-green mb-3 leading-relaxed">
            Trusted Supply Partner. <br />
            Consistent Quality. <br />
            Lasting Partnerships.
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutBanner;
