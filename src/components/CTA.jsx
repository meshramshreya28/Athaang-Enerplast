import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative pt-[20px] pb-[100px] bg-slate-50 overflow-hidden">
      
      {/* Background Decorations (Light mode compatible) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#16A34A]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Subtle abstract curve simulation */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent -rotate-6 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent rotate-3 pointer-events-none"></div>

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Glassmorphism Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4, transition: { duration: 0.3 } }}
          className="bg-[#071826] border border-slate-800/80 rounded-[28px] p-8 md:p-12 lg:p-[60px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-300 relative overflow-hidden"
        >
          {/* Internal subtle glow for panel */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#16A34A]/20 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10">
            
            {/* Left Side (70%) */}
            <div className="lg:w-[70%]">
              <h2 className="text-[#16A34A] text-xs md:text-sm font-bold uppercase tracking-widest mb-4">
                LET'S START A CONVERSATION
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Looking for the Right Specialty Film Solution?
              </h3>
              <p className="text-[#B8C2CC] font-body text-base md:text-lg mb-10 max-w-2xl leading-relaxed">
                Whether you need packaging films, polymer materials, or technical guidance, our team is ready to help you find the right solution for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="px-8 py-4 bg-[#16A34A] hover:bg-[#15803d] text-white font-heading font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(22,163,74,0.3)] flex items-center justify-center">
                  Request a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white hover:text-[#071826] text-white font-heading font-semibold rounded-xl transition-all duration-300 flex items-center justify-center">
                  Contact Our Team
                </button>
              </div>
            </div>

            {/* Right Side (30%) */}
            <div className="lg:w-[30%] flex flex-col justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h4 className="text-white font-heading font-bold text-xl mb-6">
                  Get in Touch
                </h4>
                <div className="space-y-5">
                  
                  <div className="flex items-center gap-4 text-[#B8C2CC] group">
                    <div className="w-6 h-6 rounded-full bg-[#16A34A]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#16A34A]/40 transition-colors">
                      <Check className="w-3.5 h-3.5 text-[#16A34A]" strokeWidth={3} />
                    </div>
                    <span className="font-body text-sm md:text-base">Fast Response</span>
                  </div>

                  <div className="flex items-center gap-4 text-[#B8C2CC] group">
                    <div className="w-6 h-6 rounded-full bg-[#16A34A]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#16A34A]/40 transition-colors">
                      <Check className="w-3.5 h-3.5 text-[#16A34A]" strokeWidth={3} />
                    </div>
                    <span className="font-body text-sm md:text-base">Technical Assistance</span>
                  </div>

                  <div className="flex items-center gap-4 text-[#B8C2CC] group">
                    <div className="w-6 h-6 rounded-full bg-[#16A34A]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#16A34A]/40 transition-colors">
                      <Check className="w-3.5 h-3.5 text-[#16A34A]" strokeWidth={3} />
                    </div>
                    <span className="font-body text-sm md:text-base">Reliable Supply</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
