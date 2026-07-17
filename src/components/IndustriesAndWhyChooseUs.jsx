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
    { icon: ShoppingBag, name: "FMCG" },
    { icon: Building, name: "Infrastructure" },
    { icon: Factory, name: "Industrial Manufacturing" },
    { icon: Package, name: "Flexible Packaging" }
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
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Industries */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-primary uppercase tracking-wide mb-8">
              INDUSTRIES WE SERVE
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                return (
                  <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-sm">
                    <Icon className="w-8 h-8 text-brand-green mb-3" strokeWidth={1.5} />
                    <span className="text-[11px] font-bold text-slate-700 leading-tight">
                      {ind.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Why Choose Us */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-primary uppercase tracking-wide mb-8">
              WHY CHOOSE ATHAANG ENERPLAST?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-3/5 space-y-4">
                {reasons.map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-slate-700 text-sm font-medium leading-relaxed">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-full sm:w-2/5">
                <img 
                  src="/hero_bg.png" 
                  alt="Warehouse shelves" 
                  className="w-full h-full object-cover rounded-md min-h-[160px]"
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
