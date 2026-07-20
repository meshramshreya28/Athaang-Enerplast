import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 font-body">
      {/* Header Section */}
      <div className="bg-primary py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero_bg.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-paragraph text-lg max-w-2xl mx-auto">
            Get in touch with us for inquiries, quotes, or support. Our team is ready to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-2">Get In Touch</h2>
              <h3 className="text-3xl font-heading font-bold text-slate-900 mb-6">We'd love to hear from you</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you have a question about our products, need a custom packaging solution, or want to explore a partnership, our team is here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Office Address</h4>
                  <p className="text-slate-600 mt-1">G-706, G-Wing, Pramukh Sahaj Corporation, Muktanand Marg, New Challa, Vapi – 396191, Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Phone Number</h4>
                  <div className="text-slate-600 mt-1 space-y-1">
                    <p><span className="font-medium text-slate-800">Mr. Ashutosh Khobragade:</span> <br/><a href="tel:+919145288176" className="hover:text-brand-green transition-colors">+91 91452 88176</a></p>
                    <p><span className="font-medium text-slate-800">Mr. Atul Jadhav:</span> <br/><a href="tel:+919356448807" className="hover:text-brand-green transition-colors">+91 93564 48807</a> / <a href="tel:+919513301888" className="hover:text-brand-green transition-colors">+91 95133 01888</a></p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Email Address</h4>
                  <p className="text-slate-600 mt-1"><a href="mailto:athaangenerplast@gmail.com" className="hover:text-brand-green transition-colors">athaangenerplast@gmail.com</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Business Hours</h4>
                  <p className="text-slate-600 mt-1">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100">
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all" placeholder="john@company.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all" placeholder="How can we help?" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all resize-none" placeholder="Write your message here..."></textarea>
              </div>

              <button type="button" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30">
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
