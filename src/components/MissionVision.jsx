import React from 'react';
import { motion } from 'framer-motion';
import { Target, Telescope } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative p-10 lg:p-14 rounded-3xl overflow-hidden bg-primary shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('/hero_bg.png')] opacity-10 bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-brand-green/20 flex items-center justify-center mb-8 backdrop-blur-md border border-brand-green/30">
                <Target className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-white mb-6">Our Mission</h3>
              <p className="text-paragraph text-lg leading-relaxed">
                To provide high-quality specialty films and packaging solutions that empower industries to protect their products, optimize their operations, and achieve sustainable growth through reliable partnerships and technical excellence.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative p-10 lg:p-14 rounded-3xl overflow-hidden bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-[60px] -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 border border-primary/10">
                <Telescope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be the globally recognized, preferred supply partner for innovative polymer materials, driving industry standards forward while maintaining an unwavering commitment to quality, integrity, and customer satisfaction.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
