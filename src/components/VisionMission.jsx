import React from 'react';
import { Eye, Target, ShieldCheck } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* OUR VISION */}
          <div className="flex-1 bg-primary rounded-xl p-8 lg:p-10 flex flex-col sm:flex-row gap-6 items-start shadow-md text-white hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
              <Eye className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold uppercase tracking-wide mb-4">OUR VISION</h3>
              <p className="text-white/90 text-[15px] leading-relaxed font-medium">
                To become India's most trusted partner for specialty films and packaging solutions.
              </p>
            </div>
          </div>

          {/* OUR MISSION */}
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-8 lg:p-10 flex flex-col sm:flex-row gap-6 items-start shadow-sm hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center flex-shrink-0">
              <Target className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-primary uppercase tracking-wide mb-4">OUR MISSION</h3>
              <p className="text-slate-600 text-[14px] leading-relaxed">
                To deliver innovative, reliable, and quality-assured supply solutions through a strong supplier network while building long-term customer relationships.
              </p>
            </div>
          </div>

          {/* QUALITY POLICY */}
          <div className="flex-1 bg-brand-green/10 border border-brand-green/20 rounded-xl p-8 lg:p-10 flex flex-col sm:flex-row gap-6 items-start shadow-sm hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 rounded-full border border-brand-green/30 flex items-center justify-center flex-shrink-0 bg-white">
              <ShieldCheck className="w-7 h-7 text-brand-green" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-brand-green uppercase tracking-wide mb-4">QUALITY POLICY</h3>
              <p className="text-slate-700 text-[14px] leading-relaxed font-medium">
                We believe that Customer's Satisfaction is above all with best quality & timely service. We achieve this by continual improvement on our quality management system.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;
