import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  const isDarkHeaderPage = ['/'].includes(location.pathname);
  const shouldHaveWhiteBg = isScrolled || !isDarkHeaderPage;
  const shouldBeDarkText = isScrolled || !isDarkHeaderPage;

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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[64px] md:h-[72px] lg:h-[80px] flex items-center"
      style={{
        background: shouldHaveWhiteBg ? 'rgba(255,255,255,0.95)' : 'rgba(12,18,32,0.35)',
        backdropFilter: shouldHaveWhiteBg ? 'blur(18px)' : 'blur(18px)',
        borderBottom: shouldHaveWhiteBg ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255,255,255,0.08)'
      }}
    >
      <div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 md:space-x-5 -ml-2 lg:-ml-8">
          <div className="relative flex items-center justify-center overflow-hidden h-[40px] w-[40px] md:h-[52px] md:w-[52px]">
            <img 
              src="/logo.png" 
              alt="Athaang Enerplast Logo" 
              className="h-full w-full object-contain object-center mix-blend-multiply"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className={`text-[20px] md:text-[30px] font-heading font-semibold tracking-tight leading-none ${shouldBeDarkText ? 'text-slate-900' : 'text-white'}`}>
              ATHAANG <span className="text-brand-green">ENERPLAST</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-[40px] -mr-2 lg:-mr-8">
          <ul className="flex gap-[36px]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`relative text-[16px] font-[500] uppercase tracking-[0.05em] transition-colors ${
                    shouldBeDarkText ? 'hover:text-brand-green' : 'hover:text-[#22C55E]'
                  } ${
                    location.pathname === link.path
                      ? (shouldBeDarkText ? 'text-brand-green' : 'text-white')
                      : (shouldBeDarkText ? 'text-slate-700' : 'text-[rgba(255,255,255,0.88)]')
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
          
          <Link 
            to="/contact" 
            className="w-[160px] h-[48px] rounded-[10px] flex items-center justify-center text-[16px] font-semibold transition-all hover:scale-105 bg-[#0B1324] hover:bg-[#16213E] text-white"
            style={{ boxShadow: '0 10px 30px rgba(0,0,0,.18)' }}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-8 h-8 ${shouldBeDarkText ? 'text-slate-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-8 h-8 ${shouldBeDarkText ? 'text-slate-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg py-4 px-6 flex flex-col space-y-4 border-t border-gray-100"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-medium text-[16px] w-fit ${
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
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-[160px] h-[48px] rounded-[10px] flex items-center justify-center bg-primary text-white font-semibold hover:bg-primary-hover transition-colors">
            Get a Quote
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
