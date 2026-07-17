import React from 'react';
import { Calendar, Package, Users, MapPin } from 'lucide-react';

const AtAGlance = () => {
  const stats = [
    { icon: Calendar, value: "28+", label: "Years of Experience" },
    { icon: Package, value: "24+", label: "Product Categories" },
    { icon: Users, value: "100+", label: "Business Partners" },
    { icon: MapPin, value: "Pan India", label: "Supply Network" }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center uppercase tracking-wide mb-12">
          AT A GLANCE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <Icon className="w-8 h-8 text-brand-green mb-4" strokeWidth={1.5} />
                <h3 className="text-3xl font-bold text-primary mb-1">{stat.value}</h3>
                <p className="text-slate-600 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AtAGlance;
