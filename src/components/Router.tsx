import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PagePath } from '../types';

interface RouterContextType {
  currentPath: PagePath;
  navigate: (path: PagePath) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

const ROUTE_METADATA: Record<PagePath, { title: string; description: string }> = {
  '/': {
    title: 'Digital Trikaal | Premium AI, Website & Marketing Solutions',
    description: 'Digital Trikaal is the personal brand and agency of Ankit Kumar. We build premium website development, AI ads generation, AI content creation, and high-impact digital marketing.',
  },
  '/about': {
    title: 'About Ankit Kumar | Digital Trikaal Founder & Creator',
    description: 'Learn about Ankit Kumar, founder of Digital Trikaal, a YouTuber, website developer, and digital marketer with 20+ AI certifications dedicated to empowering businesses.',
  },
  '/services': {
    title: 'Premium Services | Digital Trikaal Digital Solutions',
    description: 'Explore full-stack digital solutions including custom Web Development, AI Agent Design, Google/Meta Ads, Video Editing, Thumbnail Design, and Automation.',
  },
  '/services/website-development': {
    title: 'Premium Website Development | Digital Trikaal',
    description: 'Stunning, custom React & Tailwind websites custom-built for creators and businesses to maximize conversions with SEO and mobile-first speed.',
  },
  '/services/ai-ads-generation': {
    title: 'AI Ads Generation | Digital Trikaal Services',
    description: 'Harness generative AI tools to create high-performing advertising campaign creatives and target copy instantly.',
  },
  '/services/ai-content-creation': {
    title: 'AI Content Creation Pipelines | Digital Trikaal',
    description: 'Leverage generative models to design high-quality, viral social content pipelines for YouTube, LinkedIn, and Instagram.',
  },
  '/services/thumbnail-design': {
    title: 'Click-Maximizing Thumbnail Design | Digital Trikaal',
    description: 'High-contrast, story-driven, psychology-backed YouTube thumbnails engineered to skyrocket video CTR.',
  },
  '/services/ai-automation': {
    title: 'AI Workflow Automation Services | Digital Trikaal',
    description: 'Eliminate repetitive manual operations and scale business systems with Zapier, Make, and API integrations.',
  },
  '/services/ai-agent-development': {
    title: 'AI Agent & Custom Bot Development | Digital Trikaal',
    description: 'Design context-aware, autonomous digital workers and conversational systems to handle live customer interactions.',
  },
  '/services/social-media-marketing': {
    title: 'Social Media Organic Marketing | Digital Trikaal',
    description: 'Build massive inbound client funnels with consistent social campaigns and personal brand authority.',
  },
  '/services/google-ads': {
    title: 'High-Intent Google Ads Management | Digital Trikaal',
    description: 'Certified Google Ads structures designed to ruthlessly eliminate budget waste and capture search demand.',
  },
  '/services/meta-ads': {
    title: 'Meta Ads Funnel Optimization | Digital Trikaal',
    description: 'Hyper-targeted advertising across Instagram and Facebook to build trust and scale product conversions.',
  },
  '/services/e-book-generation': {
    title: 'E-Book Writing & Lead Magnet Design | Digital Trikaal',
    description: 'Authoritative e-books written and formatted to capture high-intent leads and build market trust.',
  },
  '/services/video-editing': {
    title: 'High-Retention Video Editing | Digital Trikaal',
    description: 'Fast-paced edits with kinetic text captions and sound effects engineered for modern vertical formats.',
  },
  '/portfolio': {
    title: 'Our Portfolio | Digital Trikaal Client Project Proof',
    description: 'Explore our client folders spanning thumbnails, AI-generated video campaigns, creative ads, and custom software systems.',
  },
  '/portfolio/ai-web-development': {
    title: 'AI Web Development Showcases | Digital Trikaal',
    description: 'Browse the grid of 14 live, high-converting websites custom-designed and hosted with sleek CSS layouts.',
  },
  '/certification': {
    title: 'Verified AI & Tech Certifications | Digital Trikaal',
    description: 'Browse 20+ verified technical credentials earned by founder Ankit Kumar in Python, Prompt Engineering, and Google Cloud AI.',
  },
  '/digital-products': {
    title: 'Premium Digital Products & Assets | Digital Trikaal',
    description: 'Explore downloadable guides, premium code templates, prompt libraries, and asset packages to scale your business.',
  },
  '/courses': {
    title: 'Free Courses & Playlists | Digital Trikaal',
    description: 'Learn AI, digital skills, and online earning — 100% free, straight from our YouTube channel.',
  },
  '/reviews': {
    title: 'Client Reviews & Success Testimonials | Digital Trikaal',
    description: 'Read verified testimonials from creators and business owners who unlocked growth with Digital Trikaal.',
  },
  '/contact': {
    title: 'Contact Digital Trikaal | Book a Consultation',
    description: 'Let us build something amazing together. Reach out via email, phone, or Formspree form for custom AI, development, and marketing solutions.',
  }
};

export function RouterProvider({ children }: { children: ReactNode }) {
  // Parse initial path or fall back to home
  const [currentPath, setCurrentPath] = useState<PagePath>(() => {
    const path = window.location.pathname as PagePath;
    return ROUTE_METADATA[path] ? path : '/';
  });

  const navigate = (path: PagePath) => {
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
      setCurrentPath(path);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as PagePath;
      if (ROUTE_METADATA[path]) {
        setCurrentPath(path);
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Update SEO title and description
    const meta = ROUTE_METADATA[currentPath] || ROUTE_METADATA['/'];
    document.title = meta.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', meta.description);

    // Dynamic Open Graph tag support
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', meta.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', meta.description);

    // Scroll back to top smoothly
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPath]);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

// Router Link component to intercept clicks
export function Link({
  href,
  children,
  className,
  id,
  target,
  rel,
  onClick,
}: {
  href: PagePath | string;
  children: ReactNode;
  className?: string;
  id?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  key?: React.Key;
}) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    // Only intercept if it's a local path and no special key is held, and no target="_blank"
    if (
      !e.defaultPrevented &&
      e.button === 0 && // left click only
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey &&
      !target &&
      typeof href === 'string' &&
      href.startsWith('/')
    ) {
      e.preventDefault();
      router.navigate(href as PagePath);
    }
  };

  return (
    <a
      id={id}
      href={href}
      className={className}
      onClick={handleClick}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
