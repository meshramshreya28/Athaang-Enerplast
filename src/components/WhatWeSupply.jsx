import React from 'react';

const WhatWeSupply = () => {
  const supplies = [
    { title: "Specialty Films", image: "/hero_bg.png" },
    { title: "Polymer Materials", image: "/hero_bg.png" },
    { title: "Packaging Solutions", image: "/hero_bg.png" },
    { title: "Industrial Supply", image: "/hero_bg.png" },
    { title: "Technical Consultation", image: "/hero_bg.png" },
    { title: "Pan India Distribution", image: "/hero_bg.png" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center uppercase tracking-wide mb-12">
          WHAT WE SUPPLY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {supplies.map((item, idx) => (
            <div key={idx} className="relative rounded overflow-hidden shadow-sm group cursor-pointer aspect-square lg:aspect-[3/4]">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 bg-primary py-3 px-2">
                <p className="text-white text-xs font-bold text-center leading-tight">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeSupply;
