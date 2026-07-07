import React from 'react';
import { Link } from '../components/Router';
import { Download, Sparkles, BookOpen, ExternalLink, HelpCircle } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  coverUrl: string;
  downloadUrl: string;
  description: string;
}

const BOOKS: Book[] = [
  {
    id: 'book-1',
    title: 'Rich Dad Poor Dad',
    coverUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMcVYP8PK6Z6p0_81Nqnvovs0sXL-H7k3IptCojVSyQ9cbbud6ku0M8YHzkCTjSi-IMPvbEGOpD3o-5nuZxWnGsAJYcQGm61TUsnuFvqyAhfn5pxEs=s800',
    downloadUrl: 'https://docs.google.com/document/d/1-3tfu_CoZ-mKHD1zGKZLs8sj04WxOczz/edit?usp=drivesdk&ouid=109873184291413051889&rtpof=true&sd=true',
    description: 'A finance classic that changes the way you think about money, assets, and building real wealth.'
  },
  {
    id: 'book-2',
    title: 'Emotional Intelligence',
    coverUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNaqkcE1bkDL8gqxBkrv3fTMaDr_HawUh8hkENBs6FOEUm_Y6ZpVoumd6WAUfRJ76a6jZVM5h046Me0cIoY8IJgcJd2ejYXD3fzzsvcn9GZ3F8weOY=s800',
    downloadUrl: 'https://docs.google.com/document/d/1YMkJ0nujcTvk-a_5ilfdr_WQQAEfdym-/edit?usp=drivesdk&ouid=109873184291413051889&rtpof=true&sd=true',
    description: 'Understand and master your emotions to improve relationships, decisions, and personal growth.'
  },
  {
    id: 'book-3',
    title: 'Psychology Of Money',
    coverUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMHM1qt3eYSPtoQnJ2YjIjccvV7KWJQ9ZFvkgSWeUfAyXvfk1yxC4zndbawkFLoTxp2SBdlwFWatVz_atDU7w2UnadaFv6kGuekv5j2spW_QTY-d1U=s800',
    downloadUrl: 'https://docs.google.com/document/d/1jrzQviIelGG2OxQEO698q6P2g3Nuy5vU/edit?usp=drivesdk&ouid=109873184291413051889&rtpof=true&sd=true',
    description: 'Timeless lessons on how people think about money — and how to make smarter financial decisions.'
  }
];

export default function DigitalProducts() {
  return (
    <div className="bg-[#0A0A0A] text-white" id="products-page-container">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#121212] to-[#0A0A0A] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs text-[#FFD500] uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
            <Link href="/" className="hover:underline text-gray-400">Home</Link>
            <span className="text-gray-600">/</span>
            <span>Digital Products</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
            Digital Products
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Free E-Books to help you master money, mindset, and self-growth — download instantly.
          </p>
        </div>
      </section>

      {/* Product Grid Showcase Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="products-grid-block">
        
        {/* 3-column responsive grid on desktop, 1-column stacked layout on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BOOKS.map((book) => (
            <div
              key={book.id}
              className="group bg-[#121212] border border-white/5 hover:border-[#FFD500]/30 rounded-[20px] overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,213,0,0.06)]"
            >
              {/* Cover Image Container */}
              <div className="p-6 pb-0 flex justify-center">
                <div className="relative aspect-[3/4] w-full max-w-[240px] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 shadow-xl group-hover:scale-[1.03] transition-all duration-500">
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {/* Small yellow FREE pill badge positioned on top-right of the cover */}
                  <span className="absolute top-3 right-3 bg-[#FFD500] text-[#0A0A0A] text-[10px] font-extrabold px-2.5 py-1 rounded-full tracking-wider uppercase shadow-md z-10">
                    FREE
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 pt-5 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FFD500] transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light min-h-[40px]">
                    {book.description}
                  </p>
                </div>

                <div className="space-y-2.5">
                  {/* Download Button */}
                  <a
                    href={book.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`download-book-${book.id}`}
                    className="w-full py-3.5 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-extrabold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-[0_4px_15px_rgba(255,213,0,0.15)]"
                  >
                    Download Now <Download size={15} className="animate-bounce" />
                  </a>
                  
                  {/* Helper Text */}
                  <div className="text-center">
                    <span className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">
                      No sign-up required
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Notification Block */}
        <div className="mt-16 p-8 sm:p-10 bg-white/5 border border-white/10 rounded-2xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-2 max-w-xl">
            <h4 className="text-lg font-bold flex items-center justify-center sm:justify-start gap-2 text-white">
              <Sparkles className="text-[#FFD500]" size={18} /> New Resources Added Weekly
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              We frequently release premium PDF books, action checklists, and prompt files to help creators level up. Subscribe to our official channels for real-time announcements.
            </p>
          </div>
          <a
            href="https://youtube.com/@digitaltrikaal"
            target="_blank"
            rel="noopener noreferrer"
            id="products-youtube-sub"
            className="shrink-0 px-6 py-3 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] text-xs sm:text-sm font-extrabold rounded-lg flex items-center gap-2 transition-transform hover:scale-105"
          >
            <BookOpen size={16} /> Subscribe for More
          </a>
        </div>

      </section>

      {/* CTA Bottom Banner */}
      <section className="py-20 bg-[#121212] border-t border-white/5 text-center" id="products-bottom-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            Need a Custom Digital Product or Integration?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed font-light">
            We collaborate with digital educators and agencies to research content and draft guides. Coordinate your custom projects directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              id="products-bottom-cta-contact-btn"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-extrabold rounded-lg transition-all"
            >
              Contact Ankit
            </Link>
            <a
              href="https://wa.me/919352392905"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-lg transition-all"
            >
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
