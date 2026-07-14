import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#071826] text-white pt-12 pb-4 border-t border-white/5 font-body">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3.5fr_1fr_1fr_1fr_1.5fr] gap-8 lg:gap-4 mb-10">
          
          {/* Brand Column */}
          <div className="flex flex-col items-start pr-4 lg:pr-12">
            <Link to="/" className="flex items-center space-x-5 mb-5">
              <div className="relative flex items-center justify-center overflow-hidden h-14 w-14">
                <img src="/logo.png" alt="Athaang Enerplast Logo" className="h-full w-full object-contain object-center" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-heading font-semibold tracking-tight text-white leading-none">
                  ATHAANG <span className="text-[#16A34A]">ENERPLAST</span>
                </span>
                <span className="text-[10px] tracking-[0.1em] text-white/70 uppercase mt-1">
                  Specialty Films & Polymer Solutions
                </span>
              </div>
            </Link>
            
            <p className="text-[#B8C2CC] text-sm leading-relaxed mb-6">
              A trusted supplier and trading company specializing in specialty films, polymer materials, and industrial packaging solutions. Delivering quality, reliability, and long-term value.
            </p>

            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-[#16A34A] hover:text-white hover:border-[#16A34A] transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="mailto:info@athaangenerplast.com" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-[#16A34A] hover:text-white hover:border-[#16A34A] transition-all duration-300">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-[#16A34A] hover:text-white hover:border-[#16A34A] transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-heading font-bold text-[13px] uppercase tracking-wider mb-1.5">Quick Links</h4>
            <div className="h-[2px] w-6 bg-[#16A34A] mb-4"></div>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Home</Link></li>
              <li><Link to="/about" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">About Us</Link></li>
              <li><Link to="/products" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Products</Link></li>
              <li><Link to="/industries" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Industries We Serve</Link></li>
              <li><Link to="/quality" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Quality Commitment</Link></li>
              <li><Link to="/contact" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-heading font-bold text-[13px] uppercase tracking-wider mb-1.5">Products</h4>
            <div className="h-[2px] w-6 bg-[#16A34A] mb-4"></div>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Blown Films</a></li>
              <li><a href="#" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Cast Films</a></li>
              <li><a href="#" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Specialty Films</a></li>
              <li><a href="#" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Barrier Films</a></li>
              <li><a href="#" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Stretch Films</a></li>
              <li><a href="#" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Protective Films</a></li>
              <li><a href="#" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Polymer Materials</a></li>
              <li><a href="#" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Packaging Solutions</a></li>
            </ul>
          </div>

          {/* Industries Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-heading font-bold text-[13px] uppercase tracking-wider mb-1.5">Industries</h4>
            <div className="h-[2px] w-6 bg-[#16A34A] mb-4"></div>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Food Packaging</a></li>
              <li><a href="#" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Pharmaceuticals</a></li>
              <li><a href="#" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">E-Commerce</a></li>
              <li><a href="#" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Agriculture</a></li>
              <li><a href="#" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Textile</a></li>
              <li><a href="#" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Automotive</a></li>
              <li><a href="#" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Industrial</a></li>
              <li><a href="#" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">Consumer Goods</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-heading font-bold text-[13px] uppercase tracking-wider mb-1.5">Contact Us</h4>
            <div className="h-[2px] w-6 bg-[#16A34A] mb-4"></div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                <span className="text-[#B8C2CC] text-[13px] leading-relaxed">
                  G-706, G-Wing<br />
                  Pramukh Sahaj Corporation<br />
                  Muktanand Marg, New Challa<br />
                  Vapi – 396191<br />
                  Gujarat, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+919145288176" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">+91 91452 88176</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href="mailto:athaangenerplast@gmail.com" className="text-[#B8C2CC] hover:text-white transition-colors text-[13px]">athaangenerplast@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[#B8C2CC] text-xs">
            © 2024 <span className="text-[#16A34A] font-semibold">ATHAANG ENERPLAST</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-[#B8C2CC]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
