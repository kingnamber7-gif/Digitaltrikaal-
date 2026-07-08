import React from 'react';
import { useRouter, Link } from '../components/Router';
import { PORTFOLIO_CATEGORIES, SHOWCASE_WEBSITES } from '../data';
import { getServiceIcon } from './Home';
import { ExternalLink, ChevronRight, Globe2, FolderGit2, Sparkles, MessageCircle } from 'lucide-react';
import { PagePath } from '../types';

export default function Portfolio() {
  const { navigate } = useRouter();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-[#0A0A0A] text-white" id="portfolio-page-container">
      
      {/* Hero Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#121212] to-[#0A0A0A] border-b border-white/5" id="portfolio-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs text-[#FFD500] uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
            <Link href="/" className="hover:underline text-gray-400">Home</Link>
            <span className="text-gray-600">/</span>
            <span>Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight">
            Our Work & Case Proof
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Real projects. Real results. Explore our actual design folders, campaign videos, and hosted web applications custom-developed for clients.
          </p>
        </div>
      </section>

      {/* Main Grid: Categories Showcase */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="portfolio-categories-block">
        
        {/* Core Showcase Category Intro */}
        <div className="text-center md:text-left mb-12">
          <span className="text-xs text-[#FFD500] font-bold uppercase tracking-widest">Client Proof Folders</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mt-1">Creative Folders & Visuals</h2>
          <p className="text-sm text-gray-400 mt-2 max-w-2xl">
            Click any folder to open the official, secure Google Drive asset gallery containing live work deliverables, high-CTR graphics, and edited vertical clips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {PORTFOLIO_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="group p-8 bg-[#121212] border border-white/5 rounded-2xl hover:border-[#FFD500]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FFD500]/10 transition-colors">
                  {getServiceIcon(cat.iconName, "w-6 h-6 text-[#FFD500]")}
                </div>
                <h3 className="text-xl font-bold group-hover:text-[#FFD500] transition-colors mb-2">
                  {cat.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              <div className="border-t border-white/5 pt-4">
                <a
                  href={cat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`portfolio-folder-link-${idx}`}
                  className="w-full py-3 bg-white/5 hover:bg-[#FFD500] hover:text-[#0A0A0A] border border-white/10 hover:border-[#FFD500] text-white text-xs sm:text-sm font-bold rounded-lg flex items-center justify-center gap-2 transition-all group-hover:scale-[1.02]"
                >
                  View Folder <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Special Sub-Page Card Link - AI Web Development */}
        <div className="p-1 bg-gradient-to-r from-[#FFD500]/40 via-yellow-600/20 to-transparent rounded-2xl" id="portfolio-special-web">
          <div className="p-8 sm:p-12 bg-[#0C0C0C] rounded-[15px] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFD500]/10 border border-[#FFD500]/20 rounded-full text-xs font-semibold text-[#FFD500]">
                <Globe2 size={14} /> Custom Development
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
                AI Web Development Portfolio
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                We develop fast-loading, highly polished, and responsive web platforms. Browse our curated showcase of {SHOWCASE_WEBSITES.length} live web applications built with beautiful CSS layouts, custom typography, and high performance scores.
              </p>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <Link
                href="/portfolio/ai-web-development"
                id="portfolio-special-web-btn"
                className="w-full lg:w-auto px-8 py-4 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-bold rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,213,0,0.25)]"
              >
                Browse Live Web Showcases <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* Trust Quote CTA */}
      <section className="py-24 bg-[#121212] border-t border-b border-white/5 text-center" id="portfolio-bottom-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold">
            Want a Premium Asset Like These For Your Brand?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Whether you want custom YouTube high-CTR thumbnails, automated Facebook ads graphics, vertical viral edits, or a React landing page, we design it beautifully.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleContactClick}
              id="portfolio-cta-btn-contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-bold rounded-lg transition-all"
            >
              Contact Ankit Now
            </button>
            <a
              href="https://wa.me/919352392906"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
            >
              Chat on WhatsApp <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
