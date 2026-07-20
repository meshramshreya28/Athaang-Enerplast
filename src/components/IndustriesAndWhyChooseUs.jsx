import React from 'react';
import { 
  Coffee, Pill, Leaf, Car, 
  ShoppingBag, Building, Factory, Package,
  CheckCircle2
} from 'lucide-react';

const IndustriesAndWhyChooseUs = () => {
  const industries = [
    { icon: Coffee, name: "Food & Beverage" },
    { icon: Pill, name: "Pharmaceutical" },
    { icon: Leaf, name: "Agriculture" },
    { icon: Car, name: "Automotive" },
    { icon: ShoppingBag, name: "E-Commerce" },
    { icon: Building, name: "Industrial" },
    { icon: Factory, name: "Electronics" },
    { icon: Package, name: "Consumer Goods" }
  ];

  const reasons = [
    "Strong and long-term supplier partnerships",
    "Technical expertise and market understanding",
    "Wide range of specialty films and polymer materials",
    "Quality assurance and consistent product performance",
    "On-time delivery and responsive support"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Industries */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-primary uppercase tracking-wide mb-8">
              INDUSTRIES WE SERVE
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-grow">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                return (
                  <div key={idx} className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer h-full">
                    <div className="w-14 h-14 rounded-full bg-slate-50 group-hover:bg-brand-green flex items-center justify-center mb-3 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <span className="text-[12px] font-bold text-slate-700 leading-tight group-hover:text-primary transition-colors duration-300">
                      {ind.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Why Choose Us */}
          <div className="w-full lg:w-1/2 flex flex-col mt-12 lg:mt-0">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-primary uppercase tracking-wide mb-8">
              WHY CHOOSE ATHAANG ENERPLAST?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 flex-grow relative">
              <div className="w-full sm:w-[55%] space-y-5 flex flex-col justify-center">
                {reasons.map((reason, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-green/15 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-brand-green" strokeWidth={2.5} />
                    </div>
                    <span className="text-slate-700 text-[14px] xl:text-[15px] font-medium leading-relaxed">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="w-full sm:w-[45%] rounded-2xl overflow-hidden shadow-md min-h-[240px] relative">
                <img 
                  src="/hero_bg2.png" 
                  alt="Warehouse shelves" 
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustriesAndWhyChooseUs;
