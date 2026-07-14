import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Quality', path: '/quality' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm py-2' : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 md:space-x-5">
          <div className="relative flex items-center justify-center overflow-hidden h-10 w-10 md:h-14 md:w-14">
            <img 
              src="/logo.png" 
              alt="Athaang Enerplast Logo" 
              className="h-full w-full object-contain object-center mix-blend-multiply"
            />
          </div>
          <span className={`text-lg md:text-2xl font-heading font-semibold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            ATHAANG <span className="text-brand-green">ENERPLAST</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`relative text-[13px] font-bold uppercase tracking-[0.05em] transition-colors ${
                    isScrolled ? 'hover:text-brand-green' : 'hover:text-white'
                  } ${
                    location.pathname === link.path
                      ? (isScrolled ? 'text-brand-green' : 'text-white')
                      : (isScrolled ? 'text-slate-700' : 'text-white/80')
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-green rounded-full"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 bg-brand-green text-white hover:bg-hover shadow-lg">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-8 h-8 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-8 h-8 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg py-4 px-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-medium w-fit ${
                location.pathname === link.path ? 'text-brand-green' : 'text-slate-700 hover:text-brand-green'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-green rounded-full"></span>
              )}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-brand-green text-white px-6 py-3 rounded-xl font-semibold w-full text-center">
            Get a Quote
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
