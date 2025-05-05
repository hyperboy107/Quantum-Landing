import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { gsap } from 'gsap';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company, avatarUrl }) => {
  return (
    <div className="testimonial-card bg-night-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 flex flex-col h-full">
      <div className="mb-6">
        <Quote size={36} className="text-indigo-400/40" />
      </div>
      <p className="text-white/90 mb-8 flex-grow">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={avatarUrl} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-medium text-white">{author}</h4>
          <p className="text-white/60 text-sm">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "Quantum has transformed our blockchain strategy. The platform's speed and reliability have allowed us to scale our operations without compromising on security.",
      author: "Alex Richardson",
      role: "CTO",
      company: "FinTech Innovations",
      avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: "The cross-chain integration capabilities have opened up entirely new possibilities for our product. Customer satisfaction has increased dramatically since implementation.",
      author: "Sophia Chen",
      role: "Product Director",
      company: "NexGen Solutions",
      avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: "As a developer, the API documentation and tools provided by Quantum are unmatched. I've been able to build and deploy in record time with minimal issues.",
      author: "Marcus Johnson",
      role: "Lead Developer",
      company: "BlockWorks",
      avatarUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: "Security was our primary concern when selecting a Web3 platform. Quantum's multi-layered approach gives us the confidence to innovate without worrying about vulnerabilities.",
      author: "Elena Rodriguez",
      role: "Security Analyst",
      company: "SecureChain",
      avatarUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    // Animate testimonials
    gsap.fromTo(
      '.testimonial-card',
      { 
        y: 30, 
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#testimonials',
          start: 'top 70%',
        },
      }
    );
  }, []);
  
  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our <span className="text-gradient">Users Say</span>
          </h2>
          <p className="text-white/70 text-lg">
            Discover how Quantum is helping businesses and developers worldwide transform their Web3 experience.
          </p>
        </div>
        
        {/* Desktop Testimonials Grid */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>
        
        {/* Mobile Testimonials Slider */}
        <div className="md:hidden">
          <Testimonial
            quote={testimonials[currentSlide].quote}
            author={testimonials[currentSlide].author}
            role={testimonials[currentSlide].role}
            company={testimonials[currentSlide].company}
            avatarUrl={testimonials[currentSlide].avatarUrl}
          />
          
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/10 transition-all"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentSlide ? 'bg-indigo-500' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/10 transition-all"
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 reveal-element">
          <div className="bg-night-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">10k+</div>
            <p className="text-white/60">Active Users</p>
          </div>
          
          <div className="bg-night-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">50M+</div>
            <p className="text-white/60">Transactions</p>
          </div>
          
          <div className="bg-night-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">99.9%</div>
            <p className="text-white/60">Uptime</p>
          </div>
          
          <div className="bg-night-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">24/7</div>
            <p className="text-white/60">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};