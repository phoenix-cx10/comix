import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#42625F] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src='/assets/nav-logo.png' className='w-10 h-10 object-contain' alt='Comix Logo' />
              <span className='font-mono font-bold text-2xl'>Comix</span>
            </Link>
            <p className="text-gray-200 mb-4 leading-relaxed">
              Your premier destination for quality books. Discover new worlds, explore different perspectives, 
              and immerse yourself in stories that matter.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-200 hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-gray-200 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-200 hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="/" className="text-gray-200 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-200 hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/" className="text-gray-200 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>support@comix.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>123 Book Street, Readerville</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Comix. All rights reserved.
            </p>
            <div className="flex gap-6 mt-2 md:mt-0">
              <Link to="" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;