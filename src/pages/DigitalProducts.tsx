import React from 'react';
import { Link } from '../components/Router';
import { Download, Sparkles, BookOpen, ExternalLink, HelpCircle } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  coverUrl: string;
  downloadUrl: string;
  description: string;
  type?: 'free' | 'paid';
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
  },
  {
    id: 'book-4',
    title: '48 Laws Of Power',
    coverUrl: 'https://lh3.googleusercontent.com/pw/AP1GczO49T4qBnc3Cf4RPeAXjwT_0QQJgaN5PjB01h9wT6doi-p58tafbxlCXtvCpxQkjtg002ikjcMY7ABSy2AIu71hr8ZoKJ9Jpfwjfvw-EYLDJbNpI2g=s800',
    downloadUrl: 'https://docs.google.com/document/d/1yVZXtNRFz_ek0_MFRCUN6a_mopmdRZ-_/edit?usp=drivesdk&ouid=109873184291413051889&rtpof=true&sd=true',
    description: 'Master the timeless principles of influence, strategy, leadership, and power used throughout history.',
    type: 'free'
  },
  {
    id: 'book-5',
    title: 'Deep Work',
    coverUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPlmL5H4wmHoeQJ7d1x75Krst0HSdi1v4vM25jZgWTbs52rY4IT6XbJJ0gV1dch-5AZx2rydkkZ7vNrNt-4XXgbvkStsmB27roqMGzrucK1unggZMc=s800',
    downloadUrl: 'https://docs.google.com/document/d/1e9uBzEXS_Xq0Wudha6bls1jod2_hfQrp/edit?usp=drivesdk&ouid=109873184291413051889&rtpof=true&sd=true',
    description: 'Learn how intense focus can help you produce better work, master valuable skills, and achieve extraordinary results.',
    type: 'free'
  },
  {
    id: 'book-6',
    title: 'IKIGAI',
    coverUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNsm00qwVa11xUS_BwCMYd8699zKQhUweG77IqhUt82M5GizneNSVFSo-okhHRZp-ImeJSn2isbOhkeEOmx5Ytx_40pe-uEhsf4Byi5Vn5KDGQ8KWA=s800',
    downloadUrl: 'https://docs.google.com/document/d/19Fq5W4_vv6zFKPZedPrFZj8plPkE028p/edit?usp=drivesdk&ouid=109873184291413051889&rtpof=true&sd=true',
    description: 'Discover the Japanese philosophy for finding purpose, happiness, and a meaningful life every day.',
    type: 'free'
  },
  {
    id: 'book-7',
    title: 'The Prince',
    coverUrl: 'https://lh3.googleusercontent.com/pw/AP1GczM_V0pA0Ocrwmc3CeME3kvRAmWF49HoRXJNBr4SataFGTKlhNtD4EdP7ot2JhrPBQjN-aJUBkrq-RQfzHUrZ8BQVrqWOeYt3dnWLs_6U8cwp6J_OZc=s800',
    downloadUrl: 'https://docs.google.com/document/d/1E88-oTuedCJOQ2hpZdRRpcH8Tre8Lz0D/edit?usp=drivesdk&ouid=109873184291413051889&rtpof=true&sd=true',
    description: 'Explore the classic guide to politics, leadership, strategy, and practical decision-making by Niccolò Machiavelli.',
    type: 'free'
  },
  {
    id: 'book-8',
    title: 'Arthashastra',
    coverUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOMTCR1Bnr3iJ0RYkaqW-0WhOEkKaWyAn8__VqGJKpKv2wG7oGPIsa8slWecVs0P9BcDazwmUryy7FCGYASUI-GinQhmu4JKhEQ2UWk-lGpbxZ-Fu8=s800',
    downloadUrl: 'https://docs.google.com/document/d/1l9Y3OJjsWRXFOaLUsmvywDQkpOqqfTtR/edit?usp=drivesdk&ouid=109873184291413051889&rtpof=true&sd=true',
    description: "Learn Chanakya's timeless wisdom on governance, economics, leadership, diplomacy, and strategic thinking.",
    type: 'free'
  },
  {
    id: 'book-9',
    title: 'Chanakya Niti',
    coverUrl: 'https://lh3.googleusercontent.com/pw/AP1GczO95ajtJItObCQlrDYMKtVyc9-v9eJ3ObeUx7fANey3tNfNJ4bBNLjOz7Xm8Yz38CHJsG8tw3voVNBVgWYcJbSRwMS2hCxMBRSKJxsvQY8i7BciKHs=s800',
    downloadUrl: 'https://docs.google.com/document/d/1sLRBm3l_-zz_sTA29T6Rqj7DE7AdhvMj/edit?usp=drivesdk&ouid=109873184291413051889&rtpof=true&sd=true',
    description: 'Powerful life lessons on wisdom, discipline, success, relationships, and leadership from Acharya Chanakya.',
    type: 'free'
  },
  {
    id: 'book-10',
    title: 'The Success',
    coverUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOoJo8yhC8-WgdivtVy2cItKF1huWy3Mh2XHO3WnO36At61DnLhQ3MzryVXjnTauZV6cYp0WOiAgrQCT3q-85mWYEHkZKEII-aUZq5MJfgZjgEKGMw=s800',
    downloadUrl: 'https://rzp.io/rzp/cCFJqBH',
    description: 'The essence of 8 world-famous success books in one practical Hindi book, packed with actionable life lessons to help you grow faster.',
    type: 'paid'
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
          {BOOKS.map((book) => {
            const isPaid = book.type === 'paid';
            const badgeBgClass = isPaid ? 'bg-green-600 text-white' : 'bg-[#FFD500] text-[#0A0A0A]';
            const badgeText = isPaid ? 'PAID' : 'FREE';
            
            const btnBgClass = isPaid 
              ? 'bg-green-600 hover:bg-green-500 text-white shadow-[0_4px_15px_rgba(34,197,94,0.15)]' 
              : 'bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] shadow-[0_4px_15px_rgba(255,213,0,0.15)]';
              
            const btnText = isPaid ? 'Buy Now 🚀' : (book.id === 'book-1' || book.id === 'book-2' || book.id === 'book-3') ? 'Download Now' : 'Download Now ⬇';
            const microText = isPaid ? 'Instant secure checkout' : 'No sign-up required';

            return (
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
                    {/* Small tag pill badge positioned on top-right of the cover */}
                    <span className={`absolute top-3 right-3 ${badgeBgClass} text-[10px] font-extrabold px-2.5 py-1 rounded-full tracking-wider uppercase shadow-md z-10`}>
                      {badgeText}
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
                    {/* Download/Buy Button */}
                    <a
                      href={book.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`download-book-${book.id}`}
                      className={`w-full py-3.5 ${btnBgClass} font-extrabold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]`}
                    >
                      {btnText}
                      {!isPaid && (book.id === 'book-1' || book.id === 'book-2' || book.id === 'book-3') && (
                        <Download size={15} className="animate-bounce" />
                      )}
                    </a>
                    
                    {/* Helper Text */}
                    <div className="text-center">
                      <span className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">
                        {microText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
              href="https://wa.me/916350131379"
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
