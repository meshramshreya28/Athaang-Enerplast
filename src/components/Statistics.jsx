import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "28+", label: "Years Experience" },
  { value: "24+", label: "Product Categories" },
  { value: "100+", label: "Industrial Clients" },
  { value: "500+", label: "Projects Delivered" }
];

const Statistics = () => {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-accent text-sm md:text-base font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
