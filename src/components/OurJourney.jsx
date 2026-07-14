import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, TrendingUp, Globe, Award } from 'lucide-react';

const milestones = [
  {
    year: "Foundation",
    title: "The Beginning",
    description: "Started our journey with a vision to redefine quality in packaging.",
    icon: Leaf
  },
  {
    year: "Growth",
    title: "Scaling Operations",
    description: "Expanded our manufacturing capabilities and formed key partnerships.",
    icon: TrendingUp
  },
  {
    year: "Expansion",
    title: "Global Reach",
    description: "Reached international markets and broadened our product portfolio.",
    icon: Globe
  },
  {
    year: "Today",
    title: "Industry Leaders",
    description: "Recognized as a trusted supply partner across diverse industries.",
    icon: Award
  }
];

const OurJourney = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-3">Our Journey</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            A Legacy of Excellence
          </h3>
          <div className="h-[3px] w-24 bg-gradient-to-r from-brand-green to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden lg:block z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-brand-green/20 group-hover:border-brand-green transition-all duration-300 mb-6 relative z-10">
                  <milestone.icon className="w-8 h-8 text-brand-green" />
                </div>
                
                {/* Content */}
                <div className="text-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                  <span className="text-brand-green font-bold text-lg mb-2 block">{milestone.year}</span>
                  <h4 className="text-xl font-heading font-bold text-slate-900 mb-3">{milestone.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurJourney;
