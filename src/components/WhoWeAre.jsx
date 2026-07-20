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
    <section className="pt-20 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch lg:-mx-8">

          {/* Left: Image with Overlay Card */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src="/hero_bg.png"
              alt="Team discussing"
              className="w-full h-full min-h-[400px] lg:min-h-full object-cover rounded-2xl shadow-[0_20px_50px_rgba(8,17,31,0.2)]"
            />
            {/* Floating Glass Card */}
            <div className="absolute top-6 left-6 bg-white/40 backdrop-blur-md border border-white/40 p-6 max-w-[220px] rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
              <p className="text-sm font-bold text-slate-900 leading-relaxed tracking-wide uppercase">
                TRUSTED SOURCING.<br />CONSISTENT QUALITY.<br />LASTING PARTNERSHIPS.
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <h2 className="text-3xl font-heading font-bold text-primary mb-3 uppercase tracking-wide">
                WHO WE ARE
              </h2>
              <div className="h-[3px] w-16 bg-gradient-to-r from-brand-green to-transparent rounded-full"></div>
            </div>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
              <strong>ATHAANG ENERPLAST</strong> is a premier trading firm specializing in Multilayer Extrusion Films, Plastic Granules, and Colour Masterbatches.
              <br /><br />
              With over 28 years of technical expertise, we supply top-tier packaging and film solutions—including Pharma, Lamination, and protective films—to diverse industries across the nation.
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
