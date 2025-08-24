"use client";

import { useEffect, useRef } from 'react';
import { StatItem } from '@/types';

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && sectionRef.current) {
        sectionRef.current.style.opacity = '1';
        sectionRef.current.style.transform = 'translateY(0)';
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    if (sectionRef.current) {
      sectionRef.current.style.opacity = '0';
      sectionRef.current.style.transform = 'translateY(30px)';
      sectionRef.current.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    { number: '30+', label: 'Years Experience' },
    { number: '2000+', label: 'Trading Instruments' },
    { number: '400:1', label: 'Maximum Leverage' },
    { number: '24/5', label: 'Customer Support' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="stats-section bg-gradient-stats backdrop-blur border-glass rounded-3xl p-8 max-w-4xl mt-16 animate-fade-in-up"
      style={{ animationDelay: '0.6s' }}
    >
      <h3 className="stats-title text-2xl font-bold text-yellow-400 mb-4">
        Why 1000+ Traders Choose Cara Markets
      </h3>
      <p className="mb-8">
        Licensed and regulated by SCA to protect your investments with competitive rates and expert support.
      </p>
      
      <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item text-center">
            <div className="stat-number text-3xl font-extrabold text-pink-500">{stat.number}</div>
            <div className="stat-label text-sm opacity-80 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;