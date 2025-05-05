import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface RoadmapItemProps {
  quarter: string;
  title: string;
  description: string;
  isActive: boolean;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ quarter, title, description, isActive }) => {
  return (
    <div className={`roadmap-item ${isActive ? 'active' : ''} relative p-6 rounded-xl backdrop-blur-sm border ${
      isActive ? 'border-white/10 bg-gradient-to-br from-indigo-900/20 to-violet-900/20 shadow-glow-violet' : 'border-white/5 bg-night-800/30'
    }`}>
      <span className={`inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full ${
        isActive ? 'bg-violet-600/30 text-violet-200' : 'bg-night-700 text-white/60'
      }`}>
        {quarter}
      </span>
      <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export const RoadmapSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Horizontal scrolling for the roadmap
    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.roadmap-item');
      
      gsap.fromTo(
        timelineItems,
        { 
          opacity: 0,
          y: 30 
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);
  
  const roadmapItems = [
    {
      quarter: 'Q1 2025',
      title: 'Beta Launch',
      description: 'Initial platform release with core functionality and limited user access for testing and feedback.',
      isActive: true,
    },
    {
      quarter: 'Q2 2025',
      title: 'Public Release',
      description: 'Full platform launch with complete feature set and open access to all users worldwide.',
      isActive: false,
    },
    {
      quarter: 'Q3 2025',
      title: 'Mobile Apps',
      description: 'Launch of native mobile applications for iOS and Android with full platform functionality.',
      isActive: false,
    },
    {
      quarter: 'Q4 2025',
      title: 'Enterprise Solutions',
      description: 'Specialized enterprise-grade solutions with dedicated support and custom integrations.',
      isActive: false,
    },
    {
      quarter: 'Q1 2026',
      title: 'Global Expansion',
      description: 'Strategic partnerships with international organizations and localized support for key markets.',
      isActive: false,
    },
  ];
  
  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="py-20 md:py-32 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-violet-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-gradient">Roadmap</span> to the Future
          </h2>
          <p className="text-white/70 text-lg">
            We have an ambitious plan to revolutionize the Web3 space with continuous innovation and expansion.
          </p>
        </div>
        
        {/* Timeline for larger screens */}
        <div 
          ref={timelineRef}
          className="hidden md:block relative mb-20"
        >
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 transform -translate-y-1/2"></div>
          
          {/* Timeline Points */}
          <div className="grid grid-cols-5 gap-6 relative">
            {roadmapItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-5 h-5 rounded-full ${
                  item.isActive ? 'bg-violet-600' : 'bg-night-700 border border-white/10'
                } z-10 mb-6`}></div>
                <RoadmapItem
                  quarter={item.quarter}
                  title={item.title}
                  description={item.description}
                  isActive={item.isActive}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Vertical timeline for mobile */}
        <div className="md:hidden space-y-6">
          {roadmapItems.map((item, index) => (
            <div key={index} className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className={`w-4 h-4 rounded-full ${
                  item.isActive ? 'bg-violet-600' : 'bg-night-700 border border-white/10'
                }`}></div>
                {index < roadmapItems.length - 1 && (
                  <div className="w-0.5 h-full bg-white/10 my-1"></div>
                )}
              </div>
              <div className="flex-1">
                <RoadmapItem
                  quarter={item.quarter}
                  title={item.title}
                  description={item.description}
                  isActive={item.isActive}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Current Progress */}
        <div className="mt-16 bg-night-800/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm reveal-element">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Current Development Progress</h3>
              <p className="text-white/70 mb-6">
                Our team is actively working on the Beta release with several key features already completed. Follow our journey as we build the future of Web3.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white/80">Core Engine</span>
                    <span className="text-teal-400">100%</span>
                  </div>
                  <div className="w-full h-2 bg-night-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white/80">Smart Contracts</span>
                    <span className="text-teal-400">85%</span>
                  </div>
                  <div className="w-full h-2 bg-night-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white/80">User Interface</span>
                    <span className="text-violet-400">70%</span>
                  </div>
                  <div className="w-full h-2 bg-night-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full w-[70%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white/80">Security Audits</span>
                    <span className="text-indigo-400">60%</span>
                  </div>
                  <div className="w-full h-2 bg-night-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full w-[60%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0 w-full md:w-64 h-64 flex items-center justify-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#1e1e1e"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#progress-gradient)"
                    strokeWidth="8"
                    strokeDasharray="282.7"
                    strokeDashoffset="84.8"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                  <defs>
                    <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#0d9488" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-4xl font-bold text-gradient">70%</span>
                  <span className="text-white/70 text-sm">Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};