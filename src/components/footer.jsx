import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#42625F] text-white">
      {/* Footer */}
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company details */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-1 mb-2">
              <img src='/images/nav-logo.png' className='w-10 h-10 object-contain' alt='Comix Logo' />
              <span className='font-mono font-bold text-2xl'>Comix</span>
            </Link>
            <p className="text-gray-300 mb-4 ml-4 font-archivo leading-relaxed">
              Your premier destination for quality books. Discover new worlds, explore different perspectives, 
              and immerse yourself in stories that matter.
            </p>
            <div className="flex ml-3   gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/40 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/40 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/40 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold font-mono text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 font-archivo hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 font-archivo hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-gray-300 font-archivo hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 font-archivo hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* privacy policy*/}
          <div>
            <h3 className="font-semibold font-mono text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 font-archivo hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="/" className="text-gray-300 font-archivo hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-300 font-archivo hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/" className="text-gray-300 font-archivo hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact details */}
        <div className="border-t font-mono border-white/20 mt-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-30 ml-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>comix@comix.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>151 book store, elbaf</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 font-archivo">
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