import React, { useEffect } from 'react';
import { animateStaggered } from '../utils/scrollAnimations';

export const PartnersSection: React.FC = () => {
  useEffect(() => {
    // Animate partner logos
    animateStaggered('.partner-logo', 0.1);
  }, []);
  
  const partnerLogos = [
    { name: "TechCorp", url: "https://media.istockphoto.com/id/1361572826/photo/web-3-0-sign-on-a-futuristic-electronic-board.jpg?b=1&s=612x612&w=0&k=20&c=firiphMhX6u8Of-vI8998UJsQcaC-TYVdLChfOk0aLw=" },
    { name: "InnovateLabs", url: "https://media.istockphoto.com/id/2148123501/photo/big-data-structure-blocks-concept.jpg?b=1&s=612x612&w=0&k=20&c=WsEOL7Fomd3HB6pKbDRf8DSIhkMEsCzFcep-uzqg-m0=" },
    { name: "BlockFusion", url: "https://media.istockphoto.com/id/1401980646/photo/3d-rendered-classic-sculpture-metaverse-avatar-with-network-of-low-poly-glowing-purple-lines.jpg?b=1&s=612x612&w=0&k=20&c=wXXpEj5dzovDMIFJNZKEE2pNY073H7k7TEkzwNw0Cg0=" },
    { name: "NexusChain", url: "https://media.istockphoto.com/id/1390456645/photo/metaverse-and-blockchain-technology-concepts-person-with-an-experiences-of-metaverse-virtual.jpg?b=1&s=612x612&w=0&k=20&c=BDncs53-xs9iyqybd-7zKL43DCTeAvrBxcfsr6tNKYw=" },
    { name: "QuantumEdge", url: "https://media.istockphoto.com/id/1363709340/photo/world-technology-concepts-metaverse-web3-and-blockchain-global-network-and-data-exchange.jpg?b=1&s=612x612&w=0&k=20&c=Ap7rZ_qTQKV4IZW0nEGy8cSl5UjOZ2LVlUZ6EPqMfAA=" },
  ];
  
  return (
    <section
      id="partners"
      className="py-20 md:py-28 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-indigo-600/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-violet-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-white/70 text-lg">
            We collaborate with top companies and organizations to build a stronger, more connected blockchain ecosystem.
          </p>
        </div>
        
        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {partnerLogos.map((partner, index) => (
            <div 
              key={index}
              className="partner-logo w-full max-w-[140px] aspect-square rounded-xl bg-night-800/50 p-4 flex items-center justify-center border border-white/5 hover:border-white/20 transition-all group"
            >
              <img 
                src={partner.url} 
                alt={partner.name} 
                className="w-full h-full object-cover rounded-md grayscale group-hover:grayscale-0 transition-all duration-300" 
              />
            </div>
          ))}
        </div>
        
        {/* Integration Banner */}
        <div className="mt-20 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-violet-900/30 mix-blend-overlay"></div>
          <div className="grid-background w-full h-full absolute inset-0 opacity-30"></div>
          
          <div className="relative p-8 md:p-12">
            <div className="max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Seamless Integration with Your <span className="text-gradient">Existing Systems</span>
              </h3>
              <p className="text-white/80 mb-8">
                Our platform is designed to work with your current infrastructure. Connect through our robust API or use pre-built integrations for popular platforms.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">Ethereum</div>
                <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">Solana</div>
                <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">Polygon</div>
                <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">Avalanche</div>
                <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">Binance Smart Chain</div>
                <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">Layer 2 Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};