import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Package, Users, MapPin } from 'lucide-react';
import { useInView, motion } from 'framer-motion';

const Counter = ({ value }) => {
  const isNumber = !isNaN(parseInt(value));
  const numValue = isNumber ? parseInt(value) : 0;
  const suffix = value.replace(/[0-9]/g, ''); 
  
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && isNumber) {
      let start = 0;
      const duration = 1500;
      const stepTime = Math.max(16, Math.floor(duration / numValue));
      
      const timer = setInterval(() => {
        start += Math.ceil(numValue / (duration / stepTime));
        if (start >= numValue) {
          setCount(numValue);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, numValue, isNumber]);

  if (!isNumber) return <span>{value}</span>;

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const AtAGlance = () => {
  const stats = [
    { icon: Calendar, value: "28+", label: "Years of Experience" },
    { icon: Package, value: "24+", label: "Product Categories" },
    { icon: Users, value: "100+", label: "Business Partners" },
    { icon: MapPin, value: "Pan India", label: "Supply Network" }
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center uppercase tracking-wide mb-12">
          AT A GLANCE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border-t-4 border-t-transparent hover:border-t-brand-green border-x border-b border-gray-200 rounded-lg p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-brand-green mb-4" strokeWidth={1.5} />
                <h3 className="text-3xl font-bold text-primary mb-1">
                  <Counter value={stat.value} />
                </h3>
                <p className="text-slate-600 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AtAGlance;
