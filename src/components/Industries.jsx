import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Pill, Leaf, Factory, ShoppingBag, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  {
    name: "Food Packaging",
    desc: "Barrier films and flexible packaging solutions for food safety and freshness.",
    icon: Utensils,
    theme: {
      cardBg: "bg-gradient-to-br from-orange-50/80 to-white",
      cardHover: "hover:border-orange-200 hover:shadow-[0_15px_40px_rgba(251,146,60,0.12)]",
      iconContainer: "bg-orange-500 md:bg-orange-100/50 md:group-hover:bg-orange-500",
      iconColor: "text-white md:text-orange-500 md:group-hover:text-white",
      titleHover: "group-hover:text-orange-600",
      arrowHover: "text-orange-500"
    }
  },
  {
    name: "Pharmaceutical",
    desc: "Reliable films for pharmaceutical and healthcare packaging applications.",
    icon: Pill,
    theme: {
      cardBg: "bg-gradient-to-br from-blue-50/80 to-white",
      cardHover: "hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(59,130,246,0.12)]",
      iconContainer: "bg-blue-500 md:bg-blue-100/50 md:group-hover:bg-blue-500",
      iconColor: "text-white md:text-blue-500 md:group-hover:text-white",
      titleHover: "group-hover:text-blue-600",
      arrowHover: "text-blue-500"
    }
  },
  {
    name: "Agriculture",
    desc: "Advanced film solutions for greenhouse, mulch and agricultural applications.",
    icon: Leaf,
    theme: {
      cardBg: "bg-gradient-to-br from-green-50/80 to-white",
      cardHover: "hover:border-green-200 hover:shadow-[0_15px_40px_rgba(34,197,94,0.12)]",
      iconContainer: "bg-green-500 md:bg-green-100/50 md:group-hover:bg-green-500",
      iconColor: "text-white md:text-green-500 md:group-hover:text-white",
      titleHover: "group-hover:text-green-600",
      arrowHover: "text-green-500"
    }
  },
  {
    name: "Industrial",
    desc: "Protective films and industrial packaging materials for demanding environments.",
    icon: Factory,
    theme: {
      cardBg: "bg-gradient-to-br from-slate-100/80 to-white",
      cardHover: "hover:border-slate-300 hover:shadow-[0_15px_40px_rgba(100,116,139,0.12)]",
      iconContainer: "bg-slate-600 md:bg-slate-200/50 md:group-hover:bg-slate-600",
      iconColor: "text-white md:text-slate-500 md:group-hover:text-white",
      titleHover: "group-hover:text-slate-700",
      arrowHover: "text-slate-600"
    }
  },
  {
    name: "FMCG",
    desc: "Efficient packaging solutions for fast-moving consumer goods.",
    icon: ShoppingBag,
    theme: {
      cardBg: "bg-gradient-to-br from-pink-50/80 to-white",
      cardHover: "hover:border-pink-200 hover:shadow-[0_15px_40px_rgba(236,72,153,0.12)]",
      iconContainer: "bg-pink-500 md:bg-pink-100/50 md:group-hover:bg-pink-500",
      iconColor: "text-white md:text-pink-500 md:group-hover:text-white",
      titleHover: "group-hover:text-pink-600",
      arrowHover: "text-pink-500"
    }
  },
  {
    name: "Logistics",
    desc: "Secure packaging materials for storage, transportation and distribution.",
    icon: Truck,
    theme: {
      cardBg: "bg-gradient-to-br from-indigo-50/80 to-white",
      cardHover: "hover:border-indigo-200 hover:shadow-[0_15px_40px_rgba(99,102,241,0.12)]",
      iconContainer: "bg-indigo-500 md:bg-indigo-100/50 md:group-hover:bg-indigo-500",
      iconColor: "text-white md:text-indigo-500 md:group-hover:text-white",
      titleHover: "group-hover:text-indigo-600",
      arrowHover: "text-indigo-500"
    }
  }
];

const Industries = () => {
  return (
    <section id="industries" className="pt-8 md:pt-12 pb-16 md:pb-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        
        {/* Header section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-[#16A34A] text-sm font-bold uppercase tracking-widest mb-4">
            Industries We Serve
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
            Supporting Diverse Industries
          </h3>
          
          {/* Custom Center Underline */}
          <div className="flex items-center justify-center gap-2 mb-6 w-full">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#16A34A] rounded-full"></div>
            <div className="w-2 h-2 rounded-full bg-[#16A34A]"></div>
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#16A34A] rounded-full"></div>
          </div>
          <p className="text-slate-600 font-body text-base sm:text-lg max-w-2xl mx-auto">
            Delivering high-performance specialty films and packaging solutions tailored for multiple industries through technical expertise and a reliable supply network.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col p-8 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-2 border-transparent hover:-translate-y-2 transition-all duration-400 ease-out ${industry.theme.cardBg} ${industry.theme.cardHover}`}
              >
                {/* Header (Icon + Title) */}
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center mr-4 transition-colors duration-400 ${industry.theme.iconContainer}`}>
                    <Icon className={`w-7 h-7 transition-colors duration-400 ${industry.theme.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <h4 className={`text-xl font-bold font-heading text-slate-900 transition-colors ${industry.theme.titleHover}`}>
                    {industry.name}
                  </h4>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {industry.desc}
                  </p>
                </div>
                
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <Link to="/industries" className="bg-brand-green text-white md:bg-transparent md:border-2 md:border-brand-green md:text-brand-green px-8 py-3 rounded-xl font-semibold text-base inline-flex items-center md:hover:bg-brand-green md:hover:text-white transition-colors group">
            Explore All Industries
            <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
