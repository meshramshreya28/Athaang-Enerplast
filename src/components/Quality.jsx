import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, MessageSquare, ShieldCheck, Truck, Users, Award } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Understanding Requirements",
    desc: "Analyzing your specific application, technical specifications, and overall business needs.",
    icon: ClipboardList
  },
  {
    num: "02",
    title: "Technical Consultation",
    desc: "Helping you select the most suitable specialty film or packaging solution for your goals.",
    icon: MessageSquare
  },
  {
    num: "03",
    title: "Quality Verification",
    desc: "Products are sourced from trusted partners and rigorously verified for consistency.",
    icon: ShieldCheck
  },
  {
    num: "04",
    title: "Reliable Supply",
    desc: "Ensuring dependable supply, timely delivery, and ongoing technical support.",
    icon: Truck
  }
];

const Quality = () => {
  return (
    <section id="quality" className="relative pt-12 md:pt-20 pb-4 md:pb-8 bg-slate-50 overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-brand-green text-xs font-bold uppercase tracking-widest mb-3">
              Quality Commitment
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">
              Quality You Can Rely On
            </h3>
            
            {/* Custom Center Underline */}
            <div className="flex items-center justify-center gap-2 mb-6 w-full">
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#16A34A] rounded-full"></div>
              <div className="w-2 h-2 rounded-full bg-[#16A34A]"></div>
              <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#16A34A] rounded-full"></div>
            </div>

            <p className="text-slate-500 font-body text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Every product we supply is carefully sourced through trusted partnerships and selected to deliver consistent quality, performance, and reliability for your industrial applications.
            </p>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-8 max-w-6xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[1px] bg-[#16A34A] z-0">
            <div className="absolute top-1/2 left-[16.66%] w-[5px] h-[5px] rounded-full bg-[#16A34A] -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-[50%] w-[5px] h-[5px] rounded-full bg-[#16A34A] -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-[83.33%] w-[5px] h-[5px] rounded-full bg-[#16A34A] -translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center relative group"
                >
                  
                  {/* Icon Container */}
                  <div className="relative mb-5 flex items-center justify-center w-full">
                    {/* Exact Screenshot Number Positioning (Left of circle, higher up) */}
                    <div className="absolute bottom-[calc(50%+6px)] right-[calc(50%+28px)] text-[52px] font-bold font-heading text-[#16A34A]/20 select-none leading-none tracking-tight">
                      {step.num}
                    </div>

                    {/* Timeline Circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)] flex items-center justify-center border border-slate-50 group-hover:-translate-y-1 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[#16A34A]" strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col items-center">
                    <div className="text-[#16A34A] font-bold text-[11px] tracking-widest uppercase mb-2">
                      STEP {step.num}
                    </div>
                    <h4 className="text-[17px] md:text-[19px] font-heading font-bold text-slate-900 mb-3 px-2 leading-snug min-h-[50px] flex items-center">
                      {step.title}
                    </h4>
                    <div className="w-6 h-[2px] bg-[#16A34A] rounded-full mb-3"></div>
                    <p className="text-slate-500 text-[13px] md:text-[14px] leading-relaxed max-w-[220px]">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full pt-4"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-20 w-full max-w-5xl mx-auto">
            
            <div className="flex items-center space-x-5 group w-full md:w-auto justify-start md:justify-center">
              <div className="w-16 h-16 rounded-full bg-[#16A34A]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#16A34A]/20 group-hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-[#16A34A]" strokeWidth={1.5} />
              </div>
              <span className="text-slate-700 font-heading font-semibold text-base lg:text-lg text-left">
                Trusted Supplier Network
              </span>
            </div>

            <div className="flex items-center space-x-5 group w-full md:w-auto justify-start md:justify-center">
              <div className="w-16 h-16 rounded-full bg-[#16A34A]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#16A34A]/20 group-hover:scale-110 transition-all duration-300">
                <ShieldCheck className="w-8 h-8 text-[#16A34A]" strokeWidth={1.5} />
              </div>
              <span className="text-slate-700 font-heading font-semibold text-base lg:text-lg text-left">
                Verified Quality Standards
              </span>
            </div>

            <div className="flex items-center space-x-5 group w-full md:w-auto justify-start md:justify-center">
              <div className="w-16 h-16 rounded-full bg-[#16A34A]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#16A34A]/20 group-hover:scale-110 transition-all duration-300">
                <Award className="w-8 h-8 text-[#16A34A]" strokeWidth={1.5} />
              </div>
              <span className="text-slate-700 font-heading font-semibold text-base lg:text-lg text-left">
                Reliable & Consistent Supply
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Quality;
