"use client";

import Image from "next/image";
import logo from "../../assets/images/logocaramarket.png";
import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Music, Globe } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Platform", href: "#platform"},
    { name: "Accounts", href: "#accounts" }
  ];

  const legalLinks = [
    { name: "Legal", href: "#legal" },
    { name: "Payment Terms & Condition", href: "#payment-terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Cookie Policy", href: "#cookie" },
    { name: "Terms Of Use", href: "#terms" },
    { name: "Regulation", href: "#regulation" }
  ];

  const supportLinks = [
    { name: "Contact Us", href: "#contact" },
    { name: "Help", href: "#help" }
  ];

  const socialIcons = [
    { icon: Facebook, href: "https://facebook.com/caramarkets", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/caramarkets", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/caramarkets", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/caramarkets", label: "Twitter" },
    { icon: Music, href: "https://tiktok.com/@caramarkets", label: "TikTok" }
  ];

  return (
    <footer className="footer bg-[#0c1949] text-white py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src={logo}
                alt="Cara Markets Logo"
                width={120}
                height={40}
                className="mb-4"
              />
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p className="text-sm leading-relaxed">
                Cara Markets Financial Brokers LLC<br />
                Office Suite 112, Building 4, Gold &<br />
                Diamond Park, Sheikh Zayed Road,<br />
                Dubai, UAE.
              </p>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <a href="tel:+97145548042" className="text-sm hover:text-[#d4af37] transition-all duration-300 cursor-pointer">
                  +97145548042
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <a href="mailto:info@caramarkets.com" className="text-sm hover:text-[#d4af37] transition-all duration-300 cursor-pointer">
                  info@caramarkets.com
                </a>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              {socialIcons.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center text-[#0c1949] hover:bg-[#f4d03f] transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-sm transition-all duration-300 cursor-pointer hover:text-[#d4af37] text-gray-300`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Legal Notices and Policies</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#d4af37] transition-all duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#d4af37] transition-all duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Choose Region</h3>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#d4af37]" />
              <button className="text-sm text-gray-300 hover:text-[#d4af37] transition-all duration-300 cursor-pointer">
                Change Country
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Cara Markets Financial Brokers LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;