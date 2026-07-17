import React from 'react';
import { MessageSquare, Users, FileText, ShieldCheck, Truck, Headphones } from 'lucide-react';

const OurSupplyProcess = () => {
  const process = [
    { icon: MessageSquare, name: "Inquiry" },
    { icon: Users, name: "Consultation" },
    { icon: FileText, name: "Product\nSelection" },
    { icon: ShieldCheck, name: "Quality\nVerification" },
    { icon: Truck, name: "Supply &\nDelivery" },
    { icon: Headphones, name: "After Sales\nSupport" }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center uppercase tracking-wide mb-16">
          OUR SUPPLY PROCESS
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
          
          {/* Connecting Arrow Lines (Desktop only) */}
          <div className="hidden md:flex absolute top-[36px] left-[10%] right-[10%] justify-between px-8 z-0">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="flex-1 flex justify-center items-center">
                <span className="text-brand-green font-bold text-2xl">→</span>
              </div>
            ))}
          </div>

          {process.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center relative z-10 w-full md:w-auto">
                <div className="w-[72px] h-[72px] rounded-full border-2 border-slate-200 bg-white flex items-center justify-center mb-4 mx-auto hover:border-brand-green transition-colors">
                  <Icon className="w-8 h-8 text-slate-800" strokeWidth={1.5} />
                </div>
                <p className="text-[13px] font-bold text-primary leading-snug whitespace-pre-line">
                  {step.name}
                </p>
                {/* Mobile down arrow */}
                {idx < process.length - 1 && (
                  <div className="md:hidden mt-6 text-brand-green font-bold text-2xl">
                    ↓
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default OurSupplyProcess;
