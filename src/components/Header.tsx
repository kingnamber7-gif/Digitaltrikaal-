import React, { useState } from 'react';
import { useRouter, Link } from './Router';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PagePath } from '../types';

export default function Header() {
  const { currentPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' as PagePath },
    { name: 'About Us', path: '/about' as PagePath },
    { name: 'Services', path: '/services' as PagePath },
    { name: 'Portfolio', path: '/portfolio' as PagePath },
    { name: 'Certification', path: '/certification' as PagePath },
    { name: 'Digital Products', path: '/digital-products' as PagePath },
    { name: 'Courses', path: '/courses' as PagePath },
    { name: 'Reviews', path: '/reviews' as PagePath },
    { name: 'Contact Us', path: '/contact' as PagePath },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#ffd500]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Brand Title */}
          <Link href="/" className="flex flex-col group" id="header-logo-link">
            <div className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
              <span className="text-[#FFD500] group-hover:brightness-110 transition-all">Digital</span>
              <span className="text-white">Trikaal</span>
            </div>
            <span className="text-[10px] sm:text-xs text-[#FFD500] font-light tracking-widest mt-0.5">
              Building the Future, One Innovation at a Time
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  id={`nav-desktop-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#FFD500]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#FFD500]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>



          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-trigger"
              className="p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-t border-[#ffd500]/10 bg-[#0A0A0A] overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5">
              {navItems.map((item) => {
                const isActive =
                  item.path === '/'
                    ? currentPath === '/'
                    : currentPath.startsWith(item.path);

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    id={`nav-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-[#FFD500]/10 text-[#FFD500] border-l-4 border-[#FFD500] pl-3'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 px-4">
                <Link
                  href="/contact"
                  id="mobile-header-cta"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-3 text-center bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-bold rounded-xl transition-all"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
