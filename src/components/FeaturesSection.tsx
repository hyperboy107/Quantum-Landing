import React, { useEffect, useRef } from 'react';
import { Zap, Shield, Globe, Database, RefreshCw, BarChart3 } from 'lucide-react';
import { gsap } from 'gsap';
import { animateStaggered } from '../utils/scrollAnimations';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="feature-card bg-night-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all hover:shadow-glow group">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    animateStaggered('.feature-card', 0.1);
    
    gsap.fromTo(
      '.feature-heading',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);
  
  const features = [
    {
      icon: <Zap size={24} className="text-white" />,
      title: 'Lightning Fast',
      description: 'Process thousands of transactions per second with minimal latency and gas fees.',
      color: 'bg-indigo-600/20',
    },
    {
      icon: <Shield size={24} className="text-white" />,
      title: 'Enhanced Security',
      description: 'Military-grade encryption and multi-layered security protocols protect your assets.',
      color: 'bg-teal-600/20',
    },
    {
      icon: <Globe size={24} className="text-white" />,
      title: 'Global Accessibility',
      description: 'Accessible from anywhere in the world with built-in multi-language support.',
      color: 'bg-violet-600/20',
    },
    {
      icon: <Database size={24} className="text-white" />,
      title: 'Seamless Storage',
      description: 'Decentralized storage solution with encryption and efficient data retrieval.',
      color: 'bg-indigo-600/20',
    },
    {
      icon: <RefreshCw size={24} className="text-white" />,
      title: 'Cross-Chain Integration',
      description: 'Connect and transact across multiple blockchain networks without friction.',
      color: 'bg-violet-600/20',
    },
    {
      icon: <BarChart3 size={24} className="text-white" />,
      title: 'Advanced Analytics',
      description: 'Real-time insights and performance metrics to optimize your operations.',
      color: 'bg-teal-600/20',
    },
  ];
  
  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 md:py-32 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-night-950/90 backdrop-blur-sm"></div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="feature-heading text-3xl md:text-4xl font-bold mb-6">
            Advanced <span className="text-gradient">Features</span> for the Future
          </h2>
          <p className="text-white/70 text-lg">
            Our platform combines cutting-edge blockchain technology with intuitive design to deliver a seamless experience for developers and users alike.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-indigo-900/20 to-violet-900/20 rounded-2xl p-8 md:p-12 border border-white/10 backdrop-blur-sm reveal-element">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Powered by <span className="text-gradient">Quantum AI</span> Technology
              </h3>
              <p className="text-white/70 mb-6">
                Our proprietary Quantum AI algorithm optimizes transaction routing, predicts network congestion, and automatically selects the most efficient pathways for your operations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                  </div>
                  <span className="text-white/80">Predictive transaction optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  </div>
                  <span className="text-white/80">Dynamic fee adjustment based on network conditions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                  </div>
                  <span className="text-white/80">Automated smart contract auditing and optimization</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-xl blur-xl"></div>
              <div className="rounded-xl bg-night-800 border border-white/10 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-teal-500"></div>
                <div className="p-6">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-6 rounded bg-night-700/60 w-full"></div>
                    <div className="h-6 rounded bg-night-700/60 w-3/4"></div>
                    <div className="h-6 rounded bg-indigo-600/30 w-full"></div>
                    <div className="h-6 rounded bg-night-700/60 w-5/6"></div>
                    <div className="h-6 rounded bg-night-700/60 w-full"></div>
                    <div className="h-6 rounded bg-teal-600/30 w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};