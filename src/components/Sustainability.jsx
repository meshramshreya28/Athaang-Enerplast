import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Globe } from 'lucide-react';

const Sustainability = () => {
  return (
    <section id="sustainability" className="pt-20 md:pt-28 pb-20 md:pb-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-3">Sustainability</h2>
            <div className="mb-6">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading text-slate-900 mb-4">
                Engineering a Greener Tomorrow
              </h3>
              <div className="h-[3px] w-12 bg-brand-green rounded-full"></div>
            </div>
            <p className="text-gray-600 font-body text-lg mb-8 leading-relaxed">
              We are committed to the circular economy. Our modern manufacturing processes are designed to minimize environmental impact while maximizing material efficiency.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl flex items-start shadow-sm border border-slate-200">
                <Leaf className="w-8 h-8 text-brand-green mr-4 shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Eco-Friendly Materials</h4>
                  <p className="text-gray-600 text-sm">Developing biopolymers and compostable packaging that degrade naturally without leaving toxic residues.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl flex items-start shadow-sm border border-slate-200">
                <Recycle className="w-8 h-8 text-brand-green mr-4 shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Circular Economy</h4>
                  <p className="text-gray-600 text-sm">Implementing closed-loop recycling systems in our facilities to achieve zero-waste manufacturing.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl flex items-start shadow-sm border border-slate-200">
                <Globe className="w-8 h-8 text-brand-green mr-4 shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Future-Ready Manufacturing</h4>
                  <p className="text-gray-600 text-sm">Investing in energy-efficient extrusion lines powered by renewable solar energy.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop" 
              alt="Sustainable packaging" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-10 left-10 right-10">
              <div className="glass-panel bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl text-white">
                <div className="text-3xl font-heading font-bold mb-2">100%</div>
                <div className="text-white/80">Commitment to Sustainable Innovation</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Sustainability;
