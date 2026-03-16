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
    <footer className="w-full py-6 flex flex-col items-center">
      <div className="w-full max-w-[90%] bg-white rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.06)] px-10 py-12 border border-gray-50/50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
          {/* Logo ve Description */}
          <div className="flex flex-col gap-4">
           <img src="/Logo.svg" alt="NRICH Logo" className='w-34 ' />
            <p className="text-[#8E93A6] text-[14px] leading-[22px] max-w-[280px]">
              The all-in-one platform for after-school and youth sports programs. We help you plan, schedule, and grow your community without the spreadsheets.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[14px] font-bold text-[#1D2B6B] uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#8E93A6] text-[14px] hover:text-[#1D2B6B] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[14px] font-bold text-[#1D2B6B] uppercase tracking-wider">Contact</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <LocationOnOutlined className="text-[#4F75FF] text-[20px] mt-0.5" />
                <span className="text-[#8E93A6] text-[14px]">123 Innovation Way, San Francisco, CA 94107</span>
              </div>
              <div className="flex items-center gap-3">
                <MailOutline className="text-[#4F75FF] text-[20px]" />
                <span className="text-[#8E93A6] text-[14px]">hello@nrich.com</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneOutlined className="text-[#4F75FF] text-[20px]" />
                <span className="text-[#8E93A6] text-[14px]">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[14px] font-bold text-[#1D2B6B] uppercase tracking-wider">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="w-8 h-8 flex items-center justify-center bg-[#4F75FF] text-white rounded-md hover:bg-[#3d5ed9] transition-all">
                <Instagram fontSize="small" />
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center bg-[#4F75FF] text-white rounded-md hover:bg-[#3d5ed9] transition-all">
                <Facebook fontSize="small" />
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center bg-[#4F75FF] text-white rounded-md hover:bg-[#3d5ed9] transition-all">
                <LinkedIn fontSize="small" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8E93A6] text-[13px]">
            © 2024 NRICH Software Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[#8E93A6] text-[13px] hover:text-[#1D2B6B]">Privacy Policy</Link>
            <Link href="/terms" className="text-[#8E93A6] text-[13px] hover:text-[#1D2B6B]">Terms of Service</Link>
            <Link href="/cookie" className="text-[#8E93A6] text-[13px] hover:text-[#1D2B6B]">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;