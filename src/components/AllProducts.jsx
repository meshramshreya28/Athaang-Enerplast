import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const allProducts = [
  {
    title: "LAMINATION FILMS",
    desc: "Used for food stuffs (snacks, paneer, tea, rice), beverages (shampoo, oil, milk, water), and non-food/industrial packing."
  },
  {
    title: "VCI FILMS",
    desc: "Volatile Corrosion Inhibitor films protecting metal parts (automotive, electronics) from corrosion."
  },
  {
    title: "ANTIFOG FILMS",
    desc: "Prevents moisture pooling for fruits, vegetables, meat & seafood. Suitable for hot & cold applications."
  },
  {
    title: "LASER CUT FILMS",
    desc: "High temp resistant surface protection films for Aluminium/SS sheets during laser cutting."
  },
  {
    title: "SHRINK FILMS",
    desc: "Packing for beverages, pharma bottles, paper, and glass industries."
  },
  {
    title: "STRETCH/CLING FILMS",
    desc: "Highly elastic film for securing goods. Available in manual/machine grades, transparent/colored, and VCI."
  },
  {
    title: "SURFACE PROTECTION/MASKING FILMS",
    desc: "Temporary barriers safeguarding SS, aluminium, glass, and tiles from scratches & dust."
  },
  {
    title: "MILK & OIL PACKING FILM",
    desc: "Surface printing films with high strength. Barrier films (Nylon/EvOH) available for extended shelf life."
  },
  {
    title: "PHARMA GRADE FILMS (FOIL LAMINATION)",
    desc: "Made from RM grade 1070LA17. Low SIT & easy tear for blister packing of capsules/tablets."
  },
  {
    title: "PHARMA GRADE LINERS FOR API PACKING",
    desc: "Food grade (LDPE & HMHDPE) and antistatic liners complying with FDA regulations for API packing."
  },
  {
    title: "COMPOSTABLE & BIO-DEGRADABLE FILMS",
    desc: "Eco-friendly, plant-based films breaking down naturally. Available in cling, stretch, mulch, and more."
  },
  {
    title: "COURIER & SECURITY BAGS/FILMS",
    desc: "Tamper-evident, durable shipping envelopes and heavy-duty pouches for confidential transit."
  },
  {
    title: "MULCHING FILMS",
    desc: "Protective agricultural barrier suppressing weed growth & conserving moisture. Available in multiple colors."
  },
  {
    title: "SHADE NETS",
    desc: "UV-stabilized HDPE meshes regulating sunlight (50%, 75%, 90%) for agriculture and nurseries."
  },
  {
    title: "POLYHOUSE/GREEN HOUSE FILM",
    desc: "Specialized UV-stabilized barrier for light optimization, thermal regulation, and crop protection."
  },
  {
    title: "GEOMEMBRANE SHEET",
    desc: "Impermeable liner for waterproofing in civil engineering, agriculture, and water management."
  },
  {
    title: "ACID CO-POLYMER FILMS",
    desc: "Nucrel & Surlyn films offering strong adhesion, low SIT, outstanding hot tack, and chemical resistance."
  },
  {
    title: "EASY PEEL FILMS (APEEL FILMS)",
    desc: "Airtight seals that peel smoothly without residue. Ideal for food trays, medical trays, and blister packs."
  },
  {
    title: "POF (POLYOLEFIN) SHRINK FILMS",
    desc: "Premium, clear, high-tensile shrink material. Non-toxic, 100% recyclable, FDA compliant."
  },
  {
    title: "EVA (ETHYLENE VINYL ACETATE) FILMS",
    desc: "Solar EVA film used as a crucial bonding agent to encapsulate and protect photovoltaic (PV) solar cells."
  },
  {
    title: "FIBC LINERS & JUMBO BAGS",
    desc: "Protective inserts safeguarding bulk materials from leaks and contamination. Various shapes & forms."
  },
  {
    title: "MASTERBATCHES, ADDITIVES & FILLERS",
    desc: "Color masterbatches, slip/antiblocking additives, and CaCo3/Talc/Sodium fillers for all extrusion processes."
  },
  {
    title: "POLYMERS & RAW MATERIALS",
    desc: "Branded granules including LLDPE, LDPE, HDPE, HMHDPE, Metallocenes, PP, Nucrel & Surlyn."
  },
  {
    title: "REPROCESS MATERIALS",
    desc: "High-quality reprocessed materials (LDPE, Heavy Duty, HMHDPE) for cost-effective manufacturing."
  }
];

const Products = () => {
  return (
    <section id="products" className="pt-16 md:pt-20 pb-16 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header section */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-3">
            Our Product Range
          </h2>
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading text-slate-900 mb-4 text-center">
              Comprehensive Packaging & Polymer Solutions
            </h3>

            {/* Custom Center Underline */}
            <div className="flex items-center justify-center gap-2 mb-6 w-full">
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#16A34A] rounded-full"></div>
              <div className="w-2 h-2 rounded-full bg-[#16A34A]"></div>
              <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#16A34A] rounded-full"></div>
            </div>
          </div>
          
          <p className="max-w-3xl mx-auto text-slate-600 text-[15px] sm:text-base leading-relaxed">
            From specialized lamination films and agricultural shade nets to high-quality polymer granules, we provide 24 extensive categories of industrial solutions tailored to your specific needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-green/10 transition-colors">
                  <Box className="w-6 h-6 text-brand-green" />
                </div>
                
                <h4 className="text-lg font-heading font-bold text-primary mb-3 uppercase tracking-wide leading-snug">
                  {product.title}
                </h4>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {product.desc}
                </p>

                <div className="mt-auto">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-[13px] font-bold text-brand-green uppercase tracking-wider group-hover:text-primary transition-colors"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
