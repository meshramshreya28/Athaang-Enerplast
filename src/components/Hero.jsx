import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Award, Package, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-primary overflow-hidden py-24 md:py-0">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.png"
          alt="Industrial polymer manufacturing"
          className="w-full h-full object-cover object-right md:object-center"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(18, 42, 67, 0.82) 0%, rgba(18, 42, 67, 0.65) 40%, rgba(18, 42, 67, 0.20) 100%)"
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mt-4 md:mt-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl -ml-2 lg:-ml-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1 h-4 bg-brand-green rounded-sm"></span>
            <p className="text-white text-[14px] font-bold tracking-[0.1em] uppercase opacity-90">
              SPECIALTY FILMS • POLYMERS • PACKAGING
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-bold text-white leading-[1.15] mt-4 mb-6 tracking-[-0.02em]">
            Specialty Film Solutions
          </h1>
          <p className="text-[#F1F5F9] font-medium text-[20px] leading-[1.7] font-body mb-8 max-w-[550px]">
            Supplying specialty films, polymer materials, and packaging solutions backed by 28+ years of industry expertise.
          </p>

          <div className="flex flex-wrap gap-4 w-full mb-8">
            <button className="bg-primary text-white border border-transparent px-8 py-3 rounded-xl font-semibold text-[15px] min-w-[180px] flex items-center justify-center transition-all hover:bg-primary-hover hover:scale-105 shadow-sm">
              Explore Products
            </button>
            <button className="bg-transparent text-white border border-white/20 px-8 py-3 rounded-xl font-semibold text-[15px] min-w-[180px] transition-all hover:bg-white/10 hover:border-white/40">
              Contact Us
            </button>
          </div>

          <div className="grid grid-cols-3 md:flex md:flex-wrap items-start gap-2 md:gap-10 pt-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3 text-center md:text-left">
              <Award className="w-6 h-6 md:w-8 md:h-8 text-brand-green shrink-0" />
              <div>
                <h3 className="text-lg md:text-2xl font-heading font-bold text-white mb-0 md:mb-1">28+</h3>
                <p className="text-[10px] md:text-sm text-paragraph leading-tight">Years of Industry<br className="hidden md:block" />Expertise</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3 text-center md:text-left">
              <Package className="w-6 h-6 md:w-8 md:h-8 text-brand-green shrink-0" />
              <div>
                <h3 className="text-lg md:text-2xl font-heading font-bold text-white mb-0 md:mb-1">24+</h3>
                <p className="text-[10px] md:text-sm text-paragraph leading-tight">Product<br className="hidden md:block" />Categories</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3 text-center md:text-left">
              <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-brand-green shrink-0" />
              <div>
                <h3 className="text-lg md:text-2xl font-heading font-bold text-white mb-0 md:mb-1">100%</h3>
                <p className="text-[10px] md:text-sm text-paragraph leading-tight">Quality Focused<br className="hidden md:block" />Supply</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
