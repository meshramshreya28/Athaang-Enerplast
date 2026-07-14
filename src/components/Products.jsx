import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: "Specialty Films",
    desc: "Includes: Lamination Films • Easy Peel Films • Anti-Fog Films • Laser Cut Films",
    image: "/product_1.png"
  },
  {
    title: "Flexible Packaging Films",
    desc: "Includes: BOPP • PET • CPP • PE Films",
    image: "/product_2.png"
  },
  {
    title: "Pharmaceutical Packaging",
    desc: "Includes: Blister Films • Pharma Films • API Liners",
    image: "/product_3.png"
  },
  {
    title: "Agricultural Solutions",
    desc: "Includes: Mulch Films • Greenhouse Films • Shade Nets",
    image: "/product_4.png"
  },
  {
    title: "Industrial Packaging",
    desc: "Includes: Stretch Films • Shrink Films • Surface Protection • Courier Bags • Security Bags • FIBC Liners",
    image: "/product_5.png"
  },
  {
    title: "Polymer Materials",
    desc: "Includes: Polymer Granules • Masterbatches • Fillers • Additives",
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
          <p className="text-slate-600 font-body text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Explore our comprehensive range of specialty films, polymer materials, and packaging solutions designed to meet diverse industrial requirements.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-brand-green transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden relative bg-slate-100 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Content Container */}
              <div className="flex-1 p-6 flex flex-col bg-white z-10 border-t border-slate-50">
                <div>
                  <h4 className="text-xl font-bold font-heading text-slate-900 mb-2">
                    {product.title}
                  </h4>
                  <p className="text-slate-500 text-sm">
                    {product.desc}
                  </p>
                </div>
                <button className="mt-auto pt-6 text-brand-green font-semibold flex items-center text-sm group-hover:text-green-700 transition-colors w-fit">
                  Explore
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h4 className="text-2xl md:text-3xl font-heading text-slate-900 mb-6">
            Can't find the product you're <span className="text-brand-green">looking for?</span>
          </h4>
          <Link to="/products" className="bg-brand-green text-white md:bg-transparent md:border-2 md:border-brand-green md:text-brand-green px-8 py-3 rounded-xl font-semibold text-base inline-flex items-center md:hover:bg-brand-green md:hover:text-white transition-colors group">
            View All Products
            <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Products;
