import React from 'react';
import { motion } from 'framer-motion';
import { Globe, SearchCheck, Building2, Truck, Users } from 'lucide-react';

const steps = [
  {
    icon: Globe,
    title: "Global Suppliers",
    desc: "Sourcing premium raw materials globally.",
  },
  {
    icon: SearchCheck,
    title: "Quality Check",
    desc: "Rigorous testing and verification.",
  },
  {
    icon: Building2,
    title: "ATHAANG",
    desc: "Inventory and technical integration.",
  },
  {
    icon: Truck,
    title: "Distribution",
    desc: "Efficient and reliable logistics.",
  },
  {
    icon: Users,
    title: "Customers",
    desc: "Delivering value to diverse industries.",
  }
];

const SupplyNetwork = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-3">Our Process</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Robust Supply Network
          </h3>
          <div className="h-[3px] w-24 bg-gradient-to-r from-brand-green to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="relative mt-20">
          {/* Animated Connecting Line (Desktop) */}
          <div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-gray-200 hidden lg:block z-0">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-brand-green"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Arrow for mobile/tablet */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block lg:hidden absolute top-10 -right-5 text-gray-300">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
                {/* Down Arrow for mobile */}
                {index !== steps.length - 1 && (
                  <div className="block md:hidden absolute -bottom-8 text-gray-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}

                <div className="w-20 h-20 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center mb-6 border border-gray-100 group-hover:border-brand-green group-hover:-translate-y-2 transition-all duration-300 relative z-10">
                  <step.icon className="w-8 h-8 text-brand-green" />
                  
                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold border-4 border-slate-50">
                    {index + 1}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SupplyNetwork;
