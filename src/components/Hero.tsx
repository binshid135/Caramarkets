"use client";

const Hero = () => {

  return (
    <section className="hero-section relative py-10 w-full mt-20 md:mt-0 animate-slide-up">
      <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-screen -z-10 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-60 min-h-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="trading-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video-gradient opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Trade with UAE's <span className="text-gradient">Elite Forex Broker</span>
        </h1>
        <p className="hero-subtitle text-xl mb-8 opacity-90">
          Access global markets with <span className="text-gradient">10,000+ CFD products</span> and derivatives.
          Trade forex, indices, commodities, and shares with 30+ years of trusted expertise.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-8 py-4 bg-gradient-to-r from-[#98682d] to-[#efe896] text-[#0c1949] border-none rounded-xl font-bold cursor-pointer transition-all hover:scale-105 hover:from-[#f4d03f] hover:to-[#d4af37] shadow-lg shadow-yellow-500/30"
          >
            Open Demo Account
          </button>

          <button
            className="px-8 py-4 bg-transparent text-white border-2 border-[#d4af37] rounded-xl font-semibold cursor-pointer transition-all hover:bg-[#d4af37] hover:text-[#0c1949] hover:border-[#f4d03f]"
          >
            Open Live Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;