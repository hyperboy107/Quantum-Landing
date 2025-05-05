import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  ScrollTrigger.config({
    limitCallbacks: true, // Improves performance
    syncInterval: 40, // Reduced sync interval
  });
  
  initRevealElements();
  initParallaxElements();
  initHorizontalScroll();
  initPinning();
};

const initRevealElements = () => {
  const revealElements = document.querySelectorAll('.reveal-element');
  
  revealElements.forEach((element) => {
    gsap.fromTo(
      element,
      { 
        y: 30, // Reduced from 50
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6, // Reduced from 1
        ease: 'power2.out', // Changed from power3
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          once: true, // Only animate once
        },
      }
    );
  });
};

const initParallaxElements = () => {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  parallaxElements.forEach((element) => {
    const speed = element.getAttribute('data-speed') || '0.1'; // Reduced from 0.2
    
    gsap.to(element, {
      y: `${parseFloat(speed) * 100}%`,
      ease: 'none',
      scrollTrigger: {
        trigger: element.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5, // Increased for smoother parallax
      },
    });
  });
};

const initHorizontalScroll = () => {
  const horizontalSections = document.querySelectorAll('.horizontal-scroll');
  
  horizontalSections.forEach((section) => {
    const items = section.querySelectorAll('.horizontal-item');
    
    if (items.length > 0) {
      const totalWidth = Array.from(items).reduce((width, item) => {
        return width + item.clientWidth;
      }, 0);
      
      gsap.to(items, {
        x: () => -1 * (totalWidth - window.innerWidth + 100),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 10%',
          end: `+=${totalWidth}`,
          pin: true,
          scrub: 1.5, // Increased for smoother scrolling
          invalidateOnRefresh: true,
        },
      });
    }
  });
};

const initPinning = () => {
  const pinnedSections = document.querySelectorAll('.pin-section');
  
  pinnedSections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: true,
    });
  });
};

export const animateStaggered = (selector: string, staggerAmount: number = 0.05) => {
  const elements = document.querySelectorAll(selector);
  
  if (elements.length > 0) {
    gsap.fromTo(
      elements,
      { 
        y: 20, // Reduced from 30
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: staggerAmount,
        duration: 0.5, // Reduced from 0.8
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elements[0].parentElement,
          start: 'top 80%',
          once: true, // Only animate once
        },
      }
    );
  }
};

export const animateTextSplit = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element) => {
    const text = element.textContent || '';
    const chars = text.split('');
    
    element.innerHTML = '';
    chars.forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      element.appendChild(span);
    });
    
    const spans = element.querySelectorAll('span');
    
    gsap.fromTo(
      spans,
      { 
        y: 20, // Reduced from 40
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.02, // Reduced from 0.03
        duration: 0.5, // Reduced from 0.8
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          once: true, // Only animate once
        },
      }
    );
  });
};