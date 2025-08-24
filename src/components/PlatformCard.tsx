"use client";

import { useEffect, useRef } from 'react';
import { Platform } from '@/types';

interface PlatformCardProps {
  platform: Platform;
  delay?: number;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && cardRef.current) {
        cardRef.current.style.opacity = '1';
        cardRef.current.style.transform = 'translateY(0)';
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    if (cardRef.current) {
      cardRef.current.style.opacity = '0';
      cardRef.current.style.transform = 'translateY(30px)';
      cardRef.current.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className="platform-card bg-gradient-card backdrop-blur border-glass rounded-2xl p-8 transition-transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/20"
      style={{ animationDelay: `${delay}s` }}
    >
      <h3 className="platform-title text-2xl font-bold text-yellow-400 mb-4">{platform.title}</h3>
      <p className="platform-description mb-6 opacity-90">{platform.description}</p>
      <ul className="platform-features list-none text-left">
        {platform.features.map((feature, index) => (
          <li key={index} className="py-2 relative pl-6">
            <span className="absolute left-0 text-green-500 font-bold">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformCard;