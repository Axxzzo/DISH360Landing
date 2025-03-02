import { Instagram, Mail, Phone } from 'lucide-react';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About DISH360 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-300">What's DISH360</h3>
            <p className="text-amber-400">
              DISH360 is your ultimate dining companion, bringing restaurant menus to life through immersive 3D visualization and authentic reviews.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-amber-400 hover:text-amber-200 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-amber-400 hover:text-amber-200 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-400 hover:text-amber-200 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-300">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-amber-300" />
                <a 
                  href="mailto:dish360lk@gmail.com" 
                  className="text-amber-400 hover:text-amber-200 transition-colors"
                >
                  dish360lk@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Instagram size={20} className="mr-2 text-amber-300" />
                <a 
                  href="https://www.instagram.com/dish.360" 
                  className="text-amber-400 hover:text-amber-200 transition-colors"
                >
                  @dish.360
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-amber-300" />
                <span className="text-amber-400">+94 75 690 4366</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-amber-300" />
                <span className="text-amber-400">+94 75 690 4366</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-amber-800/50 text-center">
          <p className="text-amber-400">© 2024 DISH360. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;