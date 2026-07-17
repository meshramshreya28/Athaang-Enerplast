import React from 'react';
import { Calendar, Users, ShieldCheck, MapPin } from 'lucide-react';

const WhoWeAre = () => {
  const features = [
    { icon: Calendar, text: "28+ Years of Industry Experience" },
    { icon: Users, text: "Strong & Reliable Supplier Network" },
    { icon: ShieldCheck, text: "Quality Assured Products" },
    { icon: MapPin, text: "Pan India Supply & Timely Delivery" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Image with Overlay Card */}
          <div className="w-full lg:w-1/2 relative">
            <img 
              src="/hero_bg.png" 
              alt="Team discussing" 
              className="w-full h-[400px] object-cover rounded-md"
            />
            {/* Floating White Card */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-6 max-w-[220px] rounded shadow-lg">
              <p className="text-sm font-bold text-slate-800 leading-snug tracking-wide uppercase">
                TRUSTED SOURCING.<br/>CONSISTENT QUALITY.<br/>LASTING PARTNERSHIPS.
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6 uppercase tracking-wide">
              WHO WE ARE
            </h2>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
              We are a supplier and trading company committed to delivering high-performance specialty films, polymer materials, and packaging solutions for a wide range of industries.
            </p>

            <div className="space-y-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-full border border-brand-green/30 flex items-center justify-center flex-shrink-0 bg-white">
                      <Icon className="w-5 h-5 text-brand-green" strokeWidth={2.5} />
                    </div>
                    <span className="text-slate-800 font-bold text-[15px]">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
