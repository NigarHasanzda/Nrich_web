"use client";
import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Features", href: "#features" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <header className="w-full py-6 flex justify-center sticky top-0  z-50">
        <div className="w-full max-w-[90%] bg-white rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.06)] px-6 py-[18px] flex items-center justify-between border border-gray-50/50">

          <Link href="/" className="flex items-center gap-1">
            <img src="/Logo.svg" alt="logo" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                scroll={true}
                className="text-[#4D4D4D] text-[15px] font-medium hover:text-[#2B3674] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/login"
                className="text-[#2B3674] text-[15px] font-bold hover:opacity-80 transition-opacity"
              >
                Login
              </Link>
              <Link
                href="/trial"
                className="bg-[#2166F3] text-white px-4 py-2 rounded-[50px] text-[15px] font-semibold hover:bg-[#1a54c9] transition-all"
              >
                Request free trial
              </Link>
            </div>

            <div className="lg:hidden">
              <MenuIcon
                sx={{ fontSize: 32, color: "#2B3674", cursor: "pointer" }}
                onClick={toggleSidebar}
              />
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      <div
        className={`fixed top-0 right-0 h-[90%] mt-6 ml-5 w-[230px] rounded-2xl bg-white  z-50 shadow-lg transition-transform duration-300 flex flex-col p-6 ${   sidebarOpen ? "translate-x-0" : "translate-x-full" }`}
      >
        <div className="flex justify-end mb-6">
          <CloseIcon
            sx={{ fontSize: 28, cursor: "pointer" }}
            onClick={toggleSidebar}
          />
        </div>

        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              scroll={true}
              onClick={toggleSidebar}
              className="text-[#1A1C1E] font-medium text-[16px] hover:text-[#2B3674] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;