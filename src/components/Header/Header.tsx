"use client";
import React from 'react';
import Link from 'next/link';

const Header = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Features', href: '/features' },
    { name: 'Partners', href: '/partners' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full  py-6 flex justify-center">
      <div className="w-full max-w-[90%] bg-white rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.06)] px-6 py-[18px] flex items-center justify-between border border-gray-50/50">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-1">
             <img src="/Logo.svg" alt="" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#4D4D4D] text-[15px] font-medium hover:text-[#2B3674] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-6">
          <Link 
            href="/login" 
            className="text-[#2B3674] text-[15px] font-bold hover:opacity-80 transition-opacity"
          >
            Login
          </Link>
          
          <Link
            href="/trial"
            className="bg-[#2166F3] text-white px-4 py-2 rounded-[50px] text-[15px] font-semibold hover:bg-[#1a54c9] transition-all "
          >
            Request free trial
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;