import React from 'react';
import { Link } from '../components/Router';
import { Play, Youtube, ExternalLink, Sparkles, BookOpen, Clock, ListVideo } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  videoCount: number;
  description: string;
  link: string;
  imageUrl: string;
  tags: string[];
}

const COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'AI Power',
    videoCount: 9,
    description: 'Explore the power of AI tools and how they can transform the way you work, create, and grow.',
    link: 'https://youtube.com/playlist?list=PLSiyhBiV61ko6m4xbcunXryRC3UWBSdlC&si=n8IAnQA7DHGYcN57',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPLzj-WLEuFMbyDJZN_226YNilb9DTY387lxIQPwJk2vZUwFoRbFi-UF_VoQu_fFGhfJ2bcNamXZ-S1lBuMgh3MrYz6qIpGO5Tj8dXdTPRt5eMPZFk=s800',
    tags: ['Artificial Intelligence', 'Productivity', 'Future Tech']
  },
  {
    id: 'course-2',
    title: 'Trending AI Videos',
    videoCount: 17,
    description: 'Stay updated with the latest trending AI tools, apps, and techniques everyone\'s talking about.',
    link: 'https://youtube.com/playlist?list=PLSiyhBiV61kpfoozVVsLvmGbO1ZCblWf9&si=P_XIhFzQurOsAYto',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPzshoGcd0DWtka1ZptlBiNK4Q9FeNsnW4DAAer6oezTUVJRIdcSa3EGXlAJ2nmU7niSuuufYRuyCZ3lhLh5xeCynpNqsoksHT24bl5zhhL7Kl6cuo=s800',
    tags: ['AI Trends', 'New Tools', 'AI Growth']
  },
  {
    id: 'course-3',
    title: 'Long AI Videos',
    videoCount: 16,
    description: 'In-depth, detailed AI tutorials for those who want to go beyond the basics.',
    link: 'https://youtube.com/playlist?list=PLSiyhBiV61koKSXjj_djZwzr0tjAtXOoV&si=AMdCpJLsrKuV3_VP',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMtKqiW2tri2ln2F6sZHkbQDJmEwmp5BBIejV4hs7eSVzhB2ZgDKSV9O3YxCiM2EgnvwrM6zmkuC9vTjMilq132V_FSkSe04KkVqAUaebzEr_I0rqQ=s800',
    tags: ['Deep Dive', 'Tutorials', 'Masterclass']
  },
  {
    id: 'course-4',
    title: 'Viral AI Video',
    videoCount: 13,
    description: 'See how creators are using AI to make viral, scroll-stopping content.',
    link: 'https://youtube.com/playlist?list=PLSiyhBiV61kqb4fLTWx-9HCNuELJrLiv5&si=NRSTLOCbI8jHd24e',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPnmcW8dM4QsDjG6NuokIRULNqOv5nN5h4HuCjaLPa4T25ei6Gs6sCRXsYRhINtY5s-bGGjWhGrx7BcBm8YzwVbwgT4dhos0ygiWRxLB332mUArULM=s800',
    tags: ['Viral Marketing', 'Short-Form', 'Content Creation']
  },
  {
    id: 'course-5',
    title: 'Earning',
    videoCount: 16,
    description: 'Practical strategies to earn online using AI, digital skills, and smart tools.',
    link: 'https://youtube.com/playlist?list=PLSiyhBiV61koGB_szJCrKOKLEm00irI13&si=LZvoCjzQOQehr93Z',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPHHlvNU64eefmq0lRFbWSr_HTR2zECkydbrhFbpWR4a1PtmpE9GyV-SqWHmjanukpwyiCike4WWGqbewNw2SJPZevXJ5tErj-_JYg0G9uLqyAe6dE=s800',
    tags: ['Online Earning', 'Side Hustles', 'Monetization']
  },
  {
    id: 'course-6',
    title: 'Skills',
    videoCount: 26,
    description: 'Build in-demand digital skills with step-by-step, easy-to-follow tutorials.',
    link: 'https://youtube.com/playlist?list=PLSiyhBiV61kphiBr4wMTRw0IKH4oKtjTa&si=lo7iU2sihUFSjozM',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNxHMV7n5Q5iMAvXHl9Mt8I-wJU4-I1rRIHB1UNSF3ItfJUlGoZT7vBxDHU_iR3L2tSiQXQpWtHD8Q2WM_s6Oi_mEQ_HYFXRqMkwhKl1ulpPt6TfOM=s800',
    tags: ['Digital Skills', 'Self-Education', 'Step-By-Step']
  },
  {
    id: 'course-7',
    title: 'Freelancing',
    videoCount: 6,
    description: 'Learn how to start and grow as a freelancer using AI and digital tools.',
    link: 'https://youtube.com/playlist?list=PLSiyhBiV61ko0QOUmyBOQfDUifuZM9e6f&si=lHGL3evv4m3lL-R3',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNHRMBh3feRjCy54cKRxtOmvaPyGT2CDI4slTb4Ex9qUA6LJmUp2kHdDxve9J5MjfQhefNIME1ES4E-1xQYFw5tKBvJJgGRct67QqzfSB0mtcy3aUo=s800',
    tags: ['Freelance Roadmap', 'Client Acquisition', 'Upwork & Fiverr']
  }
];

export default function Courses() {
  return (
    <div className="bg-[#0A0A0A] text-white" id="courses-page-container">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#121212] to-[#0A0A0A] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="text-xs text-[#FFD500] uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
            <Link href="/" className="hover:underline text-gray-400">Home</Link>
            <span className="text-gray-600">/</span>
            <span>Courses</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight">
            Free Courses & Playlists
          </h1>
          
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Learn AI, digital skills, and online earning — 100% free, straight from our YouTube channel.
          </p>

          <div className="pt-2">
            <a
              href="https://youtube.com/@digitaltrikaal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#FFD500] text-[#FFD500] hover:bg-[#FFD500] hover:text-[#0A0A0A] font-bold text-sm rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
              id="header-youtube-subscribe-btn"
            >
              <Youtube size={16} /> Subscribe on YouTube →
            </a>
          </div>
        </div>
      </section>

      {/* Courses / Playlist Grid Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="courses-grid-block">
        
        {/* 3-column on desktop, 2-column on tablet, 1-column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="group bg-[#121212] border border-white/5 hover:border-[#FFD500]/30 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,213,0,0.05)]"
            >
              {/* Thumbnail with aspect-ratio 16:9 */}
              <div className="relative aspect-video bg-zinc-800 overflow-hidden border-b border-white/5">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Visual "Play" indicator badge in the center */}
                <div className="absolute inset-0 bg-black/45 flex items-center justify-center opacity-85 group-hover:bg-black/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#FFD500] text-[#0A0A0A] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Play size={20} fill="currentColor" className="ml-1" />
                  </div>
                </div>

                {/* FREE badge at the top-left */}
                <span className="absolute top-3 left-3 bg-[#FFD500] text-[#0A0A0A] text-[10px] font-extrabold px-2 py-0.5 rounded tracking-wider uppercase shadow">
                  Free
                </span>

                {/* Video Count Badge */}
                <span className="absolute bottom-3 right-3 bg-[#0A0A0A]/90 backdrop-blur text-[11px] font-semibold px-2.5 py-1 rounded text-[#FFD500] border border-[#FFD500]/20 flex items-center gap-1">
                  <ListVideo size={12} /> {course.videoCount} Videos
                </span>
              </div>

              {/* Course Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold group-hover:text-[#FFD500] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                    {course.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Category / Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {course.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] bg-white/5 text-gray-400 px-2 py-0.5 rounded border border-white/5">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Watch Playlist CTA */}
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`watch-playlist-${course.id}`}
                    className="w-full py-3 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-extrabold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-[0_2px_10px_rgba(255,213,0,0.1)]"
                  >
                    Watch Playlist <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Bottom CTA Banner */}
      <section className="py-24 bg-[#121212] border-t border-white/5 text-center" id="courses-bottom-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex p-3 rounded-full bg-[#FFD500]/10 text-[#FFD500]">
            <Sparkles size={24} />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            Want More Free Learning Content?
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            New videos added regularly. Subscribe so you never miss an update.
          </p>

          <div className="pt-2">
            <a
              href="https://youtube.com/@digitaltrikaal"
              target="_blank"
              rel="noopener noreferrer"
              id="courses-bottom-subscribe-btn"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] font-extrabold text-sm sm:text-base rounded-full shadow-[0_0_20px_rgba(255,213,0,0.15)] hover:shadow-[0_0_25px_rgba(255,213,0,0.35)] transition-all duration-300 hover:scale-105"
            >
              <Youtube size={18} fill="currentColor" /> Subscribe on YouTube →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
