import React from 'react';
import { useRouter, Link } from '../components/Router';
import { SERVICES, PORTFOLIO_CATEGORIES, CERTIFICATIONS, REVIEWS } from '../data';
import { PagePath } from '../types';
import {
  ArrowRight,
  Star,
  Award,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Clock,
  ExternalLink,
  ChevronRight,
  Globe,
  Cpu,
  Sparkles,
  Image as ImageIcon,
  Zap,
  Bot,
  Megaphone,
  Search,
  Facebook,
  BookOpen,
  Video,
  Play
} from 'lucide-react';
import { motion } from 'motion/react';

// Dynamic icon mapper for Lucide elements
export function getServiceIcon(name: string, className = "w-6 h-6 text-[#FFD500]") {
  switch (name) {
    case 'Globe': return <Globe className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Image': return <ImageIcon className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Bot': return <Bot className={className} />;
    case 'Megaphone': return <Megaphone className={className} />;
    case 'Search': return <Search className={className} />;
    case 'Facebook': return <Facebook className={className} />;
    case 'BookOpen': return <BookOpen className={className} />;
    case 'Video': return <Video className={className} />;
    case 'Play': return <Play className={className} />;
    default: return <Sparkles className={className} />;
  }
}

export default function Home() {
  const { navigate } = useRouter();
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log("Video autoplay blocked or delayed:", err);
      });
    }
  }, []);

  const handleBookConsultation = () => {
    navigate('/contact');
  };

  // 4 steps of timeline
  const timelineSteps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'We map your target objectives, audience profiles, and existing tech stack.'
    },
    {
      num: '02',
      title: 'Strategy & Planning',
      desc: 'We map out custom workflows, user wireframes, and design references.'
    },
    {
      num: '03',
      title: 'Design & Development',
      desc: 'Our modular build pipeline outputs modern code, crisp imagery, and fast integrations.'
    },
    {
      num: '04',
      title: 'Launch & Support',
      desc: 'We coordinate live DNS launches, workflow tests, and proactive maintenance.'
    }
  ];

  return (
    <div className="bg-[#0A0A0A] text-white overflow-hidden" id="home-page-container">
      
      {/* 1. HERO SECTION WITH BACKGROUND VIDEO OVERLAY */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden" id="hero-section">
        
        {/* Background Video element */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          referrerPolicy="no-referrer"
          src="https://lh3.googleusercontent.com/pw/AP1GczN-hs_11A3qOaoAFnzxvtPVI_p2aJv-9dNGo4l3dtHaDTc8z9Xw8gAU_Sckflir4lMVDIx8hFiuUiYeS98j_S3k_j99uspDFRgjy9Lg_o2gaS2iG1M=m22"
          poster="https://lh3.googleusercontent.com/pw/AP1GczN-hs_11A3qOaoAFnzxvtPVI_p2aJv-9dNGo4l3dtHaDTc8z9Xw8gAU_Sckflir4lMVDIx8hFiuUiYeS98j_S3k_j99uspDFRgjy9Lg_o2gaS2iG1M=w1280-h720-p-k-no"
          className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
        >
          <source src="https://lh3.googleusercontent.com/pw/AP1GczN-hs_11A3qOaoAFnzxvtPVI_p2aJv-9dNGo4l3dtHaDTc8z9Xw8gAU_Sckflir4lMVDIx8hFiuUiYeS98j_S3k_j99uspDFRgjy9Lg_o2gaS2iG1M=m22" type="video/mp4" />
          <source src="https://lh3.googleusercontent.com/pw/AP1GczN-hs_11A3qOaoAFnzxvtPVI_p2aJv-9dNGo4l3dtHaDTc8z9Xw8gAU_Sckflir4lMVDIx8hFiuUiYeS98j_S3k_j99uspDFRgjy9Lg_o2gaS2iG1M=m18" type="video/mp4" />
          <source src="https://lh3.googleusercontent.com/pw/AP1GczN-hs_11A3qOaoAFnzxvtPVI_p2aJv-9dNGo4l3dtHaDTc8z9Xw8gAU_Sckflir4lMVDIx8hFiuUiYeS98j_S3k_j99uspDFRgjy9Lg_o2gaS2iG1M=w600-h315-k-no-m18" type="video/mp4" />
        </video>

        {/* Video overlay with slightly adjusted opacity to make 80% video shine while keeping text readable */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0A0A0A]" />
        
        {/* Futuristic grid mesh background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px] opacity-45" />

        {/* Ambient yellow accent spheres */}
        <div className="absolute top-1/4 left-1/10 w-80 h-80 rounded-full bg-[#FFD500]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-[#FFD500]/5 blur-[150px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-[#FFD500]/10 border border-[#FFD500]/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#FFD500]"
              >
                <Award size={14} /> 20+ Certifications • 4.9/5 Client Rating
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.1]"
              >
                Building the Future, <br />
                <span className="text-[#FFD500]">One Innovation</span> at a Time
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
              >
                AI Solutions. Website Development. Digital Marketing. <br className="hidden sm:inline" />
                All engineered under one roof to scale your organic audience and revenue.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
              >
                <button
                  onClick={handleBookConsultation}
                  id="hero-primary-cta"
                  className="w-full sm:w-auto px-8 py-4 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,213,0,0.25)] flex items-center justify-center gap-2.5"
                >
                  Book a Free Consultation <ArrowRight size={18} />
                </button>
                <Link
                  href="/services"
                  id="hero-secondary-cta"
                  className="w-full sm:w-auto text-center px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-lg transition-all duration-200"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            {/* Hero Founder Circle Showcase Card */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative group"
              >
                {/* Yellow frame background glow */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-[#FFD500] to-yellow-600 opacity-20 blur-xl group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                
                <div className="relative bg-[#121212] border border-white/10 p-6 rounded-2xl max-w-sm flex flex-col items-center text-center shadow-2xl">
                  {/* Circular Frame for photo */}
                  <div className="w-40 h-40 rounded-full border-4 border-[#FFD500] overflow-hidden bg-zinc-800 flex items-center justify-center mb-6 relative">
                    <img
                      src="https://lh3.googleusercontent.com/pw/AP1GczMZnmLAoGrse52L26BmYozGnG25xE1Oib5VlV2ZA7zlq70nnNKQyJ4BsFRuJfO7jHv9WMd7LPxFi0cqRd9zuFbBZsZFyuSX9PPsrHi2FqQUe6UtJFk=s400-c"
                      alt="Ankit Kumar"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    {/* Actual visual indicator badge */}
                    <div className="absolute bottom-0 inset-x-0 bg-[#FFD500] text-[#0A0A0A] font-bold text-[10px] uppercase py-0.5 tracking-wider">
                      Ankit Kumar
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold">Ankit Kumar</h3>
                  <p className="text-xs text-[#FFD500] font-medium uppercase tracking-widest mt-1">Founder & Lead Engineer</p>
                  
                  <div className="h-[1px] w-full bg-white/10 my-4" />
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    "I build high-performance web systems and integrate AI agent automations that empower creators, business owners, and learners globally."
                  </p>

                  <div className="flex gap-1 mt-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="fill-[#FFD500] text-[#FFD500]" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SHORT INTRO SECTION */}
      <section className="py-24 bg-white text-[#0A0A0A] relative" id="intro-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs text-yellow-600 font-bold uppercase tracking-widest block">Core Mission</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                Who is Digital Trikaal?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                <strong>Digital Trikaal</strong> is a technology platform founded by Ankit Kumar, specializing in AI, website development, and digital marketing. We help individuals and businesses grow with smart digital solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We sit uniquely at the crossroads of advanced AI education and elite agency services. Whether you are a student hungry to acquire industry-leading certifications or a business scaling organic client flows, our full-stack power delivers unmatched results.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  id="intro-learn-more-link"
                  className="inline-flex items-center gap-2 font-bold text-[#0A0A0A] hover:text-yellow-600 group transition-all"
                >
                  Meet Ankit & Read Our Story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative p-2 bg-zinc-100 rounded-3xl border border-zinc-200">
                <div className="bg-[#0A0A0A] text-white p-8 rounded-2xl space-y-6">
                  <div className="text-3xl font-display font-bold text-[#FFD500]">20+</div>
                  <h4 className="text-lg font-semibold">AI & Technical Credentials</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Earned across verified international learning channels including Google Cloud Skills Boost, Simplilearn, UniAthena, and United Latino Students Association.
                  </p>
                  <Link
                    href="/certification"
                    id="intro-certs-link"
                    className="text-xs text-[#FFD500] font-semibold flex items-center gap-1.5 hover:underline"
                  >
                    View Verified Credentials <ExternalLink size={12} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. TRUSTED BY / SOCIAL PROOF BAR */}
      <section className="bg-gradient-to-r from-zinc-900 to-black py-16 border-y border-white/5" id="social-proof-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-6 font-semibold">Trusted by Clients Globally</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto items-center mb-6">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#FFD500]">⭐ 4.9/5</div>
              <p className="text-xs text-gray-400 uppercase mt-2 tracking-wider">Average Client Rating</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#FFD500]">67+</div>
              <p className="text-xs text-gray-400 uppercase mt-2 tracking-wider">Happy Client Reviews</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#FFD500]">15+</div>
              <p className="text-xs text-gray-400 uppercase mt-2 tracking-wider">Project Showcases</p>
            </div>
          </div>

          <p className="text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed mt-6">
            "Delivering high-quality AI solutions, website development, and digital marketing services with a focus on quality, innovation, and client satisfaction."
          </p>
        </div>
      </section>

      {/* 4. PROBLEM AWARENESS SECTION */}
      <section className="py-24 bg-[#0A0A0A] relative" id="problems-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-[#FFD500] font-bold uppercase tracking-widest">Market Realities</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mt-2">
              Struggling to Keep Up With AI & Digital Growth?
            </h2>
            <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
              Growing an online brand in 2026 is extremely complex. Businesses face massive bottlenecks trying to manage multiple independent digital vectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFD500]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6 font-display font-bold text-lg">
                01
              </div>
              <h3 className="text-xl font-semibold mb-3">Outdated Websites</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Slow-loading templates with zero search optimization lose more than half of potential client conversions before they even click "Get Quote".
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFD500]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 font-display font-bold text-lg">
                02
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Integration Overhead</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                You know AI can automate hours of administrative tasks, but you have zero time to read api logs, fine-tune models, or code custom agents.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFD500]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 font-display font-bold text-lg">
                03
              </div>
              <h3 className="text-xl font-semibold mb-3">Stagnant Lead Inbound</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Relying purely on inconsistent word-of-mouth creates massive business volatility. You need predictable, targeted search and social campaign funnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOLUTION SECTION */}
      <section className="py-20 bg-zinc-900 border-t border-b border-white/5" id="solution-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs text-[#FFD500] font-bold uppercase tracking-widest">The Trikaal Answer</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mt-2 mb-6">
            One Partner. Every Digital Solution You Need.
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed font-light mb-8">
            Digital Trikaal completely eliminates vendor chaos. We coordinate your visual design, code your high-speed web apps, set up autonomous AI integrations, and direct conversion campaigns — all unified by a cohesive technical strategy.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-gray-400">
            <span className="flex items-center gap-2 text-white bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <CheckCircle size={14} className="text-[#FFD500]" /> 100% Custom React Build
            </span>
            <span className="flex items-center gap-2 text-white bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <CheckCircle size={14} className="text-[#FFD500]" /> Context-Trained AI Agents
            </span>
            <span className="flex items-center gap-2 text-white bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <CheckCircle size={14} className="text-[#FFD500]" /> High-CTR Creative Assets
            </span>
          </div>
        </div>
      </section>

      {/* 6. SERVICES PREVIEW GRID */}
      <section className="py-24 bg-[#0A0A0A]" id="services-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs text-[#FFD500] font-bold uppercase tracking-widest">Our Capabilities</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mt-2">
                Engineered for High Performance
              </h2>
            </div>
            <Link
              href="/services"
              id="services-preview-all"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#FFD500] font-semibold hover:underline group"
            >
              View Full Services Directory <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={s.slug}
                id={`service-preview-card-${s.slug.split('/').pop()}`}
                className="group p-6 bg-[#121212] border border-white/5 rounded-2xl hover:border-[#FFD500]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-[#FFD500]/10 transition-colors">
                    {getServiceIcon(s.iconName)}
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-[#FFD500] transition-colors mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {s.shortDesc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-[11px] text-[#FFD500] font-semibold uppercase tracking-wider opacity-80 group-hover:opacity-100">
                  Explore Solution <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROCESS/HOW IT WORKS */}
      <section className="py-24 bg-white text-[#0A0A0A] relative" id="process-timeline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs text-yellow-600 font-bold uppercase tracking-widest">Our Method</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mt-2">
              Our 4-Step Strategic Timeline
            </h2>
            <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
              We build with structured precision. Here is the direct roadmap from our initial free strategic consultation to live product deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Timeline connector line on desktop */}
            <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-[1px] bg-zinc-200 z-0" />

            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 bg-zinc-50 border border-zinc-100 p-6 rounded-2xl space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#0A0A0A] text-[#FFD500] font-display font-bold text-sm flex items-center justify-center shadow-lg mx-auto md:mx-0">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-[#0A0A0A]">{step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. REVIEWS PREVIEW */}
      <section className="py-24 bg-zinc-950 border-t border-b border-white/5" id="testimonials-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs text-[#FFD500] font-bold uppercase tracking-widest">Social Proof</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mt-2">
                What Our Clients Achieve
              </h2>
            </div>
            <Link
              href="/reviews"
              id="reviews-preview-all"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#FFD500] font-semibold hover:underline group"
            >
              See All 67+ Happy Reviews <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REVIEWS.slice(0, 2).map((rev) => (
              <div
                key={rev.id}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-[#FFD500] text-[#FFD500]" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed italic mb-6">
                    "{rev.content}"
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div>
                    <h4 className="text-sm font-semibold">{rev.name}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{rev.role}</p>
                  </div>
                  {rev.verified && (
                    <span className="text-[10px] bg-[#FFD500]/10 border border-[#FFD500]/20 text-[#FFD500] font-bold uppercase px-2 py-0.5 rounded tracking-wider">
                      Verified Client
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section className="relative py-24 bg-gradient-to-r from-zinc-900 to-black overflow-hidden" id="final-cta-band">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#FFD500_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight">
            Let's Build Something <span className="text-[#FFD500]">Amazing Together!</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Stop losing leads with slow templates. Partner with Digital Trikaal to develop responsive web applications, configure custom AI agent bots, and command targeted conversion campaigns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleBookConsultation}
              id="final-cta-btn-contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-bold rounded-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,213,0,0.25)]"
            >
              Contact Us Now
            </button>
            <a
              href="https://wa.me/919352392905"
              target="_blank"
              rel="noopener noreferrer"
              id="final-cta-btn-whatsapp"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
            >
              Chat on WhatsApp <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
