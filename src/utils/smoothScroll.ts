import Lenis from '@studio-freight/lenis';

export const initSmoothScroll = (): (() => void) | undefined => {
  try {
    const lenis = new Lenis({
      duration: 1, // Reduced from 1.2 for faster response
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reduced for better control
      touchMultiplier: 1.5, // Adjusted for mobile
      smoothTouch: false, // Disabled smooth touch for better performance
      syncTouch: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  } catch (error) {
    console.error('Error initializing smooth scroll:', error);
    return undefined;
  }
};

export const scrollTo = (target: string | HTMLElement) => {
  const lenisInstance = (window as any).lenis;
  if (lenisInstance) {
    if (typeof target === 'string') {
      const element = document.querySelector(target);
      if (element) {
        lenisInstance.scrollTo(element, {
          offset: 0,
          immediate: false,
          duration: 1,
        });
      }
    } else {
      lenisInstance.scrollTo(target, {
        offset: 0,
        immediate: false,
        duration: 1,
      });
    }
  } else {
    if (typeof target === 'string') {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
};