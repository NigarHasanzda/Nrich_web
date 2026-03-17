"use client";
import React from 'react';
import Link from 'next/link';
import { 
  Instagram, 
  Facebook, 
  LinkedIn, 
  LocationOnOutlined, 
  MailOutline, 
  PhoneOutlined 
} from '@mui/icons-material';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Industries', href: '/industries' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Features', href: '/features' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="w-full flex justify-center py-10">
  <div className="w-[90%] max-w-[90%] bg-white rounded-[20px] px-[40px] py-[48px] border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.06)]">

    {/* TOP */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[60px] lg:gap-[80px] pb-[40px]">
      
      {/* Logo */}
      <div className="flex flex-col gap-6">
        <img src="/Logo.svg" className="w-[120px]" />
        <p className="text-[#8E93A6] text-[14px] leading-[22px] max-w-[260px]">
          The all-in-one platform for after-school and youth sports programs. We help you plan, schedule, and grow your community without the spreadsheets.
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-6">
        <h3 className="text-[13px] font-semibold tracking-[1px] uppercase text-[#2D3142]">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-[14px]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-[14px] text-[#8E93A6] hover:text-[#1D2B6B]">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-6">
        <h3 className="text-[13px] font-semibold tracking-[1px] uppercase text-[#2D3142]">
          Contact
        </h3>

        <div className="flex flex-col gap-[18px]">
          <div className="flex gap-3">
            <LocationOnOutlined className="text-[#2563EB] text-[20px]" />
            <span className="text-[14px] text-[#8E93A6] leading-[20px]">
              123 Innovation Way, San Francisco, CA 94107
            </span>
          </div>

          <div className="flex gap-3 items-center">
            <MailOutline className="text-[#2563EB] text-[20px]" />
            <span className="text-[14px] text-[#8E93A6]">
              hello@nrich.com
            </span>
          </div>

          <div className="flex gap-3 items-center">
            <PhoneOutlined className="text-[#2563EB] text-[20px]" />
            <span className="text-[14px] text-[#8E93A6]">
              +1 (555) 123-4567
            </span>
          </div>
        </div>
      </div>

      {/* Social */}
      <div className="flex flex-col gap-6">
        <h3 className="text-[13px] font-semibold tracking-[1px] uppercase text-[#2D3142]">
          Follow Us
        </h3>

        <div className="flex gap-4">
          <Instagram sx={{ fontSize: 26 }} className="text-[#2563EB]" />
          <Facebook sx={{ fontSize: 26 }} className="text-[#2563EB]" />
          <LinkedIn sx={{ fontSize: 26 }} className="text-[#2563EB]" />
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="w-full h-[1px] bg-gray-100" />

    {/* Bottom */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-[24px]">
      <p className="text-[13px] text-[#8E93A6]">
        © 2024 NRICH Software Inc. All rights reserved.
      </p>

      <div className="flex gap-[24px] md:gap-[32px]">
        <Link href="/privacy" className="text-[13px] text-[#8E93A6] hover:text-[#1D2B6B]">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-[13px] text-[#8E93A6] hover:text-[#1D2B6B]">
          Terms of Service
        </Link>
        <Link href="/cookie" className="text-[13px] text-[#8E93A6] hover:text-[#1D2B6B]">
          Cookie Policy
        </Link>
      </div>
    </div>

  </div>
</footer>
  );
};

export default Footer;