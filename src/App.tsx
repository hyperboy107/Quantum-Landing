import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { RoadmapSection } from './components/RoadmapSection';
import { PartnersSection } from './components/PartnersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { initSmoothScroll } from './utils/smoothScroll';
import { initScrollAnimations } from './utils/scrollAnimations';

function App() {
  useEffect(() => {
    // Initialize smooth scrolling
    const cleanup = initSmoothScroll();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <CustomCursor />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <RoadmapSection />
        <PartnersSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;