import { ServiceDetail, PortfolioItem, Certificate, Product, Review } from './types';

export const SERVICES: ServiceDetail[] = [
  {
    slug: '/services/website-development',
    title: 'Website Development',
    shortDesc: 'Stunning, high-performance websites custom-built for creators and businesses to maximize conversions.',
    iconName: 'Globe',
    description: [
      'In the digital landscape, your website is your 24/7 virtual office and primary credibility builder. We build lightning-fast, ultra-responsive, and visually stunning web applications that do not just look pretty, but convert casual visitors into high-paying clients.',
      'By fusing state-of-the-art frontend frameworks with Conversion Rate Optimization (CRO) principles, we design web experiences that load instantly, feel intuitive on mobile devices, and position your personal brand at the absolute top of your industry.'
    ],
    whatsIncluded: [
      'Custom React & Tailwind CSS responsive development',
      'Mobile-first responsive architecture and layout design',
      'SEO optimization, microdata integration, and high performance',
      'Interactive visual components and animated sections',
      'Form integrations (Formspree, Webhooks) and direct WhatsApp triggers'
    ],
    whoThisIsFor: [
      'Creators wanting to launch an authoritative personal brand platform',
      'Local businesses aiming to scale their booking and inquiry rates',
      'Startups wanting a high-converting landing page that validates their product'
    ],
    whyChoose: 'Crafted with premium code structures and elite modern aesthetics — no bloated templates, just high-converting performance.'
  },
  {
    slug: '/services/ai-ads-generation',
    title: 'AI Ads Generation',
    shortDesc: 'Automated, high-performing advertising campaigns driven by generative intelligence.',
    iconName: 'Cpu',
    description: [
      'Stop wasting thousands of dollars on expensive graphic designers and slow agency iterations. Our AI Ads Generation service harnesses next-generation generative creative technology to craft hundreds of conversion-focused ad variations in minutes.',
      'We analyze high-performing ad creatives in your specific niche to generate targeted visual scripts, high-impact copywriting, and stunning layouts optimized to capture attention and lower your cost per acquisition (CPA).'
    ],
    whatsIncluded: [
      'AI-driven ad copywriting and headline creation',
      'Bulk visual variation design for multi-variant A/B testing',
      'Niche analysis and platform-specific format optimization',
      'High-click-through rate (CTR) design strategies'
    ],
    whoThisIsFor: [
      'E-commerce brands needing a high volume of visual creative testing',
      'Digital marketers seeking to lower client acquisition costs',
      'Creators launching digital products, courses, or exclusive communities'
    ],
    whyChoose: 'Harness the extreme speed and predictive performance of generative AI to scale your creative output without breaking your budget.'
  },
  {
    slug: '/services/ai-content-creation',
    title: 'AI Content Creation',
    shortDesc: 'High-quality viral content pipelines utilizing artificial intelligence for maximum social growth.',
    iconName: 'Sparkles',
    description: [
      'Consistency is the single biggest barrier to social media success. Our AI Content Creation systems streamline your entire ideation, scripting, and layout pipeline, enabling you to publish top-tier content across multiple platforms daily.',
      'From LinkedIn thought leadership posts to educational YouTube short-form scripts, we build tailored content engines that align perfectly with your unique personal voice while leveraging search algorithms for maximum reach.'
    ],
    whatsIncluded: [
      'AI-powered topic brainstorming and virality scoring',
      'Custom text model fine-tuning for your brand\'s unique tone of voice',
      'Multi-platform content scheduling templates and outlines',
      'Automated format conversion (e.g., Blog Post into 5 short-form threads)'
    ],
    whoThisIsFor: [
      'Busy founders wanting to build active public profiles on social channels',
      'YouTubers and podcasters seeking written educational content',
      'Agencies managing personal brands for multiple high-profile clients'
    ],
    whyChoose: 'Create content that sounds authentically like you, but is backed by predictive search and viral hook analytics.'
  },
  {
    slug: '/services/thumbnail-design',
    title: 'Thumbnail Design',
    shortDesc: 'Click-maximizing YouTube thumbnails engineered to skyrocket your Click-Through Rate (CTR).',
    iconName: 'Image',
    description: [
      'A great video is entirely useless if nobody clicks to watch it. Your thumbnail is the single most critical factor in the YouTube algorithm. We design high-contrast, story-driven, and psychology-backed thumbnails that compel viewers to click.',
      'By analyzing facial expressions, color theories, and visual hierarchy, we ensure your thumbnail stands out instantly in a crowded feed, maximizing impressions and driving rapid subscriber growth.'
    ],
    whatsIncluded: [
      'High-contrast visual design optimized for mobile screens',
      'Custom brand color pairing and layout templates',
      'A/B test-ready alternate thumbnail concepts',
      'Psychology-driven text placement and composition'
    ],
    whoThisIsFor: [
      'Professional YouTubers looking to increase existing channel CTR',
      'Creators seeking a reliable design partner with rapid turnarounds',
      'Businesses utilizing video marketing to drive product sales'
    ],
    whyChoose: 'With proven experience designing click-worthy visual assets, we know exactly what makes viewers stop scrolling and click.'
  },
  {
    slug: '/services/ai-automation',
    title: 'AI Automation',
    shortDesc: 'Eliminate repetitive tasks and optimize business workflows with autonomous AI integrations.',
    iconName: 'Zap',
    description: [
      'Your team should spend time building relationships and closing deals, not copying and pasting data. Our AI Automation services map out your repetitive manual workflows and automate them completely using cutting-edge AI pipelines.',
      'Whether it is automated lead qualifying, smart email routing, CRM data enrichment, or autonomous content publishing, we design friction-free systems that run flawlessly in the background, giving you back hours of valuable time.'
    ],
    whatsIncluded: [
      'Custom integration of AI tools with Zapier, Make, and API webhooks',
      'Automated database and CRM updating systems',
      'AI-driven email triage, drafting, and auto-response systems',
      'Frictionless onboarding and workflow optimization audits'
    ],
    whoThisIsFor: [
      'Agencies and freelancers managing high volumes of incoming client leads',
      'E-commerce brands looking to streamline customer service ticketing',
      'Solopreneurs seeking to maximize output without hiring full-time staff'
    ],
    whyChoose: 'We build production-ready automations that actually work, ensuring zero dropped leads and consistent system performance.'
  },
  {
    slug: '/services/ai-agent-development',
    title: 'AI Agent Development',
    shortDesc: 'Autonomous digital workers designed to handle customer service, research, and support.',
    iconName: 'Bot',
    description: [
      'The era of static chatbots is over. We build highly context-aware, autonomous AI Agents that can actively reason, access external APIs, query custom databases, and perform complex tasks directly on behalf of your users.',
      'Our AI agents serve as digital employees — onboarded with your brand guidelines, product manuals, and custom data, ready to assist customers or perform deep researches 24/7 with human-level accuracy.'
    ],
    whatsIncluded: [
      'Advanced prompt engineering and system-level custom instruction setups',
      'External API integrations for live data querying (Inventory, Booking, Weather)',
      'Vector database setup for semantic search and large context retrieval',
      'Web-based custom agent widgets ready for easy embed'
    ],
    whoThisIsFor: [
      'Tech startups wanting to add advanced conversational layers to their platform',
      'Service businesses wanting automated round-the-clock booking coordinators',
      'Content hubs looking to provide instant contextual search tools for their library'
    ],
    whyChoose: 'We engineer state-of-the-art agent architectures utilizing industry-standard LLM interfaces for extreme reliability.'
  },
  {
    slug: '/services/social-media-marketing',
    title: 'Social Media Marketing',
    shortDesc: 'Comprehensive organic growth and branding strategies across all major platforms.',
    iconName: 'Megaphone',
    description: [
      'Organic reach is the most powerful compounding asset a modern business can build. We design and execute complete social media marketing campaigns that align with your business goals, building genuine communities around your personal brand.',
      'By combining trending formats, analytical scheduling, and consistent messaging, we transform social platforms into massive organic lead generation funnels for your core digital services.'
    ],
    whatsIncluded: [
      'Comprehensive content strategy mapping and platform audits',
      'High-impact hook development and engagement strategies',
      'Community building, comments moderation, and conversation triggers',
      'Analytics reports tracking profile visits, link clicks, and follower growth'
    ],
    whoThisIsFor: [
      'Personalities wanting to convert social media followers into active buyers',
      'Local service brands wanting to become local authorities in their niche',
      'Consultants looking for high-ticket clients via inbound LinkedIn messages'
    ],
    whyChoose: 'We focus purely on conversion-focused social media marketing — not just vanity metrics, but real business leads.'
  },
  {
    slug: '/services/google-ads',
    title: 'Google Ads',
    shortDesc: 'High-intent search campaign setup and optimization to capture immediate customer demand.',
    iconName: 'Search',
    description: [
      'When someone searches for your service on Google, they are ready to buy. We design, launch, and manage targeted Google Search and Performance Max campaigns that position your business directly in front of these high-intent customers.',
      'Our approach centers on obsessive keyword research, strict negative keyword tracking, and continuous ad copy testing to ensure you pay the absolute lowest cost per high-quality lead.'
    ],
    whatsIncluded: [
      'High-intent keyword discovery and search intent segmentation',
      'Custom landing page recommendation and conversion tracking setup',
      'Continuous budget optimization and negative keyword auditing',
      'Direct call-to-action extensions and responsive search ad variations'
    ],
    whoThisIsFor: [
      'High-ticket service providers (agencies, developers, contractors)',
      'Local businesses seeking immediate local inquiries and bookings',
      'B2B firms wanting highly specific lead capture forms filled'
    ],
    whyChoose: 'Certified Google Ads structures designed to ruthlessly eliminate wasted budget and maximize your return on ad spend (ROAS).'
  },
  {
    slug: '/services/meta-ads',
    title: 'Meta Ads',
    shortDesc: 'Hyper-targeted advertising across Instagram and Facebook to build trust and scale sales.',
    iconName: 'Facebook',
    description: [
      'With billions of active users daily, Meta is the ultimate platform for building product awareness and scaling conversions. We build hyper-targeted Facebook and Instagram campaigns utilizing advanced custom audiences and behavioral retargeting.',
      'By feeding Meta\'s algorithm high-performing visual creatives and compelling copywriting, we unlock steady, predictable lead flows and digital sales for your brand.'
    ],
    whatsIncluded: [
      'Target audience setup (Lookalike audiences, interest stacks)',
      'Meta Pixel, Conversions API, and aggregate event measurement setup',
      'Retargeting funnels designed to close warm prospects automatically',
      'Obsessive visual creative testing across Reels, Stories, and Feeds'
    ],
    whoThisIsFor: [
      'Creators selling premium e-books, training programs, or courses',
      'SaaS startups wanting rapid user acquisition and sign-ups',
      'Service agencies looking to scale their client intake monthly'
    ],
    whyChoose: 'Strategic funnel architectures that move buyers effortlessly from cold awareness to high-ticket clients.'
  },
  {
    slug: '/services/e-book-generation',
    title: 'E-Book Generation',
    shortDesc: 'Beautifully written, authoritative e-books designed to capture leads and build trust.',
    iconName: 'BookOpen',
    description: [
      'An e-book is the single best lead magnet to build an email list of high-intent buyers. We outline, write, layout, and publish comprehensive, visually outstanding e-books that showcase your industry authority.',
      'We combine educational material with strategic call-to-actions, converting readers into active subscribers or paying clients for your premium service offerings.'
    ],
    whatsIncluded: [
      'Strategic outline development based on search queries',
      'High-value content writing, editing, and professional formatting',
      'Stunning 3D cover mockups and responsive promotional assets',
      'Lead magnet opt-in page and delivery email integration support'
    ],
    whoThisIsFor: [
      'Consultants wanting to display unmatched authority in their field',
      'Creators seeking high-quality lead magnets for email newsletter sign-ups',
      'Educators wanting to bundle their insights into quick digital products'
    ],
    whyChoose: 'We build e-books that read exceptionally well, establishing deep trust with your prospects before they ever speak to you.'
  },
  {
    slug: '/services/video-editing',
    title: 'Video Editing',
    shortDesc: 'Fast-paced, highly engaging video editing optimized for modern social algorithms.',
    iconName: 'Video',
    description: [
      'In the era of short-form video, retention is everything. We edit fast-paced, highly dynamic videos optimized for Reels, Shorts, and TikTok, featuring bold kinetic subtitles, sound design, transitions, and zoom effects that hold attention.',
      'We turn raw footage into cinematic, narrative-driven content that keeps viewers watching until the final second, signaling social algorithms to push your content to millions.'
    ],
    whatsIncluded: [
      'Dynamic text styling, kinetic captions, and sound effects overlays',
      'Pacing optimization, jump-cut editing, and custom zooms',
      'Stock footage selection, color grading, and trend audio syncing',
      'Platform-specific sizing (9:16 vertical / 16:9 widescreen)'
    ],
    whoThisIsFor: [
      'Content creators wanting to outsource post-production to free up time',
      'Brands utilizing short-form video funnels to drive digital sales',
      'Podcasters wanting highly shareable social media micro-clips'
    ],
    whyChoose: 'Retention-engineered edits that keep your viewers engaged, increasing average watch-time and organic algorithmic reach.'
  }
];

export const PORTFOLIO_CATEGORIES = [
  {
    title: 'Thumbnail Design Portfolio',
    description: 'High-CTR designs custom-tailored for maximum engagement and click-ability.',
    url: 'https://drive.google.com/drive/folders/1AlGh_sU2zJBcm5dpIgSy0_TvZ4NVzPbE',
    iconName: 'Image'
  },
  {
    title: 'AI Ads Generation Portfolio',
    description: 'Generative AI visual ads built to lower CPA and boost conversion.',
    url: 'https://drive.google.com/drive/folders/1lTE4b7mQPeBRrH0VG_7YxxWBFtSmHgXr',
    iconName: 'Cpu'
  },
  {
    title: 'AI Videos Portfolio',
    description: 'AI-generated visual stories, synthetic media, and creative projects.',
    url: 'https://drive.google.com/drive/folders/1G9umkFnPY9aBDpMFgy80-jOIIWgoncYO',
    iconName: 'Play'
  },
  {
    title: 'AI Video Editing Portfolio',
    description: 'Modern, high-retention video edits optimized for TikTok, Reels, and Shorts.',
    url: 'https://drive.google.com/drive/folders/1t0SQycLMO0L2c1us9xFrx801kTdbIF8F',
    iconName: 'Video'
  }
];

export const SHOWCASE_WEBSITES = [
  { title: 'Portfolio Showcase 1', url: 'https://fascinating-buttercream-f28675.netlify.app/' },
  { title: 'Portfolio Showcase 2', url: 'https://eloquent-tartufo-7be067.netlify.app/' },
  { title: 'Portfolio Showcase 3', url: 'https://comfy-mousse-e27a88.netlify.app/' },
  { title: 'Portfolio Showcase 4', url: 'https://euphonious-genie-e4d7a6.netlify.app/' },
  { title: 'Portfolio Showcase 5', url: 'https://lambent-zuccutto-5fe0ce.netlify.app/' },
  { title: 'Portfolio Showcase 6', url: 'https://golden-biscuit-966912.netlify.app' },
  { title: 'Portfolio Showcase 7', url: 'https://gorgeous-biscuit-04f62e.netlify.app' },
  { title: 'Portfolio Showcase 8', url: 'https://jade-gingersnap-37cac7.netlify.app' },
  { title: 'Portfolio Showcase 9', url: 'https://beautiful-salamander-36170e.netlify.app' },
  { title: 'Portfolio Showcase 10', url: 'https://candid-melba-453284.netlify.app' },
  { title: 'Portfolio Showcase 11', url: 'https://kaleidoscopic-kleicha-3db0d1.netlify.app' },
  { title: 'Portfolio Showcase 12', url: 'https://euphonious-mermaid-bb130d.netlify.app' },
  { title: 'Portfolio Showcase 13', url: 'https://remarkable-creponne-96eca4.netlify.app' },
  { title: 'Portfolio Showcase 14', url: 'https://luxury-chimera-0482ac.netlify.app' },
  { title: 'Portfolio Showcase 15', url: 'https://peppy-buttercream-108f59.netlify.app/' },
  { title: 'Portfolio Showcase 16', url: 'https://superb-griffin-18b13a.netlify.app/' },
  { title: 'Portfolio Showcase 17', url: 'https://dev-national-studioz.vercel.app/' }
];

export const CERTIFICATIONS: Certificate[] = [
  {
    name: 'Quantum Computing',
    issuedBy: 'FutureSkills Prime',
    link: 'https://www.futureskillsprime.in/iDH/user/user_badge/view/32914_BG_38ee9ac6-7784-11f1-bcca-005056b48b54'
  },
  {
    name: 'Introduction to Generative AI Learning Path Specialization',
    issuedBy: 'Google Cloud Skills Boost',
    link: 'https://www.coursera.org/account/accomplishments/specialization/M57N84WNGF0P'
  },
  {
    name: 'Introduction To Generative AI Studio',
    issuedBy: 'Simplilearn',
    link: 'https://simpli.app.link/hsCsqCVUvXb'
  },
  {
    name: 'Introduction To Prompt Engineering with GitHub Copilot',
    issuedBy: 'Simplilearn',
    link: 'https://simpli.app.link/hsCsqCVUvXb'
  },
  {
    name: 'Introduction To Artificial Intelligence',
    issuedBy: 'Simplilearn',
    link: 'https://simpli.app.link/FCxcuSrUvXb'
  },
  {
    name: 'Python for Beginners',
    issuedBy: 'Simplilearn',
    link: 'https://simpli.app.link/gPRdVniUvXb'
  },
  {
    name: 'Introduction To Digital Marketing Fundamentals Course',
    issuedBy: 'Simplilearn',
    link: 'https://simpli.app.link/q1V2MoYTvXb'
  },
  {
    name: 'Digital Marketing',
    issuedBy: 'UniAthena',
    link: 'https://docs.uniathena.com/prod/course/certificate/628_1760609721_certificate.jpg'
  },
  {
    name: 'AI Appreciate Badge – AI For All',
    issuedBy: 'United Latino Students Association',
    link: 'https://ai-for-all.in/#/badge?id=U2FsdGVkX1p1L2u3SrdzzAuPp1L2u3SdqczyMYGjtBZ28dpp1L2u3Sr1Nc4vQe1Q2u3A4l'
  },
  {
    name: 'AI Aware Badge – AI For All',
    issuedBy: 'United Latino Students Association',
    link: 'https://ai-for-all.in/#/badge?id=U2FsdGVkX19PGcstrYPWAEKvvTuWKILaOVvxXNtezwoe1Q2u3A4l'
  },
  {
    name: 'Fundamentals of Digital Marketing',
    issuedBy: 'United Latino Students Association',
    link: 'https://skillshop.exceedlms.com/student/award/jfN5V7961xojHpqCwT6HupEN'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    title: 'The AI Content Blueprint',
    description: 'The exact framework and smart prompt chains used to automate 80% of our visual post and video script generation pipeline.',
    price: '₹499',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    category: 'E-Book / PDF',
    tags: ['AI Content', 'Prompts', 'Viral Marketing']
  },
  {
    id: 'prod-2',
    title: 'Modern Creator Web Boilerplate',
    description: 'A lightning-fast, conversion-optimized React & Tailwind CSS starter code package to launch personal brands in hours.',
    price: '₹1,499',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    category: 'Code Templates',
    tags: ['React', 'Tailwind', 'Personal Brand']
  },
  {
    id: 'prod-3',
    title: 'High-CTR YouTube Thumbnail Kit',
    description: 'A bundle of fully editable, psychology-backed, high-contrast assets & layouts optimized to maximize CTR.',
    price: '₹799',
    imageUrl: 'https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?auto=format&fit=crop&w=600&q=80',
    category: 'Design Assets',
    tags: ['YouTube', 'CTR', 'Photoshop / Figma']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Rohan Sharma',
    role: 'YouTube Creator (120K+ Subscribers)',
    rating: 5,
    content: 'Ankit completely transformed our visual identity. The thumbnail design and short-form video editing increased our average Click-Through Rate by nearly 4%. Extremely fast communication and top-tier professionalism!',
    date: 'June 2026',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Dr. Priya Patel',
    role: 'Founder, EdTech Learning Academy',
    rating: 5,
    content: 'We hired Digital Trikaal to develop our brand new responsive website and set up our Meta and Google search campaigns. Our customer leads increased by over 45% in the first thirty days. The local support has been unparalleled.',
    date: 'May 2026',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Vikram Aditya',
    role: 'Managing Director, V-Tech Automations',
    rating: 5,
    content: 'The custom AI automated lead qualifier they built for our business using Zapier and context-trained LLMs has saved us dozens of hours every week. Ankit is an absolute genius in artificial intelligence systems and Python scripting!',
    date: 'April 2026',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Suresh Choudhary',
    role: 'Local Business Owner, Jaipur',
    rating: 5,
    content: 'Exceptional website design! Super quick, responsive, and stunning colors. They set up our local Google profile and city-based ads, which immediately brought in hot inquiries. Highly recommended!',
    date: 'March 2026',
    verified: true
  },
  {
    id: 'rev-5',
    name: 'Meera Deshmukh',
    role: 'E-commerce Brand Owner',
    rating: 5,
    content: 'The AI-generated ads copy and creative variation testing that Digital Trikaal integrated for our brand lowered our Meta Ads CPA by nearly 30%. Their conversion-first approach delivers absolute, measurable results.',
    date: 'February 2026',
    verified: true
  }
];
