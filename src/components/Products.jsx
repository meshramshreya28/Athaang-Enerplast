import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: "Specialty Films",
    desc: "Includes: Lamination Films • Easy Peel Films • Anti-Fog Films • Laser Cut Films • Acid Co-Polymer Films",
    image: "/product_1.png"
  },
  {
    title: "Packaging Films",
    desc: "Includes: Milk & Oil Packing • Shrink Films • Stretch Films • POF Shrink • BOPP/PET Films",
    image: "/product_2.png"
  },
  {
    title: "Pharmaceutical Packaging",
    desc: "Includes: Pharma Grade Films (Foil Lamination) • API Packing Liners • Blister Films",
    image: "/product_3.png"
  },
  {
    title: "Agricultural Solutions",
    desc: "Includes: Mulching Films • Polyhouse/Green House Films • Shade Nets • Geomembrane Sheets",
    image: "/product_4.png"
  },
  {
    title: "Industrial & Security Bags",
    desc: "Includes: FIBC Liners & Jumbo Bags • Courier & Security Bags • Surface Protection Films",
    image: "/product_5.png"
  },
  {
    title: "Polymer Materials",
    desc: "Includes: Masterbatches • Fillers & Additives • Polymer Granules • Reprocess Materials",
    image: "/product_6.png"
  }
];

const Products = () => {
  return (
    <section id="products" className="pt-16 md:pt-20 pb-8 md:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header section */}
        <div className="text-center mb-[60px]">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-3">
            Our Product Range
          </h2>
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading text-slate-900 mb-4 text-center">
              Specialty Films & Packaging Solutions
            </h3>

            {/* Custom Center Underline */}
            <div className="flex items-center justify-center gap-2 mb-6 w-full">
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#16A34A] rounded-full"></div>
              <div className="w-2 h-2 rounded-full bg-[#16A34A]"></div>
              <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#16A34A] rounded-full"></div>
            </div>
          </div>
          
          <p className="max-w-2xl mx-auto text-slate-600 text-[15px] sm:text-base leading-relaxed">
            We offer a comprehensive range of high-performance polymer materials, from agricultural and pharmaceutical films to industrial packaging and masterbatches.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image Container with precise aspect ratio */}
              <div className="relative w-full h-[240px] overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Fallback pattern for when image is missing */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#16A34A_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('bg-slate-200');
                  }}
                />
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-white z-20">
                <h4 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-brand-green transition-colors duration-300">
                  {product.title}
                </h4>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  {product.desc}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <Link 
                    to="/products" 
                    className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-800 uppercase tracking-wider group-hover:text-brand-green transition-colors"
                  >
                    View details
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-green/10 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-green transition-colors"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/products">
            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] transition-all hover:scale-105 shadow-md hover:shadow-xl flex items-center gap-2 mx-auto">
              Explore All Categories
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Products;
