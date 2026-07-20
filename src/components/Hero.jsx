import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Award, Package, ShieldCheck, Truck, Factory } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center bg-primary overflow-hidden py-24 md:py-0">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_bg3.png"
            alt="Industrial polymer manufacturing"
            className="w-full h-full object-cover object-right md:object-center"
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
              Trusted Supplier of Packaging Solutions
            </h1>
            <p className="text-[#F1F5F9] font-medium text-[20px] leading-[1.7] font-body mb-8 max-w-[600px]">
              Supplying specialty films, polymer materials, and packaging solutions backed by 28+ years of industry expertise.
            </p>

            <div className="flex flex-wrap gap-4 w-full mb-8">
              <button 
                className="text-white border border-transparent px-8 py-3 rounded-xl font-semibold text-[15px] min-w-[180px] flex items-center justify-center transition-all hover:scale-105 bg-[#0B1324] hover:bg-[#16213E]"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,.18)' }}
              >
                Explore Products
              </button>
              <button className="bg-transparent text-white border border-white/20 px-8 py-3 rounded-xl font-semibold text-[15px] min-w-[180px] transition-all hover:bg-white/10 hover:border-white/40">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Strip */}
      <div className="relative z-20 bg-[#FAFCFB] py-12 border-y border-slate-100 overflow-hidden">
        {/* Subtle dot pattern and stronger ambient glow for premium feel */}
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#16A34A_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#E2F5E8]/80 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.0 }}
              className="flex items-center gap-4 justify-center md:justify-start group cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#EEF8F1] to-[#E2F5E8] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(22,163,74,0.12)] border border-[#CDEBD6] group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-[#16A34A]" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-0.5">28+</h3>
                <p className="text-sm text-slate-600 leading-tight">Years of Industry Expertise</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 justify-center md:justify-start group cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#EEF8F1] to-[#E2F5E8] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(22,163,74,0.12)] border border-[#CDEBD6] group-hover:scale-110 transition-transform duration-300">
                <Package className="w-6 h-6 text-[#16A34A]" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-0.5">24+</h3>
                <p className="text-sm text-slate-600 leading-tight">Product Categories</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 justify-center md:justify-start group cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#EEF8F1] to-[#E2F5E8] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(22,163,74,0.12)] border border-[#CDEBD6] group-hover:scale-110 transition-transform duration-300">
                <Factory className="w-6 h-6 text-[#16A34A]" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-0.5">15+</h3>
                <p className="text-sm text-slate-600 leading-tight">Industries Served</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 justify-center md:justify-start group cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#EEF8F1] to-[#E2F5E8] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(22,163,74,0.12)] border border-[#CDEBD6] group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-6 h-6 text-[#16A34A]" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-0.5">Pan India</h3>
                <p className="text-sm text-slate-600 leading-tight">Reliable Supply Network</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
