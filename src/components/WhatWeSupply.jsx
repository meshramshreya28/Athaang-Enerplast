import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhatWeSupply = () => {
  const supplies = [
    { title: "Lamination Films", image: "/product_1.png" },
    { title: "VCI Films", image: "/product_2.png" },
    { title: "Shrink & Stretch Films", image: "/product_3.png" },
    { title: "Pharma Grade Films", image: "/product_4.png" },
    { title: "Masterbatches & Additives", image: "/product_5.png" },
    { title: "Polymer Granules", image: "/product_6.png" }
  ];

  return (
    <section className="pt-12 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center uppercase tracking-wide mb-12">
          WHAT WE SUPPLY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {supplies.map((item, idx) => (
            <div 
              key={idx} 
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl group cursor-pointer aspect-square lg:aspect-[3/4] border-2 border-transparent hover:border-brand-green transition-all duration-300"
            >
              {/* Image with zoom on hover */}
              <div className="absolute inset-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-4 lg:p-3 xl:p-4 flex flex-col justify-end">
                <h3 className="text-white text-sm md:text-base font-bold leading-tight mb-0 group-hover:-translate-y-1 transition-transform duration-300">
                  {item.title}
                </h3>
                
                {/* Learn More link - Hidden initially, appears on hover */}
                <div className="overflow-hidden h-0 group-hover:h-5 transition-all duration-300 ease-out mt-1">
                  <div className="flex items-center gap-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    <span className="text-brand-green text-[11px] font-bold uppercase tracking-wider">Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-green" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeSupply;
