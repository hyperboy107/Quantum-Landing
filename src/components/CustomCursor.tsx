import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (cursorRef.current) {
      const cursor = cursorRef.current;
      
      const updateCursorPosition = (e: MouseEvent) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      };
      
      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        
        if (
          target.tagName.toLowerCase() === 'a' ||
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') ||
          target.closest('button')
        ) {
          cursor.classList.add('hover');
        }
      };
      
      const handleMouseOut = () => {
        cursor.classList.remove('hover');
      };
      
      document.addEventListener('mousemove', updateCursorPosition);
      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);
      
      return () => {
        document.removeEventListener('mousemove', updateCursorPosition);
        document.removeEventListener('mouseover', handleMouseOver);
        document.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);
  
  return (
    <div ref={cursorRef} className="custom-cursor hidden md:block"></div>
  );
};