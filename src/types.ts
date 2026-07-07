export type PagePath =
  | '/'
  | '/about'
  | '/services'
  | '/services/website-development'
  | '/services/ai-ads-generation'
  | '/services/ai-content-creation'
  | '/services/thumbnail-design'
  | '/services/ai-automation'
  | '/services/ai-agent-development'
  | '/services/social-media-marketing'
  | '/services/google-ads'
  | '/services/meta-ads'
  | '/services/e-book-generation'
  | '/services/video-editing'
  | '/portfolio'
  | '/portfolio/ai-web-development'
  | '/certification'
  | '/digital-products'
  | '/courses'
  | '/reviews'
  | '/contact';

export interface ServiceDetail {
  slug: PagePath;
  title: string;
  shortDesc: string;
  iconName: string;
  description: string[];
  whatsIncluded: string[];
  whoThisIsFor: string[];
  whyChoose: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  url: string;
  category: string;
  imageUrl?: string;
}

export interface Certificate {
  name: string;
  issuedBy: string;
  link: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
  tags: string[];
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  content: string;
  date: string;
  verified: boolean;
}
