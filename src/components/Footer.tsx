import React from 'react';
import { ArrowRight } from 'lucide-react';
import { scrollTo } from '../utils/smoothScroll';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      scrollTo(href);
    }
  };

  return (
    <footer className="pt-20 pb-10 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">Q</span>
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">
                Quantum
              </span>
            </a>
            <p className="text-white/70 mb-6">
              Building the future of Web3 with cutting-edge technology and unparalleled security.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Discord"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#features" 
                  onClick={handleNavClick}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#roadmap" 
                  onClick={handleNavClick}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  API Reference
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#partners" 
                  onClick={handleNavClick}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={handleNavClick}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Subscribe</h3>
            <p className="text-white/70 mb-4">
              Stay updated with the latest news and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-night-700/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-4 py-2 rounded-r-lg flex items-center justify-center transition-all"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Quantum. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white/80 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white/80 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-white/80 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};