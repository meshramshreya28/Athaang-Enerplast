import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Network, ShieldCheck, Headset, ArrowRight } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Calendar,
      title: "28+",
      desc: "Years of Industry Expertise"
    },
    {
      icon: Network,
      title: "Strong",
      desc: "Supplier Network"
    },
    {
      icon: ShieldCheck,
      title: "Quality",
      desc: "Assured Products"
    },
    {
      icon: Headset,
      title: "Expert",
      desc: "Technical Support"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center pt-16 lg:pt-20 pb-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Main Premium Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-primary/10 z-10"></div>
              <img
                src="/about.png"
                alt="Corporate Meeting at Athaang Enerplast"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-green/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-3">
              Who We Are
            </h2>

            <div className="mb-6">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading text-slate-900 leading-tight mb-4">
                Trusted Supply Partner
              </h3>
              <div className="h-[3px] w-16 bg-gradient-to-r from-brand-green to-transparent rounded-full"></div>
            </div>

            <p className="text-slate-600 font-body text-lg leading-relaxed mb-6">
              ATHAANG ENERPLAST is a trusted supplier of specialty films, polymer materials, and packaging solutions. Backed by over 28 years of technical expertise and a strong supplier network, we help businesses source the right materials with consistent quality and dependable service.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="group flex items-center space-x-4 p-5 rounded-2xl bg-white border-2 border-brand-green shadow-lg md:border-gray-100 md:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:hover:border-brand-green md:hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg leading-tight">{feature.title}</div>
                      <div className="text-slate-500 text-sm leading-snug mt-1">{feature.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link to="/about" className="bg-primary text-white md:bg-transparent md:border-2 md:border-primary md:text-primary px-8 py-3 rounded-xl font-semibold text-base inline-flex items-center md:hover:bg-primary md:hover:text-white transition-colors group w-fit">
              Learn More
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
