import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PlatformCard from '@/components/PlatformCard';
import StatsSection from '@/components/StatsSection';
import FloatingShapes from '@/components/FloatingShapes';
import { Platform } from '@/types';
import TradingSteps from '@/components/TradingSteps';
import Footer from '@/components/Footer';

export default function Home() {
  const platforms: Platform[] = [
    {
      title: "MetaTrader 5",
      description: "More efficient, faster, with advanced tools for professional trading",
      features: [
        "Forex, cryptos, indices, commodities & shares CFDs",
        "38 built-in indicators",
        "21 available timeframes",
        "Mobile, Desktop, and tablet compatibility",
        "Automated trading capabilities",
        "One-click trading functionality"
      ]
    },
    {
      title: "CQG Platform",
      description: "Premier trading platform for precision and institutional-grade flexibility",
      features: [
        "Direct Market Access (CME, NYSE, LME, ICE)",
        "API connectivity for algorithmic trading",
        "Real-time Global Market Data",
        "Advanced order management",
        "Professional-grade charting tools",
        "Comprehensive market analytics"
      ]
    }
  ];

  return (
    <div className="main-container min-h-screen bg-gradient-primary text-white relative">
      <FloatingShapes />
      <Header />

      <div className="content py-24 relative z-5 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <Hero />
        <div className="video-gradient"></div>

        <div className="trading-platforms mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl animate-fade-in-up">
          {platforms.map((platform, index) => (
            <PlatformCard
              key={index}
              platform={platform}
              delay={index * 0.3}
            />
          ))}
        </div>

        <StatsSection />
      </div>
      
      <div className="w-full relative z-5">
        <TradingSteps />
      </div>
      
      <div className="secondary-content relative z-5 flex flex-col items-center justify-center px-6">
        <Footer />
      </div>
    </div>
  );
}