"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/images/logocaramarket.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header fixed top-0 left-0 w-full z-20 backdrop-blur-md bg-[rgba(12,25,73,0.85)]">
      <div className="relative z-10 flex justify-between items-center py-4 px-8">
        <Image src={logo} alt="Cara Markets Logo" width={90} height={30} />

        <nav className="nav hidden md:flex items-center gap-8">
          <a href="#markets" className="text-white hover:text-[#d4af37] transition-colors font-medium">Products</a>
          <a href="#platforms" className="text-white hover:text-[#d4af37] transition-colors font-medium">Platforms</a>
          <a href="#pricing" className="text-white hover:text-[#d4af37] transition-colors font-medium">Account</a>
          <a href="#support" className="text-white hover:text-[#d4af37] transition-colors font-medium">Support</a>
          <a href="#company" className="text-white hover:text-[#d4af37] transition-colors font-medium">About us</a>

          <button className="btn-primary px-6 py-2 bg-gradient-to-r from-[#98682d] to-[#efe896] text-[#0c1949] border-none rounded-lg font-bold cursor-pointer transition-all hover:scale-105 hover:from-[#f4d03f] hover:to-[#d4af37] shadow-lg shadow-yellow-500/30">
            Live trading
          </button>

          <button className="btn-secondary px-6 py-2 bg-transparent text-white border-2 border-[#d4af37] rounded-lg font-semibold cursor-pointer transition-all hover:bg-[#d4af37] hover:text-[#0c1949] hover:border-[#f4d03f]">
            Login
          </button>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-nav block md:hidden bg-[#d4af37] text-[#0c1949] border-none rounded-lg p-2 text-xl cursor-pointer hover:bg-[#f4d03f] transition-colors"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[rgba(12,25,73,0.95)] flex flex-col items-center gap-6 py-6 md:hidden">
          <a href="#markets" className="text-white hover:text-[#d4af37] font-medium">Products</a>
          <a href="#platforms" className="text-white hover:text-[#d4af37] font-medium">Platforms</a>
          <a href="#pricing" className="text-white hover:text-[#d4af37] font-medium">Account</a>
          <a href="#support" className="text-white hover:text-[#d4af37] font-medium">Support</a>
          <a href="#company" className="text-white hover:text-[#d4af37] font-medium">About us</a>

          <button className="px-6 py-2 bg-gradient-to-r from-[#98682d] to-[#efe896] text-[#0c1949] font-bold rounded-lg hover:from-[#f4d03f] hover:to-[#d4af37]">
            Live trading
          </button>

          <button className="px-6 py-2 border-2 border-[#d4af37] text-white rounded-lg font-semibold hover:bg-[#d4af37] hover:text-[#0c1949]">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
