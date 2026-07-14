import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    num: "01",
    title: "Strong Supplier Network",
    desc: "Reliable sourcing through trusted domestic and global partners."
  },
  {
    num: "02",
    title: "Technical Expertise",
    desc: "Helping customers identify the right specialty film solutions."
  },
  {
    num: "03",
    title: "Quality Assured Products",
    desc: "Consistent product quality backed by reliable supplier partnerships."
  },
  {
    num: "04",
    title: "Reliable Supply",
    desc: "Ensuring timely availability for critical business requirements."
  },
  {
    num: "05",
    title: "Customer-Focused Service",
    desc: "Responsive support and long-term business relationships."
  },
  {
    num: "06",
    title: "Industry Knowledge",
    desc: "Decades of experience across multiple industrial sectors."
  }
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-[#071826]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column (40%) */}
          <div className="lg:col-span-5 flex flex-col pt-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#16A34A] text-sm font-bold uppercase tracking-widest mb-4">
                Why Choose Athaang
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight">
                Trusted Expertise.<br className="hidden md:block" /> Reliable Supply.
              </h3>
              <div className="h-[3px] w-16 bg-gradient-to-r from-brand-green to-transparent rounded-full mb-6"></div>
              <p className="text-[#B8C2CC] font-body text-base md:text-lg mb-16 lg:mb-24 leading-relaxed max-w-md">
                Delivering high-performance specialty films and packaging solutions through technical expertise, a strong supplier network, and dependable service.
              </p>

              <div>
                <div className="text-[100px] md:text-[140px] font-heading font-bold text-white leading-none mb-4 tracking-tighter">
                  28+
                </div>
                <div className="text-2xl md:text-3xl font-heading font-semibold text-white mb-6 leading-tight">
                  Years of<br />Industry Experience
                </div>
                <p className="text-[#B8C2CC] text-sm leading-relaxed max-w-xs">
                  Building long-term partnerships through reliable sourcing, technical expertise, and consistent quality.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column (60%) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-col">
                {features.map((feature, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div 
                      key={index}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`border-b transition-all duration-500 py-8 md:py-10 first:pt-0 last:border-b-0 ${isActive ? 'border-brand-green/30 bg-white/[0.02] pl-4 -ml-4 rounded-xl' : 'border-white/10'}`}
                    >
                      <div className="flex items-start">
                        <span className={`font-heading font-bold text-lg md:text-xl mr-6 md:mr-10 mt-1 transition-colors duration-500 ${isActive ? 'text-brand-green' : 'text-white/40'}`}>
                          {feature.num}
                        </span>
                        <div>
                          <h4 className={`text-2xl md:text-3xl font-heading font-semibold mb-3 transition-colors duration-500 ${isActive ? 'text-brand-green' : 'text-white'}`}>
                            {feature.title}
                          </h4>
                          <p className="text-[#B8C2CC] text-base md:text-lg leading-relaxed max-w-xl">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
