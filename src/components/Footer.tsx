import React from 'react';
import { Link, useRouter } from './Router';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PagePath } from '../types';

export default function Footer() {
  const { navigate } = useRouter();

  const handleQuickLink = (path: PagePath) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-[#ffd500]/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex flex-col" id="footer-logo-link">
              <span className="text-2xl font-display font-bold">
                <span className="text-[#FFD500]">Digital</span> Trikaal
              </span>
              <span className="text-xs text-[#FFD500] font-light mt-0.5 tracking-wider">
                Building the Future, One Innovation at a Time
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Digital Trikaal is the premier personal brand and tech agency of Ankit Kumar, uniting cutting-edge AI content, responsive web architectures, and viral marketing solutions.
            </p>
            {/* Social Icons Row */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://youtube.com/@digitaltrikaal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#FFD500] hover:border-[#FFD500] transition-all hover:scale-110"
                aria-label="YouTube Channel"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.522 3.5 12 3.5 12 3.5s-7.522 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.029 0 12 0 12s0 3.971.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.478 20.5 12 20.5 12 20.5s7.522 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.971 24 12 24 12s0-3.971-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/digitaltrikaal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#FFD500] hover:border-[#FFD500] transition-all hover:scale-110"
                aria-label="Instagram Profile"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/19B4gMQ5Dh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#FFD500] hover:border-[#FFD500] transition-all hover:scale-110"
                aria-label="Facebook Page"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/digital-trikaal-a8a54b308?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#FFD500] hover:border-[#FFD500] transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://t.me/digitaltrikaal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#FFD500] hover:border-[#FFD500] transition-all hover:scale-110"
                aria-label="Telegram Channel"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M11.944 0C5.344 0 0 5.344 0 12s5.344 12 11.944 12c6.6 0 12-5.344 12-12s-5.4-12-12-12zm5.562 8.161c-.18.706-2.274 9.593-2.384 10.051-.11.458-.33.6-.587.625-.565.056-1.11-.225-1.658-.585-.862-.562-1.349-.911-2.184-1.462-.966-.637-.34-.988.21-1.562.145-.15 2.666-2.444 2.715-2.651.006-.026.01-.122-.048-.174-.058-.052-.142-.036-.203-.022-.087.02-1.477.94-4.17 2.756-.395.27-.753.404-1.074.397-.353-.007-1.03-.199-1.534-.362-.619-.2-1.112-.307-1.07-.648.022-.178.267-.36.735-.548 2.875-1.251 4.793-2.078 5.753-2.481 2.735-1.148 3.303-1.348 3.674-1.354.081-.001.264.019.382.116.1.082.128.193.136.271.009.076.017.243.003.364z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-sm font-semibold text-[#FFD500] uppercase tracking-wider mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleQuickLink('/')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('/about')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('/services')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('/portfolio')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Portfolio Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('/certification')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Certifications
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links Part 2 */}
          <div>
            <h3 className="text-sm font-semibold text-[#FFD500] uppercase tracking-wider mb-6">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleQuickLink('/digital-products')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Digital Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('/reviews')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Client Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('/contact')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink('/portfolio/ai-web-development')}
                  className="text-gray-400 hover:text-white transition-colors text-left flex items-center gap-1.5"
                >
                  Web Showcases <ExternalLink size={12} className="text-[#FFD500]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold text-[#FFD500] uppercase tracking-wider mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-[#FFD500] mt-1 shrink-0" />
                <a href="mailto:digitaltrikaal@gmail.com" className="hover:text-white transition-colors break-all">
                  digitaltrikaal@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-[#FFD500] mt-1 shrink-0" />
                <div>
                  <a href="tel:+919352392906" className="block hover:text-white transition-colors">
                    +91 93523 92906
                  </a>
                  <a href="https://wa.me/919352392906" target="_blank" rel="noopener noreferrer" className="block hover:text-[#FFD500] text-xs text-[#FFD500]/80 mt-0.5 transition-colors">
                    Click to Chat (WhatsApp)
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#FFD500] mt-1 shrink-0" />
                <span className="text-xs leading-relaxed">
                  Shop No. 5, Basement, Jeevan Jyoti Hospital, City Centre Mall, Near Bhadra, Rajasthan 335501
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Digital Trikaal. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <button onClick={() => handleQuickLink('/contact')} className="hover:text-white transition-colors">
              Support
            </button>
            <button onClick={() => handleQuickLink('/services')} className="hover:text-white transition-colors">
              Terms & Services
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
