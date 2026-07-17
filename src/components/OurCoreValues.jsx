import React from 'react';
import { Handshake, ShieldCheck, Lightbulb, Users } from 'lucide-react';

const OurCoreValues = () => {
  const values = [
    {
      icon: Handshake,
      title: "INTEGRITY",
      desc: "We believe in transparency, ethical business practices, and long-term trust."
    },
    {
      icon: ShieldCheck,
      title: "QUALITY",
      desc: "We are committed to delivering high-quality products that meet industry standards."
    },
    {
      icon: Lightbulb,
      title: "INNOVATION",
      desc: "We continuously explore better materials and solutions to add value to our customers."
    },
    {
      icon: Users,
      title: "CUSTOMER COMMITMENT",
      desc: "Our customers are at the heart of everything we do."
    }
  ];

  return (
    <section className="pb-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center uppercase tracking-wide mb-12">
          OUR CORE VALUES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-lg p-6 flex flex-col md:flex-row gap-4 items-start hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-brand-green" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-primary uppercase tracking-wide mb-2">{val.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurCoreValues;
