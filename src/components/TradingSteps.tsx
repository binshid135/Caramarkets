"use client";

import { User, CreditCard, TrendingUp } from 'lucide-react';

const TradingSteps = () => {
    const steps = [
        {
            number: 1,
            title: "Create your account",
            icon: User,
            description: "Quick and secure account setup"
        },
        {
            number: 2,
            title: "Make your first deposit",
            icon: CreditCard,
            description: "Fund your account to start trading"
        },
        {
            number: 3,
            title: "Start trading",
            icon: TrendingUp,
            description: "Access global markets instantly"
        }
    ];

    return (
        <section className="trading-steps-section py-16 px-6 max-w-6xl mx-auto animate-fade-in-up">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Start Trading In 3 Easy Steps
                </h2>
            </div>

            <div className="steps-container relative mb-12">
                <div className="hidden md:block mt-3 absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] transform -translate-y-1/2 z-0"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;

                        return (
                            <div key={index} className="step-item text-center relative">
                                <div className="step-circle w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg relative z-10">
                                    <IconComponent className="w-8 h-8 text-[#0c1949]" />
                                </div>

                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-10 -right-4 z-20">
                                        <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#d4af37]">
                                            <path
                                                fill="currentColor"
                                                d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"
                                            />
                                        </svg>
                                    </div>
                                )}

                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {step.number}. {step.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="text-center">
                <button
                    className="btn-primary px-10 py-4 bg-gradient-to-r from-[#98682d] to-[#efe896] text-[#0c1949] border-none rounded-lg font-bold cursor-pointer transition-all hover:scale-105 hover:from-[#f4d03f] hover:to-[#d4af37] shadow-lg shadow-yellow-500/30"
                >
                    Start Trading
                </button>
            </div>
        </section>
    );
};

export default TradingSteps;