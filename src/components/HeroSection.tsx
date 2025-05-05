import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { createScene, createParticles, createTorus } from '../utils/three';

export const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const sceneSetup = createScene({ canvasId: 'hero-canvas' });
      
      if (sceneSetup) {
        const { scene, startAnimation, cleanup } = sceneSetup;
        const particles = createParticles(scene, 300);
        const torus = createTorus(scene);
        
        startAnimation((time) => {
          particles.animate(time);
          torus.animate(time);
        });
        
        const tl = gsap.timeline();
        
        tl.fromTo(
          '.hero-title',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )
          .fromTo(
            '.hero-subtitle',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
            '-=0.6'
          )
          .fromTo(
            '.hero-cta',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
            '-=0.4'
          );
        
        return () => {
          cleanup();
        };
      }
    }
  }, []);

  useEffect(() => {
    if (heroRef.current) {
      const handleMouseMove = (e: MouseEvent) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        gsap.to('.parallax-bg', {
          x: (x - 0.5) * 20,
          y: (y - 0.5) * 20,
          duration: 1,
          ease: 'power1.out',
        });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-night-950/80 backdrop-blur-sm"></div>
      
      <div className="absolute inset-0 z-0">
        <div className="parallax-bg absolute top-20 left-20 w-64 h-64 rounded-full bg-indigo-600/20 blur-3xl"></div>
        <div className="parallax-bg absolute bottom-20 right-20 w-80 h-80 rounded-full bg-violet-600/20 blur-3xl"></div>
        <div className="parallax-bg absolute top-40 right-40 w-40 h-40 rounded-full bg-teal-500/20 blur-3xl"></div>
      </div>
      
      <canvas
        id="hero-canvas"
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      ></canvas>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            The Future of <span className="text-gradient">Digital Finance</span> is Here
          </h1>
          
          <p className="hero-subtitle text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Step into a new era of decentralized innovation where technology meets unlimited possibility.
          </p>
          
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#features"
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-8 py-3 rounded-full text-lg font-medium transition-all flex items-center space-x-2 group"
            >
              <span>Begin Your Journey</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="#contact"
              className="border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-full text-lg font-medium transition-all flex items-center space-x-2 backdrop-blur-sm bg-white/5"
            >
              <span>Join the Revolution</span>
            </a>
          </div>
          
          <div className="mt-16 flex items-center justify-center space-x-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gradient mb-1">$2B+</span>
              <span className="text-white/60 text-sm">Total Volume</span>
            </div>
            
            <div className="w-px h-12 bg-white/10"></div>
            
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gradient mb-1">1M+</span>
              <span className="text-white/60 text-sm">Active Users</span>
            </div>
            
            <div className="w-px h-12 bg-white/10"></div>
            
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gradient mb-1">100+</span>
              <span className="text-white/60 text-sm">Countries</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};