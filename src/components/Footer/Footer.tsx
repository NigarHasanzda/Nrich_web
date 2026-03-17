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
        { name: 'About Us', href: '#about' },
        { name: 'Industries', href: '#industries' },
        { name: 'FAQs', href: '#faqs' },
        { name: 'Features', href: '#features' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="w-full flex justify-center py-6 sm:py-8 md:py-10">
            <div className="w-[90%] max-w-[90%] bg-white min-h-[486px] rounded-[20px]  px-[20px] sm:px-[30px] md:px-[40px]  py-[32px] sm:py-[40px] md:py-[48px]  border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.06)]">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4    gap-[40px] sm:gap-[50px] lg:gap-[130px]    pt-[10px] pb-[30px] sm:pb-[35px] md:pb-[40px]">

                    {/* Logo */}
                    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                        <img src="/Logo.svg" className="w-[112px] sm:w-[110px] md:w-[120px]" />
                        <p className="text-[#6B7280] text-[14px] sm:text-[15px] md:text-[16px] font-[300] max-w-[340px]">
                            The all-in-one platform for after-school and youth sports programs. We help you plan, schedule, and grow your community without the spreadsheets.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-5 sm:gap-6">
                        <h3 className="text-[14px] sm:text-[15px] md:text-[16px] font-bold tracking-[1px] uppercase text-[#2D3142]">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col gap-[12px] sm:gap-[14px]">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-[13px] sm:text-[14px] text-[#8E93A6] hover:text-[#1D2B6B]">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-5 sm:gap-6">
                        <h3 className="text-[14px] sm:text-[15px] md:text-[16px] font-bold tracking-[1px] uppercase text-[#2D3142]">
                            Contact
                        </h3>

                        <div className="flex flex-col gap-[16px] sm:gap-[18px]">
                            <div className="flex gap-3">
                                <LocationOnOutlined sx={{ fontSize: 18 }} className="text-[#2563EB]" />
                                <span className="text-[13px] sm:text-[14px] !w-[160px] text-[#8E93A6] leading-[20px]">
                                    123 Innovation Way, San Francisco, CA 94107
                                </span>
                            </div>

                            <div className="flex gap-3 items-center">
                                <MailOutline sx={{ fontSize: 18 }} className="text-[#2563EB]" />
                                <span className="text-[13px] sm:text-[14px] text-[#8E93A6]">
                                    hello@nrich.com
                                </span>
                            </div>

                            <div className="flex gap-3 items-center">
                                <PhoneOutlined sx={{ fontSize: 18 }} className="text-[#2563EB]" />
                                <span className="text-[13px] sm:text-[14px] text-[#8E93A6]">
                                    +1 (555) 123-4567
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="flex flex-col gap-5 sm:gap-6">
                        <h3 className="text-[14px] sm:text-[15px] md:text-[16px] font-bold tracking-[1px] uppercase text-[#2D3142]">
                            Follow Us
                        </h3>

                        <div className="flex gap-3 sm:gap-4">
                            <Instagram sx={{ fontSize: 30 }} className="text-[#2563EB]" />
                            <Facebook sx={{ fontSize: 30 }} className="text-[#2563EB]" />
                            <LinkedIn sx={{ fontSize: 30 }} className="text-[#2563EB]" />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full mt-1 h-[1px] bg-gray-100" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center    gap-3 sm:gap-4 pt-[30px] sm:pt-[40px] md:pt-[54px]">

                    <p className="text-[12px] sm:text-[13px] md:text-[14px] font-[300] text-[#6B7280] text-center md:text-left">
                        © 2024 NRICH Software Inc. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-end gap-[16px] sm:gap-[24px] md:gap-[32px]">
                        <Link href="/privacy" className="text-[12px] sm:text-[13px] md:text-[14px] font-[300] text-[#6B7280] hover:text-[#1D2B6B]">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-[12px] sm:text-[13px] md:text-[14px] font-[300] text-[#6B7280] hover:text-[#1D2B6B]">
                            Terms of Service
                        </Link>
                        <Link href="/cookie" className="text-[12px] sm:text-[13px] md:text-[14px] font-[300] text-[#6B7280] hover:text-[#1D2B6B]">
                            Cookie Policy
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;