"use client";

import { useEffect } from 'react';

const FloatingShapes = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const shapes = document.querySelectorAll('.shape');
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.02;
        const x = (clientX / innerWidth - 0.5) * 100 * speed;
        const y = (clientY / innerHeight - 0.5) * 100 * speed;
        
        (shape as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="floating-shapes absolute top-0 left-0 w-full h-full overflow-hidden z-1">
      <div className="shape shape-1 animate-float absolute top-[10%] left-[10%] w-[100px] h-[100px] bg-[#ec4899] opacity-10 rounded-full"></div>
      <div className="shape shape-2 animate-float absolute top-[60%] right-[10%] w-[80px] h-[80px] bg-[#fbbf24] opacity-10 rotate-45" style={{animationDelay: '2s'}}></div>
      <div className="shape shape-3 animate-float absolute bottom-[20%] left-[20%] w-[60px] h-[60px] bg-[#06d6a0] opacity-10 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]" style={{animationDelay: '4s'}}></div>
    </div>
  );
};

export default FloatingShapes;