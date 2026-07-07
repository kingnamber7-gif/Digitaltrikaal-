import React from 'react';
import { RouterProvider, useRouter } from './components/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio';
import AiWebDevelopment from './pages/AiWebDevelopment';
import Certification from './pages/Certification';
import DigitalProducts from './pages/DigitalProducts';
import Courses from './pages/Courses';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

function MainLayout() {
  const { currentPath } = useRouter();

  // Route-to-Page mapping for clean URL path simulation
  const renderActiveRoute = () => {
    if (currentPath === '/') return <Home />;
    if (currentPath === '/about') return <About />;
    if (currentPath === '/services') return <Services />;
    if (currentPath.startsWith('/services/')) return <ServiceDetail />;
    if (currentPath === '/portfolio') return <Portfolio />;
    if (currentPath === '/portfolio/ai-web-development') return <AiWebDevelopment />;
    if (currentPath === '/certification') return <Certification />;
    if (currentPath === '/digital-products') return <DigitalProducts />;
    if (currentPath === '/courses') return <Courses />;
    if (currentPath === '/reviews') return <Reviews />;
    if (currentPath === '/contact') return <Contact />;

    return <Home />;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FFD500] selection:text-[#0A0A0A]">
      <Header />
      <main className="flex-grow">
        {renderActiveRoute()}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <MainLayout />
    </RouterProvider>
  );
}

