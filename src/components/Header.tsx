import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollTo } from '../utils/smoothScroll';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      scrollTo(href);
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-night-950/90 backdrop-blur-md shadow-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="flex items-center space-x-2"
            onClick={handleNavClick}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">Q</span>
            </div>
            <span className="text-2xl font-display font-bold tracking-tight">
              Quantum
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              onClick={handleNavClick}
            >
              Features
            </a>
            <a 
              href="#roadmap" 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              onClick={handleNavClick}
            >
              Roadmap
            </a>
            <a 
              href="#partners" 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              onClick={handleNavClick}
            >
              Partners
            </a>
            <a 
              href="#testimonials" 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              onClick={handleNavClick}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-all"
              onClick={handleNavClick}
            >
              Connect
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-night-900 fixed inset-0 z-40 pt-20">
          <nav className="flex flex-col items-center space-y-8 p-8">
            <a 
              href="#features" 
              className="text-white/80 hover:text-white transition-colors text-lg font-medium"
              onClick={handleNavClick}
            >
              Features
            </a>
            <a 
              href="#roadmap" 
              className="text-white/80 hover:text-white transition-colors text-lg font-medium"
              onClick={handleNavClick}
            >
              Roadmap
            </a>
            <a 
              href="#partners" 
              className="text-white/80 hover:text-white transition-colors text-lg font-medium"
              onClick={handleNavClick}
            >
              Partners
            </a>
            <a 
              href="#testimonials" 
              className="text-white/80 hover:text-white transition-colors text-lg font-medium"
              onClick={handleNavClick}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-8 py-3 rounded-full text-lg font-medium transition-all mt-4"
              onClick={handleNavClick}
            >
              Connect
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};