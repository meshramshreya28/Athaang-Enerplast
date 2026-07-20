import React from 'react';
import { Building2, Handshake, TrendingUp, Award } from 'lucide-react';

const OurJourney = () => {
  const steps = [
    {
      year: "1996",
      title: "Founded",
      desc: "Started as a technical trading business",
      icon: Building2
    },
    {
      year: "Expanded",
      title: "Expanded",
      desc: "Expanded supplier network",
      icon: Handshake
    },
    {
      year: "Diversified",
      title: "Diversified",
      desc: "Added specialty films and packaging solutions",
      icon: TrendingUp
    },
    {
      year: "Today",
      title: "Today",
      desc: "Serving industries across India with trust and commitment",
      icon: Award
    }
  ];

  return (
    <section className="pt-12 pb-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center uppercase tracking-wide mb-20">
          OUR JOURNEY
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Horizontal Line connecting nodes */}
          <div className="absolute top-[40px] left-0 w-full h-[3px] bg-brand-green/30 md:bg-brand-green hidden md:block"></div>
          
          {/* Mobile vertical line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-[3px] bg-brand-green md:hidden"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center gap-6 md:gap-4">
                  {/* Icon Circle */}
                  <div className="w-[80px] h-[80px] rounded-full bg-primary flex items-center justify-center flex-shrink-0 border-4 border-white shadow-[0_0_0_2px_rgba(76,175,80,0.3)] md:shadow-none relative z-10">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm max-w-[180px] mx-auto leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurJourney;
